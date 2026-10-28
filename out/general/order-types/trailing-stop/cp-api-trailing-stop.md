[source](https://www.interactivebrokers.com/docs/general/order-types/trailing-stop/cp-api-trailing-stop)

# CP API: Trailing Stop

**Trail Offset.** Required.\
One of the following approaches to Trail Offset specification must be used with the order ticket.

* **Absolute Offset:** `"trailingType": "amt", "trailingAmt": {{currency}}`
* **Relative Offset:** `"trailingType": "%", "trailingAmt": {{number 0 to 100}}`\
  Note that you must pass a literal % character as the value of the trailingType field in order to use a percentage trailingAmt value.

**Stop Price:** `"price"`

In the example to the right, we have outlined two Trailing Stop orders with explicit Stop Prices via the `price` field.\
In the first order, we supply a relative offset of 2% using `"trailingType": "%"` and `"trailingAmt": 2`.\
In the second order, we supply an absolute offset of 3 units of currency using `"trailingType": "amt"` and `"trailingAmt": 3`.

#### JSON

```json
{
  "orderType": "TRAIL",
  "price": 100,
  "trailingAmt": 2,
  "trailingType": "%"
}
```

#### JSON

```json
{
  "orderType": "TRAIL",
  "price": 100,
  "trailingAmt": 3,
  "trailingType": "amt"
}
```
