[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/white-branding-user-info/receiving-white-branding-info)

# Receiving White Branding Info

#### EWrapper.userInfo (

**reqId:** int. Identifier for the given request.

**whiteBrandingId:** String. Identifier for the white branded entity.\
)

#### Python

```python
def userInfo(self, reqId: int, whiteBrandingId: str):
	print("UserInfo.", "ReqId:", reqId, "WhiteBrandingId:", whiteBrandingId)
```

#### Java

```java
@Override
public void userInfo(int reqId, String whiteBrandingId) {
	System.out.println(EWrapperMsgGenerator.userInfo(reqId, whiteBrandingId));
}
```

#### C++

```cpp
void TestCppClient::userInfo(int reqId, const std::string& whiteBrandingId) {
    printf("User Info. ReqId: %d, WhiteBrandingId: %s\n", reqId, whiteBrandingId.c_str());
}
```

#### C#

```csharp
public void userInfo(int reqId, string whiteBrandingId)
{
	Console.WriteLine($"User Info. ReqId: {reqId}, WhiteBrandingId: {whiteBrandingId}");
}
```

#### VB.NET

```vbnet
Public Sub userInfo(reqId As Integer, whiteBrandingId As String) Implements EWrapper.userInfo
  Console.WriteLine($"User Info. ReqId: {reqId}, WhiteBrandingId: {whiteBrandingId}")
End Sub
```
