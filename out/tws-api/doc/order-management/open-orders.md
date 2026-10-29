[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/open-orders)

# Open Orders

## Introduction

As long as an order is active, it is possible to retrieve it using the TWS API. Orders submitted via the TWS API will always be bound to the client application (i.e. client Id) they were submitted from meaning only the submitting client will be able to modify the placed order. Three different methods are provided to allow for maximum flexibility. Active orders will be returned via `EWrapper.openOrder` and `EWrapper.orderStatus` methods.

---

## Request All Open Orders

`EClient.reqAllOpenOrders()`

Requests all current open orders in associated accounts at the current moment. The existing orders will be received via the `openOrder` and `orderStatus` events. Open orders are returned once; this function does not initiate a subscription.

#### Python

```python
self.reqAllOpenOrders()
```

---

## Request API Client's Orders

`EClient.reqOpenOrders()`

The `EClient.reqOpenOrders` method allows you to obtain all active orders submitted by the client application connected with the exact same client Id with which the order was sent to the TWS. If client 0 invokes `reqOpenOrders`, it will cause currently open orders placed from TWS manually to be 'bound', i.e. assigned an order ID so that they can be modified or cancelled by the API client 0.

When an order is bound by API client 0 there will be callback to `EWrapper.orderBound`. This indicates the mapping between API order ID and permID. In the API settings in Global Configuration, is a setting checked by default "Use negative numbers to bind automatic orders" which will specify how manual TWS orders are assigned an API order ID.

Because binding the order will change the order ID, this function will be rejected when used with the API Read-Only Mode enabled.

Requests all open orders places by this specific API client (identified by the API client id). For client ID 0, this will bind previous manual TWS orders.

#### Python

```python
self.reqOpenOrders()
```

---

## Request Manually Submitted TWS Orders

`EClient.reqAutoOpenOrders(autoBind)`

Requests status updates about future orders placed from TWS. Can only be used with client ID 0.

> **Warning**
>
> Only those applications connecting with client Id 0 will be able to take over manually submitted orders.

**`autoBind`** `bool`

If set to true, the newly created orders will be assigned an API order ID and implicitly associated with this client. If set to false, future orders will not be.

---

\

#### Python

```python
self.reqAutoOpenOrders(True)
```

---

## Receive Open Orders

`EWrapper.openOrder(orderId, contract, order, orderState)`

Bound orders for the current client ID automatically update in real-time. Also can be called explicitly from [EClient.reqOpenOrders](open-orders.md#request-api-clients-orders)

**`orderId`** `integer`

The order's unique id

---

\<ParamField path="contract" type="Contract"
The order's Contract.
\</ParamField>

\<ParamField path="order" type="Order"
The currently active Order.
\</ParamField>

**`orderState`** `OrderState`

The order's OrderState

---

\

#### Python

```python
def openOrder(self, orderId: OrderId, contract: Contract, order: Order, orderState: OrderState):
    print(orderId, contract, order, orderState)
```

## End of Open Orders

`EWrapper.openOrderEnd()`

Notifies the end of the open orders' reception. Only returned when explicitly requesting open orders.

#### Python

```python
def openOrderEnd(self):
	print("OpenOrderEnd")
```

## Order Bound Notification

`EWrapper.orderBound(orderId, apiClientId, apiOrderId)`

Response to API bind order control message.

**`orderId`** `long`

IBKR permId.

---

**`apiClientId`** `integer`

API client id.

---

**`apiOrderId`** `integer`

API order id.

---

\

#### Python

```python
def orderBound(self, orderId: int, apiClientId: int, apiOrderId: int):
	print("OrderBound.", "OrderId:", intMaxString(orderId), "ApiClientId:", intMaxString(apiClientId), "ApiOrderId:", intMaxString(apiOrderId))
```
