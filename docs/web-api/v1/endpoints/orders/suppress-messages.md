[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/orders/suppress-messages)

# Suppress Messages

Disables a messageId, or series of messageIds, that will no longer prompt the user.

`POST /iserver/questions/suppress`

#### Request Object

###### Body Param

**messageIds:** Array of Strings.\
The identifier for each warning message to suppress.\
The array supports up to 51 messages sent in a single request. Any additional values will result in a system error.\
The only supported message IDs are listed in our [Suppressible Message IDs](suppressible-message-ids.md) list. However, users should look to suppress messages on an as-needed basis to avoid unexpected order submissions.

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
