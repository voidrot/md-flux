
# CreateBlogPost200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [BlogPostContentStatus](BlogPostContentStatus.md)
`title` | string
`spaceId` | string
`authorId` | string
`createdAt` | Date
`version` | [Version](Version.md)
`body` | [BodySingle](BodySingle.md)
`labels` | [AttachmentSingleLabels](AttachmentSingleLabels.md)
`properties` | [AttachmentSingleProperties](AttachmentSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`likes` | [BlogPostSingleLikes](BlogPostSingleLikes.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`isFavoritedByCurrentUser` | boolean
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { CreateBlogPost200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "spaceId": null,
  "authorId": null,
  "createdAt": null,
  "version": null,
  "body": null,
  "labels": null,
  "properties": null,
  "operations": null,
  "likes": null,
  "versions": null,
  "isFavoritedByCurrentUser": null,
  "links": null,
} satisfies CreateBlogPost200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBlogPost200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


