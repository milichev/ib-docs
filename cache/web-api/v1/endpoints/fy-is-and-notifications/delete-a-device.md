> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Delete a Device

Delete a specific device from our saved list of notification devices.

`DELETE /fyi/deliveryoptions/{{ deviceId }}`

#### Request Object

###### Path Params

**deviceId:** String. Required\
Display the device identifier to delete from IB's saved list.\
Can be retrieved from [/fyi/deliveryoptions](/docs/web-api/v1/endpoints/fy-is-and-notifications/get-delivery-options).

#### Python

```python
request_url = f"{baseUrl}/fyi/deliveryoptions/1" 
requests.delete(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/deliveryoptions/1 \ 
--request DELETE
```

#### Response Object

No response message is returned. Instead, you will only receive an empty string with a 200 OK status code indicating a successfully deleted account.