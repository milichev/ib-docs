[source](https://www.interactivebrokers.com/docs/tws-api/ref/wsh-event-data)

# WshEventData

Class used to define the parameters for the EClient::reqWshEventData query to filter results.

| Field             | Type      | Description                                                                                                                                                                                                                                        |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ConId`           | `int`     | Contract identifier used to specify an unique contract                                                                                                                                                                                             |
| `Filter`          | `string`  | A JSON formatted string containing a minimum of string Country, and array watchlist tags. In addition, a unique filter may be specified as "true" in order to receive a specific filter. Filter values are returned from the wshMetaData function. |
| `FillWatchlist`   | `boolean` | Defines                                                                                                                                                                                                                                            |
| `FillPortfolio`   | `boolean` |                                                                                                                                                                                                                                                    |
| `FillCompetitors` | `boolean` |                                                                                                                                                                                                                                                    |
| `StartDate`       | `string`  | The beginning of your request formatting. Values should be represented like "YYYYMMDD".                                                                                                                                                            |
| `EndDate`         | `string`  | The end of your request formatting. Values should be represented like "YYYYMMDD".                                                                                                                                                                  |
| `TotalLimit`      | `int`     | Specify the maximum number of results that can be returned. A maximum of                                                                                                                                                                           |
