[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/managed-accounts/receive-managed-accounts)

# Receive Managed Accounts

#### EWrapper.managedAccounts (

**accountsList:** String. A comma-separated string with the managed account ids.

)

Returns a string of all available accounts for the logged in user. Occurs automatically on initial API client connection.

#### Python

```python
def managedAccounts(self, accountsList: str):
    print("Account list:", accountsList)
```

#### Java

```java
@Override
public void managedAccounts(String accountsList) {
	System.out.println("Account list: " + accountsList);
}
```

#### C++

```cpp
void TestCppClient::managedAccounts( const std::string& accountsList) {
    printf( "Account List: %s\n", accountsList.c_str());
}
```

#### C#

```csharp
public virtual void managedAccounts(string accountsList) 
{
	Console.WriteLine("Account list: "+accountsList);
}
```

#### VB.NET

```vbnet
Public Sub managedAccounts(accountsList As String) Implements IBApi.EWrapper.managedAccounts
	Console.WriteLine("ManagedAccounts - AccountsList [" & accountsList & "]")
End Sub
```
