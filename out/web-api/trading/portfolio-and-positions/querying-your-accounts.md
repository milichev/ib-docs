[source](https://www.interactivebrokers.com/docs/web-api/trading/portfolio-and-positions/querying-your-accounts)

# Querying Your Accounts

To query a list of accounts the user can trade, see `/iserver/accounts`.

## Querying A Single Account's Portfolio

In non-tiered account structures, the `/portfolio/accounts` endpoint returns a list of accounts for which the user can view position and account information.

This endpoint must be called prior to calling other `/portfolio` endpoints for those accounts.

For querying a list of accounts which the user can trade, see `/iserver/accounts`. For a list of subaccounts in tiered account structures (e.g. financial advisor or ibroker accounts) see `/portfolio/subaccounts`.

Example request:

`GET https://api.ibkr.com/v1/api/portfolio/accounts`

Successful response:

```json
  {[
    {
      "id": "U1234567",
      "PrepaidCrypto-Z": false,
      "PrepaidCrypto-P": false,
      "brokerageAccess": true,
      "accountId": "U1234567",
      "accountVan": "U1234567",
      "accountTitle": "",
      "displayName": "U1234567",
      "accountAlias": null,
      "accountStatus": 1644814800000,
      "currency": "USD",
      "type": "DEMO",
      "tradingType": "PMRGN",
      "businessType": "IB_PROSERVE",
      "ibEntity": "IBLLC-US",
      "faclient": false,
      "clearingStatus": "O",
      "covestor": false,
      "noClientTrading": false,
      "trackVirtualFXPortfolio": true,
      "parent": {
        "mmc": [],
        "accountId": "",
        "isMParent": false,
        "isMChild": false,
        "isMultiplex": false
      },
      "desc": "U1234567"
    }
  ]}
```

## Querying Multi-level Account Structures

In multi-level account structures (such as Financial Advisor and IBroker accounts), the `/portfolio/subaccounts` endpoint returns a list of up to 100 subaccounts for which the user can view position and account-related information. If you have more than 100 subaccounts use `/portfolio/subaccounts2`.

This endpoint must be called prior to calling other `/portfolio` endpoints for those subaccounts.

Example request:

`GET https://api.ibkr.com/v1/api/portfolio/subaccounts`

Successful response:

```json
{[
  {
    "id": "U1234567",
    "PrepaidCrypto-Z": false,
    "PrepaidCrypto-P": false,
    "brokerageAccess": false,
    "accountId": "U1234567",
    "accountVan": "U1234567",
    "accountTitle": "",
    "displayName": "U1234567",
    "accountAlias": null,
    "accountStatus": 1644814800000,
    "currency": "USD",
    "type": "DEMO",
    "tradingType": "PMRGN",
    "businessType": "IB_PROSERVE",
    "ibEntity": "IBLLC-US",
    "faclient": false,
    "clearingStatus": "O",
    "covestor": false,
    "noClientTrading": false,
    "trackVirtualFXPortfolio": true,
    "parent": {
      "mmc": [],
      "accountId": "",
      "isMParent": false,
      "isMChild": false,
      "isMultiplex": false
    },
    "desc": "U1234567"
  }
]}
```

## Querying Large Account Structures (>100 Account)

The `/portfolio/subaccounts2` endpoint is specifically enabled to handle large account structures (>100 accounts) for Financial Advisors and IBrokers to review position across several accounts. For such accounts, the `/portfolio/subaccounts2` endpoint such be used prior to querying other /portfolio endpoints.

The unique distinction to `/portfolio/subaccounts2` is the pagination component to improve filtering support with all accounts sorted. The `/portfolio/subaccounts2` endpoint specifically supports query parameters for `page` and `pageSize`. By default, the endpoint will return the first page of accounts, which consists of 20 accounts. However, users may employ the `pageSize` query parameter to request up to 1000 accounts per page.

The returned `metadata` object returned from the `/portfolio/subaccounts2` endpoint will declare:

* `pageNum` - The current page viewed.
* `pageSize` - The number of accounts requested to be displayed per page.
* `total` - The total number of accounts on the structure.

Given the details above, `total` divided by `pageSize` will define the total number of pages available, given a minimum of 0.

Example request:

`GET https://api.ibkr.com/v1/api/portfolio/subaccounts?page=0&pageSize=1000`

Successful response:

```json
{
  'metadata': {
  'pageNum': 0, 
  'pageSize': 1000, 
  'total': 1
},
  'subaccounts': [
    {
      "id": "U1234567",
      "PrepaidCrypto-Z": false,
      "PrepaidCrypto-P": false,
      "brokerageAccess": false,
      "accountId": "U1234567",
      "accountVan": "U1234567",
      "accountTitle": "",
      "displayName": "U1234567",
      "accountAlias": null,
      "accountStatus": 1644814800000,
      "currency": "USD",
      "type": "DEMO",
      "tradingType": "PMRGN",
      "businessType": "IB_PROSERVE",
      "ibEntity": "IBLLC-US",
      "faclient": false,
      "clearingStatus": "O",
      "covestor": false,
      "noClientTrading": false,
      "trackVirtualFXPortfolio": true,
      "parent": {
        "mmc": [],
        "accountId": "",
        "isMParent": false,
        "isMChild": false,
        "isMultiplex": false
      },
      "desc": "U1234567"
    }
  ]
}
```
