[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/news-articles/request-news-articles)

# Request News Articles

#### EClient.reqNewsArticle (

**requestId:** int. id of the request.

**providerCode:** String. Short code indicating news provider, e.g. FLY.

**articleId:** String. Id of the specific article.

**newsArticleOptions:** List. Reserved for internal use. Should be defined as null.\
)

Requests news article body given articleId.

#### Java

```java
client.reqNewsArticle(10002, "BZ", "BZ$04507322", null);
```
