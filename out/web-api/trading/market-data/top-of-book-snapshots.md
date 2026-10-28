[source](https://www.interactivebrokers.com/docs/web-api/trading/market-data/top-of-book-snapshots)

# Top-of-Book Snapshots

Top-of-book snapshots deliver up-to-date market data values sourced from the same streams as are displayed in Trader Workstation's watchlists.

##### **Values needed:**

* Contract ID ("conid") for the desired instrument(s)
* Tag identifiers for the desired data points ("fields")

A `GET` request to the `/iserver/marketdata/snapshot` \[ref\] endpoint is used to retrieve a snapshot of top-of-book market data for one or more instruments. This endpoint takes two required query parameters:

* `conids`: A comma-separated list of instrument conids
* `fields`: A comma-separated list of field tags. A comprehensive list of available tags can be found in our Reference material.

In order for the desired data to be available for snapshotting on request, a "pre-flight" request must be made to IServer to begin its consumption of the instrument's live data stream.

This initial request will not deliver any data, but rather makes the stream available for future snapshot requests. Snapshot market data is not cached and is extracted directly from these open streams.

This pre-flight request should include in its `fields` parameter all of the tags desired in the future:

`GET https://api.ibkr.com/v1/api/iserver/marketdata/snapshot?conids=265598,8314&fields=31,7059,84,88,86,85`

If this is the first time you've made a `/iserver/marketdata/snapshot` request for `conids` 265598 and 8314, you will not receive data in response. Instead you'll see the requested `conids` returned, indicating that IServer is now streaming data for these instruments.

```json
{[
  {
    "conid": 265598,
    "conidEx": "265598"
  },
  {
    "conid": 8314,
    "conidEx": "8314"
  }
]}
```

Once a pre-flight request has been made for a given `conid`, all requested `fields` will be delivered with all future responses; future snapshot requests do not need to repeat the desired `fields`:

GET [https://api.ibkr.com/v1/api/iserver/marketdata/snapshot?conids=265598,8314](https://api.ibkr.com/v1/api/iserver/marketdata/snapshot?conids=265598,8314)

Returns:

```json
{[
  {
    "31": "168.42",
    "6119": "q1",
    "6509": "RpB",
    "7059": "100",
    "84": "168.41",
    "85": "600",
    "86": "168.42",
    "88": "1,300",
    "_updated": 1712596911593,
    "conid": 265598,
    "conidEx": "265598",
    "server_id": "q1"
  },
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
    "server_id": "q2"
  }
]}
```

Certain `fields` that update less frequently, particularly those that are computed on an interval, maybe not be delivered immediately, and instead will be returned when updated.
