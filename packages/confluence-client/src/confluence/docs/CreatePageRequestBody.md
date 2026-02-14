
# CreatePageRequestBody


## Properties

Name | Type
------------ | -------------
`representation` | string
`value` | string
`storage` | [PageBodyWrite](PageBodyWrite.md)
`atlasDocFormat` | [PageBodyWrite](PageBodyWrite.md)
`wiki` | [PageBodyWrite](PageBodyWrite.md)

## Example

```typescript
import type { CreatePageRequestBody } from ''

// TODO: Update the object below with actual values
const example = {
  "representation": null,
  "value": null,
  "storage": null,
  "atlasDocFormat": null,
  "wiki": null,
} satisfies CreatePageRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePageRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


