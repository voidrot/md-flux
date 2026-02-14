
# SpaceBulk


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`name` | string
`type` | [SpaceType](SpaceType.md)
`status` | [SpaceStatus](SpaceStatus.md)
`authorId` | string
`currentActiveAlias` | string
`createdAt` | Date
`homepageId` | string
`description` | [SpaceDescription](SpaceDescription.md)
`icon` | [SpaceIcon](SpaceIcon.md)
`links` | [SpaceLinks](SpaceLinks.md)

## Example

```typescript
import type { SpaceBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "name": null,
  "type": null,
  "status": null,
  "authorId": null,
  "currentActiveAlias": null,
  "createdAt": null,
  "homepageId": null,
  "description": null,
  "icon": null,
  "links": null,
} satisfies SpaceBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpaceBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


