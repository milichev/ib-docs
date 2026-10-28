> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

Customers can direct non-marketable U.S. stock orders to the IBKRATS destination to add liquidity. Orders directed to IBKRATS are tagged as "not held" orders, and are posted in IBKR's order book where incoming SmartRouted orders from other IBKR customers are eligible to take liquidity by trading against them.\
To route an order to IBKRATS via the API, you need to set the IBApi::Contract::Exchange field to "IBKRATS" and IBApi::Order::NotHeld to True.

More on [IBKRATS Orders](https://www.interactivebrokers.com/en/index.php?f=4485)

Note: The order must have the NotHeld field set to True, or you may receive a rejection with the reason; "IBKRAts order must be a not-held". When submitting via the TWS UI, this is set automatically.