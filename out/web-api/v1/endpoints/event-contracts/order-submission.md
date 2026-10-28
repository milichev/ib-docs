[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/event-contracts/order-submission)

# Order Submission

Submission of orders for Event Contracts via the Web API functions like [orders for any other instrument](../orders/place-order.md).

However, it is important to note the differing mechanics between CME Group products and ForecastEx instruments:

* CME Group instruments can be bought and sold and function as normal futures options.
* ForecastEx instruments cannot be sold, only bought. To exit or reduce a position, one must buy the opposing Event Contract, and IB will net the opposing positions together automatically.

In both cases, no short selling is permitted.

## ForecastEx

In the context of ForecastEx trading, the other right must be bought to open and close the position. In this scenario, we are entering the position by buying the YES side of the January contract. This is demonstrated in the first payload.

However, if we wanted to close the position after buying the YES, we would use the second payload to buy the NO side.

#### Python

```python
import requests

url = f"{baseUrl}/iserver/account/{accountId}/orders"

// Opening Order (BUY to open 1 YES contract) 
payload = {
  "orders": [
    {
      "side": "BUY",
      "quantity": 1,
      "conid": 773659700,             //YES contract expiring JAN 04 '27
      "orderType": "MKT",
      "listingExchange": "FORECASTEX",
      "tif": "DAY"
    }
  ]
}

// Closing Order (BUY to close 1 NO contract)
payload = {
  "orders": [
    {
      "side": "BUY",
      "quantity": 1,
      "conid": 773659707,             //NO contract expiring JAN 04 '27
      "orderType": "MKT",
      "listingExchange": "FORECASTEX",
      "tif": "DAY"
    }
  ]
}

response = requests.post(url=url, data=payload)
print(response.text)
```

#### Python

```python
curl \
--url {baseUrl}/iserver/account/{accountId}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "side": "BUY",
      "quantity": 1,
      "conid": 773659700,
      "orderType": "MKT",
      "listingExchange": "FORECASTEX",
      "tif": "DAY"
    }
  ]
}'
```

## CME Group

In the case of CME listed contracts, we can simply change our `side` value from BUY to SELL to close our position.

#### Python

```python
import requests

url = f"{baseUrl}/iserver/account/{accountId}/orders"

// Closing Order (BUY to close 1 NO contract)
payload = {
  "orders": [
    {
      "side": "BUY",
      "quantity": 1,
      "conid": 861917649,       // US Payroll Employment 
      "orderType": "MKT",
      "listingExchange": "CME",
      "tif": "DAY"
    }
  ]
}

response = requests.post(url=url, data=payload)
print(response.text)
```

#### Python

```python
curl \
--url {baseUrl}/iserver/account/{accountId}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "side": "BUY",
      "quantity": 1,
      "conid": 861917649,       //US Payroll Employment
      "orderType": "MKT",
      "listingExchange": "CME",
      "tif": "DAY"
    }
  ]
}'
```
