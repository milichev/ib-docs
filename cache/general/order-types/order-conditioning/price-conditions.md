> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Price Conditions

A Price Condition will trigger if an order should transmit or cancel when a given contract's price goes above or beyond a given threshold.

See [PriceCondition](/docs/tws-api/ref/order-conditions/price-condition) for more details on the PriceCondition class.

#### Python

```python
priceCondition = PriceCondition()
priceCondition.conId = conId
priceCondition.exchange = exchange
priceCondition.isMore = isMore
priceCondition.triggerMethod = triggerMethod
priceCondition.price = price

base_order.conditions = [priceCondition]
```

#### Java

```java
PriceCondition priceCondition = (PriceCondition)OrderCondition.create(OrderConditionType.Price);
priceCondition.conId(conId);
priceCondition.exchange(exchange);
priceCondition.isMore(isMore);
priceCondition.price(price);
priceCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(priceCondition)
```

#### C++

```cpp
PriceCondition* priceCondition = dynamic_cast<PriceCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::Price));
priceCondition->conId(conId);
priceCondition->exchange(exchange);
priceCondition->isMore(isMore);
priceCondition->price(price);
priceCondition->conjunctionConnection(isConjunction);

base_order.conditions->push_back(priceCondition);
```

#### C\#

```csharp
PriceCondition priceCondition = (PriceCondition)OrderCondition.Create(OrderConditionType.Price);
priceCondition.ConId = conId;
priceCondition.Exchange = exchange;
priceCondition.IsMore = isMore;
priceCondition.Price = price;
priceCondition.IsConjunctionConnection = isConjunction;

base_order.Conditions = new List();
base_order.Conditions.Add(priceCondition);
```

#### VB.NET

```vbnet
Dim _priceCondition As PriceCondition = OrderCondition.Create(OrderConditionType.Price) 
_priceCondition.ConId = conId
_priceCondition.Exchange = exchange
_priceCondition.IsMore = isMore
_priceCondition.Price = price
_priceCondition.IsConjunctionConnection = isConjunction

base_order.Conditions = New List()
base_order.Conditions.Add(_priceCondition)
```