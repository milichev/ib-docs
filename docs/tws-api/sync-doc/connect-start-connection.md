[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/connect-start-connection)

# connect_and_start()

After creating the class object reference with sync wrapper, the `connect_and_start()` function initializes the connection with the Trader Workstation on the given `host` and `port` values. Identical to EClient's `connect()` function, `connect_and_start()` supports arguments for `host`, `port`, and `client_id`.

## Request Arguments

**`host`** `string` — required

Determine the connecting host IP for the API to connect to. Connections on the same computer should use `"localhost"` or `"127.0.0.1"`.

---

**`port`** `int32` — required

Determine the connecting port number configured in the Global Configuration in the "Socket Port" field. Defaults: \{TWS Live: `7496`; TWS Paper: `7497`; IBG Live: `4001`; IBG Paper: `4002`}

---

**`client_id`** `int32` — required

Determine the connecting client ID. TWS supports up to 32 simultaneous API connections. Users should connect with `0` for [optimal order management functionality](../doc/order-management/client-id-0-and-the-master-client-id.md).

---

## Response Object

While it is not necessary to handle the response from `connect_and_start()`, the function will return the result of `EClient.isConnected()` for connection validation.

The function call will return a single boolean value, `True` or `False`, in reference to the connection status at the time of reference.

Developers may look to implement code such as this that will gracefully handle the connection procedure should it fail to connect rather than proceeding with the rest of the code implementation.

## Example Implementation
