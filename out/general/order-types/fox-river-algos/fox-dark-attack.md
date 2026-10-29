[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/fox-dark-attack)

# Fox Dark Attack

**Algo Strategy:** [FoxDarkAttack](https://www.ibkrguides.com/traderworkstation/fox-dark-attack.htm)

**Effective Time:** string. Optional. Set the time to begin the order.\
Between market open and market close, and prior to Expire Time (if set).\
Defaults to immediately.

**Expire Time:** string. Optional. Time/date for the order to expire.\
Between market open and market close, and after Effective Time (if set).\
Defaults to market close if not set.

**Dark Minimum Fill Quantity:** integer. Optional. The minimum fill quantity in a dark pool.\
If set, must be greater than or equal to the lot size.

**Dark Attack:** string. Optional. Whether or not to favor dark pools.\
0-Do_not_favor_dark_pools, 1-Least_aggressive, 2,3,4,5,6,7,8,9, 10-Most_aggressive\
Will default to 0.

**Dollar Certain Limit:** integer. Optional. The maximum acceptable dollar amount of the trade, including Dollar Certain Commission. Used to trade by dollar amount.\
Must be a value greater than 0.

**Dollar Certain Commission:** integer. Optional. The commission cost on a cents-per-share basis, e.g. 0.1 = 1 cent\
Must be a value greater than 0.

**Dollar Certain Execution:** integer. Optional. Check to determine the order quantity by dollar value. Must be checked for other "Dollar Certain" fields to be valid.\
If set to 1, Dollar Certain Limit at least must be defined.

#### Python

```python
order.algoStrategy = "FoxDarkAttack"
order.algoParams = [
    TagValue("EffectiveTime", "15:00:00 US/Eastern"),
    TagValue("ExpireTime", "15:45:00 US/Eastern"),
    TagValue("DarkMinFillQty", 150),
    TagValue("DarkAttack", "10-Most_aggressive"), 
    TagValue("DollarCertainLimit", 260),
    TagValue("DollarCertainCommission", 10),
    TagValue("DollarCertainExecution", 1)
]
```

#### Abap

```abap
"strategy": "FoxDarkAttack",
"strategyParameters": {
    "EffectiveTime": "15:00:00 US/Eastern",
    "ExpireTime": "15:45:00 US/Eastern",
    "DarkMinFillQty": 150,
    "DarkAttack": "10-Most_aggressive",
    "DollarCertainLimit": 260,
    "DollarCertainCommission": 10,
    "DollarCertainExecution": 1
}
```
