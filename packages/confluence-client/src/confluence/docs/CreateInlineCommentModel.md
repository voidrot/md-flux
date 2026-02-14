
# CreateInlineCommentModel


## Properties

Name | Type
------------ | -------------
`blogPostId` | string
`pageId` | string
`parentCommentId` | string
`body` | [CreateFooterCommentModelBody](CreateFooterCommentModelBody.md)
`inlineCommentProperties` | [CreateInlineCommentModelInlineCommentProperties](CreateInlineCommentModelInlineCommentProperties.md)

## Example

```typescript
import type { CreateInlineCommentModel } from ''

// TODO: Update the object below with actual values
const example = {
  "blogPostId": null,
  "pageId": null,
  "parentCommentId": null,
  "body": null,
  "inlineCommentProperties": null,
} satisfies CreateInlineCommentModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInlineCommentModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


