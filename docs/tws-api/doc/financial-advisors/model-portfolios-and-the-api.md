[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/model-portfolios-and-the-api)

# Model Portfolios and the API

Advisors can use Model Portfolios to easily invest some or all of a client's assets into one or multiple custom-created portfolios, rather than tediously managing individual investments in single instruments.

[More about Model Portfolios](https://www.interactivebrokers.com/en/index.php?f=20917)

The TWS API can access model portfolios in accounts where this functionality is available and a specific model has previously been setup in TWS. API functionality allows the client application to request model position update subscriptions, request model account update subscriptions, or place orders to a specific model.

Model Portfolio functionality **not** available in the TWS API:

* Portfolio Model Creation
* Portfolio Model Rebalancing
* Portfolio Model Position or Cash Transfer

To request position updates from a specific model, the function [IBApi::EClient::reqPositionsMulti](../account-portfolio-data/positions-by-model/request-positions-by-model.md) "Requests position subscription for account and/or model Initially all positions are returned...") can be used: [Position Update Subscription by Model](../account-portfolio-data/positions-by-model/receive-positions-by-model.md)

To request model account updates, there is the function [IBApi::EClient::reqAccountUpdatesMulti](/docs/tws-api/doc/account-portfolio-data/account-update-by-model/requesting-account-update-by-model "Requests account updates for account and/or model. "), see: [Account Value Update Subscriptions by Model](../account-portfolio-data/account-update-by-model/receiving-account-updates-by-model.md)

To place an order to a model, the IBApi.Order.ModelCode field must be set accordingly, for example:

#### Python

```python
modelOrder = Order()
modelOrder.account = "DF12345"
modelOrder.modelCode = "Technology" # model for tech stocks first created in TWS
self.placeOrder(self.nextOrderId(), contract, modelOrder)
```

#### Java

```java
Order modelOrder = Order();
modelOrder.account("DF12345");  // master FA account number
modelOrder.modelCode("Technology"); // model for tech stocks first created in TWS
client.placeOrder(nextOrderId++, contract, modelOrder);
```

#### C++

```cpp
Order modelOrder = Order();
modelOrder.account = "DF12345";
modelOrder.modelCode = "Technology";
m_pClient->placeOrder(m_orderId++, contract, modelOrder);
```

#### C#

```csharp
Order modelOrder = Order();
modelOrder.Account = "DF12345";  // master FA account number
modelOrder.ModelCode = "Technology"; // model for tech stocks first created in TWS
client.placeOrder(nextOrderId++, contract, modelOrder);
```

#### VB.NET

```vbnet
Dim modelOrder As Order = Order()
modelOrder.Account = "DF12345" 'master FA account number
modelOrder.ModelCode = "Technology" 'model for tech stocks first created in TWS
client.placeOrder(increment(nextOrderId), contract, modelOrder)
```
