
# DataPolicySpace


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`name` | string
`description` | [SpaceDescription](SpaceDescription.md)
`dataPolicy` | [DataPolicySpaceDataPolicy](DataPolicySpaceDataPolicy.md)
`icon` | [SpaceIcon](SpaceIcon.md)
`links` | [SpaceLinks](SpaceLinks.md)

## Example

```typescript
import type { DataPolicySpace } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "name": null,
  "description": null,
  "dataPolicy": null,
  "icon": null,
  "links": null,
} satisfies DataPolicySpace

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DataPolicySpace
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


