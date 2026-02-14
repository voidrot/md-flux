
# CreateSpaceRequestDescription

The description of the new/updated space. Note, only the \'plain\' representation is currently supported.

## Properties

Name | Type
------------ | -------------
`value` | string
`representation` | string

## Example

```typescript
import type { CreateSpaceRequestDescription } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "representation": null,
} satisfies CreateSpaceRequestDescription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSpaceRequestDescription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


