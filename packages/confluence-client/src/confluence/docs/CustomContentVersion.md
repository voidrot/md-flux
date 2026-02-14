
# CustomContentVersion


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`message` | string
`number` | number
`minorEdit` | boolean
`authorId` | string
`custom` | [VersionedEntity](VersionedEntity.md)

## Example

```typescript
import type { CustomContentVersion } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "message": null,
  "number": null,
  "minorEdit": null,
  "authorId": null,
  "custom": null,
} satisfies CustomContentVersion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomContentVersion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


