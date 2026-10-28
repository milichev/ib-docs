> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Querying Equity and Margin

The `/portfolio/{accountId}/summary` endpoint delivers a wide variety of values related to an account's equity, margin use, and accrued balances.

Values are presented in aggregate form for the entire U-account ("universal account"), as well as diasaggregated by the account's underlying regulatory segments (for instance, the securities segment versus commodities segment, which holds futures products).

Example request:

`GET https://api.ibkr.com/v1/api/portfolio/{accountId}/summary`

Successful response:

```json
{
  "accountcode": {
    "amount": 0.0,
    "currency": null,
    "isNull": false,
    "timestamp": 1702582422000,
    "value": "U1234567",
    "severity": 0
  },
  ...,
  "indianstockhaircut": {
    "amount": 0.0,
    "currency": "USD",
    "isNone": false,
    "timestamp": 1702582422000,
    "value": null,
    "severity": 0
  }
}
```