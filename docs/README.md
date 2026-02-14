**md-flux-monorepo**

***

## md-flux

[![CI](https://github.com/voidrot/md-flux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/voidrot/md-flux/actions/workflows/ci.yml)
[![Node >=24](https://img.shields.io/badge/node-%3E%3D24-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm 10](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

TypeScript-based Node.js workspace for syncing markdown docs to Atlassian Confluence.

## Requirements

- Node.js 24+
- pnpm 10+

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development mode:

   ```bash
   pnpm run dev
   ```

## Scripts

- `pnpm run dev`: Run `src/index.ts` in watch mode with `tsx`.
- `pnpm run build`: Compile TypeScript from `src/` to `dist/`.
- `pnpm run start`: Run compiled output from `dist/index.js`.
- `pnpm run typecheck`: Run TypeScript type checking without output.
- `pnpm run test`: Run Vitest test suite.
- `pnpm run api:clean`: Remove generated Confluence client code.
- `pnpm run api:generate`: Generate Confluence client code from OpenAPI into `src/clients/confluence`.

If `api:generate` fails due blocked package build scripts, run:

```bash
pnpm approve-builds
```

## TypeScript Configuration

- `tsconfig.json`: Main build config targeting ES2022 with strict checks.
- `tsconfig.vitest.json`: Test config including Vitest global types.
