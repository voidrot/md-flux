
# UpdateCustomContentRequest


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`status` | string
`spaceId` | string
`pageId` | string
`blogPostId` | string
`customContentId` | string
`title` | string
`body` | [CreateCustomContentRequestBody](CreateCustomContentRequestBody.md)
`version` | [UpdateCustomContentRequestVersion](UpdateCustomContentRequestVersion.md)

## Example

```typescript
import type { UpdateCustomContentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "status": null,
  "spaceId": null,
  "pageId": null,
  "blogPostId": null,
  "customContentId": null,
  "title": null,
  "body": null,
  "version": null,
} satisfies UpdateCustomContentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomContentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


