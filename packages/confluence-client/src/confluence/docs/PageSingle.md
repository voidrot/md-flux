
# PageSingle


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
`createdAt` | Date
`version` | [Version](Version.md)
`body` | [BodySingle](BodySingle.md)
`labels` | [AttachmentSingleLabels](AttachmentSingleLabels.md)
`properties` | [AttachmentSingleProperties](AttachmentSingleProperties.md)
`operations` | [AttachmentSingleOperations](AttachmentSingleOperations.md)
`likes` | [BlogPostSingleLikes](BlogPostSingleLikes.md)
`versions` | [AttachmentSingleVersions](AttachmentSingleVersions.md)
`isFavoritedByCurrentUser` | boolean
`links` | [AbstractPageLinks](AbstractPageLinks.md)

## Example

```typescript
import type { PageSingle } from ''

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
  "createdAt": null,
  "version": null,
  "body": null,
  "labels": null,
  "properties": null,
  "operations": null,
  "likes": null,
  "versions": null,
  "isFavoritedByCurrentUser": null,
  "links": null,
} satisfies PageSingle

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageSingle
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


