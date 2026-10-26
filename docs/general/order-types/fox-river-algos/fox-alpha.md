[source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/fox-alpha)

# Fox Alpha

**Algo Strategy:** [FoxAlpha](https://www.ibkrguides.com/traderworkstation/fox-dark-alpha.htm)

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

**Participation Rate Target:** integer. Optional. The percentage of traded volume that is the target participation rate.\
0 > rate >= 1, e.g. 0.05 is 5%

**Elasticity:** string. Optional. Elasticity describes the pacing of the Fox trading signal. This value tells how much leeway the model has to be off the expected fill rate.\
Low, Medium, High.\
Set the High by default to provide the most flexibility and best performance.

**Aggressiveness:** string.Optional. How aggressive to fill.\
Low, Medium, High

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

#### Abap

```abap
"strategy": "FoxAlpha",
"strategyParameters": {
    "EffectiveTime": "15:00:00 US/Eastern",
    "ExpireTime": "15:45:00 US/Eastern",
    "PartRateLimit": 0.05,
    "EndTimeBehavior": "Hard_EndTime",
    "PartRateTarget": 0.075,
    "Elasticity": "Medium",
    "Aggressiveness": "Medium",
    "DarkAttack": "10-Most_aggressive",
    "IWouldDark": 0,
    "SweepPrice": 304,
    "DollarCertainLimit": 260,
    "DollarCertainCommission": 10,
    "DollarCertainExecution": 1
}
```
