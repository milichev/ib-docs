[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/important-protobuf-functions/copy-from)

# CopyFrom

#### CopyFrom

A standard method of the Message class of protobuf. Is used to copy items in a field from one object to another.\
See [See Details](https://protobuf.dev/getting-started/pythontutorial/#:~:text=the%20value%202.-,Standard%20Message%20Methods,-Each%20message%20class)

```
apiConfigProto = ApiConfigProto()
apiSettingsConfigProto = ApiSettingsConfigProto()

apiSettingsConfigProto.createApiMessageLogFile = True
apiSettingsConfigProto.includeMarketDataInLogFile = True
apiSettingsConfigProto.loggingLevel = "Detail"
        
apiConfigProto.settings.CopyFrom(apiSettingsConfigProto)
```
