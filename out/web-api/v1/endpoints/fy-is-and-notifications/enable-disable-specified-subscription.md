[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/enable-disable-specified-subscription)

# Enable/Disable Specified Subscription

Configure which typecode you would like to enable/disable.

`POST /fyi/settings/{{ typecode }}`

#### Request Object

###### Path Params

**typecode:** String. Required\
Code used to signify a specific type of FYI template.\
See [Typecode](fyi-typecodes.md) section for more details.

###### Body Params

**enabled:** bool. Required\
Enable or disable the subscription.\
See available typecodes under [FYI Typecodes](fyi-typecodes.md)\
Value format: true: Enable; false: Disable

#### Python

```python
request_url = f"{baseUrl}/fyi/settings/SM"
json_content ={"enabled":true}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/settings/SM \
--request POST \
--data '{"enabled":true}'
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
