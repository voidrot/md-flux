
# AttachmentCommentModel


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`attachmentId` | string
`version` | [Version](Version.md)
`body` | [BodySingle](BodySingle.md)
`links` | [CommentLinks](CommentLinks.md)

## Example

```typescript
import type { AttachmentCommentModel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "attachmentId": null,
  "version": null,
  "body": null,
  "links": null,
} satisfies AttachmentCommentModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttachmentCommentModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


