> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Placing Conditional Order

In "Basic Order Tab", placing conditional order requires entering:

* Conditions (Column DY)
* Ignore Rth (0 / 1) (Column DZ)
* Cancel Order (0 / 1) (Column EA)

The images shown in the right-side show how to place a Price Conditional Order for IBM (ConId: 8314).

Here are the example formulas for Conditions (Column DY):

* Price

*Default:*

default Price of 8314(SMART) is \<= 55 and

default Price of 8314(SMART) is \<= 55 or

*Double Bid/Ask:*

double bid/ask Price of 8314(SMART) is \<= 55 or

*Last:*

last Price of 8314(SMART) is \<= 55 or

*Double Last:*

double last Price of 8314(SMART) is \<= 55 or

*Bid/Ask:*

bid/ask Price of 8314(SMART) is \<= 55 or

*Last or Bid/Ask:*

last of bid/ask Price of 8314(SMART) is >= 55 or

*Mid-point:*

mid-point Price of 8314(SMART) is \<= 55 or

* Time

time is \<= 20240415 12:00:00 Europe/Tallinn and

time is >= 20240415 12:00:00 Europe/Tallinn and

* Margin Cushion

the margin cushion percent is \<= 4 and

the margin cushion percent is >= 5 and

* Daily P\&L

* Volume

Volume of 8314(SMART) is \<= 1200 and

Volume of 8314(SMART) is >= 1200 or

* Trade

trade occurs for IBM symbol on ARCA exchange for STK security type and

* Percentage Change

PercentChange of 8314(SMART) is \<= 1 and

PercentChange of 8314(SMART) is >= 2 and

* Shortable Shares

* Fee Rate in %

Here is an example of placing an order with multiple conditions:

* `OR`

bid/ask Price of 8314(SMART) is \<= 55 or default Price of 8314(SMART) is \<= 55 or

* `AND`

bid/ask Price of 8314(SMART) is \<= 55 and default Price of 8314(SMART) is \<= 55 and

![DDE Conditional Order](/home/runner/work/API-documentation/API-documentation/fern/docs/assets/media/ddeConditonalOrder-700x298.png)

![DDE Conditional Order Output](/home/runner/work/API-documentation/API-documentation/fern/docs/assets/media/ddeConditonalOrderOutPut-700x345.png)