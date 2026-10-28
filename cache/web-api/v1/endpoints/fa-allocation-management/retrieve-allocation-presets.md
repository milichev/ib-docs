> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Retrieve Allocation Presets

Retrieve the preset behavior for allocation groups for specific events.

`GET /iserver/account/allocation/presets`

#### Request Object

No params or body content should be sent.

#### Python

```python
request_url = f"{baseUrl}/iserver/marketdata/unsubscribeall"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/allocation/presets \
--request GET
```

#### Response Object

group_auto_close_positions: bool.

default_method_for_all: String.

profiles_auto_close_positions: bool.

strict_credit_check: bool.

group_proportional_allocation: bool.

```
{
  "group_auto_close_positions": false,
  "default_method_for_all": "N",
  "profiles_auto_close_positions": false,
  "strict_credit_check": false,
  "group_proportional_allocation": false
}
```