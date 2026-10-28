> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# One Cancels All

The One-Cancels All (OCA) order type allows an investor to place multiple and possibly unrelated orders assigned to a group. The aim is to complete just one of the orders, which in turn will cause TWS to cancel the remaining orders.

The investor may submit several orders aimed at taking advantage of the most desirable price within the group. Completion of one piece of the group order causes cancellation of the remaining group orders while partial completion causes the group to re-balance.

An investor might desire to sell 1000 shares of only ONE of three positions held above prevailing market prices. The OCA order group allows the investor to enter prices at specified target levels and if one is completed, the other two will automatically cancel. Alternatively, an investor may wish to take a LONG position in eMini S\&P stock index futures in a falling market or else SELL US treasury futures at a more favorable price.

Grouping the two orders using an OCA order type offers the investor two chances to enter a similar position, while only running the risk of taking on a single position.

**Multiple OCA types cannot be used in a single OCA Group.**

More on [One-Cancels All](https://www.interactivebrokers.com/en/index.php?f=617) orders

#### Python

```python
@staticmethod
def OneCancelsAll(ocaGroup:str, ocaOrders:ListOfOrder, ocaType:int):
    for o in ocaOrders: 
        o.ocaGroup = ocaGroup
        o.ocaType = ocaType         
    return ocaOrders
```

#### Python

```python
ocaOrders = [OrderSamples.LimitOrder("BUY", 1, 10), OrderSamples.LimitOrder("BUY", 1, 11), OrderSamples.LimitOrder("BUY", 1, 12)]
OrderSamples.OneCancelsAll("TestOCA_" + str(self.nextValidOrderId), ocaOrders, 2)
for o in ocaOrders:
self.placeOrder(self.nextOrderId(), ContractSamples.USStockAtSmart(), o)
```

#### Java

```java
public static List<Order> OneCancelsAll(String ocaGroup, List<Order> ocaOrders, int ocaType) {
    for (Order o : ocaOrders) {
        o.ocaGroup(ocaGroup);
        o.ocaType(ocaType);
    }
    return ocaOrders;
}
```

#### Java

```java
List<Order> OcaOrders = new ArrayList<>();
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 10));
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 11));
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 12));
OcaOrders = OrderSamples.OneCancelsAll("TestOCA_" + nextOrderId, OcaOrders, 2);
for (Order o : OcaOrders) {
    client.placeOrder(nextOrderId++, ContractSamples.USStock(), o);
}
```

#### C++

```cpp
void OrderSamples::OneCancelsAll(std::string ocaGroup, Order& ocaOrder, int ocaType){
        ocaOrder.ocaGroup = ocaGroup;
        ocaOrder.ocaType = ocaType;
}
```

#### C++

```cpp
std::vector<Order> ocaOrders;
ocaOrders.push_back(OrderSamples::LimitOrder("BUY", stringToDecimal("1"), 10));
ocaOrders.push_back(OrderSamples::LimitOrder("BUY", stringToDecimal("1"), 11));
ocaOrders.push_back(OrderSamples::LimitOrder("BUY", stringToDecimal("1"), 12));
for(unsigned int i = 0; i < ocaOrders.size(); i++){
    OrderSamples::OneCancelsAll("TestOca", ocaOrders[i], 2);
    m_pClient->placeOrder(m_orderId++, ContractSamples::USStock(), ocaOrders[i]);
}
```

#### C\#

```csharp
public static List<Order> OneCancelsAll(string ocaGroup, List<Order> ocaOrders, int ocaType)
{
    foreach (Order o in ocaOrders)
    {
        o.OcaGroup = ocaGroup;
        o.OcaType = ocaType;
    }
    return ocaOrders;
}
```

#### C\#

```csharp
List<Order> ocaOrders = new List<Order>();
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 10));
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 11));
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 12));
OrderSamples.OneCancelsAll("TestOCA_" + nextOrderId, ocaOrders, 2);
foreach (Order o in ocaOrders)
    client.placeOrder(nextOrderId++, ContractSamples.USStock(), o);
```

#### VB.NET

```vbnet
For Each o As Order In ocaOrders
    o.OcaGroup = ocaGroup
    o.OcaType = ocaType
    'Same as with Bracket orders. To prevent accidental executions, set all orders' transmit flag to false.
    'This will tell the TWS Not to send the orders, allowing your program to send them all first.
    o.Transmit = False
Next o

'Telling the TWS to transmit the last order in the OCA will also cause the transmission of its predecessors.
ocaOrders.Item(ocaOrders.Count - 1).Transmit = True
```

#### VB.NET

```vbnet
Dim ocaOrders As List(Of Order) = New List(Of Order)
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 10))
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 11))
ocaOrders.Add(OrderSamples.LimitOrder("BUY", 1, 12))
OrderSamples.OneCancelsAll("TestOCA_" + nextOrderId, ocaOrders, 2)
For Each o As Order In ocaOrders
    client.placeOrder(increment(nextOrderId), ContractSamples.USStock(), o)
Next
```