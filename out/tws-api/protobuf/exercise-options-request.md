[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/exercise-options-request)

## ExerciseOptionsRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order id. |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `exerciseAction` | `int32` | Set to 1 to exercise the option, set to 2 to let the option lapse |
| `exerciseQuantity` | `int32` | Number of contracts to be exercised |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `override` | `bool` | Indicate if the default options exercise behavior should be overwritten. |
| `manualOrderTime` | `string` | Used by brokers and advisors when manually entering an order request. Format should be "YYYYMMDD-HH:mm:ss" using UTC as the timezone value. |
| `customerAccount` | `string` | Required for Nondisclosed Omnibus Accounts. A unique identifier for each account within the Omnibus structure to signify the account holder being traded. Best practice (Not Required): clients should look to hash this value, using something along the lines of 5 digits of SHA1 of the account number. This should not be implemented for non-omnibus accounts. |
| `professionalCustomer` | `bool` | true indicates account represents an institutional or professional trader. |
