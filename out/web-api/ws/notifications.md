[source](https://www.interactivebrokers.com/docs/web-api/ws/notifications)

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
