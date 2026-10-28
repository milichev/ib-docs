[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/discretionary)

# Discretionary

An Discretionary order is a limit order submitted with a hidden, specified 'discretionary' amount off the limit price which may be used to increase the price range over which the limit order is eligible to execute. The market sees only the limit price.

Products: STK

More on [Discretionary Orders](https://www.interactivebrokers.com/en/index.php?f=585)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=dis)

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(price);
order.discretionaryAmt(discretionaryAmt);
```
