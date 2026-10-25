[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/meta-data/introduction)

# Introduction

The function IBApi.EClient.reqWshMetaData is used to request available event types, or supported filter values, that may be used in the call for [EClient.reqWshEventData()](../event-data/wsh-event-data-object.md) filter field.

Regardless of whether or not you are aware of the Meta Data filters, this request must **always** be called once per session prior to the [EClient.reqWshEventData()](../event-data/wsh-event-data-object.md) function.
