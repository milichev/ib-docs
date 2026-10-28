[source](https://www.interactivebrokers.com/docs/excel/dde/notes-limitations/unset-value-responses)

# Unset Value Responses

In many cases, customers might see a response for a given market data column which displays "N/A", "0", "-1" in some of their cells. This can be occur for a few different reasons.

1. While you may have part of the required market data subscription on the instrument, you may not have all of it. This is particularly common for derivatives traders who may not have a market data subscription for the given underlying.
2. You might also encounter this by requesting too many symbols simultaneously. This is discussed further in the [Outgoing Message Rate Limitations](../../rtd/notes-limitations/outgoing-message-rate-limitation.md) section
3. Similar to (2) above, every client has a maximum number of market data lines shared between TWS and their API. By default, all customer's have a maximum of 100 market data lines, allowing for 100 unique contracts to be requested at any one time. If you surpass this limit, you may find that some fields can not be returned.
4. This may also happen in the event your machine, in tandem with Excel, simply can not handle the volume of data requested. While the machine limitations are unique to each user, you may explore and modify the refresh rate [as described in our documentation](../../rtd/refresh-rate.md)
