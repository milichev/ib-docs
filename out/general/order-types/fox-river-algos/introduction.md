[source](https://www.interactivebrokers.com/docs/general/order-types/fox-river-algos/introduction)

# Introduction

[Fox River algos](https://www.ibkrguides.com/traderworkstation/fox-river-top.htm) are exclusively available in Live Accounts.\
The use of Fox River Algos incur [additional commissions](https://interactivebrokers.com/en/accounts/fees/FOXRIVERALGOstkfee.php) compared to standard orders from Interactive Brokers.

Fox River Algos must always be directed to the FOXRIVER exchange.

Like all algos, the \[Basic Order Parameters] are still required. The details here would assume a Limit Order is being placed in addition to the Fox River algo strategy.

```
contract = Contract()
contract.conId = 265598 # Contract ID for AAPL Stock
contract.exchange = "FOXRIVER"

order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.lmtPrice = 265
order.totalQuantity = 100
order.tif = "DAY"
order.transmit = False # This order will not be submitted. Remove or modify to True to submit the order.
```
