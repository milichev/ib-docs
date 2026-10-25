[source](https://www.interactivebrokers.com/docs/tws-api/doc/setting-management/request-configuration)

# Request Configuration

#### EClient.reqConfigProtoBuf(

**configRequestProto**: [ConfigRequestProto](../../protobuf/config-response.md)\
Contains the Proto object for the configuration request.\
Must have the reqId field passed.

#### )

```
from ibapi.protobuf.ConfigRequest_pb2 import ConfigRequest as ConfigRequestProto

configRequestProto = ConfigRequestProto()
configRequestProto.reqId = 123
self.reqConfigProtoBuf(configRequestProto)
```
