> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Margin Conditions

Margin Conditions permit users to ready an order in case their order starts falling to a given threshold that may lead to liquidation or to submit an order after ample margin cushion has been established.

See [MarginCondition](/docs/tws-api/ref/order-conditions/margin-condition) for more details on the MarginCondition class.

#### Python

```python
marginCondition = order_condition.Create(OrderCondition.Margin)
marginCondition.isMore = isMore
marginCondition.percent = percent
marginCondition.isConjunctionConnection = isConjunction

base_order.conditions = [marginCondition]
```

#### Java

```java
MarginCondition marginCondition = (MarginCondition)OrderCondition.create(OrderConditionType.Margin);
marginCondition.isMore(isMore);
marginCondition.percent(percent);
marginCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(marginCondition)
```

#### C++

```cpp
MarginCondition* marginCondition = dynamic_cast<MarginCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::Margin));
marginCondition->percent(percent);
marginCondition->isMore(isMore);
marginCondition->conjunctionConnection(isConjunction);

base_order.conditions->push_back(marginCondition);
```

#### C\#

```csharp
MarginCondition marginCondition = (MarginCondition)OrderCondition.Create(OrderConditionType.Margin);
marginCondition.IsMore = isMore;
marginCondition.Percent = percent;
marginCondition.IsConjunctionConnection = isConjunction;

base_order.Conditions = new List();
base_order.Conditions.Add(marginCondition);
```

#### VB.NET

```vbnet
Dim _MarginCondition As MarginCondition = OrderCondition.Create(OrderConditionType.Margin) ' cast to (MarginCondition)
_MarginCondition.IsMore = isMore
_MarginCondition.Percent = percent
_MarginCondition.IsConjunctionConnection = isConjunction

base_order.Conditions = New List()
base_order.Conditions.Add(_MarginCondition)
```