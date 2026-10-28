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

#### Java

```java
@Override
public void historicalNews(int requestId, long time, String providerCode, String articleId, String headline) {
	System.out.println( EWrapperMsgGenerator.historicalNews( requestId, time, providerCode, articleId, headline));
}
```

#### EWrapper.historicalNewsEnd (

**requestId:** int. Request identifier used to track data.

**hasMore:** bool. Returns whether there is more data (true) or not (false).\
)

Returns news headlines end marker

#### Java

```java
@Override
public void historicalDataEnd(int reqId, bool hasMore) {
    System.out.println("historicalDataEnd. Req Id: " + EWrapperMsgGenerator.historicalDataEnd(reqId, hasMore));
}
```

#### Generic

```generic
Public Sub historicalDataEnd(reqId As Integer, hasMore as Boolean) Implements IBApi.EWrapper.historicalDataEnd
    Console.WriteLine("historicalDataEnd - ReqId [" & reqId & "]")
End Sub
```
