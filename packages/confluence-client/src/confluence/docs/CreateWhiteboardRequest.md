
# CreateWhiteboardRequest


## Properties

Name | Type
------------ | -------------
`spaceId` | string
`title` | string
`parentId` | string
`templateKey` | string
`locale` | string

## Example

```typescript
import type { CreateWhiteboardRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "spaceId": null,
  "title": null,
  "parentId": null,
  "templateKey": null,
  "locale": null,
} satisfies CreateWhiteboardRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWhiteboardRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


