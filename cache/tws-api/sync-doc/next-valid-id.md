> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# get\_next\_valid\_id()

The `get_next_valid_id()` request will provide the next unused order identifier by the Trader Workstation.

An `orderId` should only ever be reused when attempting to modify an existing open order. Attempts to submit a new order using the same `orderId` as a previously used order submission will result in an error.

## Request Arguments

**`timeout`** `int32`

Duration to wait for the response until termination. Uses the default timeout value passed to `TWSSyncWrapper`.

---

```python
app.get_next_valid_id()
```

## Response Object

Requests to `get_next_valid_id()` will return the next valid order ID, which may be used in order submission.

```python
123456789
```