[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/accounts/set-dynamic-account)

# Set Dynamic Account

Broker accounts configured with the DYNACCT property will not receive account information at login. Instead, they must dynamically query then set their account number.

This will not function for individual or financial advisor accounts. This will only be functional for IBrokers with the DYNACCT property approved.

Customers without the DYNACCT property will receive the following message

#### JSON

```json
{
    "error": "Details currently unavailable. Please try again later and contact client services if the issue persists.",
    "statusCode": 503
}
```

#### Abap

```abap
request_url = f"{baseUrl}/iserver/dynaccount"
json_content = {
  "acctId": "U1234567
}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/dynaccount \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "acctId": "U1234567
}'
```

#### Response Object

**set:** bool.\
Confirms if the account change was fully set.

**acctId:** String.\
The account ID that was set for future use.

```
{
  "set": "true",
  "acctId": "U1234567",
}
```
