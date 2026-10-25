[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-update-by-model/receiving-account-updates-by-model)

# Receiving Account Updates by Model

The resulting account and portfolio information will be delivered via the IBApi.EWrapper.accountUpdateMulti and IBApi.EWrapper.accountUpdateMultiEnd

#### EWrapper.accountUpdateMulti (

**requestId:** int. The id of request.

**account:** String. The account with updates.

**modelCode:** String. The model code with updates.

**key:** String. The name of parameter.

**value:** String. The value of parameter.

**currency:** String. The currency of parameter.\
)

Provides the account updates.

#### Python

```python
def accountUpdateMulti(self, reqId: int, account: str, modelCode: str, key: str, value: str, currency: str):
  print("AccountUpdateMulti. RequestId:", reqId, "Account:", account, "ModelCode:", modelCode, "Key:", key, "Value:", value, "Currency:", currency)
```

#### Java

```java
@Override
public void accountUpdateMulti(int reqId, String account, String modelCode, String key, String value, String currency) {
    System.out.println("Account Update Multi: " + EWrapperMsgGenerator.accountUpdateMulti(reqId, account, modelCode, key, value, currency));
}
```

#### C++

```cpp
void TestCppClient::accountUpdateMulti( int reqId, const std::string& account, const std::string& modelCode, const std::string& key, const std::string& value, const std::string& currency) {
    printf("AccountUpdate Multi. Request: %d, Account: %s, ModelCode: %s, Key, %s, Value: %s, Currency: %s\n", reqId, account.c_str(), modelCode.c_str(), key.c_str(), value.c_str(), currency.c_str());
}
```

#### C#

```csharp
public virtual void accountUpdateMulti(int reqId, string account, string modelCode, string key, string value, string currency)
{
    Console.WriteLine("Account Update Multi. Request: " + reqId + ", Account: " + account + ", ModelCode: " + modelCode + ", Key: " + key + ", Value: " + value + ", Currency: " + currency + "\n");
}
```

#### VB.NET

```vbnet
Public Sub accountUpdateMulti(requestId As Integer, account As String, modelCode As String, key As String, value As String, currency As String) Implements IBApi.EWrapper.accountUpdateMulti
    Console.WriteLine("accountUpdateMulti. Id: " & requestId & ", Account: " & account & ", modelCode: " & modelCode & ", key: " & key & ", value: " & value & ", currency: " & currency)
End Sub
```

#### EWrapper.accountUpdateMultiEnd (

**requestId:** int. The id of request

)

Indicates all the account updates have been transmitted.

#### Python

```python
def accountUpdateMultiEnd(self, reqId: int):
    print("AccountUpdateMultiEnd. RequestId:", reqId)
```

#### Java

```java
@Override
public void accountUpdateMultiEnd(int reqId, ) {
    System.out.println( "Account Update Multi End: " + EWrapperMsgGenerator.accountUpdateMultiEnd(reqId));
}
```

#### C++

```cpp
void TestCppClient::accountUpdateMultiEnd( int reqId) {
    printf("Account Update Multi End. Request: %d\n", reqId);
}
```

#### C#

```csharp
public virtual void accountUpdateMultiEnd(int reqId)
{
    Console.WriteLine("Account Update Multi End. Request: " + reqId + "\n");
}
```

#### VB.NET

```vbnet
Public Sub accountUpdateMultiEnd(requestId As Integer) Implements IBApi.EWrapper.accountUpdateMultiEnd
    Console.WriteLine("accountUpdateMultiEnd. id: " & requestId)
End Sub
```
