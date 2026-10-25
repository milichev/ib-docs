[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/replace-fa-allocations)

# Replace FA Allocations

#### EClient.replaceFA (

**reqId:** int. Request identifier used to track data.

**faDataType:** int. The configuration structure to change. Set to 1 or 3 as defined above.

**xml:** String. XML configuration for allocation profiles or group. See [Allocation Method XML Format](allocation-method-xml-format/introduction.md) for more details.\
)

#### Python

```python
self.replaceFa(reqId, 1, xml)
```

#### Java

```java
client.replaceFa(reqId, 1, xml);
```

#### C++

```cpp
m_pClient->replaceFa(reqId, 1, xml);
```

#### C#

```csharp
client.replaceFa(reqId, 1, xml);
```

#### VB.NET

```vbnet
client.replaceFa(reqId, 1, xml)
```

#### replaceFA FA Data Types

| replaceFA Type Code | Type Name       | Description                                                                                                          |
| ------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1                   | Groups          | offer traders a way to create a group of accounts and apply a single allocation method to all accounts in the group. |
| 2                   | Account Aliases | let you easily identify the accounts by meaningful names rather than account numbers.                                |

**Note:**

In order to confirm that your FA changes were saved, you may wait for the [EWrapper.replaceFAEnd](receiving-fa-groups-and-profiles.md) callback, which provides the corresponding reqId. In addition, after saving changes, it is advised to verify the new FA setup via [EClient.requestFA](request-fa-groups-and-profiles.md). If it is called before changes are fully saved, you may receive an error, such as error 10230. See Message Codes.

[EClient.replaceFA](replace-fa-allocations.md) only accepts faDataType 1 now. Otherwise, it may trigger [error 585](../error-handling/error-codes.md).

#### EWrapper.replaceFAEnd (

**reqId:** int. Request identifier used to track data.

**text:** String. the message text.

)

Marks the ending of the replaceFA reception.

#### Python

```python
def replaceFAEnd(self, reqId: int, text: str):
    super().replaceFAEnd(reqId, text)
    print("ReplaceFAEnd.", "ReqId:", reqId, "Text:", text)
```

#### Java

```java
@Override
public void replaceFAEnd(int reqId, String text) {
        System.out.println(EWrapperMsgGenerator.replaceFAEnd(reqId, text));
}
```

#### C++

```cpp
void TestCppClient::replaceFAEnd(int reqId, const std::string& text) {
    printf("Replace FA End. Request: %d, Text:%s\n", reqId, text.c_str());
}
```

#### C#

```csharp
public virtual void replaceFAEnd(int reqId, string text)
{
    Console.WriteLine("Replace FA End. ReqId: " + reqId + ", Text: " + text + "\n");
}
```

#### VB.NET

```vbnet
Public Sub replaceFAEnd(reqId As Integer, text As String) Implements IBApi.EWrapper.replaceFAEnd
    Console.WriteLine("replaceFAEnd. ReqId: {0}, Text: {1}", reqId, text)
End Sub
```
