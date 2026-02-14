
# ChildrenResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [OnlyArchivedAndCurrentContentStatus](OnlyArchivedAndCurrentContentStatus.md)
`title` | string
`type` | string
`spaceId` | string
`childPosition` | number

## Example

```typescript
import type { ChildrenResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "type": null,
  "spaceId": null,
  "childPosition": null,
} satisfies ChildrenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildrenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


