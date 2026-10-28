> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Suppress Messages

Disables a messageId, or series of messageIds, that will no longer prompt the user.

`POST /iserver/questions/suppress`

#### Request Object

###### Body Param

**messageIds:** Array of Strings.\
The identifier for each warning message to suppress.\
The array supports up to 51 messages sent in a single request. Any additional values will result in a system error.\
The only supported message IDs are listed in our [Suppressible Message IDs](/docs/web-api/v1/endpoints/orders/suppressible-message-ids) list. However, users should look to suppress messages on an as-needed basis to avoid unexpected order submissions.

#### Python

```python
request_url = f"{baseUrl}/iserver/questions/suppress"
json_content = {
  "messageIds": ["o102"]
}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/questions/suppress \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "messageIds": ["o102"]
}'
```

#### Response Object

**status:** String.\
Verifies that the request has been sent.

```
{
  "status": "submitted"
}
```