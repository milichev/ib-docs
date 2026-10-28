[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/current-time)

# get_current_time()

Whenever a user would need to verify the current time used within Trader Workstation or to verify the connection with the application, users may call the `get_current_time()` function.

## Request Arguments

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 1 second.

---

```python
app.get_current_time()
```

## Response Object

`get_current_time()` will return the current timestamp as an integer representing an epoch timestamp.

```python
1760478515
```
