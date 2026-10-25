[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/stock-symbol-search/receive-searched-stock-contract)

# Receive Searched Stock Contract

#### EWrapper.symbolSamples (

**reqID:** int. Request identifier used to track data.

**contractDescription:** ContractDescription\[]. Provide an array of contract objects matching the requested descriptoin.\
)

Returns array of sample contract descriptions

#### Python

```python
def symbolSamples(self, reqId: int, contractDescriptions: ListOfContractDescription):
	print("Symbol Samples. Request Id: ", reqId)
	for contractDescription in contractDescriptions:
		derivSecTypes = ""
		for derivSecType in contractDescription.derivativeSecTypes:
			derivSecTypes += " "
			derivSecTypes += derivSecType
			print("Contract: conId:%s, symbol:%s, secType:%s primExchange:%s, "
				"currency:%s, derivativeSecTypes:%s, description:%s, issuerId:%s" % (
				contractDescription.contract.conId,
				contractDescription.contract.symbol,
				contractDescription.contract.secType,
				contractDescription.contract.primaryExchange,
				contractDescription.contract.currency, derivSecTypes,
				contractDescription.contract.description,
				contractDescription.contract.issuerId))
```

#### Java

```java
@Override
public void symbolSamples(int reqId, ContractDescription[] contractDescriptions) {
	System.out.println(EWrapperMsgGenerator.symbolSamples(reqId, contractDescriptions));
}
```

#### C++

```cpp
void TestCppClient::symbolSamples(int reqId, const std::vector &contractDescriptions) {
    printf("Symbol Samples (total=%lu) reqId: %d\n", contractDescriptions.size(), reqId);
    for (unsigned int i = 0; i < contractDescriptions.size(); i++) {
        Contract contract = contractDescriptions[i].contract;
        std::vector derivativeSecTypes = contractDescriptions[i].derivativeSecTypes;
        printf("Contract (%u): conId: %ld, symbol: %s, secType: %s, primaryExchange: %s, currency: %s, ", i, contract.conId, contract.symbol.c_str(), contract.secType.c_str(), contract.primaryExchange.c_str(), contract.currency.c_str());
        printf("Derivative Sec-types (%lu):", derivativeSecTypes.size());
        for (unsigned int j = 0; j < derivativeSecTypes.size(); j++) {
            printf(" %s", derivativeSecTypes[j].c_str());
        }
        printf(", description: %s, issuerId: %s", contract.description.c_str(), contract.issuerId.c_str());
        printf("\n");
    }
}
```

#### C#

```csharp
public void symbolSamples(int reqId, ContractDescription[] contractDescriptions) 
{
	string derivSecTypes;
	Console.WriteLine("Symbol Samples. Request Id: {0}", reqId);
	foreach (var contractDescription in contractDescriptions)
	{
		derivSecTypes = "";
		foreach (var derivSecType in contractDescription.DerivativeSecTypes)
		{
			derivSecTypes += derivSecType;
			derivSecTypes += " ";
		}
		Console.WriteLine("Contract: conId - {0}, symbol - {1}, secType - {2}, primExchange - {3}, currency - {4}, derivativeSecTypes - {5}, description - {6}, issuerId - {7}", 
			contractDescription.Contract.ConId, contractDescription.Contract.Symbol, contractDescription.Contract.SecType, 
			contractDescription.Contract.PrimaryExch, contractDescription.Contract.Currency, derivSecTypes, contractDescription.Contract.Description, contractDescription.Contract.IssuerId);
	}
}
```

#### VB.NET

```vbnet
Public Sub symbolSamples(reqId As Integer, contractDescriptions As ContractDescription()) Implements EWrapper.symbolSamples
	Dim derivSecTypes As String
	Console.WriteLine("Symbol Samples. Request Id: " & reqId)
	For Each contractDescription In contractDescriptions
		derivSecTypes = ""
		For Each derivSecType In contractDescription.DerivativeSecTypes
			derivSecTypes += derivSecType
			derivSecTypes += " "
		Next
		Console.WriteLine("Contract conId: " & contractDescription.Contract.ConId & ", symbol: " & contractDescription.Contract.Symbol &
						  ", secType: " & contractDescription.Contract.SecType & ", primExchange: " & contractDescription.Contract.PrimaryExch &
						  ", currency: " & contractDescription.Contract.Currency & ", derivativeSecTypes: " & derivSecTypes &
						  ", description: " & contractDescription.Contract.Description & ", issuerId: " & contractDescription.Contract.IssuerId)
	Next
End Sub
```
