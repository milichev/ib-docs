[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-update-by-model/receiving-account-updates-by-model)

# Receiving Account Updates by Model

The resulting account and portfolio information will be delivered via the IBApi.EWrapper.accountUpdateMulti and IBApi.EWrapper.accountUpdateMultiEnd

#### EWrapper.accountUpdateMulti (

**requestId:** int. The id of request.

**account:** String. The account with updates.

**modelCode:** String. The model code with updates.

**key:** String. The name of parameter.

**value:** String. The value of parameter.

**currency:** String. The currency of parameter.\
)

Provides the account updates.

#### EWrapper.accountUpdateMultiEnd (

**requestId:** int. The id of request

)

Indicates all the account updates have been transmitted.
