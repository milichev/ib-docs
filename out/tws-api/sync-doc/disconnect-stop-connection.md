[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/disconnect-stop-connection)

# disconnect_and_stop()

Once a connection is no longer needed, developers should disconnect the session. This will terminate all ongoing requests through the assigned `client_id` and free the `client_id` for future use. Connections through any other client ID or port will be unaffected.

## Response Object

`disconnect_and_stop()` does not return a value. `None` is automatically returned if the function result is referenced.

## Example Implementation

```python
from ibapi.sync_wrapper import TWSSyncWrapper
app = TWSSyncWrapper(timeout=30)

# Connect to TWS
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=0):
    # If the connection fails and False is returned, notify the user and gracefully exit the application.
    print("Failed to connect to TWS")
    exit(1)
else:
    # If the connection succeeded, notify the user.
    print("Connected to TWS")

app.disconnect_and_stop()
```
