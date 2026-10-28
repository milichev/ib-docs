[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/order-placement)

# Order Placement

For advisors to place orders to their [allocation groups](replace-fa-allocations.md) users would simply declare their allocation group name in the order object. This would be done with the Order's faGroup field. The example to the right references a standard market order placed to our allocation group, MyTestProfile.

#### Java

```java
Order order = new Order();
order.action("BUY");
order.orderType("MKT");
order.totalQuantity(50);
order.faGroup("MyTestProfile");
```
