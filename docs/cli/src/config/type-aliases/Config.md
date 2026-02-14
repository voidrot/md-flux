[**md-flux-monorepo**](../../../../README.md)

***

[md-flux-monorepo](../../../../modules.md) / [cli/src/config](../README.md) / Config

# Type Alias: Config

> **Config** = `object`

Defined in: [cli/src/config.ts:42](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/cli/src/config.ts#L42)

Inferred TypeScript type for the CLI configuration.

## Type Declaration

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
