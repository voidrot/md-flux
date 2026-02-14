
# CustomContentBulk


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`spaceId` | string
`pageId` | string
`blogPostId` | string
`customContentId` | string
`authorId` | string
`createdAt` | Date
`version` | [Version](Version.md)
`body` | [CustomContentBodyBulk](CustomContentBodyBulk.md)
`links` | [CustomContentLinks](CustomContentLinks.md)

## Example

```typescript
import type { CustomContentBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "status": null,
  "title": null,
  "spaceId": null,
  "pageId": null,
  "blogPostId": null,
  "customContentId": null,
  "authorId": null,
  "createdAt": null,
  "version": null,
  "body": null,
  "links": null,
} satisfies CustomContentBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomContentBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


