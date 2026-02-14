
# GetAttachmentById200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`createdAt` | Date
`pageId` | string
`blogPostId` | string
`customContentId` | string
`mediaType` | string
`mediaTypeDescription` | string
`comment` | string
`fileId` | string
`fileSize` | number
`webuiLink` | string
`downloadLink` | string
`version` | [Version](Version.md)
`labels` | [AttachmentSingleLabels](AttachmentSingleLabels.md)
`properties` | [AttachmentSingleProperties](AttachmentSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { GetAttachmentById200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "createdAt": null,
  "pageId": null,
  "blogPostId": null,
  "customContentId": null,
  "mediaType": null,
  "mediaTypeDescription": null,
  "comment": null,
  "fileId": null,
  "fileSize": null,
  "webuiLink": null,
  "downloadLink": null,
  "version": null,
  "labels": null,
  "properties": null,
  "operations": null,
  "versions": null,
  "links": null,
} satisfies GetAttachmentById200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAttachmentById200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


