[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/introduction)

# Introduction

The function EClient.reqWshEventData is used to request various calendar events from Wall Street Horizon. The event data is then received via the callback EWrapper.wshEventData. Pending event data requests can be canceled with the function IBApi.EClient.cancelWshEventData.

**Note:** Prior to sending this message, the API client must make a request for metadata via [EClient.reqWshMetaData](#meta-data).

Also note that TWS will not support multiple concurrent requests. Previous request should succeed, fail, or be cancelled by client before next one. TWS will reject such requests with text "Duplicate WSH meta-data request" or "Duplicate WSH event request".
