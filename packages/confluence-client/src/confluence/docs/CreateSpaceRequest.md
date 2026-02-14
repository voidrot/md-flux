
# CreateSpaceRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string
`alias` | string
`description` | [CreateSpaceRequestDescription](CreateSpaceRequestDescription.md)
`roleAssignments` | [Array&lt;CreateSpaceRequestRoleAssignmentsInner&gt;](CreateSpaceRequestRoleAssignmentsInner.md)
`copySpaceAccessConfiguration` | number
`createPrivateSpace` | boolean
`templateKey` | string

## Example

```typescript
import type { CreateSpaceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
  "alias": null,
  "description": null,
  "roleAssignments": null,
  "copySpaceAccessConfiguration": null,
  "createPrivateSpace": null,
  "templateKey": null,
} satisfies CreateSpaceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSpaceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


