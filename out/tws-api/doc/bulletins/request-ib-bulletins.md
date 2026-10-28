[source](https://www.interactivebrokers.com/docs/tws-api/doc/bulletins/request-ib-bulletins)

# Request IB Bulletins

#### EClient.reqNewsBulletins (

**allMessages:** bool. If set to true, will return all the existing bulletins for the current day, set to false to receive only the new bulletins.\
)

Subscribes to IB's News Bulletins.

#### Java

```java
client.reqNewsBulletins(true);
```
