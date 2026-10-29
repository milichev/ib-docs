[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fa-allocation-management/set-allocation-presets)

# Set Allocation Presets

Set the preset behavior for allocation groups for specific events.

`POST /iserver/account/allocation/presets`

#### Request Object

###### Body Params

**default_method_for_all:** String. Required\
Set the default allocation method to be used for all allocation groups without a set value.

**group_auto_close_positions:** bool. Required

**profiles_auto_close_positions:** bool. Required

**strict_credit_check:** bool. Required

**group_proportional_allocation:** bool. Required

#### Python

```python
request_url = f"{baseUrl}/iserver/account/allocation/presets" 
json_content = {
  "default_method_for_all": "E",
  "group_auto_close_positions": true,
  "profiles_auto_close_positions": true,
  "strict_credit_check": false,
  "group_proportional_allocation": false
}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/allocation/presets \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "default_method_for_all": "E",
  "group_auto_close_positions": true,
  "profiles_auto_close_positions": true,
  "strict_credit_check": false,
  "group_proportional_allocation": false
}'
```

#### Response Object

**success:** bool.\
Confirms that the preset was properly set.

```
{
  "success": true
}
```
