
# CreateCustomContent201Response


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
`labels` | [AttachmentSingleLabels](AttachmentSingleLabels.md)
`properties` | [AttachmentSingleProperties](AttachmentSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`body` | [CustomContentBodySingle](CustomContentBodySingle.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { CreateCustomContent201Response } from ''

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
  "labels": null,
  "properties": null,
  "operations": null,
  "versions": null,
  "body": null,
  "links": null,
} satisfies CreateCustomContent201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCustomContent201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


