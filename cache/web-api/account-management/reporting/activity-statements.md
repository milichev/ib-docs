> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Activity Statements

Activity statements show summary of account activity for a given time period. This includes net asset value, PnL data and transaction details. The API can be used to view available statements and generate statements in PDF format.

### Available Statements

The `gw/api/v1/statements/available` can be used to query list of available statements based on `accountId`. The endpoint will return available statements for up to 2 years and year to date for daily, monthly and annual statements.

* Statements are available from date which account is funded.
* The reporting window closes at 5:15PM EST for commodities and 8:20PM EST for securities. Statements will be available around midnight (EST).

For daily, response will return first date available to last date available.

## Example

```
GET gw/api/v1/statements/available?accountId=U123456

{
    "data": {
        "dataType": "String",
        "value": {
            "daily": {
                "endDate": "20241007",
                "startDate": "20220101"
            },
            "monthly": [
                "202201",
                "202202",
                "202203",
                "202204",
                "202205",
                "202206",
                "202207",
                "202208",
                "202209",
                "202210",
                "202211",
                "202212",
                "202301",
                "202302",
                "202303",
                "202304",
                "202305",
                "202306",
                "202307",
                "202308",
                "202309",
                "202310",
                "202311",
                "202312",
                "202401",
                "202402",
                "202403",
                "202404",
                "202405",
                "202406",
                "202407",
                "202408",
                "202409"
            ],
            "annual": [
                "2022",
                "2023"
            ]
        }
    }
}
```

### Generate Statements

The [`gw/api/v1/statements`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-reports/create-statements) can be used to generate standard statements in PDF format for given time period. The `startDate` and `endDate` will be used to set the time period.

* Maximum range is 365 days per request.
* Statements are only available from date which account is funded.

Additional formats (Excel, CSV, HTML) and Custom Statements are available for download within IBKR [Portal](https://www.ibkrguides.com/clientportal/performanceandstatements/statements.htm).

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

| Period            | startDate | endDate  | Example                                                                                                                         |
| ----------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Annual            | YYYY      | YYYY     | `POST gw/api/v1/statements`  `{ accountId: "U12345", startDate: "2023", endDate: "2023", mimeType: "application/pdf" }`         |
| Monthlies         | YYYYMM    | YYYYMM   | `POST gw/api/v1/statements`  `{ accountId: "U12345", startDate: "202304", endDate: "202304", mimeType: "application/pdf" }`     |
| Custom Date Range | YYYYMMDD  | YYYYMMDD | `POST gw/api/v1/statements`  `{ accountId: "U12345", startDate: "20230401", endDate: "20230425", mimeType: "application/pdf" }` |