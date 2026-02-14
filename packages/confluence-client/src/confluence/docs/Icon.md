
# Icon

This object represents an icon. If used as a profilePicture, this may be returned as null, depending on the user\'s privacy setting.

## Properties

Name | Type
------------ | -------------
`path` | string
`isDefault` | boolean

## Example

```typescript
import type { Icon } from ''

// TODO: Update the object below with actual values
const example = {
  "path": null,
  "isDefault": null,
} satisfies Icon

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Icon
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


