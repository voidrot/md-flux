
# SpaceProperty


## Properties

Name | Type
------------ | -------------
`id` | string
`key` | string
`value` | any
`createdAt` | Date
`createdBy` | string
`version` | [SpacePropertyVersion](SpacePropertyVersion.md)

## Example

```typescript
import type { SpaceProperty } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "value": null,
  "createdAt": null,
  "createdBy": null,
  "version": null,
} satisfies SpaceProperty

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpaceProperty
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


