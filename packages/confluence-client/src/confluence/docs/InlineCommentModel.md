
# InlineCommentModel


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`blogPostId` | string
`pageId` | string
`parentCommentId` | string
`version` | [Version](Version.md)
`body` | [BodySingle](BodySingle.md)
`resolutionLastModifierId` | string
`resolutionLastModifiedAt` | Date
`resolutionStatus` | [InlineCommentResolutionStatus](InlineCommentResolutionStatus.md)
`properties` | [InlineCommentModelProperties](InlineCommentModelProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`likes` | [BlogPostSingleLikes](BlogPostSingleLikes.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`links` | [CommentLinks](CommentLinks.md)

## Example

```typescript
import type { InlineCommentModel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "blogPostId": null,
  "pageId": null,
  "parentCommentId": null,
  "version": null,
  "body": null,
  "resolutionLastModifierId": null,
  "resolutionLastModifiedAt": null,
  "resolutionStatus": null,
  "properties": null,
  "operations": null,
  "likes": null,
  "versions": null,
  "links": null,
} satisfies InlineCommentModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineCommentModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


