[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/option-chains/receive-option-chains)

# Receive Option Chains

#### EWrapper.securityDefinitionOptionParameter (

**reqId:** int. ID of the request initiating the callback.

**underlyingConId:** int. The conID of the underlying security.

**tradingClass:** String. The option trading class.

**multiplier:** String. The option multiplier.

**exchange:** String. Exchange for which the derivative is hosted.

**expirations:** HashSet. A list of the expiries for the options of this underlying on this exchange.

**strikes:** HashSet. A list of the possible strikes for options of this underlying on this exchange.\
)

Returns the option chain for an underlying on an exchange specified in reqSecDefOptParams There will be multiple callbacks to securityDefinitionOptionParameter if multiple exchanges are specified in reqSecDefOptParams

#### Java

```java
@Override
public void securityDefinitionOptionalParameter(int reqId, String exchange, int underlyingConId, String tradingClass, String multiplier, Set expirations, Set strikes) {
	System.out.println("Security Definition Optional Parameter: " + EWrapperMsgGenerator.securityDefinitionOptionalParameter(reqId, exchange, underlyingConId, tradingClass, multiplier, expirations, strikes));
}
```
