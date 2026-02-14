
# PageBulk


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ContentStatus](ContentStatus.md)
`title` | string
`spaceId` | string
`parentId` | string
`parentType` | [ParentContentType](ParentContentType.md)
`position` | number
`authorId` | string
`ownerId` | string
`lastOwnerId` | string
`subtype` | string
`createdAt` | Date
`version` | [Version](Version.md)
`body` | [BodyBulk](BodyBulk.md)
`links` | [AbstractPageLinks](AbstractPageLinks.md)

## Example

```typescript
import type { PageBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "spaceId": null,
  "parentId": null,
  "parentType": null,
  "position": null,
  "authorId": null,
  "ownerId": null,
  "lastOwnerId": null,
  "subtype": null,
  "createdAt": null,
  "version": null,
  "body": null,
  "links": null,
} satisfies PageBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


