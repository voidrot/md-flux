
# CreateFooterComment201Response


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`blogPostId` | string
`pageId` | string
`attachmentId` | string
`customContentId` | string
`parentCommentId` | string
`version` | [Version](Version.md)
`properties` | [AttachmentSingleProperties](AttachmentSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`likes` | [BlogPostSingleLikes](BlogPostSingleLikes.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`body` | [BodySingle](BodySingle.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { CreateFooterComment201Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "blogPostId": null,
  "pageId": null,
  "attachmentId": null,
  "customContentId": null,
  "parentCommentId": null,
  "version": null,
  "properties": null,
  "operations": null,
  "likes": null,
  "versions": null,
  "body": null,
  "links": null,
} satisfies CreateFooterComment201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFooterComment201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


