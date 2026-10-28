[source](https://www.interactivebrokers.com/docs/tws-api/ref/order-conditions/margin-condition)

# Margin Condition

Used with conditional orders to cancel or submit order based on price of an instrument.

| Field     | Type      | Description                                                                                |
| --------- | --------- | ------------------------------------------------------------------------------------------ |
| `Percent` | `integer` | The margin cushion percentage available.                                                   |
| `IsMore`  | `boolean` | Determine if the MarginCondition should trigger while more or less than the percent value. |
