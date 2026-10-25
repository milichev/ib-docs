[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/news-articles/request-news-articles)

# Request News Articles

#### EClient.reqNewsArticle (

**requestId:** int. id of the request.

**providerCode:** String. Short code indicating news provider, e.g. FLY.

**articleId:** String. Id of the specific article.

**newsArticleOptions:** List. Reserved for internal use. Should be defined as null.\
)

Requests news article body given articleId.

#### Python

```python
self.reqNewsArticle(10002,"BRFG", "BRFG$04fb9da2", [])
```

#### Java

```java
client.reqNewsArticle(10002, "BZ", "BZ$04507322", null);
```

#### C++

```cpp
TagValueList* list = new TagValueList();
m_pClient->reqNewsArticle(12001, "MST", "MST$06f53098", TagValueListSPtr(list));
```

#### C#

```csharp
client.reqNewsArticle(12002, "BZ", "BZ$04507322", null);
```

#### VB.NET

```vbnet
client.reqNewsArticle(10002, "BZ", "BZ$04507322", Nothing)
```
