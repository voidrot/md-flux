**md-flux-monorepo**

***

# md-flux

[![CI](https://github.com/voidrot/md-flux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/voidrot/md-flux/actions/workflows/ci.yml)
[![Node >=24](https://img.shields.io/badge/node-%3E%3D24-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm 10](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

**md-flux** is a TypeScript-based tool for syncing Markdown documentation to Atlassian Confluence. It parses Markdown files, extracts frontmatter metadata, and creates or updates pages in a specified Confluence space.

## Features

- **Markdown to Confluence**: Converts Markdown to Confluence storage format.
- **Frontmatter Support**: Control page titles and target spaces via YAML frontmatter.
- **Smart Sync**: Creates new pages or updates existing ones (versioning included).
- **Monorepo Structure**: organized into `core` logic and `cli` interface.
- **Type-Safe**: Built with TypeScript and Zod for robust configuration validation.

## Monorepo Structure

- **`packages/cli`**: The command-line interface for running the sync process.
- **`packages/core`**: Core logic for Confluence API interaction and Markdown parsing.
- **`packages/confluence-client`**: Auto-generated Type-safe client for the Confluence V2 API.

## Installation

Exceptions:
- Node.js 24+
- pnpm 10+

```bash
# Clone the repository
git clone https://github.com/voidrot/md-flux.git
cd md-flux

# Install dependencies
pnpm install
```

## Usage

You can run the CLI directly from the root using `pnpm`:

```bash
# Run the publish command (defaults to looking for md-flux.config.yml)
pnpm start publish
```

### Configuration

`md-flux` matches configuration from `md-flux.config.yml` or environment variables.

#### 1. Configuration File (`md-flux.config.yml`)

Create a `md-flux.config.yml` in your project root:

```yaml
confluence:
  baseUrl: "https://your-domain.atlassian.net/wiki/api/v2"
  auth:
    username: "your-email@example.com"
    apiToken: "your-api-token"
  spaceKey: "DS" # Default space key

files:
  include:
    - "**/*.md"
  exclude:
    - "node_modules/**"
    - "README.md"
```

#### 2. Environment Variables

Environment variables override file configuration:

- `CONFLUENCE_BASE_URL`
- `CONFLUENCE_USERNAME`
- `CONFLUENCE_API_TOKEN`
- `CONFLUENCE_SPACE_KEY`

### Frontmatter

You can override the target space for specific files using frontmatter:

```markdown
---
title: My Page Title
spaceKey: PROJ
---

# My Page Content
```

## Development

### Scripts

- `pnpm dev`: Run the CLI in watch mode (via `packages/cli`).
- `pnpm build`: Build all packages.
- `pnpm test`: Run tests across all packages using Vitest.
- `pnpm lint:fix`: Fix linting issues.
- `pnpm docs`: Generate project documentation in `docs/`.

### Documentation

API documentation is generated using `typedoc`.

```bash
pnpm docs
```

View the generated documentation in the `docs/` directory.

## License

MIT
