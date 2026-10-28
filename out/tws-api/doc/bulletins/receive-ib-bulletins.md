[source](https://www.interactivebrokers.com/docs/tws-api/doc/bulletins/receive-ib-bulletins)

# Receive IB Bulletins

#### EWrapper.updateNewsBulletin (

**msgId:** int. The bulletin's identifier.

**msgType:** int. 1: Regular news bulletin; 2: Exchange no longer available for trading; 3: Exchange is available for trading.

**message:** String. The news bulletin context.

**origExchange:** String. The exchange where the message comes from.\
)

Provides IB's bulletins

#### Java

```java
@Override
public void updateNewsBulletin(int msgId, int msgType, String message, String origExchange) {
	System.out.println("News Bulletin: " + EWrapperMsgGenerator.updateNewsBulletin( msgId, msgType, message, origExchange));
}
```
