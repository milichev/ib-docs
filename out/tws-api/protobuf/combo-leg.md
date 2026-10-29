[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/combo-leg)

## ComboLeg

| Field | Type | Description |
| ----- | ---- | ----------- |
| `conId` | `int32` | The Contract's IB's unique id. |
| `ratio` | `int32` | Select the relative number of contracts for the leg you are constructing. To help determine the ratio for a specific combination order |
| `action` | `string` | The side (buy or sell) of the leg: For individual accounts, only BUY and SELL are available. SSHORT is for institutions. |
| `exchange` | `string` | The destination exchange to which the order will be routed. |
| `openClose` | `int32` | Specifies whether an order is an open or closing order. For institutional customers to determine if this order is to open or close a position. 0 – Same as the parent security. This is the only option for retail customers. 1 – Open. This value is only valid for institutional customers. 2 – Close. This value is only valid for institutional customers. 3 – Unknown. |
| `shortSalesSlot` | `int32` | Used for IBExecution accounts to indicate if a leg is short. |
| `designatedLocation` | `string` | When ShortSaleSlot is 2, this field shall contain the designated location. |
| `exemptCode` | `int32` | Mark order as exempt from short sale uptick rule. Possible values: 0 – Does not apply the rule. -1 – Applies the short sale uptick rule. |
| `perLegPrice` | `double` | Limit price by leg. All legs must contain perLegPrice if used. |
