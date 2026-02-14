
# UpdateFooterCommentRequest


## Properties

Name | Type
------------ | -------------
`version` | [UpdateFooterCommentModelVersion](UpdateFooterCommentModelVersion.md)
`body` | [CreateFooterCommentModelBody](CreateFooterCommentModelBody.md)
`links` | [GetAttachmentById200ResponseAllOfLinks](GetAttachmentById200ResponseAllOfLinks.md)

## Example

```typescript
import type { UpdateFooterCommentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "body": null,
  "links": null,
} satisfies UpdateFooterCommentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateFooterCommentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


