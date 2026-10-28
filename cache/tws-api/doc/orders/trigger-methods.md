> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Trigger Methods

The Trigger Method defined in the [IBApi.Order](/docs/tws-api/doc/orders/objects) class specifies how simulated stop, stop-limit, and trailling stops, and conditional orders are triggered. Valid values are:

* 0 – The default method for instrument
* 1 – "Double bid/ask" function, where stop orders are triggered based on two consecutive bid or ask prices.
* 2 – "Last" function, where stop orders are triggered based on the last price
* 3 – "Double last" function
* 4 – Bid/ask function
* 7 – Last or bid/ask function
* 8 – Mid-point function

Below is a table which indicates whether a given secType is compatible with bid/ask-driven or last-driven trigger methods (method 7 only used in iBot alerts)

| secType     | Bid/Ask-driven (1, 4, 8) | Last-driven (2, 3) | Default behavior                    | Notes                                     |
| ----------- | ------------------------ | ------------------ | ----------------------------------- | ----------------------------------------- |
| STK         | yes                      | yes                | Last                                | The double bid/ask is used for OTC stocks |
| CFD         | yes                      | yes                | Last                                |                                           |
| CFD – Index | yes                      | n/a                | n/a                                 | Ex IBUS500                                |
| OPT         | yes                      | yes                | US OPT: Double bid/ask, Other: Last |                                           |
| FOP         | yes                      | yes                | Last                                |                                           |
| WAR         | yes                      | yes                | Last                                |                                           |
| IOPT        | yes                      | yes                | Last                                |                                           |
| FUT         | yes                      | yes                | Last                                |                                           |
| COMBO       | yes                      | yes                | Bid/ask                             |                                           |
| CASH        | yes                      | n/a                | Bid/ask                             |                                           |
| CMDTY       | yes                      | n/a                | Last                                |                                           |
| IND         | n/a                      | yes                | n/a                                 | For conditions only                       |

**Important notes** :

* If an incompatible triggerMethod and secType are used in your API order, the order may never trigger.
* These trigger methods only apply to stop orders simulated by IB. If a stop-variant is handled natively, the trigger method specified is ignored. See our [Stop Orders](https://www.interactivebrokers.com/en/index.php?f=609) page for more information.
* More trigger-method behavior is defined within [IBKRGuides](https://www.ibkrguides.com/traderworkstation/define-order-preset-value.htm)