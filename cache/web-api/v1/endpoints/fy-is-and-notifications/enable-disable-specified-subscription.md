> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Enable/Disable Specified Subscription

Configure which typecode you would like to enable/disable.

`POST /fyi/settings/{{ typecode }}`

#### Request Object

###### Path Params

**typecode:** String. Required\
Code used to signify a specific type of FYI template.\
See [Typecode](/docs/web-api/v1/endpoints/fy-is-and-notifications/fyi-typecodes) section for more details.

###### Body Params

**enabled:** bool. Required\
Enable or disable the subscription.\
See available typecodes under [FYI Typecodes](/docs/web-api/v1/endpoints/fy-is-and-notifications/fyi-typecodes)\
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