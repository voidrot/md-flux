
# DetailedVersion


## Properties

Name | Type
------------ | -------------
`number` | number
`authorId` | string
`message` | string
`createdAt` | Date
`minorEdit` | boolean
`contentTypeModified` | boolean
`collaborators` | Array&lt;string&gt;
`prevVersion` | number
`nextVersion` | number

## Example

```typescript
import type { DetailedVersion } from ''

// TODO: Update the object below with actual values
const example = {
  "number": null,
  "authorId": null,
  "message": null,
  "createdAt": null,
  "minorEdit": null,
  "contentTypeModified": null,
  "collaborators": null,
  "prevVersion": null,
  "nextVersion": null,
} satisfies DetailedVersion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DetailedVersion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


