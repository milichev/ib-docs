[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/schema/users)

# Users

## User

Define user(s) associated with the account.

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| `"users": [{"externalUserId": "MyTestAccount123","externalIndividualId": MyTestAccount123","prefix": "johnd"}` |

| Name                 | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| externalIndividualId | String; max 64 characters | Identifier for the individual associated with this user. Required to create the association within the IBKR database.   This is specified by the counterparty and must be unique for each account. If an externalIndividualId has already been used, you will receive an error.   \*This can be the same externalId that was specified in the [Customer](customer.md) node. |
| externalUserId       | String; max 64 characters | Identifier for the individual associated with this user. Required to create the association within the IBKR database.   This is specified by the counterparty and must be unique for each account. If an externalIndividualId has already been used, you will receive an error.   \*/web-api/account-management/schema/customer) node.                                                                      |
| prefix               | 3-6 lowercase letters.    | Prefix will be used when creating the user ID. IBKR will assign 3-6 numbers to the end of the prefix. If prefix includes the following, you will receive an error:  • symbols or numeric values • Upper case letters • Prefix is less than 3 letters or more than 6 letters \*This should be same prefix entered in the [Customer](customer.md) node.                       |

## mdServices

Manage market data subscriptions and subscribe to premium services.

|                         |
| ----------------------- |
| `"mdServices": [ 1473]` |

| Name | Type   | Description                                               |
| ---- | ------ | --------------------------------------------------------- |
| id   | String | Market service ID the user is requesting subscription to. |

* List market data subscriptions which user is requesting based on the id associated with service.
* The `/api/v1/enumerations/market-data?mdStatusNonPro=F` can be used to view subscriptions based on id.
* If `mdStatusNonPro=F,` this will include subscriptions for Non-Professional.
* If `mdStatusNonPro=T,` this will include subscriptions for Professional.
* Prices for live data will vary based on if professional or non professional.
* Conditions for Pro vs Non Pro can be found [here](https://ibkr.info/article/2369).
