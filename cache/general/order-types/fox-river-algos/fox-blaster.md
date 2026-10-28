> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Fox Blaster

**Algo Strategy:** [FoxBlaster](https://www.ibkrguides.com/traderworkstation/fox-blaster.htm)

**Effective Time:** string. Optional. Set the time to begin the order.\
Between market open and market close, and prior to Expire Time (if set).\
Defaults to immediately.

**Expire Time:** string. Optional. Time/date for the order to expire.\
Between market open and market close, and after Effective Time (if set).\
Defaults to market close if not set.

**Aggressiveness:** string.Optional. How aggressive to fill.\
Low, Medium, High

**Dark Attack:** string. Optional. Whether or not to favor dark pools.\
0-Do_not_favor_dark_pools, 1-Least_aggressive, 2,3,4,5,6,7,8,9, 10-Most_aggressive\
Will default to 0.

**I Would Dark:** integer. Optional. Check to allow the order to complete in a dark venue at any time. Very aggressive if set.\
If unchecked, pacing will not be affected by fills from dark venues.

**Dollar Certain Limit:** integer. Optional. The maximum acceptable dollar amount of the trade, including Dollar Certain Commission. Used to trade by dollar amount.\
Must be a value greater than 0.

**Dollar Certain Commission:** integer. Optional. The commission cost on a cents-per-share basis, e.g. 0.1 = 1 cent\
Must be a value greater than 0.

**Dollar Certain Execution:** integer. Optional. Check to determine the order quantity by dollar value. Must be checked for other "Dollar Certain" fields to be valid.\
If set to 1, Dollar Certain Limit at least must be defined.

#### Python

```python
order.algoStrategy = "FoxBlaster"
order.algoParams = [
    TagValue("EffectiveTime", "15:00:00 US/Eastern"),
    TagValue("ExpireTime", "15:45:00 US/Eastern"),
    TagValue("Aggressiveness", "Medium"),
    TagValue("DollarCertainLimit", 260),
    TagValue("DollarCertainCommission", 10),
    TagValue("DollarCertainExecution", 1)
]
```

#### Abap

```abap
"strategy": "FoxBlaster",
        "strategyParameters": {
            "EffectiveTime": "15:00:00 US/Eastern",
            "ExpireTime": "15:45:00 US/Eastern",
            "Aggressiveness": "Medium",
            "DollarCertainLimit": 260,
            "DollarCertainCommission": 10,
            "DollarCertainExecution": 1
        }
```