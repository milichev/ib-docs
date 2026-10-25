[source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/order-id)

# OrderId

The Order ID is a client-managed identifier used to track, modify, and cancel orders. As a result, it must be strictly increasing.

The [`nextValidId()`](../next-valid-id.md) callback function receives the next valid order ID. This function is called once upon initial connection.

The [`reqIds()`](../next-valid-id/request-next-valid-id.md) function can be used to request the next valid ID, which is returned via the [`nextValidId()`](../next-valid-id.md) callback function.

```python title={"Python"}
class TestApp(EClient, EWrapper):
    def __init__(self):
        EClient.__init__(self, self)
        self.nextOrderId = None

    def nextValidId(self, orderId: OrderId):
        self.nextOrderId = orderId

```
