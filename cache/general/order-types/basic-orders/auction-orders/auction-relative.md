> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Auction Relative

Stock-Option contracts directly routed to BOX will support a Price Improvement Auction Orders compared to standard SMART routing. This order will necessitate a standard [Relative / Pegged-To-Primary order](/docs/general/order-types/peg-orders/pegged-to-primary-relative) with the contract being directly routed to "BOX" rather than "SMART" or another exchange.

Products: OPT (BOX only)

More on [price improvement orders](https://www.interactivebrokers.com/en/index.php?f=614)

#### Python

```python
contract.exchange = "BOX"
order = Order()
order.action = action
order.orderType = "REL"
order.totalQuantity = quantity
order.auxPrice = offset
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("REL");
order.totalQuantity(quantity);
order.auxPrice(offset);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "REL";
order.totalQuantity = quantity;
order.auxPrice = offset;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "REL";
order.TotalQuantity = quantity;
order.AuxPrice = offset;
```

#### Generic

```generic
Dim order As Order = New Order
order.Action = action
order.OrderType = "REL"
order.TotalQuantity = quantity
order.AuxPrice = offset
```