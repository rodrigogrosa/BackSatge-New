# GitHub Publishing and Collaboration Guide

This guide provides step-by-step instructions for publishing your Backstage application to GitHub, managing collaborators, and setting up workflows.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Publishing to GitHub](#publishing-to-github)
- [Repository Settings](#repository-settings)
- [Managing Collaborators](#managing-collaborators)
- [Branch Protection Rules](#branch-protection-rules)
- [GitHub Actions Setup](#github-actions-setup)
- [Secrets Management](#secrets-management)
- [Issue Management](#issue-management)
- [Best Practices](#best-practices)

## Prerequisites

Before you begin, ensure you have:

- [ ] A GitHub account
- [ ] Git installed locally
- [ ] GitHub CLI (optional, but recommended)
- [ ] Repository owner or admin access

## Publishing to GitHub

### Option 1: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if not already installed
# macOS
brew install gh

# Linux
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# Authenticate with GitHub
gh auth login

# Create and push repository
cd /path/to/BackSatge-New
gh repo create rodrigogrosa/BackSatge-New --public --source=. --remote=origin --push
```

### Option 2: Using GitHub Web Interface

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `BackSatge-New`
   - Description: "Enterprise-ready Backstage application with best practices"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your local repository:**

```bash
cd /path/to/BackSatge-New

# Add GitHub as remote (if not already added)
git remote add origin https://github.com/rodrigogrosa/BackSatge-New.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option 3: Using SSH

```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add this key to GitHub at: https://github.com/settings/keys

# Add remote using SSH
git remote add origin git@github.com:rodrigogrosa/BackSatge-New.git

# Push to GitHub
git push -u origin main
```

## Repository Settings

### Basic Settings

1. Navigate to: `https://github.com/rodrigogrosa/BackSatge-New/settings`

2. **General Settings:**
   - ✅ Enable "Issues"
   - ✅ Enable "Projects"
   - ✅ Enable "Wiki" (optional)
   - ✅ Enable "Discussions" (recommended)
   - ⚠️ Disable "Allow merge commits" (optional, prefer squash)
   - ✅ Enable "Allow squash merging"
   - ✅ Enable "Allow rebase merging"
   - ✅ Enable "Automatically delete head branches"

3. **Features:**
   - ✅ Enable "Sponsorships" (if applicable)
   - ✅ Enable "Preserve this repository"

### Add Repository Description

```bash
# Using GitHub CLI
gh repo edit --description "Enterprise-ready Backstage application with best practices" --homepage "https://backstage.io"

# Add topics
gh repo edit --add-topic backstage,developer-portal,platform-engineering,typescript,react
```

Or manually:
- Go to repository home page
- Click "⚙️" (settings icon) next to "About"
- Add description and website
- Add topics: `backstage`, `developer-portal`, `platform-engineering`, `typescript`, `react`

## Managing Collaborators

### Adding Individual Collaborators

#### Using GitHub Web Interface:

1. Go to: `https://github.com/rodrigogrosa/BackSatge-New/settings/access`
2. Click "Add people"
3. Enter GitHub username or email
4. Select permission level:
   - **Read**: View and clone only
   - **Triage**: Manage issues and PRs
   - **Write**: Push to repository
   - **Maintain**: Manage repository settings
   - **Admin**: Full access

#### Using GitHub CLI:

```bash
# Add a collaborator with write access
gh repo invite-collaborator USERNAME --permission write

# Add with admin access
gh repo invite-collaborator USERNAME --permission admin

# List collaborators
gh api repos/rodrigogrosa/BackSatge-New/collaborators
```

### Adding Teams (Organization Repositories)

If this is an organization repository:

```bash
# Add team with specific permission
gh api -X PUT /orgs/ORG_NAME/teams/TEAM_NAME/repos/rodrigogrosa/BackSatge-New \
  -f permission=push

# Permission levels: pull, push, maintain, admin
```

### Revoking Access

```bash
# Remove a collaborator
gh api -X DELETE /repos/rodrigogrosa/BackSatge-New/collaborators/USERNAME
```

## Branch Protection Rules

Protect your main branch to ensure code quality:

### Using GitHub Web Interface:

1. Go to: `https://github.com/rodrigogrosa/BackSatge-New/settings/branches`
2. Click "Add rule"
3. Branch name pattern: `main`
4. Configure protection rules:

**Recommended Settings:**
- ✅ Require pull request reviews before merging
  - Required approvals: 1
  - ✅ Dismiss stale reviews when new commits are pushed
  - ✅ Require review from Code Owners (if using CODEOWNERS)
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date
  - Required checks:
    - `lint`
    - `typecheck`
    - `test`
    - `build`
    - `e2e`
- ✅ Require conversation resolution before merging
- ✅ Require linear history
- ✅ Include administrators (optional for stricter rules)

### Using GitHub CLI:

```bash
# Enable branch protection
gh api -X PUT /repos/rodrigogrosa/BackSatge-New/branches/main/protection \
  -f required_status_checks[strict]=true \
  -f required_status_checks[contexts][]=lint \
  -f required_status_checks[contexts][]=typecheck \
  -f required_status_checks[contexts][]=test \
  -f required_status_checks[contexts][]=build \
  -f required_pull_request_reviews[required_approving_review_count]=1 \
  -f required_pull_request_reviews[dismiss_stale_reviews]=true \
  -f enforce_admins=true \
  -f required_linear_history=true
```

## GitHub Actions Setup

GitHub Actions is already configured in `.github/workflows/ci.yml`. Here's how to ensure it works:

### 1. Enable Actions

1. Go to: `https://github.com/rodrigogrosa/BackSatge-New/settings/actions`
2. Under "Actions permissions":
   - Select "Allow all actions and reusable workflows"
3. Under "Workflow permissions":
   - Select "Read and write permissions"
   - ✅ Check "Allow GitHub Actions to create and approve pull requests"

### 2. Verify Workflow

```bash
# List workflows
gh workflow list

# View workflow runs
gh run list

# Watch a specific run
gh run watch
```

### 3. Workflow Features

The CI workflow includes:
- ✅ Linting (ESLint + Prettier)
- ✅ Type checking (TypeScript)
- ✅ Unit tests with coverage
- ✅ Build verification
- ✅ E2E tests (Playwright)
- ✅ Docker image build
- ✅ Security scanning (CodeQL)

## Secrets Management

### Adding Secrets

Secrets are used for sensitive data like API keys and tokens.

#### Using GitHub Web Interface:

1. Go to: `https://github.com/rodrigogrosa/BackSatge-New/settings/secrets/actions`
2. Click "New repository secret"
3. Add required secrets:

**Required Secrets:**

```bash
# Optional: Codecov token for coverage reports
CODECOV_TOKEN=your-codecov-token

# Optional: Container registry tokens (if using private registry)
DOCKER_USERNAME=your-docker-username
DOCKER_PASSWORD=your-docker-password

# For production deployment
POSTGRES_HOST=your-db-host
POSTGRES_PASSWORD=your-db-password
GITHUB_TOKEN=ghp_your_github_token
```

#### Using GitHub CLI:

```bash
# Add a secret
gh secret set CODECOV_TOKEN < token.txt

# Or interactively
gh secret set CODECOV_TOKEN
# (paste token and press Ctrl+D)

# List secrets
gh secret list
```

### Environment Secrets

For different environments (staging, production):

1. Go to: `https://github.com/rodrigogrosa/BackSatge-New/settings/environments`
2. Create environment (e.g., "production")
3. Add environment-specific secrets
4. Configure protection rules (required reviewers, wait timer)

## Issue Management

### Issue Templates

Issue templates are already configured in `.github/ISSUE_TEMPLATE/`:
- 🐛 Bug Report
- ✨ Feature Request
- 📚 Documentation

### Using Issues

```bash
# Create an issue
gh issue create --title "Bug: Login fails" --body "Description..." --label bug

# List issues
gh issue list

# View an issue
gh issue view 123

# Close an issue
gh issue close 123

# Assign an issue
gh issue edit 123 --add-assignee USERNAME
```

### Labels

Create custom labels for better organization:

```bash
# Create labels
gh label create "priority:high" --color "d73a4a" --description "High priority"
gh label create "priority:medium" --color "fbca04" --description "Medium priority"
gh label create "priority:low" --color "0e8a16" --description "Low priority"
gh label create "status:in-progress" --color "1d76db" --description "Currently being worked on"
gh label create "status:blocked" --color "b60205" --description "Blocked by another issue"
```

## Best Practices

### Repository Management

1. **README First**: Keep README.md up-to-date
2. **Clear Documentation**: Maintain CONTRIBUTING.md and other docs
3. **Issue Templates**: Use templates for consistency
4. **PR Templates**: Standardize pull request descriptions
5. **Branch Strategy**: Use feature branches, protect main
6. **Version Tags**: Tag releases with semantic versioning

### Collaboration

1. **Code Reviews**: Require at least one approval
2. **Clear Commits**: Use conventional commit messages
3. **Small PRs**: Keep changes focused and reviewable
4. **Tests Required**: All code changes must include tests
5. **CI/CD**: Ensure all checks pass before merging

### Security

1. **Secrets**: Never commit secrets to Git
2. **Dependencies**: Keep dependencies updated
3. **Security Scanning**: Enable CodeQL and Dependabot
4. **Access Control**: Grant minimal necessary permissions
5. **Audit Log**: Review security and access logs regularly

### Automation

1. **Auto-merge**: Consider enabling for trusted contributors
2. **Stale Bot**: Auto-close inactive issues/PRs
3. **Release Automation**: Use GitHub Releases with automation
4. **Notifications**: Configure email/Slack notifications

## Useful GitHub CLI Commands

```bash
# Repository shortcuts
gh repo view --web                    # Open repo in browser
gh repo edit                          # Edit repository settings
gh repo sync                          # Sync fork with upstream

# Pull requests
gh pr create --fill                   # Create PR with generated title/body
gh pr list --state open               # List open PRs
gh pr checks                          # View PR checks status
gh pr merge --squash                  # Squash and merge PR

# Actions
gh workflow run ci.yml                # Manually trigger workflow
gh run watch                          # Watch latest workflow run
gh run view --log                     # View run logs

# Releases
gh release create v1.0.0 --generate-notes
gh release list
gh release view v1.0.0
```

## Quick Setup Checklist

- [ ] Create GitHub repository
- [ ] Push initial code
- [ ] Add repository description and topics
- [ ] Enable Issues, Projects, and Discussions
- [ ] Add collaborators with appropriate permissions
- [ ] Set up branch protection for `main`
- [ ] Configure GitHub Actions
- [ ] Add required secrets
- [ ] Test CI/CD pipeline
- [ ] Create initial issues and milestones
- [ ] Update documentation
- [ ] Create first release

## Additional Resources

- [GitHub Docs](https://docs.github.com)
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Skills](https://skills.github.com/)
- [Backstage on GitHub](https://github.com/backstage/backstage)

---

**Need Help?** Check the [GitHub Community Forum](https://github.community/) or open an issue in this repository.
