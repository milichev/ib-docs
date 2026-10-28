[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions-by-model/request-positions-by-model)

# Request Positions By Model

#### EClient.reqPositionsMulti(

**requestId:** int. Request's identifier.

**account:** String. If an account Id is provided, only the account's positions belonging to the specified model will be delivered.

**modelCode:** String. The code of the model's positions we are interested in.\
)

Requests position subscription for account and/or model Initially all positions are returned, and then updates are returned for any position changes in real time.

#### Java

```java
client.reqPositionsMulti(requestid, "U1234567", "");
```
