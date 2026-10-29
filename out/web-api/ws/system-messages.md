[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/ws/system-messages)

# System Messages

When initially connecting to the websocket, a system message with the topic `system` is sent automatically, confirming the connection with the corresponding username. While the websocket remains connected, a heartbeat system message is sent every 10 seconds containing the current Unix timestamp in millisecond format.

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the message. Returns `"system"`.

---

**`success`** `string`

Returns the username of the authenticated user that established the websocket connection. Returned in the initial connection message only.

---

```json wordWrap
{"topic":"system","success":"username"}
```
