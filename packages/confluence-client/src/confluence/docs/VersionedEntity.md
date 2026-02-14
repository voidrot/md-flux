
# VersionedEntity


## Properties

Name | Type
------------ | -------------
`title` | string
`id` | string
`body` | [BodyBulk](BodyBulk.md)

## Example

```typescript
import type { VersionedEntity } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "id": null,
  "body": null,
} satisfies VersionedEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionedEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


