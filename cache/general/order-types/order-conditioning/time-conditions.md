> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Time Conditions

The Time Condition will trigger an order for submission or cancellation after a time has been reached.

See [TimeCondition](/docs/tws-api/ref/order-conditions/time-condition) for more details on the TimeCondition class.

#### Python

```python
timeCondition = order_condition.Create(OrderCondition.Time)
timeCondition.isMore = isMore
timeCondition.time = time   
timeCondition.isConjunctionConnection = isConjunction

base_order.conditions = [timeCondition]
```

#### Java

```java
TimeCondition timeCondition = (TimeCondition)OrderCondition.create(OrderConditionType.Time);
timeCondition.isMore(isMore);
timeCondition.time(time);
timeCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(timeCondition)
```

#### C++

```cpp
TimeCondition* timeCondition = dynamic_cast<TimeCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::Time));
timeCondition->isMore(isMore);
timeCondition->time(time);
timeCondition->conjunctionConnection(isConjunction);

base_order.conditions->push_back(timeCondition);
```

#### C\#

```csharp
TimeCondition timeCondition = (TimeCondition)OrderCondition.Create(OrderConditionType.Time);
timeCondition.IsMore = isMore;
timeCondition.Time = time;
timeCondition.IsConjunctionConnection = isConjunction;

base_order.Conditions = new List();
base_order.Conditions.Add(timeCondition);
```

#### VB.NET

```vbnet
Dim _TimeCondition As TimeCondition = OrderCondition.Create(OrderConditionType.Time)
_TimeCondition.IsMore = isMore
_TimeCondition.Time = time
_TimeCondition.IsConjunctionConnection = isConjunction

base_order.Conditions = New List()
base_order.Conditions.Add(_TimeCondition)
```