[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/minimum-price-increment/receive-market-rule)

# Receive Market Rule

#### EWrapper.marketRule (

**marketRuleId:** int. Market Rule ID requested.

**priceIncrements:** PriceIncrement\[]. Returns the available price increments based on the market rule.\
)

Returns minimum price increment structure for a particular market rule ID market rule IDs for an instrument on valid exchanges can be obtained from the [contractDetails](../../contracts-financial-instruments/contract-details/request-contract-details.md) object for that contract

#### Python

```python
def marketRule(self, marketRuleId: int, priceIncrements: ListOfPriceIncrements):
	print("Market Rule ID: ", marketRuleId)
	for priceIncrement in priceIncrements:
	print("Price Increment.", priceIncrement)
```

#### Java

```java
@Override
public void marketRule(int marketRuleId, PriceIncrement[] priceIncrements) {
	System.out.println(EWrapperMsgGenerator.marketRule(marketRuleId, priceIncrements));
}
```

#### C++

```cpp
void TestCppClient::marketRule(int marketRuleId, const std::vector &priceIncrements) {
    printf("Market Rule Id: %s\n", Utils::intMaxString(marketRuleId).c_str());
    for (unsigned int i = 0; i < priceIncrements.size(); i++) {
        printf("Low Edge: %s, Increment: %s\n", Utils::doubleMaxString(priceIncrements[i].lowEdge).c_str(), Utils::doubleMaxString(priceIncrements[i].increment).c_str());
    }
}
```

#### C#

```csharp
public void marketRule(int marketRuleId, PriceIncrement[] priceIncrements) 
{
	Console.WriteLine("Market Rule Id: " + marketRuleId);
	foreach (var priceIncrement in priceIncrements) 
	{
		Console.WriteLine("Low Edge: {0}, Increment: {1}", Util.DoubleMaxString(priceIncrement.LowEdge), Util.DoubleMaxString(priceIncrement.Increment));
	}
}
```

#### VB.NET

```vbnet
Public Sub marketRule(marketRuleId As Integer, priceIncrements As PriceIncrement()) Implements EWrapper.marketRule
	Console.WriteLine("Market Rule Id:" & marketRuleId)
	For Each priceIncrement In priceIncrements
		Console.WriteLine("LowEdge: " & Util.DoubleMaxString(priceIncrement.LowEdge) & " Increment: " & Util.DoubleMaxString(priceIncrement.Increment))
	Next
End Sub
```
