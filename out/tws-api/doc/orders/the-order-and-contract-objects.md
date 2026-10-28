[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/the-order-and-contract-objects)

# The Order and Contract Objects

The order object is an essential piece of the TWS API which is used to both place and manage orders. This is primarily built with an ever increasing range of attributes used to create the best order possible. With that being said, the value to the right represents the required fields in order to place or reference any order. Keep in mind that there are several other attributes that can and should be referenced.

#### Order()

**action:** String. Determines whether the contract should be a BUY or SELL.

**auxPrice:** double. Used to determine the stop price for STP, STP LMT, and TRAIL orders.

**lmtPrice:** double. Used to determine the limit price for LMT, STP LMT, and TRAIL orders.

**orderType:** String. Specify the type of order to place. For example, MKT, LMT, STP.

**tif:** String. Time in force for the order. Default tif is DAY.

**totalQuantity:** decimal. Total size of the order.

Given additional structures for orders are ever evolving, it is recommended to review the relevant order class in your programming language for a comprehensive review of what fields are available.

Order Class Reference

Another essential piece is Contract object. The contract object is used to describe a financial instrument to TWS. When passed to placeOrder() method, TWS attempts to match the provided fields to a single unique instrument in it's database and routes the order to the exchange defined in 'exchange' field.

Futures and options require additional fields like lastTradeDateOrContractMonth, strike, right and multiplier to be added for successfull contract identification.

#### Contract()

**symbol:** String. Ticker symbol of the instrument.

**secType:** String. Security type.

**exchange:** String. Routing exchange.

**currency:** String. Currency denomination.

**primaryExchange:** String. Listing exchange.

Review the relevant order class in your programming language for a comprehensive review of what fields are available.

Contract Class Reference
