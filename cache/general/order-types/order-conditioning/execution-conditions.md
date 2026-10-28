> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Execution Conditions

The Execution Condition triggers an order whenever another order on your account has executed. The parameters allow the developer to specify how narrow a scope will trigger a condition.

See [ExecutionCondition](/docs/tws-api/ref/order-conditions/execution-condition) for more details on the ExecutionCondition class.

#### Python

```python
execCondition = order_condition.Create(OrderCondition.Execution)
execCondition.symbol = symbol
execCondition.exchange = exchange
execCondition.secType = secType

base_order.conditions = [execCondition]
```

#### Java

```java
 ExecutionCondition execCondition = (ExecutionCondition)OrderCondition.create(OrderConditionType.Execution);
execCondition.symbol(symbol);
execCondition.exchange(exchange);
execCondition.secType(secType);
execCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(execCondition)
```

#### C++

```cpp
 ExecutionCondition* execCondition = dynamic_cast<ExecutionCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::Execution));
execCondition->symbol(symbol);
execCondition->exchange(exchange);
execCondition->secType(secType);
execCondition->conjunctionConnection(isConjunction);

base_order.conditions->push_back(execCondition)
```

#### C\#

```csharp
ExecutionCondition execCondition = (ExecutionCondition)OrderCondition.Create(OrderConditionType.Execution);
//When an execution on symbol
execCondition.Symbol = symbol;
execCondition.Exchange = exchange;
execCondition.SecType = secType;
execCondition.IsConjunctionConnection = isConjunction;

base_order.Conditions = new List();
base_order.Conditions.Add(execCondition);
```

#### VB.NET

```vbnet
Dim execCondition As ExecutionCondition = OrderCondition.Create(OrderConditionType.Execution) ' cast to (ExecutionCondition)
execCondition.Symbol = symbol
execCondition.Exchange = exchange
execCondition.SecType = secType
execCondition.IsConjunctionConnection = isConjunction

base_order.Conditions = New List()
base_order.Conditions.Add(execCondition)
```