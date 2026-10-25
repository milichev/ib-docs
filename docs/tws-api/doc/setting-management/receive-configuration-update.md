[source](https://www.interactivebrokers.com/docs/tws-api/doc/setting-management/receive-configuration-update)

# Receive Configuration Update

#### EWrapper.updateConfigResponseProtoBuf

**updateConfigResponseProto**: [UpdateConfigResponseProto](../../protobuf/update-config-response.md)\
Contains the Proto response object for the configuration update. Includes message, changedFields, errors, and [UpdateConfigWarning.](../../protobuf/update-config-warning.md)

#### )

```
from ibapi.protobuf.UpdateConfigResponse_pb2 import UpdateConfigResponse as UpdateConfigResponseProto

def updateConfigResponseProtoBuf(self, updateConfigResponseProto: UpdateConfigResponseProto):
    print(updateConfigResponseProto)
```
