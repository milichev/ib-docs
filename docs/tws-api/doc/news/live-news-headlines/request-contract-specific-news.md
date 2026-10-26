[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/live-news-headlines/request-contract-specific-news)

# Request Contract Specific News

#### EClient.reqMktData (

**reqId:** int. Request identifier for tracking data.

**contract:** Contract. Contract object used for specifying an instrument.

**genericTickList:** String. Comma separated ids of the available generic ticks.

**snapshot:** bool. Always set to false for news data.

**regulatorySnapshot:** bool. Always set to false for news data.

**mktDataOptions:** List\<TagValue>. Internal use only.\
)

Used to request market data typically, but can also be used to retrieve news. "mdoff" can be specified to disable standard market data while retrieving news.\
For news sources, genericTick 292 needs to be specified followed by a colon and the news provider's code.
