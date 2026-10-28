> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Single value responses

It is possible to view live quotes for multiple products updating real time within Excel. Requests via the TWS DDE API are nothing but Excel formulas (DDE data links) each of them serving a very specific purpose. Market Data retrieval requires at least two different DDE links: one to start the market data subscription and another one which will be receiving the specific tick type.

In many instances, customers are able to designate a single cell and print out values as they are retrieved from the DDE Socket Bridge as they are produced. These are single variable responses, such as data ticks to retrieve specifically a "LAST" or "BID" value.