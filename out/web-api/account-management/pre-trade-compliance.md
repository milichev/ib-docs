[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/pre-trade-compliance)

# Pre Trade Compliance

The `/api/v1/restrictions` can be used to apply trade-related rules and restrictions to an account or user, or to an entire account family, including all client/sub-accounts. Updates to PTC restrictions, rules, and associations can be sent to IBKR using RESTful Web API.

* `/api/v1/restrictions`: Service is used to apply restrictions and manage rules or associations for Pre-Trade Compliance using the API.

* `/api/v1/restrictions`/`verify`: Service is used to validate that the contents included in the CSV file is in good order.

Restrictions will be sent in [CSV Format](https://www.ibkrguides.com/pretradecompliance/upload-restrictions.htm) and will be sent in same format that is used to upload CSV files within the IBKR Hosted Platform.

* [Available Restrictions](https://guides.interactivebrokers.com/pretrade/pretrade.htm#usersguidebook/PreTradeCompliance/rules.htm?TocPath=_____10)
* [About Pre-Trade Compliance](https://guides.interactivebrokers.com/pretrade/pretrade.htm#usersguidebook/PreTradeCompliance/aboutPTC.htm?TocPath=_____1)

## Request Parameters

| Name               | Value                       | Description                                                                                                                                                       |
| ------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userName required  | String                      | IBKR user ID of the individual intiating the request.The user ID must have access rights to 'Pre Trade Compliance'.                                               |
| requestId required | Non-negative integer value. | Unique identifier associated with the request. requestId will need to be unique for each requestId . If requestId was previously processed, error will be thrown. |
| payload required   | String                      | CSV file encoded in base64.                                                                                                                                       |

|                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **JSON Request** `const body = {  "userName": pm.environment.get('userName'),  "requestId": Date.now(),  "payload": "UkVTVFJfQURELCBBUElBVVRILTcyOCwgUlVMRV9CRUdJTiwgcnVsZV90eXBlPUNMT1NJTkdPTkxZLCB0aWY9R1RDLCBSVUxFX0VORA==" } pm.collectionVariables.set('signedRequest', utils.signRequest(body));` |

## Response Parameters

| Name      | Value                      | Description                                                                                                                                                  |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| success   | Boolean                    | Indicate whether the content of the file is valid or not. true: Indicates the file is valid. false: Indicates the file is not valid and cannot be processed. |
| requestId | Non-Negative integer value | reqId that was processed.                                                                                                                                    |
| message   | String                     | If success=false, the message will have some information about the error.                                                                                    |

### JSON Response

|                                                                                       |
| ------------------------------------------------------------------------------------- |
| \{  `"success": "<true\|false>",  "requestId":"<String>",  "message":"<string>"  } }` |

### Sample

|                                                                             |
| --------------------------------------------------------------------------- |
| **Success** `{"success":true,"requestId":20211635375984312,"message":"OK"}` |
