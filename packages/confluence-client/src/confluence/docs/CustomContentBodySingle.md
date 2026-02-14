
# CustomContentBodySingle

Contains fields for each representation type requested.

## Properties

Name | Type
------------ | -------------
`raw` | [BodyType](BodyType.md)
`storage` | [BodyType](BodyType.md)
`atlasDocFormat` | [BodyType](BodyType.md)
`view` | [BodyType](BodyType.md)

## Example

```typescript
import type { CustomContentBodySingle } from ''

// TODO: Update the object below with actual values
const example = {
  "raw": null,
  "storage": null,
  "atlasDocFormat": null,
  "view": null,
} satisfies CustomContentBodySingle

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomContentBodySingle
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


