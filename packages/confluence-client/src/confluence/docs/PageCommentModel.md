
# PageCommentModel


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`pageId` | string
`version` | [Version](Version.md)
`body` | [BodyBulk](BodyBulk.md)
`links` | [CommentLinks](CommentLinks.md)

## Example

```typescript
import type { PageCommentModel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "pageId": null,
  "version": null,
  "body": null,
  "links": null,
} satisfies PageCommentModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageCommentModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


