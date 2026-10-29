[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/fox-twap)

# Fox TWAP

**Algo Strategy:** [FoxTWAP](https://www.ibkrguides.com/traderworkstation/fox-fox-twap.htm)

**Effective Time:** string. Optional. Set the time to begin the order.\
Between market open and market close, and prior to Expire Time (if set).\
Defaults to immediately.

**Expire Time:** string. Optional. Time/date for the order to expire.\
Between market open and market close, and after Effective Time (if set).\
Defaults to market close if not set.

**Participation Rate Limit:** integer. Optional. The participation of volume rate limit, as a percentage.\
Digit that will be used as a percentage\
0 \< rate \<= 1.
Example: 0.05 equals 5%
**End Time Behavior:** string. Optional. Tells how to treat an order that expires.\
Cancel_balance – cancels any remaining balance\
Hard_EndTime – Complete the order with give up

**Elasticity:** string. Optional. Elasticity describes the pacing of the Fox trading signal. This value tells how much leeway the model has to be off the expected fill rate.\
Low, Medium, High.\
Set the High by default to provide the most flexibility and best performance.

**Dark Attack:** string. Optional. Whether or not to favor dark pools.\
0-Do_not_favor_dark_pools, 1-Least_aggressive, 2,3,4,5,6,7,8,9, 10-Most_aggressive\
Will default to 0.

**I Would Dark:** integer. Optional. Set as 1 to allow the order to complete in a dark venue at any time. Very aggressive if set.\
If set to 0, pacing will not be affected by fills from dark venues.

**Sweep Price:** integer. Optional. Set a price at which you would be willing to sweep all available equity.\
Must be a value greater than 0.

**Dollar Certain Limit:** integer. Optional. The maximum acceptable dollar amount of the trade, including Dollar Certain Commission. Used to trade by dollar amount.\
Must be a value greater than 0.

**Dollar Certain Commission:** integer. Optional. The commission cost on a cents-per-share basis, e.g. 0.1 = 1 cent\
Must be a value greater than 0.

**Dollar Certain Execution:** integer. Optional. Check to determine the order quantity by dollar value. Must be checked for other "Dollar Certain" fields to be valid.\
If set to 1, Dollar Certain Limit at least must be defined.

#### Python

```python
order.algoStrategy = "FoxTWAP"
order.algoParams = [
    TagValue("EffectiveTime", "15:00:00 US/Eastern"),
    TagValue("ExpireTime", "15:45:00 US/Eastern"),
    TagValue("PartRateLimit", 0.05),
    TagValue("EndTimeBehavior", "Hard_EndTime"), # Hard_EndTime, Cancel_balance, or an empty string.
    TagValue("Elasticity", "Medium"), # Low, Medium, High
    TagValue("DarkAttack", "10-Most_aggressive"), # 0-Do_not_favor_dark_pools, 1-Least_aggressive, 2,3,4,5,6,7,8,9, 10-Most_aggressive
    TagValue("IWouldDark", 0),
    TagValue("SweepPrice", 304),
    TagValue("DollarCertainLimit", 260),
    TagValue("DollarCertainCommission", 10),
    TagValue("DollarCertainExecution", 1)
]
```

#### Abap

```abap
"strategy": "FoxTWAP",
"strategyParameters": {
    "EffectiveTime": "15:00:00 US/Eastern",
    "ExpireTime": "15:45:00 US/Eastern",
    "PartRateLimit": 0.05,
    "EndTimeBehavior": "Hard_EndTime",
    "Elasticity": "Medium",
    "DarkAttack": "10-Most_aggressive",
    "IWouldDark": 0,
    "SweepPrice": 304,
    "DollarCertainLimit": 260,
    "DollarCertainCommission": 10,
    "DollarCertainExecution": 1
}
```
