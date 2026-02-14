
# CreateInlineCommentModelInlineCommentProperties

Object describing the text to highlight on the page/blog post. Only applicable for top level inline comments (not replies) and required in that case.

## Properties

Name | Type
------------ | -------------
`textSelection` | string
`textSelectionMatchCount` | number
`textSelectionMatchIndex` | number

## Example

```typescript
import type { CreateInlineCommentModelInlineCommentProperties } from ''

// TODO: Update the object below with actual values
const example = {
  "textSelection": null,
  "textSelectionMatchCount": null,
  "textSelectionMatchIndex": null,
} satisfies CreateInlineCommentModelInlineCommentProperties

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInlineCommentModelInlineCommentProperties
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


