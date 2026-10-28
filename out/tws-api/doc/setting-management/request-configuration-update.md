[source](https://www.interactivebrokers.com/docs/tws-api/doc/setting-management/request-configuration-update)

# Request Configuration Update

#### EClient.updateConfigProtoBuf(

**updateConfigRequestProto**: [UpdateConfigRequestProto](../../protobuf/update-config-request.md)\
Contains the Proto object for updating the configuration request.\
Must have the reqId field passed.

#### )

```
from ibapi.protobuf.UpdateConfigRequest_pb2 import UpdateConfigRequest as UpdateConfigRequestProto
from ibapi.protobuf.ApiConfig_pb2 import ApiConfig as ApiConfigProto
from ibapi.protobuf.ApiSettingsConfig_pb2 import ApiSettingsConfig as ApiSettingsConfigProto

# Instantiate Proto Classes...
updateConfigRequestProto = UpdateConfigRequestProto()
apiConfigProto = ApiConfigProto()
apiSettingsConfigProto = ApiSettingsConfigProto()

# Assign the settings to change...
apiSettingsConfigProto.createApiMessageLogFile = True
apiSettingsConfigProto.includeMarketDataInLogFile = True
apiSettingsConfigProto.loggingLevel = "Detail"
        
# Copy nested Object content to parent...
apiConfigProto.settings.CopyFrom(apiSettingsConfigProto)
updateConfigRequestProto.reqId = orderId
updateConfigRequestProto.api.CopyFrom(apiConfigProto)

# Submit updates
self.updateConfigProtoBuf(updateConfigRequestProto)
```
