[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-summary/receiving-account-summary)

# Receiving Account Summary

#### EWrapper.accountSummary (

**reqId:** int. the request's unique identifier.

**account:** String. the account id

**tag:** String. the account's attribute being received.

**value:** String. the account's attribute's value.

**currency:** String. the currency on which the value is expressed.

)

Receives the account information. This method will receive the account information just as it appears in the TWS' Account Summary Window.

#### Java

```java
@Override
public void accountSummary(int reqId, String account, String tag, String value, String currency) {
    System.out.println(EWrapperMsgGenerator.accountSummary(reqId, account, tag, value, currency));
}
```

#### EWrapper.accountSummaryEnd(

**reqId:** String. The request's identifier.

)

Notifies when all the accounts' information has ben received. Requires TWS 967+ to receive accountSummaryEnd in linked account structures.

#### Java

```java
@Override
public void accountSummaryEnd(int reqId) {
    System.out.println("Account Summary End. Req Id: " + EWrapperMsgGenerator.accountSummaryEnd(reqId));
}
```
