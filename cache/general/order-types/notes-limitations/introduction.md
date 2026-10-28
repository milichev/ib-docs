> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

* While the Interactive Brokers support team can help assist with required parameters for the API, they can not comment on best orders to use, financial or trading advice, or any further information aside from API logic.
* It is important to test the order type idea manually in TWS before writing the API execution tactic because some execution ideas (e.g. applying STP LMT on Iceberg / applying Bracket Order with IBALGO) may not supported by TWS. As a result, they will not be supported by API too.
* Paper Trading Accounts are based on a simulated environment, and as a result, order execution behavior is not indicative of real world trading conditions. The paper accounts should be used exclusively for understanding how tools function.
* It is important to test the order type idea manually in TWS before writing the API execution tactic because some execution ideas (e.g. applying STP LMT on Iceberg / applying Bracket Order with IBALGO) may not supported by TWS. As a result, they will not be supported by API too.
* Interacive Brokers APIs do not support fractional or cash quantity trading with exception to Cryptocurrencies and Forex trading.