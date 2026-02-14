
# CreateCustomContentRequest


## Properties

Name | Type
------------ | -------------
`type` | string
`status` | string
`spaceId` | string
`pageId` | string
`blogPostId` | string
`customContentId` | string
`title` | string
`body` | [CreateCustomContentRequestBody](CreateCustomContentRequestBody.md)

## Example

```typescript
import type { CreateCustomContentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "status": null,
  "spaceId": null,
  "pageId": null,
  "blogPostId": null,
  "customContentId": null,
  "title": null,
  "body": null,
} satisfies CreateCustomContentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCustomContentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


