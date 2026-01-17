# Hatsune Miku Theme - Dockerfile Showcase
# All-Miku Synthesis: Every voice, one stage.

# syntax=docker/dockerfile:1

# Build argument: #E05096 (Magenta LED - Rhythm)
ARG NODE_VERSION=20
ARG ALPINE_VERSION=3.19

# ====================
# Base stage
# ====================
# FROM instruction: #39C5BB Bold (Keyword)
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base

# Label: #4DD0E1 Italic (Attribute)
# String: #9CCC65 (Negi Green)
LABEL org.opencontainers.image.title="Hatsune Miku Theme"
LABEL org.opencontainers.image.description="VS Code color theme inspired by Hatsune Miku"
LABEL org.opencontainers.image.authors="MikuTheme <miku@example.com>"
LABEL org.opencontainers.image.version="2.0.0"
LABEL org.opencontainers.image.source="https://github.com/example/miku-theme"

# Environment variables: #E05096
ENV NODE_ENV=production \
    MIKU_COLOR="#39C5BB" \
    DEFAULT_BPM=39 \
    MAX_ENERGY=100 \
    APP_HOME=/app

# Working directory
WORKDIR ${APP_HOME}

# Install system dependencies
# RUN instruction: #39C5BB Bold
RUN apk add --no-cache \
        curl \
        git \
        python3 \
        make \
        g++ \
    && rm -rf /var/cache/apk/*

# ====================
# Dependencies stage
# ====================
FROM base AS deps

# Copy package files
# COPY instruction: #39C5BB Bold
COPY package.json package-lock.json ./

# Install dependencies with cache mount
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

# Install dev dependencies for build
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# ====================
# Builder stage
# ====================
FROM deps AS builder

# Build argument for version
ARG VERSION=2.0.0
ARG BUILD_DATE

# Copy source code
COPY . .

# Build the theme
RUN npm run build \
    && npm run check-readability \
    && echo "Build completed: ${VERSION} at ${BUILD_DATE}"

# ====================
# Production stage
# ====================
FROM base AS production

# Create non-root user
# User instruction: #39C5BB Bold
RUN addgroup -g 1001 -S miku \
    && adduser -u 1001 -S miku -G miku

# Copy built artifacts
COPY --from=builder --chown=miku:miku ${APP_HOME}/themes ./themes
COPY --from=builder --chown=miku:miku ${APP_HOME}/package.json ./

# Copy production node_modules
COPY --from=deps --chown=miku:miku ${APP_HOME}/node_modules ./node_modules

# Switch to non-root user
USER miku

# Expose port (documentation)
# EXPOSE instruction: #39C5BB Bold
EXPOSE 3939

# Volume for theme output
# VOLUME instruction: #39C5BB Bold
VOLUME ["/app/output", "/app/config"]

# Health check
# HEALTHCHECK instruction: #39C5BB Bold
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3939/health || exit 1

# Entrypoint script
# ENTRYPOINT instruction: #39C5BB Bold
ENTRYPOINT ["node"]

# Default command
# CMD instruction: #39C5BB Bold
CMD ["server.js"]

# ====================
# Development stage
# ====================
FROM deps AS development

# Development environment variables
ENV NODE_ENV=development \
    DEBUG=miku:* \
    WATCH_MODE=true

# Install development tools
RUN apk add --no-cache \
        bash \
        vim \
        less

# Copy source
COPY . .

# Development user setup
RUN addgroup -g 1001 -S miku \
    && adduser -u 1001 -S miku -G miku \
    && chown -R miku:miku ${APP_HOME}

USER miku

# Development command with live reload
CMD ["npm", "run", "dev"]

# ====================
# Test stage
# ====================
FROM deps AS test

# Test environment
ENV NODE_ENV=test \
    CI=true

# Copy source and tests
COPY . .

# Run tests
RUN npm run test -- --coverage \
    && npm run lint

# ====================
# Multi-platform support
# ====================
# Note: Build with:
# docker buildx build --platform linux/amd64,linux/arm64 -t miku-theme .

# ====================
# Alternative: distroless
# ====================
FROM gcr.io/distroless/nodejs${NODE_VERSION}-debian12 AS distroless

WORKDIR /app

COPY --from=builder /app/themes ./themes
COPY --from=builder /app/package.json ./
COPY --from=deps /app/node_modules ./node_modules

# Non-root user (65532 is the nonroot user in distroless)
USER 65532

EXPOSE 3939

CMD ["server.js"]
