[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/order-placement-considerations)

# Order Placement Considerations

When placing orders via the API and building a robust trading system, it is important to monitor for callback notifications, specifically for **[IBApi::EWrapper::error](../../error-handling/receiving-error-messages.md)**, [**IBApi:**:**EWrapper::orderStatus**](../../order-management/order-status/introduction.md)changes, [**IBApi::EWrapper::openOrder**](../../order-management/open-orders.md)warnings, and **[IBApi::EWrapper::execDetails](../../order-management/execution-details/receive-execution-details.md)** to ensure proper operation.

If you experience issues with orders you place via the API, such as orders not filling, the first thing to check is what these callbacks returned. Your order may have been rejected or cancelled. If needed, see the \*\*[API Log](../../troubleshooting-support/log-files/location-of-interactive-brokers-logs.md)\*\*section, for information on obtaining your API logs or submitting them for review.

Common cases of order rejections, cancellations, and warnings, and the corresponding message returned:

* If an order is subject to a large size (LGSZ) reject, the API client would receive **Error (201)** via **[IBApi::EWrapper::error](../../error-handling/receiving-error-messages.md)**. The error text would indicate that order size too large and suggest another smaller size.
  * In accordance with our regulatory obligations as a broker, we cannot accept Large Limit Orders for #### shares of ABCD that you have submitted. Please submit a smaller order (not exceeding ###) *or convert your order to an algorithmic Order (IBALGO) \[conditional on instrument]*

* If an order is subject to price checks the client may receive status (cancelled) + **Error (202)** via [**IBApi.EWrapper.orderStatus**](../../order-management/order-status/introduction.md) and **[IBApi::EWrapper::error](../../error-handling/receiving-error-messages.md)**. The error text would indicate the price is too far from current price.
  * In accordance with our regulatory obligations as a broker, we cannot accept your order at the limit price ### you selected because it is too far through the market. Please submit your order using a limit price that is closer to the current market price ###

* The client may receive warning Text via **[IBApi::EWrapper::openOrder](../../order-management/open-orders.md)** indicating that the order could be subject to price capping.
  * If your order does not immediately execute, in accordance with our regulatory obligations as a broker we may, depending on market conditions, reject your order if the limit price of your order is more than allowed distance from the current reference price. This is designed to ensure that the price of your order is in line with an orderly market and reduce the impact your order has on the market. Please note that such rejection will result in you not receiving a fill.
  * ***[mktCapPrice](../../order-management/order-status/introduction.md)*** – If an order has been capped, this indicates the current capped price (returned to[**IBApi.EWrapper.orderStatus**](../../order-management/open-orders.md))
