[source](https://www.interactivebrokers.com/docs/tws-api/doc/setting-management/receive-configuration)

# Receive Configuration

#### EWrapper.configResponseProtoBuf

**configResponseProto**: [ConfigResponseProto](../../protobuf/config-response.md)\
Contains the Proto response object for the configuration. Includes [LockAndExitConfig](../../protobuf/lock-and-exit-config.md), [MessageConfig](../../protobuf/message-config.md), [ApiConfig](../../protobuf/api-config.md), and [OrdersConfig](../../protobuf/orders-config.md).

#### )

```
from ibapi.protobuf.ConfigResponse_pb2 import ConfigResponse as ConfigResponseProto

def configResponseProtoBuf(self, configResponseProto: ConfigResponseProto):
    print(configResponseProto)
```
