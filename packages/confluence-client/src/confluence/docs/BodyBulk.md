
# BodyBulk

Contains fields for each representation type requested.

## Properties

Name | Type
------------ | -------------
`storage` | [BodyType](BodyType.md)
`atlasDocFormat` | [BodyType](BodyType.md)

## Example

```typescript
import type { BodyBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "storage": null,
  "atlasDocFormat": null,
} satisfies BodyBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BodyBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


