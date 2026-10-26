[source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/fox-spotlight)

# Fox Spotlight

**Algo Strategy:** [FoxSpotlight](https://www.ibkrguides.com/traderworkstation/fox-spotlight.htm)

**Effective Time:** string. Optional. Set the time to begin the order.\
Between market open and market close, and prior to Expire Time (if set).\
Defaults to immediately.

**Expire Time:** string. Optional. Time/date for the order to expire.\
Between market open and market close, and after Effective Time (if set).\
Defaults to market close if not set.

**Dollar Certain Limit:** integer. Optional. The maximum acceptable dollar amount of the trade, including Dollar Certain Commission. Used to trade by dollar amount.\
Must be a value greater than 0.

**Dollar Certain Commission:** integer. Optional. The commission cost on a cents-per-share basis, e.g. 0.1 = 1 cent\
Must be a value greater than 0.

**Dollar Certain Execution:** integer. Optional. Check to determine the order quantity by dollar value. Must be checked for other "Dollar Certain" fields to be valid.\
If set to 1, Dollar Certain Limit at least must be defined.

#### Abap

```abap
"strategy": "FoxSpotlight",
"strategyParameters": {
    "EffectiveTime": "15:00:00 US/Eastern",
    "ExpireTime": "15:45:00 US/Eastern",
    "DollarCertainLimit": 260,
    "DollarCertainCommission": 10,
    "DollarCertainExecution": 1
}
```
