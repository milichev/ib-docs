[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/pre-borrow-shares-for-shorting)

# Pre-Borrow Shares For Shorting

The TWS API supports the ability to pre-borrow shares for shorting.

* See \[here]\(About Pre-Borrows) for Pre-Borrow Eligibility
* See [here](https://www.interactivebrokers.com/en/pricing/other-fees.php#:~:text=Stock%20Loan-,Pre%2DBorrows,-Universal) for pricing details

To place a Pre-Borrow order, users must:

* Assign the contract's exchange to "PREBORROW"
* Assign the contract's security type to "SBL"
* Assign the order's orderType to "MKT"

#### Generic

```generic
contract = Contract()
contract.symbol = symbol
contract.secType = "SBL"
contract.exchange = "PREBORROW"
contract.currency = "USD"

order = Order()
order.action = "BUY"
order.orderType = "MKT"
order.totalQuantity = quantity
```

#### Java

```java
Contract contract = new Contract();
contract.symbol(symbol);
contract.secType("SBL");
contract.currency("USD");
contract.exchange("PREBORROW");

Order order = new Order();
order.orderType("MKT");
order.totalQuantity(quantity);
```

#### C++

```cpp
Contract contract;
contract.symbol = symbol;
contract.secType = "SBL";
contract.currency = "USD";
contract.exchange = "PREBORROW";

Order order;
order.orderType = "MKT";
order.totalQuantity = quantity;
```

#### C#

```csharp
Contract contract = new Contract();
contract.Symbol = symbol;
contract.SecType = "SBL";
contract.Currency = "USD";
contract.Exchange = "PREBORROW";

Order order = new Order();
order.Action = action;
order.OrderType = "MKT";
order.TotalQuantity = quantity;
```
