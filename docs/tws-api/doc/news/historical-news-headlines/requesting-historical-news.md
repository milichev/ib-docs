[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/historical-news-headlines/requesting-historical-news)

# Requesting Historical News

#### EClient.reqHistoricalNews (

**requestId:** int. Request identifier used to track data.

**conId:** int. Contract id of ticker. See Contract Details for how to retrieve conId.

**providerCodes:** String. A '+'-separated list of provider codes.

**startDateTime:** String. Marks the (exclusive) start of the date range. The format is yyyy-MM-dd HH:mm:ss.\
You can set either startDateTime or endDateTime. If both are set, endDateTime is ignored.

**endDateTime:** String. Marks the (inclusive) end of the date range. The format is yyyy-MM-dd HH:mm:ss.\
You can set either startDateTime or endDateTime. If both are set, endDateTime is ignored.

**totalResults:** int. The maximum number of headlines to fetch (1 – 300)

**historicalNewsOptions:** Null. Reserved for internal use. Should be defined as null.\
)

Requests historical news headlines.

#### Python

```python
self.reqHistoricalNews(reqId, 8314, "BRFG", "", "", 10, [])
```

#### Java

```java
client.reqHistoricalNews(reqId, 8314, "BZ+FLY", "", "", 10, null);
```

#### C++

```cpp
TagValueList* list = new TagValueList();
list->push_back((TagValueSPtr)new TagValue("manual", "1"));
m_pClient->reqHistoricalNews(reqId, 8314, "BZ+FLY", "", "", 5, TagValueListSPtr(list));
```

#### C#

```csharp
client.reqHistoricalNews(reqId, 8314, "BZ+FLY", "", "", 10, null);
```

#### VB.NET

```vbnet
client.reqHistoricalNews(reqId, 8314, "BZ+FLY", "", "", 10, Nothing)
```
