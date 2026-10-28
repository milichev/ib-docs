[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/wsh-event-data-object)

# WshEventData Object

When making a request to the Wall Street Horizons Event Calendar with the API, users must create a wshEventData Object. This object contains several fields, along with a filter field, which takes a json-formatted string. The filter values are returned from WSH Meta Data requests.

When creating the object, users are able to specify either the WshEventData.conId, WshEventData.startDate, and WshEventData.endDate, or they may choose to use the WshEventData.filter value. Attempting to use both will result in an error.

Only one Event Type tag may be passed per request. Multiple submitted filters will be ignored beyond the final request.

#### WshEventData()

**conId:** String. Specify the contract identifier for the event request.

**startDate:** String. Specify the start date of the event requests. Formatted as "YYYYMMDD"

**endDate:** String. Specify the end date of the event requests. Formatted as "YYYYMMDD"

**fillCompetitors:** bool. Automatically fill in competitor values of existing positions.

**fillPortfolio:** bool. Automatically fill in portfolio values.

**fillWatchlist:** bool. Automatically fill in watchlist values.

**totalLimit:** int. Maximum of 100.

**filter:** String. Json-formatted string containing all filter values. Some available values include:

* watchlist: Array of string. Takes a single conid.
* country: String. Specify a country code, or "All".
* [EClient.reqWshMetaData()](../meta-data/meta-data-filters.md) responses will include an Event Type tag which can be used to filter the Event Data's response. The Json field is a boolean that can only take true to filter the given value
