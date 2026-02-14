
# InlineCommentModelProperties


## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;ContentProperty&gt;](ContentProperty.md)
`meta` | [OptionalFieldMeta](OptionalFieldMeta.md)
`links` | [OptionalFieldLinks](OptionalFieldLinks.md)
`inlineMarkerRef` | string
`inlineOriginalSelection` | string

## Example

```typescript
import type { InlineCommentModelProperties } from ''

// TODO: Update the object below with actual values
const example = {
  "results": null,
  "meta": null,
  "links": null,
  "inlineMarkerRef": null,
  "inlineOriginalSelection": null,
} satisfies InlineCommentModelProperties

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineCommentModelProperties
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


