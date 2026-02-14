
# CustomContentNestedBodyWrite

Body of the custom content. Only one body format should be specified as the property for this object, e.g. `storage`.

## Properties

Name | Type
------------ | -------------
`storage` | [CustomContentBodyWrite](CustomContentBodyWrite.md)
`atlasDocFormat` | [CustomContentBodyWrite](CustomContentBodyWrite.md)
`raw` | [CustomContentBodyWrite](CustomContentBodyWrite.md)

## Example

```typescript
import type { CustomContentNestedBodyWrite } from ''

// TODO: Update the object below with actual values
const example = {
  "storage": null,
  "atlasDocFormat": null,
  "raw": null,
} satisfies CustomContentNestedBodyWrite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomContentNestedBodyWrite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


