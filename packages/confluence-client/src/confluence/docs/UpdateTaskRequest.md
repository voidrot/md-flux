
# UpdateTaskRequest


## Properties

Name | Type
------------ | -------------
`id` | string
`localId` | string
`spaceId` | string
`pageId` | string
`blogPostId` | string
`status` | string
`createdBy` | string
`assignedTo` | string
`completedBy` | string
`createdAt` | Date
`updatedAt` | Date
`dueAt` | Date
`completedAt` | Date

## Example

```typescript
import type { UpdateTaskRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "localId": null,
  "spaceId": null,
  "pageId": null,
  "blogPostId": null,
  "status": null,
  "createdBy": null,
  "assignedTo": null,
  "completedBy": null,
  "createdAt": null,
  "updatedAt": null,
  "dueAt": null,
  "completedAt": null,
} satisfies UpdateTaskRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateTaskRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


