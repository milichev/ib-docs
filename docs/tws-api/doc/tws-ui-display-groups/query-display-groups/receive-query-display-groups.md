[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/query-display-groups/receive-query-display-groups)

# Receive Query Display Groups

#### EWrapper.displayGroupList (

**requestId:** Request identifier used to track data.

**groups:** String. Returns a list of integers representing visible Group ID separated by the "|" character, and sorted by most used group first.\
)

A one-time response to querying the display groups.

#### Python

```python
def displayGroupList(self, reqId: int, groups: str):
  print("DisplayGroupList. ReqId:", reqId, "Groups", groups)
```

#### Java

```java
@Override
public void displayGroupList(int reqId, String groups) {
  System.out.println("Display Group List. ReqId: " + reqId + ", Groups: " + groups + "\n");
}
```

#### C++

```cpp
void TestCppClient::displayGroupList( int reqId, const std::string& groups) {
  printf("Display Group List. ReqId: %d, Groups: %s\n", reqId, groups.c_str());
}
```

#### C#

```csharp
public virtual void displayGroupList(int reqId, string groups)
{
  Console.WriteLine("DisplayGroupList. Request: " + reqId + ", Groups" + groups);
}
```

#### VB.NET

```vbnet
Public Sub displayGroupList(reqId As Integer, groups As String) Implements IBApi.EWrapper.displayGroupList
  Console.WriteLine("DisplayGroupList - ReqId [" & reqId & "] Groups [" & groups & "]")
End Sub
```
