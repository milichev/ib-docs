[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/requesting-currently-active-orders/api-clients-orders)

# API client's orders

The IBApi.EClient.reqOpenOrders method allows to obtain all active orders submitted by the client application connected with the exact same client Id with which the order was sent to the TWS. If client 0 invokes reqOpenOrders, it will cause currently open orders placed from TWS manually to be 'bound', i.e. assigned an order ID so that they can be modified or cancelled by the API client 0.

When an order is bound by API client 0 there will be callback to IBApi::EWrapper::orderBound. This indicates the mapping between API order ID and permID. The [IBApi.EWrapper.orderBound](#order-bound-notification) callback in response to newly bound orders that indicates the mapping between the permID (unique account-wide) and API Order ID (specific to an API client). In the API settings in Global Configuration, is a setting checked by default "Use negative numbers to bind automatic orders" which will specify how manual TWS orders are assigned an API order ID.

Because binding the order will change the order ID, this function will be rejected when used with the API Read-Only Mode enabled. You can find the steps for disabling read-only mode at in [TWS Settings](/docs/tws-api/doc/tws-settings/tws-configuration-for-api-use/introduction).

#### EClient.reqOpenOrders ()

Requests all open orders places by this specific API client (identified by the API client id). For client ID 0, this will bind previous manual TWS orders.

#### Java

```java
client.reqOpenOrders();
```
