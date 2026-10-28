[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/cancelling-an-order/introduction)

# Introduction

An order can be cancelled from the API with the functions EClient.cancelOrder and EClient::reqGlobalCancel.

EClient.cancelOrder can only be used to cancel an order that was placed originally by a client with the same client ID (or from TWS for client ID 0).

EClient.reqGlobalCancel will cancel all open orders, regardless of how they were originally placed.
