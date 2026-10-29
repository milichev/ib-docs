[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/alerts/get-details-of-a-specific-alert)

# Get details of a specific alert

Request details of a specific alert by providing the assigned order ID.

`GET /iserver/account/alert/{{ order_id }}`

###### Path Parameters

**order_id:** *int*\*\*.\*\* Required\
Alert ID returned from the original alert creation, or from the list of available alerts.

###### Query Parameters

**type:** *String*. Required\
Must always pass 'Q'.

#### Python

```python
request_url = f"{baseUrl}/iserver/account/alert/9876543210?type=Q"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/alert/9876543210?type=Q \
--request GET
```

#### Response Object

**account:** String.\
Requestor's account ID

**order_id:** int.\
Alert's tracking ID. Can be used for modifying or deleting alerts.

**alertName:** String.\
Human readable name of the alert.

**tif:** String.\
Time in Force effective for the Alert

**expire_time:** String.\
Returns the UTC formatted date used in GTD orders.

**alert_active:** int.\
Returns if the alert is active or disabled.

**alert_repeatable:** int.\
Returns if the alert can be sent more than once.

**alert_email:** String.\
Returns the designated email address for sendMessage functionality.

**alert_send_message:** int.\
Returns whether or not the alert will send an email.

**alert_message:** String.\
Returns the body content of what your alert will report once triggered

**alert_show_popup:** int.\
Returns whether or not the alert will trigger TWS Pop-up messages

**alert_play_audio:** int.\
Returns whether or not the alert will play audio

**order_status:** String.\
Always returns "Presubmitted".

**alert_triggered:** int.\
Returns whether or not the alert was triggered yet.

**fg_color:** String.\
Always returns "#FFFFFF". Can be ignored.

**bg_color:** String.\
Always returns "#000000". Can be ignored.

**order_not_editable:** bool.\
Returns if the order can be edited.

**itws_orders_only:** int.\
Returns whether or not the alert will trigger mobile notifications.

**alert_mta_currency:** String.\
Returns currency set for MTA alerts. Only valid for alert type 8 & 9.

**alert_mta_defaults:** String.\
Returns current MTA default values.

**tool_id:** int.\
Tracking ID for MTA alerts only. Returns 'null' for standard alerts.

**time_zone:** String.\
Returned for time-specifc conditions.

**alert_default_type:** int.\
Returns default type set for alerts. Configured in Client Portal.

**condition_size:** int.\
Returns the total number of conditions in the alert.

**condition_outside_rth:** int.\
Returns whether or not the alert will trigger outside of regular trading hours.

**conditions:** Array of json objects.\
Returns all conditions, formatted as \[ \{Condition1}, \{Condition2}, \{…} ]

**condition_type:** int.\
Returns the type of condition set.

**conidex:** String.\
Returns full conidex in the format "conid\@exchange"

**contract_description_1:** String.\
Includes relevant descriptions (if applicable).

**condition_operator:** String.\
Returns condition set for alert.

**condition_trigger_method:** int.\
Returns triggerMethod value set.

**condition_value:** String.\
Returns value set.

**condition_logic_bind:** String\
Returns logic_bind value set.

**condition_time_zone:**\
Returns timeZone value set.

```
{
  "account": "U1234567",
  "order_id": 9876543210,
  "alert_name": "AAPL Price",
  "tif": "GTD",
  "expire_time": "20231231-12:00:00",
  "alert_active": 1,
  "alert_repeatable": 0,
  "alert_email": null,
  "alert_send_message": 0,
  "alert_message": "MTA TEST!",
  "alert_show_popup": 0,
  "alert_play_audio": null,
  "order_status": "Submitted",
  "alert_triggered": false,
  "fg_color": "#FFFFFF",
  "bg_color": "#0000CC",
  "order_not_editable": false,
  "itws_orders_only": 0,
  "alert_mta_currency": null,
  "alert_mta_defaults": null,
  "tool_id": null,
  "time_zone": null,
  "alert_default_type": null,
  "condition_size": 1,
  "condition_outside_rth": 0,
  "conditions": [
    {
      "condition_type": 1,
      "conidex": "265598@SMART",
      "contract_description_1": "AAPL",
      "condition_operator": "<=",
      "condition_trigger_method": "0",
      "condition_value": "183.34",
      "condition_logic_bind": "n",
      "condition_time_zone": null
    }
  ]
}
```
