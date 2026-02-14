
# CreatePageRequest


## Properties

Name | Type
------------ | -------------
`spaceId` | string
`status` | string
`title` | string
`parentId` | string
`body` | [CreatePageRequestBody](CreatePageRequestBody.md)
`subtype` | string

## Example

```typescript
import type { CreatePageRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "spaceId": null,
  "status": null,
  "title": null,
  "parentId": null,
  "body": null,
  "subtype": null,
} satisfies CreatePageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


