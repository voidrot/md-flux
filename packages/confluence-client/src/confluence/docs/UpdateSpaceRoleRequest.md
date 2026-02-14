
# UpdateSpaceRoleRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`spacePermissions` | Array&lt;string&gt;
`anonymousReassignmentRoleId` | string
`guestReassignmentRoleId` | string

## Example

```typescript
import type { UpdateSpaceRoleRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "spacePermissions": null,
  "anonymousReassignmentRoleId": null,
  "guestReassignmentRoleId": null,
} satisfies UpdateSpaceRoleRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSpaceRoleRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


