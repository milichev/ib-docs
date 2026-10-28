> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Order Status Value

For many orders, customers will see orders return an order status with an array of potential values. The table below elaborates on what the status means for the order and the potential behavior to expect from it.

The values returned from the "order_status" field of our Live Orders object will vary slightly from the format used while using the "filters" parameter from [GET /iserver/account/orders](/docs/web-api/v1/endpoints/order-monitoring/live-orders).

######

| Status        | Filter Value   | Description                                                                                                                                                                                                                                                                                                |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inactive      | inactive       | Indicates that you are in the process of creating an order and you have not yet activated or transmitted it.                                                                                                                                                                                               |
| PendingSubmit | pending_submit | Indicates that you have transmitted your order, but have not yet received confirmation that it has been accepted by the order destination.                                                                                                                                                                 |
| PreSubmitted  | pre_submitted  | Indicates that an order has been accepted by the system (simulated orders) or an exchange (native orders) and that this order has yet to be elected.                                                                                                                                                       |
| Submitted     | submitted      | Indicates that your order has been accepted and is working at the destination.                                                                                                                                                                                                                             |
| Filled        | filled         | Order has been completely filled.                                                                                                                                                                                                                                                                          |
| PendingCancel | pending_cancel | Indicates that you have sent a request to cancel the order but have not yet received cancel confirmation from the order destination. At this point, your order is not confirmed canceled. You may still receive an execution while your cancellation request is pending.                                   |
| PreCancelled  | pre_cancelled  | Indicates that a cancellation request has been accepted by the system but that currently the request is not being recognized, due to system, exchange or other issues. At this point, your order is not confirmed canceled. You may still receive an execution while your cancellation request is pending. |
| Cancelled     | cancelled      | Indicates that the balance of your order has been confirmed canceled by the system. This could occur unexpectedly when the destination has rejected your order.                                                                                                                                            |
| WarnState     | warn_state     | Order has a specific warning message such as for basket orders.                                                                                                                                                                                                                                            |
| N/A           | sort_by_time   | There is an initial sort by order state performed so active orders are always above inactive and filled then orders are sorted chronologically.                                                                                                                                                            |