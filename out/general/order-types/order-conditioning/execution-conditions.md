[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/execution-conditions)

# Execution Conditions

The Execution Condition triggers an order whenever another order on your account has executed. The parameters allow the developer to specify how narrow a scope will trigger a condition.

See [ExecutionCondition](../../../tws-api/ref/order-conditions/execution-condition.md) for more details on the ExecutionCondition class.

#### Java

```java
 ExecutionCondition execCondition = (ExecutionCondition)OrderCondition.create(OrderConditionType.Execution);
execCondition.symbol(symbol);
execCondition.exchange(exchange);
execCondition.secType(secType);
execCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(execCondition)
```
