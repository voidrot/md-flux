
# InlineCommentChildrenModel


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`parentCommentId` | string
`version` | [Version](Version.md)
`body` | [BodyBulk](BodyBulk.md)
`resolutionStatus` | [InlineCommentResolutionStatus](InlineCommentResolutionStatus.md)
`properties` | [InlineCommentProperties](InlineCommentProperties.md)
`links` | [CommentLinks](CommentLinks.md)

## Example

```typescript
import type { InlineCommentChildrenModel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "parentCommentId": null,
  "version": null,
  "body": null,
  "resolutionStatus": null,
  "properties": null,
  "links": null,
} satisfies InlineCommentChildrenModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineCommentChildrenModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


