> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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