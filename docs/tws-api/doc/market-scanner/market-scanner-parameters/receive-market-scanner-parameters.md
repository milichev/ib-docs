[source](https://www.interactivebrokers.com/docs/tws-api/doc/market-scanner/market-scanner-parameters/receive-market-scanner-parameters)

# Receive Market Scanner Parameters

#### EWrapper.scannerParameters (

**xml:** String. The xml-formatted string with the available parameters.\
)

Provides the xml-formatted parameters available from TWS market scanners (not all available in API).

#### Python

```python
def scannerParameters(self, xml: str):
	open('log/scanner.xml', 'w').write(xml)
	print("ScannerParameters received.")
```

#### Java

```java
@Override
public void scannerParameters(String xml) {
	System.out.println("ScannerParameters. " + xml + "\n");
}
```

#### C++

```cpp
void TestCppClient::scannerParameters(const std::string& xml) {
    printf( "ScannerParameters. %s\n", xml.c_str());
}
```

#### C#

```csharp
public virtual void scannerParameters(string xml)
{
	Console.WriteLine("ScannerParameters. "+xml+"\n");
}
```

#### VB.NET

```vbnet
Public Sub scannerParameters(xml As String) Implements IBApi.EWrapper.scannerParameters
	Console.WriteLine("ScannerParameters. " & xml & "\n")
End Sub
```
