> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Cryptocurrency Trading

Because Cryptocurrencies at Interactive Brokers are managed through external groups like ZEROHASH and PAXOS, the available order types and behaviors are slightly different from average. The lists below indicate what is available for BUY and SELL orders when using Cryptocurrencies.

Please be aware that no other order types are available for Crypto orders.

#### BUY

###### Order Types

* LMT Order Using "quantity" or "totalQuantity" values.
* MKT Orders using "cashQty" value.

###### Time in Force

* LMT Orders support "DAY", "GTC", "IOC"

- The TWS API Also Supports the "Minutes" time in force.

* MKT Orders only support "IOC".

#### SELL

###### Order Types

* LMT Order Using "quantity" or "totalQuantity values.
* MKT orders using "quantity" or "totalQuantity" values.

###### Time in Force

* LMT Orders support "DAY", "GTC", "IOC"

- The TWS API Also Supports the "Minutes" time in force.

* MKT Orders only support "IOC".