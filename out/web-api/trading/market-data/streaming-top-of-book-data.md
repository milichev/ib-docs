[source](https://www.interactivebrokers.com/docs/web-api/trading/market-data/streaming-top-of-book-data)

# Streaming Top-of-Book Data

To open a stream for live, top-of-book market data for an instrument, we write a message to the websocket in the following form:

`smd+CONID+{"fields":["field_1","field_2",...,"field_n"]}`

The values in the `fields` array are the same field tags used in the HTTP request to `/iserver/marketdata/snapshot`. These field tag values must be passed as JSON strings, wrapped in double-quotes.

For example, we may send the following message to obtain streaming data for IBM stock, conid 8314.

`smd+8314+{"fields":["31","84","85","86","88","7059"]}`

If successful, we will begin to receive response messages on websocket in the following format:

```json
{
  "31": "189.60",
  "6119": "q2",
  "6509": "RpB",
  "7059": "100",
  "84": "189.56",
  "85": "500",
  "86": "189.61",
  "88": "200",
  "_updated": 1712596911593,
  "conid": 8314,
  "conidEx": "8314",
  "server_id": "q2",
  "topic": "smd+8314"
}
```

We may cancel a top-of-book stream on the websocket by sending:

`umd+CONID+{}`

For example:

`umd+8314+{}`
