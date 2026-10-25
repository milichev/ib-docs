[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/historical-news-headlines/receive-historical-news)

# Receive Historical News

#### EWrapper.historicalNews (

**requestId:** int. Request identifier used to track data.

**time:** int. Epoch time of the article's published time.

**providerCode:** String. News provider code based on requested data.

**articleId:** String. Identifier used to track the particular article. See [News Article](../news-articles/introduction.md) for more.

**headline:** String. Headline of the provided news article.\
)

Returns news headlines for requested contracts.

#### Python

```python
def historicalNews(self, requestId: int, time: int, providerCode: str, articleId: str, headline: str):
  print("historicalNews. RequestId:", requestId, "Time:", time, "ProviderCode:", providerCode, "ArticleId:", articleId, "Headline:", headline)
```

#### Java

```java
@Override
public void historicalNews(int requestId, long time, String providerCode, String articleId, String headline) {
	System.out.println( EWrapperMsgGenerator.historicalNews( requestId, time, providerCode, articleId, headline));
}
```

#### C++

```cpp
void TestCppClient::historicalNews(int requestId, time_t time, const std::string& providerCode, const std::string& articleId, const std::string& headline) {
    printf("historicalNews. RequestId: %d, Time: %s, ProviderCode: %s, ArticleId: %s, Headline: %s\n", requestId, ctime(&(time /= 1000)), providerCode.c_str(), articleId.c_str(), headline.c_str());
}
```

#### C#

```csharp
public void historicalNews(int requestId, long time, string providerCode, string articleId, string headline)
{
	Console.WriteLine("historicalNews. RequestId: {0}, Time Stamp: {1}, Provider Code: {2}, Article Id: {3}, headline: {4}, extraData: {5}", requestId, Util.LongMaxString(time), providerCode, articleId, headline);
}
```

#### VB.NET

```vbnet
Public Sub historicalNews(requestId As Integer, time As Long, providerCode As String, articleId As String, headline As String) Implements IBApi.EWrapper.tickNews
	Console.WriteLine("Tick News. Ticker Id: " & tickerId & ", Time: " & Util.LongMaxString(time) & ", Provider Code: " & providerCode & ", Article Id: " & articleId & ", Headline: " & headline)
End Sub
```

#### EWrapper.historicalNewsEnd (

**requestId:** int. Request identifier used to track data.

**hasMore:** bool. Returns whether there is more data (true) or not (false).\
)

Returns news headlines end marker

#### Python

```python
def historicalDataEnd(self, reqId: int, hasMore: bool):
    print("historicalDataEnd. ReqId:", reqId, "Has More:", hasMore)
```

#### Java

```java
@Override
public void historicalDataEnd(int reqId, bool hasMore) {
    System.out.println("historicalDataEnd. Req Id: " + EWrapperMsgGenerator.historicalDataEnd(reqId, hasMore));
}
```

#### C++

```cpp
void TestCppClient::historicalDataEnd( int reqId, bool hasMore) {
    printf( "historicalDataEnd. Req Id: %d\n", reqId);
}
```

#### C#

```csharp
public virtual void historicalDataEnd(int reqId, bool hasMore)
{
    Console.WriteLine("historicalDataEnd. Req Id: "+reqId+"\n");
}
```

#### Generic

```generic
Public Sub historicalDataEnd(reqId As Integer, hasMore as Boolean) Implements IBApi.EWrapper.historicalDataEnd
    Console.WriteLine("historicalDataEnd - ReqId [" & reqId & "]")
End Sub
```
