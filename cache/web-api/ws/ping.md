> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Ping

## Maintain Session (Ping)

Send a ping to the websocket to keep the session alive. To maintain a session for accessing `/iserver` or `/ccp` endpoints, use the topic `tic`. It is advised to ping at least once per minute.

> **Note**
>
> It is still required to send a request to the `/tickle` endpoint every few minutes, or when the session expires (i.e., `/sso/validate` returns `0`).

### Request

`tic`

#### Properties

**`tic`** `const`

Sends a ping to the websocket to maintain the brokerage session.

---

No additional parameters are required.

```
tic
```

### Response

No response is returned for a ping request.