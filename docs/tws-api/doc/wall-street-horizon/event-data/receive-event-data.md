[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/receive-event-data)

# Receive Event Data

#### EWrapper.wshEventData (

**requestId:** int. Request identifier used to track data.

**dataJson:** String. Event data json format.\
)

Returns calendar events from the WSH.

#### Python

```python
def wshEventData(self, reqId: int, dataJson: str):
	print("WshEventData.", "ReqId:", reqId, "Data JSON:", dataJson)
```

#### Java

```java
@Override
public void wshEventData(int reqId, String dataJson) {
	System.out.println(EWrapperMsgGenerator.wshEventData(reqId, dataJson));
}
```

#### C++

```cpp
void TestCppClient::wshEventData(int reqId, const std::string& dataJson) {
    printf("WSH Event Data. ReqId: %d, dataJson: %s\n", reqId, dataJson.c_str());
}
```

#### C#

```csharp
public void wshEventData(int reqId, string dataJson)
{
	Console.WriteLine($"WSH Event Data. Request Id: {reqId}, Data JSON: {dataJson}\n");
}
```

#### VB.NET

```vbnet
Public Sub wshEventData(reqId As Integer, dataJson As String) Implements EWrapper.wshEventData
	Console.WriteLine($"WSH Event Data. Request Id: {reqId}, Data JSON: {dataJson}")
End Sub
```
