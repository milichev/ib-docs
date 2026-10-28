> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Percentage Conditions

The Percent Change Condition will trigger if there is a price percent change measured against last close price.

See [PercentChangeCondition](/docs/tws-api/ref/order-conditions/percentage-condition) for more details on the PercentChangeCondition class.

#### Python

```python
 pctChangeCondition = order_condition.Create(OrderCondition.PercentChange)
pctChangeCondition.isMore = isMore
pctChangeCondition.changePercent = pctChange
pctChangeCondition.conId = conId
pctChangeCondition.exchange = exchange
pctChangeCondition.isConjunctionConnection = isConjunction

base_order.conditions = [pctChangeCondition]
```

#### Java

```java
PercentChangeCondition pctChangeCondition = (PercentChangeCondition)OrderCondition.create(OrderConditionType.PercentChange);
pctChangeCondition.isMore(isMore);
pctChangeCondition.changePercent(pctChange);
pctChangeCondition.conId(conId);
pctChangeCondition.exchange(exchange);
pctChangeCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(pctChangeCondition)
```

#### C++

```cpp
PercentChangeCondition* pctChangeCondition = dynamic_cast<PercentChangeCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::PercentChange));
pctChangeCondition->isMore(isMore);
pctChangeCondition->changePercent(pctChange);
pctChangeCondition->conId(conId);
pctChangeCondition->exchange(exchange);
pctChangeCondition->conjunctionConnection(isConjunction);

base_order.conditions->push_back(pctChangeCondition);
```

#### C\#

```csharp
PercentChangeCondition pctChangeCondition = (PercentChangeCondition)OrderCondition.Create(OrderConditionType.PercentCange);
pctChangeCondition.IsMore = isMore;
pctChangeCondition.ChangePercent = pctChange;
pctChangeCondition.ConId = conId;
pctChangeCondition.Exchange = exchange;
pctChangeCondition.IsConjunctionConnection = isConjunction;

base_order.Conditions = new List();
base_order.Conditions.Add(pctChangeCondition);
```

#### VB.NET

```vbnet
Dim pctChangeCondition As PercentChangeCondition = OrderCondition.Create(OrderConditionType.PercentCange)
pctChangeCondition.IsMore = isMore
pctChangeCondition.ChangePercent = pctChange
pctChangeCondition.ConId = conId
pctChangeCondition.Exchange = exchange
pctChangeCondition.IsConjunctionConnection = isConjunction

base_order.Conditions = New List()
base_order.Conditions.Add(pctChangeCondition)
```