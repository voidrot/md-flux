
# RedactionResponse

Response containing details of all redactions that were applied to the content. Each redaction includes a unique ID for restoration, except that code block redactions cannot be restored. 

## Properties

Name | Type
------------ | -------------
`body` | [RedactionSectionResponse](RedactionSectionResponse.md)
`title` | [RedactionSectionResponse](RedactionSectionResponse.md)

## Example

```typescript
import type { RedactionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "body": null,
  "title": null,
} satisfies RedactionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedactionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


