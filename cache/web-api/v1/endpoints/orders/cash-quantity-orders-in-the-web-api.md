> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Cash Quantity Orders in the Web API

Cash Quantity orders are only supported for Cryptocurrency, Forex, and Stock contracts.

* Stock orders submitted using Cash Quantity field through the API will round down to the nearest whole share.
  * In the event an order is submitted with a value less than one share will result in rejection of the order.

* Orders submitted for Crypto or Forex will be traded directly as submitted.