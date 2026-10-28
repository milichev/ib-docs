[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-updates/receiving-account-updates)

# Receiving Account Updates

Resulting account and portfolio information will be delivered via the IBApi.EWrapper.updateAccountValue, IBApi.EWrapper.updatePortfolio, IBApi.EWrapper.updateAccountTime and IBApi.EWrapper.accountDownloadEnd

#### EWrapper.updateAccountValue (

**key:** String. The value being updated.

**value:** String. up-to-date value

**currency:** String. The currency on which the value is expressed.

**accountName:** String. The account identifier.\
)

Receives the subscribed account's information. Only one account can be subscribed at a time. After the initial callback to updateAccountValue, callbacks only occur for values which have changed. This occurs at the time of a position change, or every 3 minutes at most. This frequency cannot be adjusted.

**Note:** An important key passed back in EWrapper.updateAccountValue after a call to EClient.reqAccountUpdates is a boolean value 'accountReady'. If an accountReady value of false is returned that means that the IB server is in the process of resetting at that moment, i.e. the account is 'not ready'. When this occurs subsequent key values returned to EWrapper.updateAccountValue in the current update can be out of date or incorrect.

#### Java

```java
@Override
public void updateAccountValue(String key, String value, String currency, String accountName) {
    System.out.println(EWrapperMsgGenerator.updateAccountValue( key, value, currency, accountName));
}
```

#### EWrapper.updatePortfolio (

**contract:** Contract. The Contract for which a position is held.

**position:** Decimal. The number of positions held.

**marketPrice:** Double. The instrument's unitary price

**marketValue:** Double. Total market value of the instrument.

**averageCost:** Double. Average cost of the overall position.

**unrealizedPNL:** Double. Daily unrealized profit and loss on the position.

**realizedPNL:** Double. Daily realized profit and loss on the position.

**accountName:** String. Account ID for the update.

)

Receives the subscribed account's portfolio. This function will receive only the portfolio of the subscribed account. After the initial callback to updatePortfolio, callbacks only occur for positions which have changed.

#### Java

```java
@Override
public void updatePortfolio(Contract contract, Decimal position, double marketPrice, double marketValue, double averageCost, double unrealizedPNL, double realizedPNL, String accountName) {
    System.out.println(EWrapperMsgGenerator.updatePortfolio( contract, position, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, accountName));
}
```

#### EWrapper.updateAccountTime (

**timestamp:** String. the last update system time.

)

Receives the last time on which the account was updated.

#### Java

```java
@Override
public void updateAccountTime(String timeStamp) {
    System.out.println(EWrapperMsgGenerator.updateAccountTime( timeStamp));
}
```

#### Java

```java
void TestCppClient::updateAccountTime(const std::string& timeStamp) {
    printf( "UpdateAccountTime. Time: %s\n", timeStamp.c_str());
}
```

#### EWrapper.accountDownloadEnd (

**account:** String. The account identifier.

)

Notifies when all the account's information has finished.

#### Java

```java
@Override
public void accountDownloadEnd(String accountName) {
    System.out.println(EWrapperMsgGenerator.accountDownloadEnd(accountName));
}
```
