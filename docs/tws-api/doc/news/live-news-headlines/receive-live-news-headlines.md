[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/live-news-headlines/receive-live-news-headlines)

# Receive Live News Headlines

#### EWrapper.tickNews (

**tickerId:** int. Request identifier used to track data.

**timeStamp:** int. Epoch time of the article's published time.

**providerCode:** String. News provider code based on requested data.

**articleId:** String. Identifier used to track the particular article. See [News Article](../news-articles/introduction.md) for more.

**headline:** String. Headline of the provided news article.

**extraData:** String. Returns any additional data available about the article.\
)

Returns news headlines for requested contracts.

#### Python

```python
def tickNews(self, tickerId: int, timeStamp: int, providerCode: str, articleId: str, headline: str, extraData: str):
  print("TickNews. TickerId:", tickerId, "TimeStamp:", timeStamp, "ProviderCode:", providerCode, "ArticleId:", articleId, "Headline:", headline, "ExtraData:", extraData)
```

#### Java

```java
@Override
public void tickNews(int tickerId, long timeStamp, String providerCode, String articleId, String headline, String extraData) {
	System.out.println(EWrapperMsgGenerator.tickNews(tickerId, timeStamp, providerCode, articleId, headline, extraData));
}
```

#### C++

```cpp
void TestCppClient::tickNews(int tickerId, time_t timeStamp, const std::string& providerCode, const std::string& articleId, const std::string& headline, const std::string& extraData) {
    printf("News Tick. TickerId: %d, TimeStamp: %s, ProviderCode: %s, ArticleId: %s, Headline: %s, ExtraData: %s\n", tickerId, ctime(&(timeStamp /= 1000)), providerCode.c_str(), articleId.c_str(), headline.c_str(), extraData.c_str());
}
```

#### C#

```csharp
public void tickNews(int tickerId, long timeStamp, string providerCode, string articleId, string headline, string extraData)
{
	Console.WriteLine("Tick News. Ticker Id: {0}, Time Stamp: {1}, Provider Code: {2}, Article Id: {3}, headline: {4}, extraData: {5}", tickerId, Util.LongMaxString(timeStamp), providerCode, articleId, headline, extraData);
}
```

#### VB.NET

```vbnet
Public Sub tickNews(tickerId As Integer, timeStamp As Long, providerCode As String, articleId As String, headline As String, extraData As String) Implements IBApi.EWrapper.tickNews
	Console.WriteLine("Tick News. Ticker Id: " & tickerId & ", Time Stamp: " & Util.LongMaxString(timeStamp) & ", Provider Code: " & providerCode & ", Article Id: " & articleId & ", Headline: " & headline & ", Extra Data: " & extraData)
End Sub
```
