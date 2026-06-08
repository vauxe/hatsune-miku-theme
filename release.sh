#!/usr/bin/env bash
set -euo pipefail

VERSION=$(node -p "require('./package.json').version")
PACKAGE_NAME=$(node -p "require('./package.json').name")
TAG="v$VERSION"
VSIX="$PACKAGE_NAME-$VERSION.vsix"

echo "==> Building theme..."
npm run build

echo "==> Packaging VSIX..."
vsce package --no-dependencies --out "$VSIX"

# GitHub Release
if gh release view "$TAG" &>/dev/null; then
  echo "==> Release $TAG exists, replacing VSIX..."
  gh release delete-asset "$TAG" "$VSIX" --yes 2>/dev/null || true
  gh release upload "$TAG" "$VSIX"
else
  echo "==> Creating release $TAG..."
  git tag "$TAG" 2>/dev/null || true
  git push origin "$TAG"
  gh release create "$TAG" "$VSIX" --title "$TAG" --generate-notes
fi

# VS Code Marketplace — opt-in with PUBLISH=1 (default: GitHub release only).
# Credential comes from the OS keychain via a one-time `vsce login vauxe`.
# No token is stored on disk or passed on the command line.
if [[ "${PUBLISH:-0}" == "1" ]]; then
  echo "==> Publishing to VS Code Marketplace..."
  vsce publish --packagePath "$VSIX"

  # Open VSX has no keychain; if you publish there, inject the token from your
  # shell/secret manager at call time (never a file):
  #   OVSX_TOKEN=$(...) PUBLISH=1 ./release.sh
  if [[ -n "${OVSX_TOKEN:-}" ]]; then
    echo "==> Publishing to Open VSX..."
    npx ovsx publish "$VSIX" -p "$OVSX_TOKEN"
  fi

  echo "==> Done: $TAG released to GitHub + Marketplace."
else
  echo "==> Done: $TAG released to GitHub. (Set PUBLISH=1 to also publish to the Marketplace.)"
fi
