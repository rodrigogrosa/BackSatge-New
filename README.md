# Backstage Application

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-20%20%7C%7C%2022-brightgreen.svg)](https://nodejs.org)
[![Backstage Version](https://img.shields.io/badge/backstage-latest-orange.svg)](https://backstage.io)

This is a production-ready Backstage application created with best practices and modern development workflows. [Backstage](https://backstage.io) is an open-source platform for building developer portals, created and maintained by Spotify.

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Development](#-development)
- [Testing](#-testing)
- [Building](#-building)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Documentation](#-documentation)
- [Support](#-support)
- [License](#-license)

## ✨ Features

- **Software Catalog**: Centralized service catalog for all your software components
- **TechDocs**: Technical documentation powered by MkDocs
- **Scaffolder**: Create new projects from templates
- **Search**: Full-text search across all entities
- **Kubernetes Integration**: Monitor your Kubernetes workloads
- **CI/CD Integration**: GitHub Actions workflow for continuous integration
- **Extensible Plugin System**: Easy to add and customize plugins

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or 22 (LTS recommended)
- **Yarn**: Version 4.4.1+ (included via Corepack)
- **Git**: Latest version
- **Docker**: (Optional) For containerized deployment

### Installing Prerequisites

#### macOS
```bash
# Install Node.js using Homebrew
brew install node@20

# Enable Corepack for Yarn
corepack enable
```

#### Linux
```bash
# Install Node.js using NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Enable Corepack for Yarn
corepack enable
```

#### Windows
```powershell
# Install Node.js using Chocolatey
choco install nodejs-lts

# Enable Corepack for Yarn
corepack enable
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rodrigogrosa/BackSatge-New.git
cd BackSatge-New
```

### 2. Install Dependencies

```bash
yarn install
```

This will install all dependencies for the monorepo including the backend, frontend, and all plugins.

### 3. Start the Application

```bash
yarn start
```

This will start both the frontend and backend in development mode:
- Frontend: http://localhost:3000
- Backend: http://localhost:7007

The application will automatically reload when you make changes to the code.

## 📂 Project Structure

```
backstage-app/
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   ├── workflows/             # GitHub Actions workflows
│   └── PULL_REQUEST_TEMPLATE.md
├── packages/                   # Main application packages
│   ├── app/                   # Frontend React application
│   └── backend/               # Backend Node.js application
├── plugins/                    # Custom plugins
├── examples/                   # Example catalog entities
├── app-config.yaml            # Main configuration file
├── app-config.local.yaml      # Local overrides (git-ignored)
├── app-config.production.yaml # Production configuration
├── package.json               # Root package.json with workspace config
├── catalog-info.yaml          # Backstage entity definition
└── README.md                  # This file
```

### Key Directories

- **packages/app**: The frontend application built with React
- **packages/backend**: The backend API server built with Express
- **plugins/**: Custom Backstage plugins you develop
- **examples/**: Example catalog entities to get started

## ⚙️ Configuration

Backstage uses a hierarchical configuration system. Configuration files are loaded in the following order:

1. `app-config.yaml` - Base configuration
2. `app-config.local.yaml` - Local overrides (not committed to Git)
3. `app-config.production.yaml` - Production overrides

### Environment Variables

Create a `.env` file in the root directory for sensitive information:

```bash
# PostgreSQL Configuration (Production)
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=backstage
POSTGRES_PASSWORD=your-secure-password

# GitHub Integration
GITHUB_TOKEN=ghp_your_github_token

# Auth Configuration
AUTH_GITHUB_CLIENT_ID=your-client-id
AUTH_GITHUB_CLIENT_SECRET=your-client-secret
```

**⚠️ Important**: Never commit `.env` or `app-config.local.yaml` to version control.

## 💻 Development

### Available Scripts

```bash
# Start the application in development mode
yarn start

# Run linting
yarn lint

# Run linting on all files
yarn lint:all

# Fix linting issues automatically
yarn fix

# Run TypeScript type checking
yarn tsc

# Check code formatting
yarn prettier:check

# Clean build artifacts
yarn clean

# Create a new plugin
yarn new
```

### Creating a New Plugin

```bash
yarn new
# Select "plugin" from the menu and follow the prompts
```

### Adding New Dependencies

```bash
# Add to a specific workspace
yarn workspace @backstage/plugin-your-plugin add package-name

# Add to the root
yarn add -W package-name
```

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:all

# Run tests for a specific package
yarn workspace app test
```

### End-to-End Tests

```bash
# Run Playwright E2E tests
yarn test:e2e

# Run E2E tests in headed mode
yarn playwright test --headed

# Run E2E tests in debug mode
yarn playwright test --debug
```

## 🏗️ Building

### Build All Packages

```bash
yarn build:all
```

### Build Backend Only

```bash
yarn build:backend
```

### Build Docker Image

```bash
yarn build-image
```

This creates a Docker image with the backend and frontend bundled together.

## 🚢 Deployment

### Docker Deployment

1. Build the Docker image:
```bash
yarn build-image
```

2. Run the container:
```bash
docker run -it -p 7007:7007 backstage:latest
```

### Kubernetes Deployment

Refer to the [Backstage Kubernetes deployment guide](https://backstage.io/docs/deployment/k8s) for detailed instructions.

### Environment-Specific Configuration

Use environment variables to override configuration:

```bash
# Production deployment
NODE_ENV=production yarn build:backend
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development workflow
- Pull request process
- Coding standards

## 📚 Documentation

- [Backstage Official Documentation](https://backstage.io/docs)
- [API Reference](https://backstage.io/docs/reference)
- [Plugin Development](https://backstage.io/docs/plugins)
- [Architecture Overview](https://backstage.io/docs/overview/architecture-overview)

## 📖 Additional Resources

### Official Links
- [Backstage Website](https://backstage.io)
- [Backstage GitHub Repository](https://github.com/backstage/backstage)
- [Backstage Discord Community](https://discord.gg/backstage-687207715902193673)

### Tutorials
- [Getting Started Guide](https://backstage.io/docs/getting-started)
- [Creating a Plugin](https://backstage.io/docs/plugins/create-a-plugin)
- [Backstage Blog](https://backstage.io/blog)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/rodrigogrosa/BackSatge-New/issues)
2. Join the [Backstage Discord](https://discord.gg/backstage-687207715902193673)
3. Review the [official documentation](https://backstage.io/docs)
4. Create a new issue using our [issue templates](.github/ISSUE_TEMPLATE)

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Spotify](https://spotify.com) for creating and maintaining Backstage
- The Backstage community for plugins and contributions
- All contributors to this project

---

**Built with ❤️ using [Backstage](https://backstage.io)**
