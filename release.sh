#!/usr/bin/env bash
set -euo pipefail

VERSION=$(node -p "require('./package.json').version")
TAG="v$VERSION"
VSIX="hatsune-miku-theme-$VERSION.vsix"

echo "==> Building theme..."
npm run build

echo "==> Packaging VSIX..."
vsce package

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

# # VS Code Marketplace
# echo "==> Publishing to VS Code Marketplace..."
# vsce publish --packagePath "$VSIX"

# # Open VSX
# echo "==> Publishing to Open VSX..."
# npx ovsx publish "$VSIX" -p "$OVSX_TOKEN"

# echo "==> Done: $TAG released to GitHub, Marketplace, and Open VSX"
