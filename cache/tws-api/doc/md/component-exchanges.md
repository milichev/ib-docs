> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Component Exchange Mapping

## Introduction

A single data request from the API can receive aggregate quotes from multiple exchanges. The tick types 'bidExch' (tick type 32), 'askExch' (tick type 33), 'lastExch' (tick type 84) are used to identify the source of a quote. To preserve bandwidth, the data returned to these tick types consists of a sequence of capital letters rather than a long list of exchange names for every returned exchange name field. To find the full exchange name corresponding to a single letter code returned in tick types 32, 33, or 84, and API function [EClient.reqSmartComponents](#request-component-exchanges) is available. Note: This function can only be used when the exchange is open.

Different IB contracts have a different exchange map containing the set of exchanges on which they trade. Each exchange map has a different code, such as "a6" or "a9". This exchange mapping code is returned to [EWrapper.tickReqParams](#exchange-component-mapping) immediately after a market data request is made by a user with market data subscriptions. To find a particular map of single letter codes to full exchange names, the function reqSmartComponents is invoked with the exchange mapping code returned to tickReqParams.

For instance, a market data request for the IBKR US contract may return the exchange mapping identifier "a6" to [EWrapper.tickReqParams](/docs/tws-api/doc/md/streaming-data#ewrappertickreqparams) . Invoking the function [EClient.reqSmartComponents](#request-component-exchanges) with the symbol "a9" will reveal the list of exchanges offering market data for the IBKR US contract, and their single letter codes. The code for "ARCA" may be "P". In that case if "P" is returned to the exchange tick types, that would indicate the quote was provided by ARCA.

---

## Request Component Exchanges

`EClient.reqSmartComponents(reqId, bboExchange)`

Returns the mapping of single letter codes to exchange names given the mapping identifier.

**`reqId`** `int`

Request identifier used to track data.

---

**`bboExchange`** `string`

Mapping identifier received from EWrapper.tickReqParams

---

\


#### Python

```python
self.reqSmartComponents(1018, "a6")
```

#### Java

```java
client.reqSmartComponents(1013, "a6");
```

#### C++

```cpp
m_pClient->reqSmartComponents(13002, m_bboExchange);
```

#### C\#

```csharp
client.reqSmartComponents(13002, testImpl.BboExchange);
```

#### VB.NET

```vbnet
client.reqSmartComponents(13002, wrapperImpl.BboExchange)
```

---

## Receive Component Exchanges

`EWrapper.smartComponents(reqId, smartComponentMap)`

Containing a bit number to exchange + exchange abbreviation dictionary. All IDs can be initially retrieved using [reqTickParams](/docs/tws-api/doc/md/streaming-data#ewrappertickreqparams).

**`reqId`** `int`

Request identifier used to track data.

---

**`smartComponentMap`** `object`

Unique object containing a map of all key-value pairs

---

\


#### Python

```python
def smartComponents(self, reqId:int, smartComponentMap:SmartComponentMap):
	print("SmartComponents:")
	for smartComponent in smartComponentMap:
		print("SmartComponent.", smartComponent)
```

#### Java

```java
@Override
public void smartComponents(int reqId, Map<Integer, Entry> theMap) {
	System.out.println(EWrapperMsgGenerator.smartComponents(reqId, theMap));
}
```

#### C++

```cpp
void TestCppClient::smartComponents(int reqId, const SmartComponentsMap& theMap) {
    printf("Smart components: (%lu):\n", theMap.size());
    for (SmartComponentsMap::const_iterator i = theMap.begin(); i != theMap.end(); i++) {
        printf(" bit number: %d exchange: %s exchange letter: %c\n", i->first, std::get(i->second).c_str(), std::get(i->second));
    }
}
```

#### C\#

```csharp
public void smartComponents(int reqId, Dictionary<int, KeyValuePair> theMap)
{
	StringBuilder sb = new StringBuilder();
	sb.AppendFormat("==== Smart Components Begin (total={0}) reqId = {1} ====\n", theMap.Count, reqId);
	foreach (var item in theMap)
	{
		sb.AppendFormat("bit number: {0}, exchange: {1}, exchange letter: {2}\n", item.Key, item.Value.Key, item.Value.Value);
	}
	sb.AppendFormat("==== Smart Components Begin (total={0}) reqId = {1} ====\n", theMap.Count, reqId);
	Console.WriteLine(sb);
}
```

#### VB.NET

```vbnet
Public Sub smartComponents(reqId As Integer, theMap As Dictionary(Of Integer, KeyValuePair(Of String, Char))) Implements EWrapper.smartComponents
	Dim sb As New StringBuilder
	sb.AppendFormat("==== Smart Components Begin (total={0}) reqId = {1} ===={2}", theMap.Count, reqId, Environment.NewLine)
	For Each item In theMap
		sb.AppendFormat("bit number: {0}, exchange: {1}, exchange letter: {2}{3}", item.Key, item.Value.Key, item.Value.Value, Environment.NewLine)
	Next
	sb.AppendFormat("==== Smart Components Begin (total={0}) reqId = {1} ===={2}", theMap.Count, reqId, Environment.NewLine)
	Console.WriteLine(sb)
End Sub
```