
# CreateWhiteboard200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`parentId` | string
`parentType` | [ParentContentType](ParentContentType.md)
`position` | number
`authorId` | string
`ownerId` | string
`createdAt` | Date
`spaceId` | string
`version` | [Version](Version.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { CreateWhiteboard200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "status": null,
  "title": null,
  "parentId": null,
  "parentType": null,
  "position": null,
  "authorId": null,
  "ownerId": null,
  "createdAt": null,
  "spaceId": null,
  "version": null,
  "links": null,
} satisfies CreateWhiteboard200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWhiteboard200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


