[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/update-display-group)

# Update Display Group

#### EClient.updateDisplayGroup (

**requestId:** int. Request identifier used for tracking data.

**contractInfo:** String. An encoded value designating a unique IB contract. Possible values include:

* none: Empty selection
* contractID: Any non-combination contract. Examples 8314 for IBM SMART; 8314 for IBM ARCA
* combo: If any combo is selected Note: This request from the API does not get a TWS response unless an error occurs.\
  )

Updates the contract displayed in a TWS Window Group.

#### Python

```python
self.updateDisplayGroup(19002, "8314@SMART")
```

#### Java

```java
client.updateDisplayGroup(9002, "8314@SMART");
```

#### C++

```cpp
m_pClient->updateDisplayGroup(9002, "8314@SMART");
```

#### C#

```csharp
client.updateDisplayGroup(9002, "8314@SMART");
```

#### VB.NET

```vbnet
client.updateDisplayGroup(9002, "8314@SMART")
```

**Note:** This request from the API does not get a response from TWS unless an error occurs.

In this sample we have commanded TWS Windows that chained with Group #1 to display IBM\@SMART. The screenshot of TWS Mosaic to the right shows that both the pink chained (Group #1) windows are now displaying IBM\@SMART, while the green chained (Group #4) window remains unchanged.

![Chained windows displaying IBM@SMART.](/docs/_fern-img/cac8e8cf60ea817cb256a787533a622e8ba104ec04d7e8b5b19e16e49b15bf24.webp)
