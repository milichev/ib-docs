[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/subscribe-to-group-events/receive-group-events-subscription)

# Receive Group Events Subscription

#### EWrapper.displayGroupUpdated (

**requestId:** int. Request identifier used to track data.

**contractInfo:** String. Contract information produced for the active display group.

)\
Call triggered once after receiving the subscription request, and will be sent again if the selected contract in the subscribed \* display group has changed.

#### Python

```python
def displayGroupUpdated(self, reqId: int, contractInfo: str):
	print("DisplayGroupUpdated. ReqId:", reqId, "ContractInfo:", contractInfo)
```

#### Java

```java
@Override
public void displayGroupUpdated(int reqId, String contractInfo) {
	System.out.println("Display Group Updated. ReqId: " + reqId + ", Contract info: " + contractInfo + "\n");
}
```

#### C++

```cpp
void TestCppClient::displayGroupUpdated( int reqId, const std::string& contractInfo) {
    std::cout << "Display Group Updated. ReqId: " << reqId << ", Contract Info: " << contractInfo << std::endl;
}
```

#### C#

```csharp
public virtual void displayGroupUpdated(int reqId, string contractInfo)
{
	Console.WriteLine("displayGroupUpdated. Request: " + reqId + ", ContractInfo: " + contractInfo);
}
```

#### VB.NET

```vbnet
Public Sub displayGroupUpdated(reqId As Integer, contractInfo As String) Implements IBApi.EWrapper.displayGroupUpdated
	Console.WriteLine("DisplayGroupUpdated - ReqId [" & reqId & "] ContractInfo [" & contractInfo & "]")
End Sub
```
