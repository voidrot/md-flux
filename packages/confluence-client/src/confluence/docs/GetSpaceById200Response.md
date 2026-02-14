
# GetSpaceById200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`name` | string
`type` | [SpaceType](SpaceType.md)
`status` | [SpaceStatus](SpaceStatus.md)
`authorId` | string
`createdAt` | Date
`homepageId` | string
`description` | [SpaceDescription](SpaceDescription.md)
`icon` | [SpaceIcon](SpaceIcon.md)
`labels` | [AttachmentSingleLabels](AttachmentSingleLabels.md)
`properties` | [SpaceSingleProperties](SpaceSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`permissions` | [SpaceSinglePermissions](SpaceSinglePermissions.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { GetSpaceById200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "name": null,
  "type": null,
  "status": null,
  "authorId": null,
  "createdAt": null,
  "homepageId": null,
  "description": null,
  "icon": null,
  "labels": null,
  "properties": null,
  "operations": null,
  "permissions": null,
  "links": null,
} satisfies GetSpaceById200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSpaceById200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


