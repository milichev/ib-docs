> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Order Status

The Order Status endpoint may be used to monitor a single specific order while it remains active.

Important Notes:

* For multi-account structures such as Financial Advisors or linked-account structures, users must call [/iserver/account](/docs/web-api/v1/endpoints/accounts/switch-account) to switch to the affiliated account before requesting order status. It is otherwise expected to result in a '503' error.
* If an order has been cancelled or filled prior to the active session and there is no cached information saved, querying the order status endpoint would be expected to result in a '503' error.

Retrieve the given status of an individual order using the orderId returned by the order placement response or the orderId available in the live order response.

#### Abap

```abap
GET /iserver/account/order/status/{{ orderId }}
```

#### Python

```python
request_url = f"{baseUrl}/iserver/account/order/status/1234567890"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/order/status/1234567890\
--request GET
```

#### Response Object

**sub_type:** null.\
Internal use only.

**request_id:** String.\
Returns the requestId of the order palced by the user.

**order_id:** int.\
Returns the orderId of the requested order.

**conidex:** String.\
Returns the contract identifier for the order.

**conid:** int.\
Returns the contract identifier for the order.

**symbol:** String.\
Returns the ticker symbol for the order.

**side:** String.\
Returns the side of the order.

**contract_description_1:** String.\
Returns the local symbol of the order.

**listing_exchange:** String.\
Returns the primary listing exchange of the orer.

**option_acct:** String.\
For Client Portal use (Internal use only).

**company_name:** String.\
Returns the company long name.

**size:** String.\
Remainder of order to be filled

**total_size:** String.\
Total quantity of the order.

**currency:** String.\
Returns the base currency of the order.

**account:** String.\
Returns the account the order was placed for.

**order_type:** String.\
Returns the order type for the given order.

**cum_fill:** String.\
Total filled quantity of the order

**order_status:** String.\
Returns the current status of the order.

**order_ccp_status:** String.\
Returns the current status of the order as a code.

**order_status_description:** String.\
Returns the human readable response of the order status.

**tif:** String.\
Returns the time in force of the order.

**fg_color:** String.\
For Client Portal use (Internal use only).

**bg_color:** String.\
For Client Portal use (Internal use only).

**order_not_editable:** bool.\
Returns whether or not the order can be modified.\
This is relevant for orders that are currently or have already been executed.

**editable_fields:** null.\
For Client Portal use (Internal use only).

**cannot_cancel_order:** bool.\
Returns whether or not the order can be cancelled.\
This is relevant for orders that are currently or have already been executed.

**deactivate_order:** bool.\
Return whether or not the order has been marked inactive.

**sec_type:** String.\
Returns the security type of the order's contract.

**available_chart_periods:** String.\
For Client Portal use (Internal use only).

**order_description:** String.\
Returns the description of the order including the side, size, order type, price, and tif.

**order_description_with_contract:** String.\
Returns the description of the order including the side, size, symbol, order type, price, and tif.

**alert_active:** int.\
Returns wheteher or not there is an active alert available on the order.

**child_order_type:** String.\
type of the child order\
Value Format: A=attached, B=beta-hedge, 0=No Child

**order_clearing_account:** String.\
Returns the accountID for the submitted order.

**size_and_fills:** String.\
Displays `size / cumulative fill`

**exit_strategy_display_price:** String.\
Displays the price of the order as it resolved its execution.

**exit_strategy_chart_description:** String.\
Returns the description of the order including the side, size, order type, price, and tif.

**average_price:** String.\
Returns the average price of execution for the order.

**exit_strategy_tool_availability:** String.\
Internal use only.

**allowed_duplicate_opposite:** bool.\
Returns whether or not the opposing order can be placed on the market.

**order_time:** String.\
Returns the datetime of the order placement.\
Time returned is based on UTC timezone.\
Value Format: YYMMDDHHmmss

```
{
  "sub_type": null,
  "request_id": "209",
  "server_id": "0",
  "order_id": 1799796559,
  "conidex": "265598",
  "conid": 265598,
  "symbol": "AAPL",
  "side": "S",
  "contract_description_1": "AAPL",
  "listing_exchange": "NASDAQ.NMS",
  "option_acct": "c",
  "company_name": "APPLE INC",
  "size": "0.0",
  "total_size": "5.0",
  "currency": "USD",
  "account": "U1234567",
  "order_type": "MARKET",
  "cum_fill": "5.0",
  "order_status": "Filled",
  "order_ccp_status": "2",
  "order_status_description": "Order Filled",
  "tif": "DAY",
  "fg_color": "#FFFFFF",
  "bg_color": "#000000",
  "order_not_editable": true,
  "editable_fields":"",
  "cannot_cancel_order": true,
  "deactivate_order": false,
  "sec_type": "STK",
  "available_chart_periods": "#R|1",
  "order_description": "Sold 5 Market, Day",
  "order_description_with_contract": "Sold 5 AAPL Market, Day",
  "alert_active": 1,
  "child_order_type": "0",
  "order_clearing_account": "U1234567",
  "size_and_fills": "5",
  "exit_strategy_display_price": "193.12",
  "exit_strategy_chart_description": "Sold 5 @ 192.26",
  "average_price": "192.26",
  "exit_strategy_tool_availability": "1",
  "allowed_duplicate_opposite": true,
  "order_time": "231211180049"
}
```