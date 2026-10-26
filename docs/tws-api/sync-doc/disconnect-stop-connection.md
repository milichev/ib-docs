[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/disconnect-stop-connection)

# disconnect_and_stop()

Once a connection is no longer needed, developers should disconnect the session. This will terminate all ongoing requests through the assigned `client_id` and free the `client_id` for future use. Connections through any other client ID or port will be unaffected.

## Response Object

`disconnect_and_stop()` does not return a value. `None` is automatically returned if the function result is referenced.

## Example Implementation
