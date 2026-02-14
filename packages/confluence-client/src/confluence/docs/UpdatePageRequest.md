
# UpdatePageRequest


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`title` | string
`spaceId` | any
`parentId` | any
`ownerId` | any
`body` | [CreatePageRequestBody](CreatePageRequestBody.md)
`version` | [UpdatePageRequestVersion](UpdatePageRequestVersion.md)

## Example

```typescript
import type { UpdatePageRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "spaceId": null,
  "parentId": null,
  "ownerId": null,
  "body": null,
  "version": null,
} satisfies UpdatePageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


