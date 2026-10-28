> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Volume Conditions

Volume Condition will trigger in the event the contract's volume remains above or below a given threshold.

**Note:** VolumeCondition orders must be SMART routed.

See [VolumeCondition](/docs/tws-api/ref/order-conditions/volume-condition) for more details on the VolumeCondition class.

#### Python

```python
volCond = order_condition.Create(OrderCondition.Volume)
volCond.conId = conId
volCond.exchange = exchange
volCond.isMore = isMore
volCond.volume = volume
volCond.isConjunctionConnection = isConjunction
```

#### Java

```java
VolumeCondition volCon = (VolumeCondition)OrderCondition.create(OrderConditionType.Volume);
volCon.conId(conId);
volCon.exchange(exchange);
volCon.isMore(isMore);
volCon.volume(volume);
volCon.conjunctionConnection(isConjunction);
```

#### C++

```cpp
VolumeCondition* volCondition = dynamic_cast<VolumeCondition *>(OrderCondition::create(OrderCondition::OrderConditionType::Volume));
volCondition->conId(conId);
volCondition->exchange(exchange);
volCondition->isMore(isMore);
volCondition->volume(volume);
volCondition->conjunctionConnection(isConjunction);
```

#### C\#

```csharp
VolumeCondition volCond = (VolumeCondition)OrderCondition.Create(OrderConditionType.Volume);
//Whenever contract...
volCond.ConId = conId;
//When traded at
volCond.Exchange = exchange;
//reaches a volume higher/lower
volCond.IsMore = isMore;
//than this...
volCond.Volume = volume;
//AND | OR next condition (will be ignored if no more conditions are added)
volCond.IsConjunctionConnection = isConjunction;
```

#### VB.NET

```vbnet
 Dim volCond As VolumeCondition = OrderCondition.Create(OrderConditionType.Volume) 'cast (VolumeCondition)
'Whenever contract...
volCond.ConId = conId
'When traded at
volCond.Exchange = exchange
'reaches a volume higher/lower
volCond.IsMore = isMore
'than this...
volCond.Volume = volume
'And | Or next condition (will be ignored if no more conditions are added)
volCond.IsConjunctionConnection = isConjunction
```