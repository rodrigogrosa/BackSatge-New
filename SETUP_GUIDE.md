# Backstage Application - Complete Setup Guide

This guide provides a complete, step-by-step walkthrough for setting up, configuring, and running your Backstage application.

## 📋 Table of Contents

1. [Project Creation](#project-creation)
2. [Initial Setup](#initial-setup)
3. [Configuration](#configuration)
4. [Running Locally](#running-locally)
5. [Database Setup](#database-setup)
6. [Authentication](#authentication)
7. [Customization](#customization)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

## Project Creation

This project was created using the official Backstage CLI with the following command:

```bash
npx @backstage/create-app@latest
```

### What Was Generated

The scaffolding tool created:

- **Frontend Application** (`packages/app`): React-based UI
- **Backend Application** (`packages/backend`): Node.js/Express API
- **Configuration Files**: `app-config.yaml`, TypeScript, ESLint configs
- **Example Catalog Entities**: Sample components and templates
- **Plugin Structure**: Ready for custom plugin development
- **CI/CD Setup**: GitHub Actions workflows
- **Documentation**: Comprehensive README and guides

### Technology Stack

- **Frontend**: React 18, Material-UI, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Build Tool**: Backstage CLI (webpack-based)
- **Package Manager**: Yarn 4 (Berry) with Corepack
- **Testing**: Jest, React Testing Library, Playwright
- **Code Quality**: ESLint, Prettier, TypeScript

## Initial Setup

### Prerequisites Verification

Before starting, verify all prerequisites are installed:

```bash
# Check Node.js version (should be 20 or 22)
node --version

# Check Yarn version (should be 4.4.1+)
yarn --version

# If Yarn 4 is not available, enable Corepack
corepack enable
```

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/rodrigogrosa/BackSatge-New.git
cd BackSatge-New

# Install all dependencies
yarn install

# This will:
# - Install dependencies for all workspace packages
# - Run postinstall scripts
# - Setup Yarn PnP (Plug'n'Play)
```

### Verify Installation

```bash
# Verify installation was successful
yarn --version  # Should show 4.4.1
yarn workspaces list

# Check for TypeScript errors
yarn tsc

# Run linting
yarn lint
```

## Configuration

### Understanding Configuration Files

Backstage uses a hierarchical configuration system:

```
app-config.yaml                 # Base configuration (committed to Git)
app-config.local.yaml          # Local overrides (Git ignored)
app-config.production.yaml     # Production config (committed to Git)
```

Configuration is loaded in order: base → local → production (if NODE_ENV=production)

### Basic Configuration

Edit `app-config.yaml` to customize your installation:

```yaml
app:
  title: My Backstage App
  baseUrl: http://localhost:3000

organization:
  name: My Company

backend:
  baseUrl: http://localhost:7007
  listen:
    port: 7007
  database:
    client: better-sqlite3
    connection: ':memory:'
```

### Local Configuration

Create `app-config.local.yaml` for local development settings:

```yaml
# app-config.local.yaml (Git ignored)

backend:
  database:
    client: better-sqlite3
    connection:
      filename: ./backstage.db

# GitHub integration for local development
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}  # Set via environment variable
```

### Environment Variables

Create a `.env` file for sensitive data (never commit this):

```bash
# .env file

# GitHub Integration
GITHUB_TOKEN=ghp_your_personal_access_token

# PostgreSQL (for production)
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=backstage
POSTGRES_PASSWORD=your_secure_password

# Auth (OAuth)
AUTH_GITHUB_CLIENT_ID=your_client_id
AUTH_GITHUB_CLIENT_SECRET=your_client_secret
```

## Running Locally

### Start Development Server

The easiest way to run Backstage locally:

```bash
yarn start
```

This will:
1. Start the backend on http://localhost:7007
2. Start the frontend on http://localhost:3000
3. Open your browser automatically
4. Enable hot-reload for both frontend and backend

### Running Components Separately

For more control, run frontend and backend separately:

```bash
# Terminal 1: Start backend
yarn workspace backend start

# Terminal 2: Start frontend
yarn workspace app start
```

### Development URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:7007
- **API Documentation**: http://localhost:7007/api/docs

### First-Time Access

When you first access Backstage:

1. You'll see the home page with a software catalog
2. Default entities are loaded from `examples/`
3. You can browse components, APIs, and documentation
4. Guest access is enabled by default (no authentication)

## Database Setup

### Development Database

By default, Backstage uses SQLite in-memory for development:

```yaml
# app-config.yaml
backend:
  database:
    client: better-sqlite3
    connection: ':memory:'
```

For persistent data, use a file:

```yaml
backend:
  database:
    client: better-sqlite3
    connection:
      filename: ./backstage.db
```

### Production Database (PostgreSQL)

For production, use PostgreSQL:

#### 1. Install PostgreSQL

```bash
# macOS
brew install postgresql@15
brew services start postgresql@15

# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

#### 2. Create Database

```bash
# Connect to PostgreSQL
sudo -u postgres psql

# Create database and user
CREATE DATABASE backstage;
CREATE USER backstage WITH ENCRYPTED PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE backstage TO backstage;
\q
```

#### 3. Configure Backstage

Update `app-config.production.yaml`:

```yaml
backend:
  database:
    client: pg
    connection:
      host: ${POSTGRES_HOST}
      port: ${POSTGRES_PORT}
      user: ${POSTGRES_USER}
      password: ${POSTGRES_PASSWORD}
      database: backstage
```

Install PostgreSQL driver:

```bash
yarn workspace backend add pg
```

## Authentication

### GitHub OAuth Setup

#### 1. Create GitHub OAuth App

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: My Backstage App
   - **Homepage URL**: http://localhost:3000
   - **Authorization callback URL**: http://localhost:7007/api/auth/github/handler/frame
4. Save Client ID and Client Secret

#### 2. Configure Authentication

Update `app-config.local.yaml`:

```yaml
auth:
  environment: development
  providers:
    github:
      development:
        clientId: ${AUTH_GITHUB_CLIENT_ID}
        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}
```

#### 3. Update Environment Variables

Add to `.env`:

```bash
AUTH_GITHUB_CLIENT_ID=your_client_id
AUTH_GITHUB_CLIENT_SECRET=your_client_secret
```

#### 4. Enable GitHub Sign-In

Update `packages/app/src/App.tsx`:

```typescript
import { githubAuthApiRef } from '@backstage/core-plugin-api';

const app = createApp({
  apis,
  bindRoutes({ bind }) {
    // ... existing bindings
  },
  components: {
    SignInPage: props => (
      <SignInPage
        {...props}
        auto
        provider={{
          id: 'github-auth-provider',
          title: 'GitHub',
          message: 'Sign in using GitHub',
          apiRef: githubAuthApiRef,
        }}
      />
    ),
  },
});
```

## Customization

### Adding a Plugin

```bash
# Create a new plugin
yarn new

# Select "plugin" and follow the prompts
# Name: my-plugin
# ID: my-plugin
```

This creates a new plugin in `plugins/my-plugin/`.

### Customizing the Home Page

Edit `packages/app/src/components/home/HomePage.tsx`:

```typescript
import React from 'react';
import { HomePageToolkit } from '@backstage/plugin-home';

export const HomePage = () => {
  return (
    <HomePageToolkit />
  );
};
```

### Customizing Theme

Edit `packages/app/src/theme.ts`:

```typescript
import { createTheme } from '@backstage/theme';

export const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
```

### Adding Catalog Entities

Create YAML files in `catalog/` directory:

```yaml
# catalog/my-component.yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: my-service
  description: My awesome service
  tags:
    - nodejs
    - api
spec:
  type: service
  lifecycle: production
  owner: team-a
  system: my-system
```

Register in `app-config.yaml`:

```yaml
catalog:
  locations:
    - type: file
      target: ./catalog/my-component.yaml
```

## Deployment

### Docker Deployment

#### Build Docker Image

```bash
yarn build-image
```

This creates a Docker image with both frontend and backend.

#### Run Container

```bash
docker run -it -p 7007:7007 \
  -e POSTGRES_HOST=host.docker.internal \
  -e POSTGRES_USER=backstage \
  -e POSTGRES_PASSWORD=password \
  backstage:latest
```

#### Using Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: backstage
      POSTGRES_PASSWORD: password
      POSTGRES_DB: backstage
    volumes:
      - postgres-data:/var/lib/postgresql/data

  backstage:
    build: .
    ports:
      - "7007:7007"
    environment:
      POSTGRES_HOST: postgres
      POSTGRES_PORT: 5432
      POSTGRES_USER: backstage
      POSTGRES_PASSWORD: password
    depends_on:
      - postgres

volumes:
  postgres-data:
```

Run with:

```bash
docker-compose up -d
```

### Kubernetes Deployment

Refer to official documentation:
https://backstage.io/docs/deployment/k8s

Basic steps:
1. Build and push Docker image
2. Create Kubernetes manifests (Deployment, Service, Ingress)
3. Configure secrets for database and auth
4. Deploy to cluster

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

#### Dependency Issues

```bash
# Clear Yarn cache
yarn cache clean

# Remove node_modules and reinstall
rm -rf node_modules
yarn install
```

#### TypeScript Errors

```bash
# Run full type check
yarn tsc:full

# Clean and rebuild
yarn clean
yarn build:all
```

#### Database Migration Errors

```bash
# For SQLite
rm backstage.db
yarn start  # Will recreate database

# For PostgreSQL
# Drop and recreate database
```

### Debug Mode

Run with debug logging:

```bash
# Backend debug
LOG_LEVEL=debug yarn workspace backend start

# Frontend debug
# Check browser console for detailed logs
```

### Getting Help

1. Check [Backstage Documentation](https://backstage.io/docs)
2. Search [GitHub Issues](https://github.com/backstage/backstage/issues)
3. Ask in [Discord Community](https://discord.gg/backstage-687207715902193673)
4. Review [Stack Overflow](https://stackoverflow.com/questions/tagged/backstage)

## Next Steps

After completing setup:

1. ✅ Configure authentication (GitHub OAuth)
2. ✅ Set up PostgreSQL for production
3. ✅ Add your organization's services to the catalog
4. ✅ Customize the theme and branding
5. ✅ Install additional plugins
6. ✅ Configure integrations (GitHub, GitLab, etc.)
7. ✅ Set up TechDocs for documentation
8. ✅ Create software templates
9. ✅ Configure monitoring and alerting
10. ✅ Deploy to production

## Useful Commands Reference

```bash
# Development
yarn start                    # Start dev server
yarn start --inspect          # Start with debugger

# Building
yarn build:all                # Build all packages
yarn build:backend            # Build backend only

# Testing
yarn test                     # Run tests
yarn test:all                 # Run tests with coverage
yarn test:e2e                 # Run E2E tests

# Code Quality
yarn lint                     # Lint code
yarn lint:all                 # Lint all files
yarn fix                      # Auto-fix linting issues
yarn prettier:check           # Check formatting
yarn tsc                      # Type check

# Maintenance
yarn clean                    # Clean build artifacts
yarn new                      # Create new plugin/package
yarn backstage-cli versions:bump  # Update Backstage versions

# Package Management
yarn workspace app add package-name       # Add to app
yarn workspace backend add package-name   # Add to backend
yarn add -W package-name                  # Add to root
```

---

**Congratulations! Your Backstage application is ready to use.** 🎉

For more information, visit the [Backstage Documentation](https://backstage.io/docs).
