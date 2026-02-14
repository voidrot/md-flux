
# User


## Properties

Name | Type
------------ | -------------
`displayName` | string
`timeZone` | string
`personalSpaceId` | string
`isExternalCollaborator` | boolean
`accountStatus` | [AccountStatus](AccountStatus.md)
`accountId` | string
`email` | string
`accountType` | [AccountType](AccountType.md)
`publicName` | string
`profilePicture` | [Icon](Icon.md)

## Example

```typescript
import type { User } from ''

// TODO: Update the object below with actual values
const example = {
  "displayName": null,
  "timeZone": null,
  "personalSpaceId": null,
  "isExternalCollaborator": null,
  "accountStatus": null,
  "accountId": null,
  "email": null,
  "accountType": null,
  "publicName": null,
  "profilePicture": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


