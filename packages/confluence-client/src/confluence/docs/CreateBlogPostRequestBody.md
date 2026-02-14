
# CreateBlogPostRequestBody


## Properties

Name | Type
------------ | -------------
`representation` | string
`value` | string
`storage` | [BlogPostBodyWrite](BlogPostBodyWrite.md)
`atlasDocFormat` | [BlogPostBodyWrite](BlogPostBodyWrite.md)
`wiki` | [BlogPostBodyWrite](BlogPostBodyWrite.md)

## Example

```typescript
import type { CreateBlogPostRequestBody } from ''

// TODO: Update the object below with actual values
const example = {
  "representation": null,
  "value": null,
  "storage": null,
  "atlasDocFormat": null,
  "wiki": null,
} satisfies CreateBlogPostRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBlogPostRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


