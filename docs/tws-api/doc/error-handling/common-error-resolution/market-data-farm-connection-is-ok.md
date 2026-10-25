[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/common-error-resolution/market-data-farm-connection-is-ok)

# Market data farm connection is OK

Error code 2104, 2106, and 2158 all generally state that farm connection is OK. What this means is that the API has successfully connected to Trader Workstation or the IB Gateway, and that connection is able to reach Interactive Brokers servers. There is no issue with the connection, and it is a sign you connected successfully.

While using IB Gateway, users may encounter the error, "A historical data farm connection has become inactive but should be available upon demand." This means that while no historical data requests are being sent, the connection is halted. Once a historical data request is sent over the API connection, the market data farm will reconnect and supply market data.
