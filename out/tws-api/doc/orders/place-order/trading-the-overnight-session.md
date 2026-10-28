[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/trading-the-overnight-session)

# Trading The Overnight Session

In the event a user would like to designate a trade to take place during the Overnight trading hours, the Order object must set 'includeOvernight' set to True and optionally set the 'exchange' field of Contract object to OVERNIGHT.

#### Routing exclusively to the Overnight market

Users that would like to route orders to [Overnight](https://www.interactivebrokers.com/en/trading/ordertypes.php?m=overnightTradingModal) without trading during the regular session must designate the `exchange` value of a Contract object as `"OVERNIGHT"`.

```
contract = Contract()
contract.exchange = "OVERNIGHT"
```

#### Routing as Overnight+DAY

Users that would like to route orders to [Overnight+DAY](https://www.interactivebrokers.com/en/trading/ordertypes.php?m=overnightSmartModal) to trade during the day and the overnight session must set the Order Object's includeOvernight value as True.

```
contract = Contract()
contract.exchange = "SMART"

order = Order()
order.includeOvernight = True
```

> **Warning**
>
> Orders routed to the `OVERNIGHT` exchange with `order.includeOvernight = True` will behave as `"OVERNIGHT+DAY"`.
