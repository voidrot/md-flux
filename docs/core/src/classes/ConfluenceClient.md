[**md-flux-monorepo**](../../../README.md)

***

[md-flux-monorepo](../../../modules.md) / [core/src](../README.md) / ConfluenceClient

# Class: ConfluenceClient

Defined in: [core/src/confluence.ts:31](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/core/src/confluence.ts#L31)

A client for interacting with the Confluence API.
Handles space resolution, page searching, creation, and updates.

## Constructors

### Constructor

> **new ConfluenceClient**(`config`): `ConfluenceClient`

Defined in: [core/src/confluence.ts:40](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/core/src/confluence.ts#L40)

Creates an instance of ConfluenceClient.

#### Parameters

##### config

[`ConfluenceConfig`](../interfaces/ConfluenceConfig.md)

Configuration object containing URL and credentials.

#### Returns

`ConfluenceClient`

## Methods

### publishPage()

> **publishPage**(`page`, `spaceKey`, `parentId?`): `Promise`\<`void`\>

Defined in: [core/src/confluence.ts:86](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/core/src/confluence.ts#L86)

Publishes a Markdown page to Confluence.
Checks if the page exists:
- If yes, updates it (increments version).
- If no, creates a new page.

#### Parameters

##### page

[`ParsedMarkdown`](../interfaces/ParsedMarkdown.md)

The parsed Markdown object containing frontmatter and HTML.

##### spaceKey

`string`

The key of the target space.

##### parentId?

`string`

(Optional) The ID of the parent page to nest this page under.

#### Returns

`Promise`\<`void`\>

#### Throws

If the page title is missing in frontmatter.

***

### resolveSpaceId()

> **resolveSpaceId**(`spaceKey`): `Promise`\<`string`\>

Defined in: [core/src/confluence.ts:58](https://github.com/voidrot/md-flux/blob/97621ad43253456faddad2f1f212969eb07c362f/packages/core/src/confluence.ts#L58)

Resolves a space Key to its internal Confluence numeric ID.

#### Parameters

##### spaceKey

`string`

The human-readable key of the space (e.g., "DS", "Eng").

#### Returns

`Promise`\<`string`\>

The numeric ID of the space as a string.

#### Throws

If the space is not found or has no ID.
