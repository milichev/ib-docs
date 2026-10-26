[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/delete-a-device)

# Delete a Device

Delete a specific device from our saved list of notification devices.

`DELETE /fyi/deliveryoptions/{{ deviceId }}`

#### Request Object

###### Path Params

**deviceId:** String. Required\
Display the device identifier to delete from IB's saved list.\
Can be retrieved from [/fyi/deliveryoptions](get-delivery-options.md).

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/deliveryoptions/1 \ 
--request DELETE
```

#### Response Object

No response message is returned. Instead, you will only receive an empty string with a 200 OK status code indicating a successfully deleted account.
