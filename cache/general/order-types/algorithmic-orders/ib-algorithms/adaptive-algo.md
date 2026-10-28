> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Adaptive Algo

The [Adaptive Algo](https://www.interactivebrokers.com/en/index.php?f=19091) combines IB's Smart routing capabilities with user-defined priority settings in an effort to achieve further cost efficiency at the point of execution. Using the Adaptive algo leads to better execution prices on average than for regular limit or market orders.

**Algo Strategy Value:** Adaptive

**adaptivePriority:** String. The 'Priority' selector determines the time taken to scan for better execution prices. The 'Urgent' setting scans only briefly, while the 'Patient' scan works more slowly and has a higher chance of achieving a better overall fill for your order.\
Valid Value/Format: Urgent > Normal > Patient

#### Python

```python
order.algoStrategy = "Adaptive"
order.algoParams = []
order.algoParams.append(TagValue("adaptivePriority", priority))
```

#### Abap

```abap
curl {baseUrl}/iserver/account/{accountId}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LMT",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity,
      "strategy": "Adaptive",
        "strategyParameters": {
          "adaptivePriority": "priority"
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("Adaptive");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("adaptivePriority", priority));
```

#### C++

```cpp
order.algoStrategy = "Adaptive";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("adaptivePriority", priority));
order.algoParams->push_back(tag1);
```

#### C\#

```csharp
order.AlgoStrategy = "Adaptive";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("adaptivePriority", priority));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "Adaptive"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("adaptivePriority", priority))
```