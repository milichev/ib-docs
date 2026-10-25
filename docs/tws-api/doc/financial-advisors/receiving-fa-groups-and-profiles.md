[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/receiving-fa-groups-and-profiles)

# Receiving FA Groups and Profiles

#### EWrapper.receiveFA (

**faDataType:** int. Receive the faDataType value specified in the requestFA. See [FA Data Types](#fa-data-types)

**faXmlData:** String. The xml-formatted configuration.\
)

Receives the Financial Advisor's configuration available in the TWS.

#### Python

```python
def receiveFA(self, faData: FaDataType, cxml: str):
	print("Receiving FA: ", faData)
	open('log/fa.xml', 'w').write(cxml)
```

#### Java

```java
@Override
public void receiveFA(int faDataType, String xml) {
	System.out.println("Receiving FA: " + faDataType + " - " + xml);
}
```

#### C++

```cpp
void TestCppClient::receiveFA(faDataType pFaDataType, const std::string& cxml) {
    std::cout << "Receiving FA: " << (int)pFaDataType << std::endl << cxml << std::endl;
}
```

#### C#

```csharp
public virtual void receiveFA(int faDataType, string faXmlData)
{
	Console.WriteLine("Receing FA: "+faDataType+" - "+faXmlData);
}
```

#### VB.NET

```vbnet
Public Sub receiveFA(faDataType As Integer, faXmlData As String) Implements IBApi.EWrapper.receiveFA
  Console.WriteLine("Receing FA: " & faDataType & " - " & faXmlData)
End Sub
```
