[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/event-contracts/order-submission)

# Order Submission

Submission of orders for Event Contracts via the Web API functions like [orders for any other instrument](../orders/place-order.md).

However, it is important to note the differing mechanics between CME Group products and ForecastEx instruments:

* CME Group instruments can be bought and sold and function as normal futures options.
* ForecastEx instruments cannot be sold, only bought. To exit or reduce a position, one must buy the opposing Event Contract, and IB will net the opposing positions together automatically.

In both cases, no short selling is permitted.

## ForecastEx

In the context of ForecastEx trading, the other right must be bought to open and close the position. In this scenario, we are entering the position by buying the YES side of the January contract. This is demonstrated in the first payload.

However, if we wanted to close the position after buying the YES, we would use the second payload to buy the NO side.

## CME Group

In the case of CME listed contracts, we can simply change our `side` value from BUY to SELL to close our position.
