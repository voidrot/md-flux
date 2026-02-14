
# BlogPostBulk


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [BlogPostContentStatus](BlogPostContentStatus.md)
`title` | string
`spaceId` | string
`authorId` | string
`createdAt` | Date
`version` | [Version](Version.md)
`body` | [BodyBulk](BodyBulk.md)
`links` | [AbstractPageLinks](AbstractPageLinks.md)

## Example

```typescript
import type { BlogPostBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "title": null,
  "spaceId": null,
  "authorId": null,
  "createdAt": null,
  "version": null,
  "body": null,
  "links": null,
} satisfies BlogPostBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlogPostBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


