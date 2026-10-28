[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/mark-notification-read)

# Mark Notification Read

Mark a particular notification message as read or unread.

`PUT /fyi/notifications/{notificationID}`

#### Request Object

###### Path Params

**notificationId:** String. Required\
Code used to signify a specific notification to mark.

#### Python

```python
request_url = f"{baseUrl}/fyi/notifications/more?id=12345678901234567"
json_content = {}
requests.put(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/notifications/12345678901234567 \
--request PUT \
--data ""
```

#### Response Object

**V:** int.\
Returns 1 to state message was acknowledged.

**T:** int.\
Returns the time in ms to complete the edit.

**P:** Object.\
Returns details about the notification read status.

**R:** int.\
Returns if the message was read (1) or unread (0).

**ID:** String.\
Returns the ID for the notification..

```
{
  "V": 1,
  "T": 5,
  "P": {
    "R": 1,
    "ID": "12345678901234567"
  }
}
```
