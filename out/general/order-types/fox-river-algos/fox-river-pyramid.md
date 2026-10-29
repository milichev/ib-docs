[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/fox-river-pyramid)

# Fox River Pyramid

**Algo Strategy:** [FoxPyramid](https://www.ibkrguides.com/traderworkstation/fox-pyramid.htm)

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

**Aggressiveness:** string.Optional. How aggressive to fill.\
Low, Medium, High

**Dark Minimum Fill Quantity:** integer. Optional. The minimum fill quantity in a dark pool.\
If set, must be greater than or equal to the lot size.

**Dark Attack:** string. Optional. Whether or not to favor dark pools.\
0-Do_not_favor_dark_pools, 1-Least_aggressive, 2,3,4,5,6,7,8,9, 10-Most_aggressive\
Will default to 0.

**I Would Dark:** integer. Optional. Set as 1 to allow the order to complete in a dark venue at any time. Very aggressive if set.\
If set to 0, pacing will not be affected by fills from dark venues.

**Price Level 1:** integer. Optional. Define a price level at which POV Rate 1 would be triggered.\
Must be a value greater than 0.\
If a value is entered POV Rate 1 and I Would Dark 1 (if set) are in effect.

**POV Rate 1:** integer. Required if Price Level 1 is populated. This is the participation rate of volume at which to execute when Price Level 1 is active.\
0 > rate >= 1, e.g. 0.05 is 5%\
This POV Rate is used when Price Level 1 (if set) has been triggered.

**I Would Dark 1:** integer. Optional. Check to allow the order to complete in a dark venue at any time. Very aggressive if set.

**Price Level 2:** integer. Optional. Define a price level at which POV Rate 2 would be triggered.\
Must be a value greater than 0.\
If a value is entered POV Rate 2 and I Would Dark 2 (if set) are in effect.

**POV Rate 2:** integer. Required if Price Level 2 is populated. This is the participation rate of volume at which to execute when Price Level 1 is active.\
0 > rate >= 1, e.g. 0.05 is 5%\
This POV Rate is used when Price Level 2 (if set) has been triggered.

**I Would Dark 2:** integer. Optional. Check to allow the order to complete in a dark venue at any time. Very aggressive if set.

**Price Level 3:** integer. Optional. Define a price level at which POV Rate 3 and I Would Dark 3 would be triggered.\
Must be a value greater than 0.\
If a value is entered POV Rate 3 and I Would Dark 3 (if set) are in effect.

**POV Rate 3:** integer. Required if Price Level 3 is populated. This is the participation rate of volume at which to execute when Price Level 1 is active.\
0 > rate >= 1, e.g. 0.05 is 5%\
This POV Rate is used when Price Level 3 (if set) has been triggered.

**I Would Dark 3:** integer. Optional. Check to allow the order to complete in a dark venue at any time. Very aggressive if set.

**Pyramid Strategy:** integer. Required. Select the strategy to which price levels of the pyramid will be applied.\
Supported Values: [Alpha](https://www.ibkrguides.com/traderworkstation/fox-dark-alpha.htm), [Dark Attack](https://www.ibkrguides.com/traderworkstation/fox-dark-attack.htm), [POV](https://www.ibkrguides.com/traderworkstation/fox-pov.htm), [TWAP](https://www.ibkrguides.com/traderworkstation/fox-fox-twap.htm), [VWAP](https://www.ibkrguides.com/traderworkstation/fox-fox-vwap.htm)

**Dollar Certain Limit:** integer. Optional. The maximum acceptable dollar amount of the trade, including Dollar Certain Commission. Used to trade by dollar amount. >0

**Dollar Certain Commission:** integer. Optional. The commission cost on a cents-per-share basis, e.g. 0.1 = 1 cent >0

**Dollar Certain Execution:** integer. Optional. Check to determine the order quantity by dollar value. Must be checked for other "Dollar Certain" fields to be valid.\
If set to 1, Dollar Certain Limit at least must be defined.

#### Python

```python
order.algoStrategy = "FoxPyramid"
order.algoParams = [
    TagValue("EffectiveTime", "15:00:00 US/Eastern"),
    TagValue("ExpireTime", "15:45:00 US/Eastern"),
    TagValue("PartRateLimit", 0.05),
    TagValue("EndTimeBehavior", "Hard_EndTime"),
    TagValue("PartRateTarget", 0.075),
    TagValue("Aggressiveness", "Medium"),
    TagValue("DarkMinFillQty", 150),
    TagValue("DarkAttack", "10-Most_aggressive"),
    TagValue("IWouldDark", 0),

    TagValue("PriceLevel1", 304),
    TagValue("POVRate1", 0.04),
    TagValue("IWouldDark1", 0),

    TagValue("PriceLevel2", 304),
    TagValue("POVRate2", 0.04),
    TagValue("IWouldDark2", 0),

    TagValue("PriceLevel3", 304),
    TagValue("POVRate3", 0.04),
    TagValue("IWouldDark3", 0),

    TagValue("PyramidStrategy", "POV"),
    TagValue("DollarCertainLimit", 260),
    TagValue("DollarCertainCommission", 10),
    TagValue("DollarCertainExecution", 1)
]
```

#### Abap

```abap
"strategy": "FoxPyramid",
"strategyParameters": {
    "PartRateLimit": 0.05,
    "EndTimeBehavior": "Hard_EndTime",
    "PartRateTarget": 0.075,
    "Aggressiveness": "Medium",
    "DarkMinFillQty": 150,
    "DarkAttack": "10-Most_aggressive",
    "IWouldDark": 0,
    "PriceLevel1": 304,
    "POVRate1": 0.04,
    "IWouldDark1": 0,
    "PriceLevel2": 304,
    "POVRate2": 0.04,
    "IWouldDark2": 0,
    "PriceLevel3": 304,
    "POVRate3": 0.04,
    "IWouldDark3": 0,
    "PyramidStrategy": "POV",
    "DollarCertainLimit": 260,
    "DollarCertainCommission": 10,
    "DollarCertainExecution": 1
}
```
