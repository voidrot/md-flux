
# CommentNestedBodyWrite

Body of the comment. Only one body format should be specified as the property for this object, e.g. `storage`.

## Properties

Name | Type
------------ | -------------
`storage` | [CommentBodyWrite](CommentBodyWrite.md)
`atlasDocFormat` | [CommentBodyWrite](CommentBodyWrite.md)
`wiki` | [CommentBodyWrite](CommentBodyWrite.md)

## Example

```typescript
import type { CommentNestedBodyWrite } from ''

// TODO: Update the object below with actual values
const example = {
  "storage": null,
  "atlasDocFormat": null,
  "wiki": null,
} satisfies CommentNestedBodyWrite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommentNestedBodyWrite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


