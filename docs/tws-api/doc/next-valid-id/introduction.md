[source](https://www.interactivebrokers.com/docs/tws-api/doc/next-valid-id/introduction)

# Introduction

The nextValidId event provides the next valid identifier needed to place an order. It is necessary to use an order ID with new orders which is greater than all previous order IDs used to place an order. While requests such as EClient.reqMktData will not increment the minimum request ID value, more than one market data request cannot use the same request ID at the same time.

The nextValidId value may be queried on each request. However, it is often recommended to make a request once at the beginning of the session, and then locally increment the value for each request.
