[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-updates/receiving-account-updates)

# Receiving Account Updates

Resulting account and portfolio information will be delivered via the IBApi.EWrapper.updateAccountValue, IBApi.EWrapper.updatePortfolio, IBApi.EWrapper.updateAccountTime and IBApi.EWrapper.accountDownloadEnd

#### EWrapper.updateAccountValue (

**key:** String. The value being updated.

**value:** String. up-to-date value

**currency:** String. The currency on which the value is expressed.

**accountName:** String. The account identifier.\
)

Receives the subscribed account's information. Only one account can be subscribed at a time. After the initial callback to updateAccountValue, callbacks only occur for values which have changed. This occurs at the time of a position change, or every 3 minutes at most. This frequency cannot be adjusted.

**Note:** An important key passed back in EWrapper.updateAccountValue after a call to EClient.reqAccountUpdates is a boolean value 'accountReady'. If an accountReady value of false is returned that means that the IB server is in the process of resetting at that moment, i.e. the account is 'not ready'. When this occurs subsequent key values returned to EWrapper.updateAccountValue in the current update can be out of date or incorrect.

#### Python

```python
def updateAccountValue(self, key: str, val: str, currency: str,accountName: str):
    print("UpdateAccountValue. Key:", key, "Value:", val, "Currency:", currency, "AccountName:", accountName)
```

#### Java

```java
@Override
public void updateAccountValue(String key, String value, String currency, String accountName) {
    System.out.println(EWrapperMsgGenerator.updateAccountValue( key, value, currency, accountName));
}
```

#### C++

```cpp
void TestCppClient::updateAccountValue(const std::string& key, const std::string& val, const std::string& currency, const std::string& accountName) {
    printf("UpdateAccountValue. Key: %s, Value: %s, Currency: %s, Account Name: %s\n", key.c_str(), val.c_str(), currency.c_str(), accountName.c_str());
}
```

#### C#

```csharp
public virtual void updateAccountValue(string key, string value, string currency, string accountName)
{
    Console.WriteLine("UpdateAccountValue. Key: " + key + ", Value: " + value + ", Currency: " + currency + ", AccountName: " + accountName);
}
```

#### VB.NET

```vbnet
Public Sub updateAccountValue(key As String, value As String, currency As String, accountName As String) Implements IBApi.EWrapper.updateAccountValue
        Console.WriteLine("UpdateAccountValue. Key: " & key & ", Value: " & value & ", Currency: " & currency & ", AccountName: " & accountName)
End Sub
```

#### EWrapper.updatePortfolio (

**contract:** Contract. The Contract for which a position is held.

**position:** Decimal. The number of positions held.

**marketPrice:** Double. The instrument's unitary price

**marketValue:** Double. Total market value of the instrument.

**averageCost:** Double. Average cost of the overall position.

**unrealizedPNL:** Double. Daily unrealized profit and loss on the position.

**realizedPNL:** Double. Daily realized profit and loss on the position.

**accountName:** String. Account ID for the update.

)

Receives the subscribed account's portfolio. This function will receive only the portfolio of the subscribed account. After the initial callback to updatePortfolio, callbacks only occur for positions which have changed.

#### Python

```python
def updatePortfolio(self, contract: Contract, position: Decimal,marketPrice: float, marketValue: float, averageCost: float, unrealizedPNL: float, realizedPNL: float, accountName: str):
    print("UpdatePortfolio.", "Symbol:", contract.symbol, "SecType:", contract.secType, "Exchange:",contract.exchange, "Position:", decimalMaxString(position), "MarketPrice:", floatMaxString(marketPrice),"MarketValue:", floatMaxString(marketValue), "AverageCost:", floatMaxString(averageCost), "UnrealizedPNL:", floatMaxString(unrealizedPNL), "RealizedPNL:", floatMaxString(realizedPNL), "AccountName:", accountName)
```

#### Java

```java
@Override
public void updatePortfolio(Contract contract, Decimal position, double marketPrice, double marketValue, double averageCost, double unrealizedPNL, double realizedPNL, String accountName) {
    System.out.println(EWrapperMsgGenerator.updatePortfolio( contract, position, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, accountName));
}
```

#### C++

```cpp
void TestCppClient::updatePortfolio(const Contract& contract, Decimal position, double marketPrice, double marketValue, double averageCost, double unrealizedPNL, double realizedPNL, const std::string& accountName){
    printf("UpdatePortfolio. %s, %s @ %s: Position: %s, MarketPrice: %s, MarketValue: %s, AverageCost: %s, UnrealizedPNL: %s, RealizedPNL: %s, AccountName: %s\n", (contract.symbol).c_str(), (contract.secType).c_str(), (contract.primaryExchange).c_str(), decimalStringToDisplay(position).c_str(), Utils::doubleMaxString(marketPrice).c_str(), Utils::doubleMaxString(marketValue).c_str(), Utils::doubleMaxString(averageCost).c_str(), Utils::doubleMaxString(unrealizedPNL).c_str(), Utils::doubleMaxString(realizedPNL).c_str(), accountName.c_str());
}
```

#### C#

```csharp
public virtual void updatePortfolio(Contract contract, decimal position, double marketPrice, double marketValue, double averageCost, double unrealizedPNL, double realizedPNL, string accountName)
{
    Console.WriteLine("UpdatePortfolio. " + contract.Symbol + ", " + contract.SecType + " @ " + contract.Exchange + ": Position: " + Util.DecimalMaxString(position) + ", MarketPrice: " + Util.DoubleMaxString(marketPrice) + ", MarketValue: " + Util.DoubleMaxString(marketValue) +  ", AverageCost: " + Util.DoubleMaxString(averageCost) + ", UnrealizedPNL: " + Util.DoubleMaxString(unrealizedPNL) + ", RealizedPNL: " + Util.DoubleMaxString(realizedPNL) +  ", AccountName: " + accountName);
}
```

#### VB.NET

```vbnet
Public Sub updatePortfolio(contract As IBApi.Contract, position As Decimal, marketPrice As Double, marketValue As Double, averageCost As Double, unrealizedPNL As Double, realizedPNL As Double, accountName As String) Implements IBApi.EWrapper.updatePortfolio
        Console.WriteLine("UpdatePortfolio. " & contract.Symbol & ", " & contract.SecType & " @ " & contract.Exchange & ": Position: " & Util.DecimalMaxString(position) & ", MarketPrice: " & Util.DoubleMaxString(marketPrice) & ", MarketValue: " & Util.DoubleMaxString(marketValue) & ", AverageCost: " & Util.DoubleMaxString(averageCost) & ", UnrealizedPNL: " & Util.DoubleMaxString(unrealizedPNL) & ", RealizedPNL: " & Util.DoubleMaxString(realizedPNL) & ", AccountName: " & accountName)
End Sub
```

#### EWrapper.updateAccountTime (

**timestamp:** String. the last update system time.

)

Receives the last time on which the account was updated.

#### Python

```python
def updateAccountTime(self, timeStamp: str):
     print("UpdateAccountTime. Time:", timeStamp)
```

#### Java

```java
@Override
public void updateAccountTime(String timeStamp) {
    System.out.println(EWrapperMsgGenerator.updateAccountTime( timeStamp));
}
```

#### Java

```java
void TestCppClient::updateAccountTime(const std::string& timeStamp) {
    printf( "UpdateAccountTime. Time: %s\n", timeStamp.c_str());
}
```

#### C#

```csharp
public virtual void updateAccountTime(string timestamp)
{
        Console.WriteLine("UpdateAccountTime. Time: " + timestamp+"\n");
}
```

#### VB.NET

```vbnet
Public Sub updateAccountTime(timestamp As String) Implements IBApi.EWrapper.updateAccountTime
    Console.WriteLine("UpdateAccountTime. Time: " & timestamp)
End Sub
```

#### EWrapper.accountDownloadEnd (

**account:** String. The account identifier.

)

Notifies when all the account's information has finished.

#### Python

```python
def accountDownloadEnd(self, accountName: str):
    print("AccountDownloadEnd. Account:", accountName)
```

#### Java

```java
@Override
public void accountDownloadEnd(String accountName) {
    System.out.println(EWrapperMsgGenerator.accountDownloadEnd(accountName));
}
```

#### C++

```cpp
void TestCppClient::accountDownloadEnd(const std::string& accountName) {
    printf( "Account download finished: %s\n", accountName.c_str());
}
```

#### C#

```csharp
public virtual void accountDownloadEnd(string account)
{
    Console.WriteLine("Account download finished: "+account+"\n");
}
```

#### VB.NET

```vbnet
Public Sub accountDownloadEnd(account As String) Implements IBApi.EWrapper.accountDownloadEnd
    Console.WriteLine("accountDownloadEnd - Account[" & account & "]")
End Sub
```
