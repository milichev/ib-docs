[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/order-id)

# OrderId

The Order ID is a client-managed identifier used to track, modify, and cancel orders. As a result, it must be strictly increasing.

The [`nextValidId()`](/docs/tws-api/doc/next-valid-id) callback function receives the next valid order ID. This function is called once upon initial connection.

The [`reqIds()`](/docs/tws-api/doc/next-valid-id#request-next-valid-id) function can be used to request the next valid ID, which is returned via the [`nextValidId()`](/docs/tws-api/doc/next-valid-id#receive-next-valid-id) callback function.

```python title={"Python"}
class TestApp(EClient, EWrapper):
    def __init__(self):
        EClient.__init__(self, self)
        self.nextOrderId = None

    def nextValidId(self, orderId: OrderId):
        self.nextOrderId = orderId

```
