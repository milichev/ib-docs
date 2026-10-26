[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/alerts/get-a-list-of-available-alerts)

# Get a list of available alerts

Retrieve a list of all alerts attached to the provided account.

`GET /iserver/account/{{ accountId }}/alerts`

###### Path Parameters

**accountId:** *String*. Required\
Identifier for the unique account to retrieve information from.\
Value Format: "DU1234567"

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/U1234567/alerts \
--request GET
```

#### Response Object:

Returns an array of comma-separated json objects

**order_id:** *int.*\
The searchable order ID

**account:** *String*.\
The account the alert was attributed to.

**alert_name:** *String.*\
The requested name for the alert.

**alert_active:** *int.*\
Determines if the alert is active or not

**order_time:** *String.*\
UTC-formatted time of the alert's creation.

**alert_triggered:** *bool.*\
Confirms if the order is is triggered or not.

**alert_repeatable:** *int.*\
Confirms if the alert is enabled to repeat.

```
[
  {
    "order_id": 9876543210,
    "account": "U1234567",
    "alert_name": "AAPL Price",
    "alert_active": 1,
    "order_time": "20231211-18:55:35",
    "alert_triggered": false,
    "alert_repeatable": 0
  }
]
```
