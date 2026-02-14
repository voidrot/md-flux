[**md-flux-monorepo**](../../../../README.md)

***

[md-flux-monorepo](../../../../modules.md) / [cli/src/config](../README.md) / loadConfig

# Function: loadConfig()

> **loadConfig**(`options?`): `object`

Defined in: [cli/src/config.ts:68](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/cli/src/config.ts#L68)

Loads and validates the configuration.

Search order for config file:
1. `options.path` (if provided)
2. `md-flux.config.yml` in current directory
3. `md-flux.config.yaml` in current directory

Environment variables (e.g., `CONFLUENCE_BASE_URL`) override file settings.

## Parameters

### options?

[`LoadConfigOptions`](../interfaces/LoadConfigOptions.md) = `{}`

Options for loading the configuration.

## Returns

The validated configuration object.

### confluence

> **confluence**: `object`

Confluence connection settings.

#### confluence.auth

> **auth**: `object`

Authentication credentials.

#### confluence.auth.apiToken

> **apiToken**: `string`

Confluence API token.

#### confluence.auth.username

> **username**: `string`

Confluence username (email).

#### confluence.baseUrl

> **baseUrl**: `string`

The base URL of the Confluence instance.

#### confluence.spaceKey

> **spaceKey**: `string`

The key of the Confluence space to publish to.

### files

> **files**: `string`[] \| \{ `exclude?`: `string`[]; `include`: `string`[]; \}

File selection patterns.

#### Type Declaration

`string`[]

\{ `exclude?`: `string`[]; `include`: `string`[]; \}

## Throws

If the config file is not found, cannot be parsed, or is invalid.
