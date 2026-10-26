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
