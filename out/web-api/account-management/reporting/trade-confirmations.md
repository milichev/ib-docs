[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/reporting/trade-confirmations)

# Trade Confirmations

Real-time trade confirmations are generated for all executions.

### Available Trade Confirmations

The `gw/api/v1/trade-confimations/available` can be used to view dates which trade confirmations are available for based on `accountId`. The endpoint will only return dates which account placed trades and will return available dates for up to 2 years.

For daily, response will return first date available to last date available.

## Example

```
GET gw/api/v1/trade-confirmations/available?accountId=U123456

{
    "data": {
        "dataType": "String",
        "value":["20230428","20230731","20231031","20240102","20240430","20240731","20241031","20241231","20250411","20250430"]
    }
}
```

### Generate Trade Confirmation

The [`gw/api/v1/trade-confirmations`](../../api-reference/account-management/account-management-reports/create-trade-confirmations.md) can be used to generate standard trade confirmations in PDF format for given time period. The `startDate` and `endDate` will be used to set the time period.

* Maximum range is 365 days per request.
* Trade confirmations are only available for days which trades are placed.

Additional formats (Excel, CSV, HTML) are available for download within IBKR [Portal](https://www.ibkrguides.com/clientportal/performanceandstatements/statements.htm).

## Request Parameters

### Schema

| Name                    | Type                                      | Description                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accountId               | string                                    | The IBKR accountId which statement is being requested for.                                                                                                                                                                                                                                                                                       |
| accountIds              | Array of strings                          | array of accountId's                                                                                                                                                                                                                                                                                                                             |
| startDate               | YYYYMMDD                                  | From date                                                                                                                                                                                                                                                                                                                                        |
| endDate                 | YYYYMMDD                                  | Last reporting date to be included.                                                                                                                                                                                                                                                                                                              |
| multiAccountFormat      | consolidate concatenate customConsolidate | **consolidate:** A single statement with consolidated data for  all sub accounts in a merged format.  **concatenate:** Includes all sub accounts as separate sections, in a format similar to selecting multiple accounts  **customConsolidate**: A single statement with consolidated data for custom group of sub accounts in a merged format. |
| cryptoConsolIfAvailable | true false                                | Default is false. If request contains any accounts with crypto segment, will turn request into Crypto Consolidated                                                                                                                                                                                                                               |
| mimeType                | application/pdf                           | Output format of the statement.                                                                                                                                                                                                                                                                                                                  |
| language                | en tw cn fr de es it ru ja pt             | two character ISO language code Default: "en"  tw= Chinese Traditional cn= Chinese Simplified fr= French de= German es= Spanish it= Italian ru= Russian ja= Japanese pt = Portuguese                                                                                                                                                             |
| gzip                    | true false                                | Default is false, If set to true, the response will be compressed (gzip).                                                                                                                                                                                                                                                                        |

### Example

```
POST gw/api/v1/trade-confirmations{ accountId: "U12345", startDate: "20230401", endDate: "20230425", mimeType: "application/pdf" }
{
    "data": {
        "dataType": "byte[]",
        "mimeType": "application/pdf",
        "encoding": "base64",
        "value": "BaseEncoded64String"
    },
    "accept": "*/*"
}
```

### Example

| startDate | endDate  | Example                                                                                                                                  |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| YYYYMMDD  | YYYYMMDD | `POST gw/api/v1/trade-confirmations`  `{ accountId: "U12345", startDate: "20230401", endDate: "20230425", mimeType: "application/pdf" }` |
