[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/stock-symbol-search/request-stock-contract-search)

# Request Stock Contract Search

#### EClient.reqMatchingSymbols (

**reqId:** int. Request identifier used to track data.

**pattern:** String. Either start of ticker symbol or (for larger strings) company name.\
)

Requests matching stock symbols.

#### Java

```java
client.reqMatchingSymbols(reqId, "IB");
```
