[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/option-chains/receive-option-chains)

# Receive Option Chains

#### EWrapper.securityDefinitionOptionParameter (

**reqId:** int. ID of the request initiating the callback.

**underlyingConId:** int. The conID of the underlying security.

**tradingClass:** String. The option trading class.

**multiplier:** String. The option multiplier.

**exchange:** String. Exchange for which the derivative is hosted.

**expirations:** HashSet. A list of the expiries for the options of this underlying on this exchange.

**strikes:** HashSet. A list of the possible strikes for options of this underlying on this exchange.\
)

Returns the option chain for an underlying on an exchange specified in reqSecDefOptParams There will be multiple callbacks to securityDefinitionOptionParameter if multiple exchanges are specified in reqSecDefOptParams

#### Python

```python
def securityDefinitionOptionParameter(self, reqId: int, exchange: str, underlyingConId: int, tradingClass: str, multiplier: str, expirations: SetOfString, strikes: SetOfFloat):
  print("SecurityDefinitionOptionParameter.", "ReqId:", reqId, "Exchange:", exchange, "Underlying conId:", underlyingConId, "TradingClass:", tradingClass, "Multiplier:", multiplier, "Expirations:", expirations, "Strikes:", strikes)
```

#### Java

```java
@Override
public void securityDefinitionOptionalParameter(int reqId, String exchange, int underlyingConId, String tradingClass, String multiplier, Set expirations, Set strikes) {
	System.out.println("Security Definition Optional Parameter: " + EWrapperMsgGenerator.securityDefinitionOptionalParameter(reqId, exchange, underlyingConId, tradingClass, multiplier, expirations, strikes));
}
```

#### C++

```cpp
void TestCppClient::securityDefinitionOptionalParameter(int reqId, const std::string& exchange, int underlyingConId, const std::string& tradingClass,
                                                        const std::string& multiplier, const std::set& expirations, const std::set& strikes) {
    printf("Security Definition Optional Parameter. Request: %d, Trading Class: %s, Multiplier: %s\n", reqId, tradingClass.c_str(), multiplier.c_str());
}
```

#### C#

```csharp
public void securityDefinitionOptionParameter(int reqId, string exchange, int underlyingConId, string tradingClass, string multiplier, HashSet expirations, HashSet strikes)
{
	Console.WriteLine("Security Definition Option Parameter. Reqest: {0}, Exchange: {1}, Undrelying contract id: {2}, Trading class: {3}, Multiplier: {4}, Expirations: {5}, Strikes: {6}", reqId, exchange, Util.IntMaxString(underlyingConId), tradingClass, multiplier, string.Join(", ", expirations), string.Join(", ", strikes));
}
```

#### VB.NET

```vbnet
Public Sub securityDefinitionOptionParameter(reqId As Integer, exchange As String, underlyingConId As Integer, tradingClass As String, multiplier As String, expirations As HashSet(Of String), strikes As HashSet(Of Double)) Implements EWrapper.securityDefinitionOptionParameter
            Console.WriteLine("securityDefinitionOptionParameter: " & reqId & " tradingClass: " & tradingClass & " multiplier: ")
End Sub
```
