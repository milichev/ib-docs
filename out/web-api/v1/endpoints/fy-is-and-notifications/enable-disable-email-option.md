[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/enable-disable-email-option)

# Enable/Disable Email Option

Enable or disable your account's primary email to receive notifications.

`PUT /fyi/deliveryoptions/email`

#### Request Object

###### Query Params

**enabled:** String. Required\
Enable or disable your email.\
Value format: true: Enable; false: Disable

#### Python

```python
request_url = f"{baseUrl}/fyi/deliveryoptions/email?enabled=true"
json_content = {}
requests.put(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/deliveryoptions/email?enabled={{ enabled }} \
--request PUT \
--data ""
```

#### Response Object

**V:** int.\
Returns 1 to state message was acknowledged.

**T:** int.\
Returns the time in ms to complete the edit.

```
{
  "V": 1,
  "T": 10
}
```
