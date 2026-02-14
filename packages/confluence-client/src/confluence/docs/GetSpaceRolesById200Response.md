
# GetSpaceRolesById200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | [RoleType](RoleType.md)
`name` | string
`description` | string
`spacePermissions` | Array&lt;string&gt;
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { GetSpaceRolesById200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "name": null,
  "description": null,
  "spacePermissions": null,
  "links": null,
} satisfies GetSpaceRolesById200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSpaceRolesById200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


