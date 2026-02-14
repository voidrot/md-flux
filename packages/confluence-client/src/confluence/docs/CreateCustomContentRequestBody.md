
# CreateCustomContentRequestBody


## Properties

Name | Type
------------ | -------------
`representation` | string
`value` | string
`storage` | [CustomContentBodyWrite](CustomContentBodyWrite.md)
`atlasDocFormat` | [CustomContentBodyWrite](CustomContentBodyWrite.md)
`raw` | [CustomContentBodyWrite](CustomContentBodyWrite.md)

## Example

```typescript
import type { CreateCustomContentRequestBody } from ''

// TODO: Update the object below with actual values
const example = {
  "representation": null,
  "value": null,
  "storage": null,
  "atlasDocFormat": null,
  "raw": null,
} satisfies CreateCustomContentRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCustomContentRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


