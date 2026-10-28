> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Event Contract Orders

## Introduction

Order Submission for Event Contracts function the same as any other instrument offered at Interactive Brokers.

## Notes & Limitations of trading Event Contracts

There are some unique order behaviors for both CME Group and ForecastEx contracts:

* Event Contracts only support Limit Orders\* Event Contracts only support a Time in Force of Day, Good till Canceled, or Immediate-Or-Cancel.
  * Event Contracts do not support Cash Quantity in the TWS API. Orders must be submitted as whole-share values.
  * CME Group instruments can be bought and sold and function as normal futures options.
  * ForecastEx instruments cannot be sold, only bought. To exit or reduce a position, one must buy the opposing Event Contract, and IB will net the opposing positions together automatically.

**Event Contracts cannot be sold short.**

## Order Example

Reviewing the same material as our [Contract Example](/docs/tws-api/doc/ec/contracts#forecastex-contract-example), we have all the tools needed to submit our order with some additional context available in the Order Ticket, featured on the right.

We are already aware that:

* ForecastEx contracts are always `"BUY"` orders.
* Event Contracts only support `"LMT"` as the Order Type.

This leaves us to decide the quantity, limit price, and time-in-force values.

We can set our limit price based on the values shown in the Order Ticket, or base the value on the Bid and Ask Price from our [Requested Market Data](/docs/tws-api/doc/ec/market-data).

![Displays an example of an order ticket being filled out for a Forecast Contract. ](/docs/_fern-files/interactive-brokers-585439.docs.buildwithfern.com/7110daf07aa8067a7d11867c8dd16dac3e945990632296b9e6576025c991c79b/docs/assets/media/forecasttrader_gce_order_ticket-1-300x442.png)

Given the information above, we are able to create a full order ticket.

#### Python

```python
order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 1000
order.lmtPrice = 0.57
```

#### Java

```java
Order order = new Order();
order.action("BUY");
order.orderType("LMT");
order.totalQuantity(1000);
order.lmtPrice(0.57);
```

#### C++

```cpp
Order order;
order.action = "BUY";
order.orderType = "LMT";
order.totalQuantity = 1000;
order.lmtPrice = 0.57;
```

#### C\#

```csharp
Order order = new Order();
order.Action = "BUY";
order.OrderType = "LMT";
order.TotalQuantity = 1000;
order.LmtPrice = 0.57;
```