# Contributing to Backstage Application

First off, thank you for considering contributing to our Backstage application! It's people like you that make this project such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Collaborative**: Work together and help each other
- **Be Professional**: Keep discussions focused and constructive
- **Be Inclusive**: Welcome people of all backgrounds and experience levels

## Getting Started

### Prerequisites

Before you begin contributing, make sure you have:

1. **Node.js** (version 20 or 22)
2. **Yarn** (version 4.4.1+, included via Corepack)
3. **Git**
4. A **GitHub account**

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/BackSatge-New.git
   cd BackSatge-New
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/rodrigogrosa/BackSatge-New.git
   ```

4. **Install dependencies**:
   ```bash
   yarn install
   ```

5. **Verify your setup**:
   ```bash
   yarn lint
   yarn test
   yarn start
   ```

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as GitHub issues. Before creating a bug report, please check existing issues to avoid duplicates.

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the problem
- **Expected behavior** vs. **actual behavior**
- **Screenshots** if applicable
- **Environment details**: OS, Node version, browser, etc.
- **Error logs** and stack traces

Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description** of the feature
- **Use cases** and examples
- **Why this enhancement would be useful** to most users
- **Possible implementation approach** (if you have ideas)

Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

### Contributing Code

1. **Find an issue** to work on or create a new one
2. **Comment on the issue** to let others know you're working on it
3. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes** following our coding standards
5. **Test your changes** thoroughly
6. **Commit your changes** following our commit guidelines
7. **Push to your fork** and submit a pull request

## Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-authentication`)
- `fix/` - Bug fixes (e.g., `fix/catalog-loading-error`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-api`)
- `test/` - Test additions or fixes (e.g., `test/add-e2e-tests`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

### Keeping Your Fork Up to Date

```bash
# Fetch the latest changes from upstream
git fetch upstream

# Merge upstream changes into your main branch
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

### Development Commands

```bash
# Start development server
yarn start

# Run linter
yarn lint

# Auto-fix linting issues
yarn fix

# Run tests
yarn test

# Run tests with coverage
yarn test:all

# Run type checking
yarn tsc

# Clean build artifacts
yarn clean

# Format code
yarn prettier:check
```

## Coding Standards

### General Principles

- **Keep it simple**: Write clear, readable code
- **DRY (Don't Repeat Yourself)**: Avoid code duplication
- **SOLID principles**: Follow object-oriented design principles
- **Single Responsibility**: Each function/class should do one thing well
- **Meaningful names**: Use descriptive variable and function names

### TypeScript Guidelines

```typescript
// ✅ Good: Type annotations and clear naming
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

function getUserById(userId: string): Promise<UserProfile> {
  return fetchUser(userId);
}

// ❌ Bad: No types and unclear naming
function get(id: any) {
  return fetch(id);
}
```

### React Component Guidelines

```typescript
// ✅ Good: Functional component with TypeScript
import React from 'react';

interface Props {
  title: string;
  onClose: () => void;
}

export const MyComponent = ({ title, onClose }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

// ❌ Bad: No types and inline styles
export const MyComponent = ({ title, onClose }) => {
  return <div style={{ color: 'red' }}>{title}</div>;
};
```

### File Organization

- One component per file
- Co-locate tests with source files (e.g., `MyComponent.tsx` and `MyComponent.test.tsx`)
- Group related files in directories
- Use barrel exports (`index.ts`) for cleaner imports

### Code Formatting

This project uses Prettier for code formatting. Configuration is inherited from `@backstage/cli`.

```bash
# Check formatting
yarn prettier:check

# Auto-format (handled by lint-staged on commit)
yarn fix
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `ci`: Changes to CI configuration

### Examples

```bash
# Feature
git commit -m "feat(catalog): add entity search filtering"

# Bug fix
git commit -m "fix(backend): resolve database connection timeout"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Multiple paragraphs
git commit -m "feat(auth): add OAuth2 provider

This commit adds support for OAuth2 authentication with Google and GitHub providers.

Closes #123"
```

## Pull Request Process

### Before Submitting

- [ ] Run `yarn lint` and fix any issues
- [ ] Run `yarn test` and ensure all tests pass
- [ ] Run `yarn tsc` and fix any type errors
- [ ] Update documentation if needed
- [ ] Add tests for new functionality
- [ ] Verify your changes work in the application

### Pull Request Template

Use our [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) which includes:

1. **Description**: What changes does this PR introduce?
2. **Motivation**: Why is this change needed?
3. **Type of Change**: Feature, fix, docs, etc.
4. **Testing**: How was this tested?
5. **Checklist**: Pre-submission checklist

### PR Review Process

1. **Automated checks**: All CI checks must pass
2. **Code review**: At least one maintainer must approve
3. **Testing**: Changes must be adequately tested
4. **Documentation**: Documentation must be updated if needed

### After Your PR is Merged

1. **Delete your branch** (optional but recommended)
2. **Update your fork**:
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

## Testing Guidelines

### Unit Tests

- Write tests for all new functionality
- Use descriptive test names
- Follow the Arrange-Act-Assert pattern
- Mock external dependencies

```typescript
describe('UserService', () => {
  it('should fetch user by ID', async () => {
    // Arrange
    const userId = '123';
    const mockUser = { id: '123', name: 'John' };
    jest.spyOn(api, 'getUser').mockResolvedValue(mockUser);

    // Act
    const result = await userService.getUserById(userId);

    // Assert
    expect(result).toEqual(mockUser);
    expect(api.getUser).toHaveBeenCalledWith(userId);
  });
});
```

### Integration Tests

- Test component interactions
- Test API endpoints
- Test database operations

### E2E Tests

- Test critical user flows
- Use Playwright for E2E testing
- Keep tests independent and idempotent

## Documentation

### Code Comments

- **Document complex logic**: Explain why, not what
- **Use JSDoc** for public APIs and exported functions
- **Keep comments updated**: Outdated comments are worse than no comments

```typescript
/**
 * Fetches a user profile from the API.
 *
 * @param userId - The unique identifier of the user
 * @returns A promise that resolves to the user profile
 * @throws {NotFoundError} If the user doesn't exist
 */
async function fetchUserProfile(userId: string): Promise<UserProfile> {
  // Implementation
}
```

### README Updates

When adding new features or making significant changes:

- Update the main README.md
- Add examples if applicable
- Update configuration documentation
- Add migration guides if needed

## Questions?

If you have questions about contributing:

1. Check existing documentation and issues
2. Ask in GitHub Discussions
3. Reach out to maintainers
4. Join the Backstage Discord community

## Recognition

Contributors will be recognized in:

- The project's contributors list
- Release notes for significant contributions
- Special mentions in documentation

Thank you for contributing! 🎉

---

**Remember**: The goal is to build great software together. Be patient, be kind, and have fun! 😊
