[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fa-allocation-management/delete-allocation-group)

# Delete Allocation Group

Remove an existing allocation group. This group will no longer be accessible.

`POST /iserver/account/allocation/group/delete`

#### Request Object

###### Body Params

**name:** String. Required Required\
Name used to refer to your allocation group.

#### Python

```python
request_url = f"{baseUrl}/iserver/account/allocation/group/delete"
json_content = {
  "name":"Group_1_NetLiq",
}
requests.post(url=request_url, json=json_content
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/allocation/group/delete \
--request POST
--header 'Content-Type:application/json' \
--data '{
  "name":"Group_1_NetLiq",
}'
```

#### Response Object

**success:** bool.\
Confirms that the allocation group was properly set.

```
{
  "success": true
}
```
