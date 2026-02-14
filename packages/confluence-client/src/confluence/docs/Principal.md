
# Principal

The principal of the role assignment.

## Properties

Name | Type
------------ | -------------
`principalType` | [PrincipalType](PrincipalType.md)
`principalId` | string

## Example

```typescript
import type { Principal } from ''

// TODO: Update the object below with actual values
const example = {
  "principalType": null,
  "principalId": null,
} satisfies Principal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Principal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


