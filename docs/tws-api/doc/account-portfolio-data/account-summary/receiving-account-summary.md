[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-summary/receiving-account-summary)

# Receiving Account Summary

#### EWrapper.accountSummary (

**reqId:** int. the request's unique identifier.

**account:** String. the account id

**tag:** String. the account's attribute being received.

**value:** String. the account's attribute's value.

**currency:** String. the currency on which the value is expressed.

)

Receives the account information. This method will receive the account information just as it appears in the TWS' Account Summary Window.

#### Python

```python
def accountSummary(self, reqId: int, account: str, tag: str, value: str,currency: str):
  print("AccountSummary. ReqId:", reqId, "Account:", account,"Tag: ", tag, "Value:", value, "Currency:", currency)
```

#### Java

```java
@Override
public void accountSummary(int reqId, String account, String tag, String value, String currency) {
    System.out.println(EWrapperMsgGenerator.accountSummary(reqId, account, tag, value, currency));
}
```

#### C++

```cpp
void TestCppClient::accountSummary( int reqId, const std::string& account, const std::string& tag, const std::string& value, const std::string& currency) {
    printf( "Acct Summary. ReqId: %d, Account: %s, Tag: %s, Value: %s, Currency: %s\n", reqId, account.c_str(), tag.c_str(), value.c_str(), currency.c_str());
}
```

#### C#

```csharp
public virtual void accountSummary(int reqId, string account, string tag, string value, string currency)
{
    Console.WriteLine("Acct Summary. ReqId: " + reqId + ", Acct: " + account + ", Tag: " + tag + ", Value: " + value + ", Currency: " + currency);
}
```

#### VB.NET

```vbnet
Public Sub accountSummary(reqId As Integer, account As String, tag As String, value As String, currency As String) Implements IBApi.EWrapper.accountSummary
    Console.WriteLine("AccountSummary - ReqId [" & reqId & "] Account [" & account & "] Tag [" & tag & "] Value [" & value & "] Currency [" & currency & "]")
End Sub
```

#### EWrapper.accountSummaryEnd(

**reqId:** String. The request's identifier.

)

Notifies when all the accounts' information has ben received. Requires TWS 967+ to receive accountSummaryEnd in linked account structures.

#### Python

```python
def accountSummaryEnd(self, reqId: int):
    print("AccountSummaryEnd. ReqId:", reqId)
```

#### Java

```java
@Override
public void accountSummaryEnd(int reqId) {
    System.out.println("Account Summary End. Req Id: " + EWrapperMsgGenerator.accountSummaryEnd(reqId));
}
```

#### C++

```cpp
void TestCppClient::accountSummaryEnd( int reqId) {
    printf( "AccountSummaryEnd. Req Id: %d\n", reqId);
}
```

#### C#

```csharp
public virtual void accountSummaryEnd(int reqId)
{
    Console.WriteLine("AccountSummaryEnd. Req Id: "+reqId+"\n");
}
```

#### VB.NET

```vbnet
Public Sub accountSummaryEnd(reqId As Integer) Implements IBApi.EWrapper.accountSummaryEnd
    Console.WriteLine("AccountSummaryEnd - ReqId [" & reqId & "]")
End Sub
```
