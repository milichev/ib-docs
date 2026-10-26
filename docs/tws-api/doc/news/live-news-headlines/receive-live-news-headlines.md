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
