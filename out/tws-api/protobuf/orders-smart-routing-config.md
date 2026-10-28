[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/orders-smart-routing-config)

## OrdersSmartRoutingConfig

| Field | Type | Description |
| ----- | ---- | ----------- |
| `seekPriceImprovement` | `bool` | Indicate an order should look for better pricing values beyond what was submitted. |
| `preOpenReroute` | `bool` | For orders submitted before the open, true ensures your orders are routed prior to the open. This directive only applies to stocks listed on a major exchange that are routed using IB SmartRouting. |
| `doNotRouteToDarkPools` | `bool` | Declare that orders should not go through Interactive Brokers' Dark Pool. |
| `defaultAlgorithm` | `string` | Default routing algorith when submitting orders as Smart. Supports "SMART", "SMART MaxRebate", "SMART PreferRebate", "SMART PreferFill", "SMART MaxFill", "SMART Primary", "SMART VRebate", "SMART VLowFee", "SMART DarkOnly" |
