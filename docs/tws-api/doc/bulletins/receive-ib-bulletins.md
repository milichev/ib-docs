[source](https://www.interactivebrokers.com/docs/tws-api/doc/bulletins/receive-ib-bulletins)

# Receive IB Bulletins

#### EWrapper.updateNewsBulletin (

**msgId:** int. The bulletin's identifier.

**msgType:** int. 1: Regular news bulletin; 2: Exchange no longer available for trading; 3: Exchange is available for trading.

**message:** String. The news bulletin context.

**origExchange:** String. The exchange where the message comes from.\
)

Provides IB's bulletins

#### Python

```python
def updateNewsBulletin(self, msgId: int, msgType: int, newsMessage: str, originExch: str):
  print("News Bulletins. MsgId:", msgId, "Type:", msgType, "Message:", newsMessage, "Exchange of Origin: ", originExch)
```

#### Java

```java
@Override
public void updateNewsBulletin(int msgId, int msgType, String message, String origExchange) {
	System.out.println("News Bulletin: " + EWrapperMsgGenerator.updateNewsBulletin( msgId, msgType, message, origExchange));
}
```

#### C++

```cpp
void TestCppClient::updateNewsBulletin(int msgId, int msgType, const std::string& newsMessage, const std::string& originExch) {
    printf( "News Bulletins. %d - Type: %d, Message: %s, Exchange of Origin: %s\n", msgId, msgType, newsMessage.c_str(), originExch.c_str());
}
```

#### C#

```csharp
public virtual void updateNewsBulletin(int msgId, int msgType, String message, String origExchange)
{
	Console.WriteLine("News Bulletins. "+msgId+" - Type: "+msgType+", Message: "+message+", Exchange of Origin: "+origExchange+"\n");
}
```

#### VB.NET

```vbnet
Public Sub updateNewsBulletin(msgId As Integer, msgType As Integer, message As String, origExchange As String) Implements IBApi.EWrapper.updateNewsBulletin
	Console.WriteLine("News Bulletins. " & msgId & " - Type: " & msgType & ", Message: " & message & ", Exchange of Origin: " & origExchange)
End Sub
```
