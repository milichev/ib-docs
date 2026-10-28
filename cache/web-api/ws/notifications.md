> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Notifications

If there is a brief message regarding trading activity, a notification message with the topic `ntf` is sent automatically by the server.

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the notification. Returns `"ntf"`.

---

**`args`** `object` — required

Object containing the notification details.

---

**`id`** `string`

Identifier for the specific notification.

---

**`text`** `string`

Body text of the notification.

---

**`title`** `string`

Title or headline of the notification.

---

**`url`** `string`

If relevant, a URL where the user can read more about the notification.

---

```json wordWrap
{"topic":"ntf","args":{"id":"id","text":"text","title":"title","url":"url"}}
```