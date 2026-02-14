
# PostRedactPageRequest


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`cleanHistory` | boolean
`versionNumber` | number
`body` | [PostRedactPageRequestBody](PostRedactPageRequestBody.md)
`title` | [PostRedactPageRequestBody](PostRedactPageRequestBody.md)

## Example

```typescript
import type { PostRedactPageRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "cleanHistory": null,
  "versionNumber": null,
  "body": null,
  "title": null,
} satisfies PostRedactPageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostRedactPageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


