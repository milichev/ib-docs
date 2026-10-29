[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/ws/bulletins)

# Bulletins

If there are urgent messages concerning exchange issues, system problems, or other important trading information, a bulletin message with the topic `blt` is sent automatically by the server along with a unique identifier for the bulletin.

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the bulletin. Returns `"blt"`.

---

**`args`** `object` — required

Object containing the bulletin details.

---

**`id`** `string` — required

Unique identifier for the specific bulletin.

---

**`message`** `string`

The bulletin content.

---

```json wordWrap
{"topic":"blt","args":{"id":"id","message":"message"}}
```
