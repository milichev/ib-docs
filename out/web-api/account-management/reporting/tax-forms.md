[source](https://www.interactivebrokers.com/docs/web-api/account-management/reporting/tax-forms)

# Tax Forms

View available tax forms and generate historical or current tax forms by account ID.

### Available Tax Forms

The `gw/api/v1/tax-documents/available` can be used to query list of available tax forms based on `accountId`.

* Tax Form availability
  * Form 1099 (Consolidated) will be available February 15 for the immediately preceding year.
  * Form 1099-R for IRA accounts will be available by January 31 for the immediately preceding year.
  * Form 5498 for IRA accounts will be available by May 31 for the immediately preceding year.

For more information on available tax forms, please visit our main [website](https://www.interactivebrokers.com/en/support/tax-overview.php).

## Example

```
GET gw/api/v1/tax-documents/available?accountId=U123456&year=2022

{
"data": {
"dataType": "String",
"value": {
"forms": [
{
"isForm": true,
"taxFormName": "1099",
"formats": [
"PDF"
]
}
]
}
}
}
```

### Generate Tax Documents

The [`gw/api/v1/tax-documents`](../../api-reference/account-management/account-management-reports/create-tax-documents.md) can be used to generate tax documents in PDF, HTML or CSV format for given tax year.

## Request Parameters

### Schema

| Name      | Type                      | Description                                                               |
| --------- | ------------------------- | ------------------------------------------------------------------------- |
| accountId | string                    | The IBKR accountId which tax form is being requested for.                 |
| year      | YYYY                      | Tax Year                                                                  |
| format    | HTML CSV PDF              | Format of tax form                                                        |
| type      | 1099 1099R 1042S 8949 All | Type of tax form to be generated.                                         |
| gzip      | true false                | Default is false, If set to true, the response will be compressed (gzip). |

### Example

| Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST gw/api/v1/tax-documents`  `{"accountId": "UXXXX", "year": 2023, "type": "ALL,1099,1099R,1042S,8949", "format": "HTML,CSV,PDF", "gzip": false }` |
