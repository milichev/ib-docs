[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/execution-filter)

## ExecutionFilter

| Field | Type | Description |
| ----- | ---- | ----------- |
| `clientId` | `int32` | Client identifier the order was submitted through. |
| `acctCode` | `string` | Account identifier that executed the trade. |
| `time` | `string` | Declare the date/time to receive executions at and after the designated time. Can be used in combination with LastNDays or SpecificDates. Requests should be formatted as "YYYYMMDD HH:mm:ss TMZ" or in UTC as "YYYYMMDD-HH:mm:ss". If no date is passed, the current date is assumed. |
| `symbol` | `string` | Instrument's symbol. |
| `secType` | `string` | Asset type being monitored. |
| `exchange` | `string` | Exchange where the symbol was traded. |
| `side` | `string` | Determine if only Buy or Sell orders are returned. |
| `lastNDays` | `int32` | Number of previous days to receive trades for. Maximum 7. |
| `specificDates` | `int32` | Retrieve a specific date within the past week to receive executions for. May be used with Time, but only the executions on the Specified Dates will return. Array formatted as [YYYYMMDD] |
