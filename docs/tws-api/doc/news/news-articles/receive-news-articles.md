[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/news-articles/receive-news-articles)

# Receive News Articles

#### EWrapper.newsArticle (

**requestId:** int. Request identifier used to track data.

**articleType:** int. The type of news article (0 – plain text or html, 1 – binary data / pdf).

**articleText:** String. The body of article (if articleType == 1, the binary data is encoded using the Base64 scheme).\
)

Called when receiving a News Article in response to reqNewsArticle().
