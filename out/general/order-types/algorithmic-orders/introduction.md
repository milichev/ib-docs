[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/introduction)

# Introduction

Order types and algos may help limit risk, speed execution, provide price improvement, allow privacy, time the market and simplify the trading process through advanced trading functions.

**Important:** IB ALGO orders are only supported during regular trading hours. Orders submitted with the outsideRth field set to "true" will be rejected.

This page is intended to provide assistance with creating algo orders in the API. For more information on what IB Algorithms can do, please visit our [IBKR Order Types and Algos](https://www.interactivebrokers.com/en/trading/ordertypes.php) page.

In nearly all cases,  Algo orders are additional parameters that can be used in addition to a standing order.

Because of this structure, we will be using our Limit Order sample as a baseline. The algos documented here will be attached to the same "order" variable as used here.

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(limitPrice);
order.tif(TimeInForce.DAY);
```
