[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/accounts/search-dynamic-account)

# Search Dynamic Account

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
curl \
--url {{baseUrl}}/iserver/account/search/U123 \
--request GET
```

#### Response Object

**matchedAccounts:** List of objects.\
Contains a series of objects that pertain to the account information requested.\
\[\{\
**accountId:** String.\
Returns a matching account ID that corresponds to the matching value.

**alias:** String.\
Returns the corresponding alias or alternative name for the specific account ID. May be a duplicate of the accountId value in most cases.

**allocationId:** String.\
Returns the allocation identifier used internally for the account.\
}]\
**pattern:** String.\
Displays the searchPattern used for the request.

```
{
  "matchedAccounts": [
    {
      "accountId": "U1234567",
      "alias": "U1234567",
      "allocationId": "1"
    }
  ],
  "pattern":"U123"
}
```
