> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Authentication Status

When initially connecting to the websocket endpoint, an authentication status message with the topic `sts` is sent automatically to relay the current authentication state of the user. Additional `sts` messages are delivered whenever the authentication state changes, such as when a competing session is detected.

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the message. Returns `"sts"`.

---

**`args`** `object` — required

Object containing the authentication status details.

---

**`authenticated`** `boolean` — required

Indicates whether the user is currently authenticated to the brokerage session.

---

```json wordWrap
{"topic":"sts","args":{"authenticated":true}}
```