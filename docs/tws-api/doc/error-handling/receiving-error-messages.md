[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/receiving-error-messages)

# Receiving Error Messages

#### EWrapper.error(

**reqId:** int. The request identifier corresponding to the most recent reqId that maintained the error stream.\
This does not pertain to the orderId from placeOrder, but whatever the most recent requestId is.

**errorTime:** int. The Unix timestamp of when the error took place.\
Note: This is only implemented for TWS API 10.33+

**errorCode:** int. The code identifying the error.

**errorMsg:** String. The error's description.

**advancedOrderRejectJson:** String. Advanced order reject description in json format.\
)

#### Python

```python
def error(self, reqId: TickerId, errorTime: int, errorCode: int, errorString: str, advancedOrderRejectJson = ""):
  print("Error. Id:", reqId, errorTime, "Code:", errorCode, "Msg:", errorString, "AdvancedOrderRejectJson:", advancedOrderRejectJson)
```

#### Java

```java
@Override
public void error(int id, long errorTime, int errorCode, String errorMsg, String advancedOrderRejectJson) {
  String str = "Error. Id: " + id + ", Code: " + errorCode + ", Msg: " + errorMsg;
  if (advancedOrderRejectJson != null) {
    str += (", AdvancedOrderRejectJson: " + advancedOrderRejectJson);
  }
  System.out.println(str + "\n");
}
```

#### C++

```cpp
void TestCppClient::error(int id, time_t errorTime, int errorCode, const std::string& errorString, const std::string& advancedOrderRejectJson)
{
    printf("Error. Id: %d, Timestamp: %d, Code: %d, Msg: %s, AdvancedOrderRejectJson: %s\n", id, errorTime, errorCode, errorString.c_str(), advancedOrderRejectJson.c_str());
}
```

#### C#

```csharp
public virtual void error(int id, long errorTime, int errorCode, string errorMsg, string advancedOrderRejectJson)
{
  Console.WriteLine("Error. Id: " + id + "Timestamp: " + errorTime + ", Code: " + errorCode + ", Msg: " + errorMsg + ", AdvancedOrderRejectJson: " + advancedOrderRejectJson + "\n");
}
```

#### VB.NET

```vbnet
Public Sub [error](id As Integer, errorCode As Integer, errorMsg As String, advancedOrderRejectJson As String) Implements IBApi.EWrapper.error
            Console.WriteLine("Error - Id [" & id & "] ErrorCode [" & errorCode & "] ErrorMsg [" & errorMsg & "] AdvancedOrderRejectJson [" & advancedOrderRejectJson & "]")
End Sub
```
