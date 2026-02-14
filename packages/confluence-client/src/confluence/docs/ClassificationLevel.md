
# ClassificationLevel

A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.  A classification level may be associated with specific storage and handling requirements or expectations.

## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [ClassificationLevelStatus](.md)
`order` | number
`name` | string
`description` | string
`guideline` | string
`color` | [ClassificationLevelColor](.md)

## Example

```typescript
import type { ClassificationLevel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "order": null,
  "name": null,
  "description": null,
  "guideline": null,
  "color": null,
} satisfies ClassificationLevel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClassificationLevel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


