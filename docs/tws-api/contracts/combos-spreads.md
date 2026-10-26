[source](https://www.interactivebrokers.com/docs/tws-api/contracts/combos-spreads)

# Combos & Spreads

> **Info**
>
> From a programmatic perspective, terms like "BAG", "Combo", and "Spread" are synonymous and may be used interchangeably.

## Combos and Spreads

As with standard contracts, you will continue to define the standard values such as symbol, secType, exchange, and currency. However, with combo orders, the "ComboLegs" field must be added and the ComboLeg objects should be attached. The example provided will showcase more detail of behavior; however, these require a conid, exchange, ratio, and an action for every ComboLeg on the order.

Spread contracts combine two or more instruments. To define a combination contract it is required to know the conId of the contract in question.

The conId of an instrument can easily be obtained via the [EClientSocket.reqContractDetails](/docs/tws-api/doc/contracts-financial-instruments/contract-details) request or the [/iserver/secdef/search endpoint](../../web-api/v1/endpoints/contract/search-contract-by-symbol.md).

> **Note**
>
> Even though a contract can be created with any pair of instruments,  not all instruments are as actively traded as others. If you are unsure why data may not be retrieved, or why an order may not be executed, it is considered best practice to confirm data against the Trader Workstation or Client Portal market data.

###### ComboLeg()

**ConId:** int. The conId, or contract Identifier, should be used to specify the exact contract. Symbols or local symbols can not be used for ComboLegs.

**Ratio:** int. Specify the ratio for the specific leg. The ratio will be multiplied by the totalQuantity field for of the order object.

**Action:** String. Specify what to do with the order. Users may choose Buy or Sell for these orders.

**Exchange:** String. Specify the routing exchange for the contract. SMART may be used.

## Smart-Routed Futures Spreads

Futures spreads can also be defined as Smart-routed (non-guaranteed) combos. When placing an order for a non-guaranteed combo from the API, the non-guaranteed flag must be set to 1. Historical data for smart-routed futures spreads is generally available from the API with the requisite market data subscriptions.

## Inter-commoddity Futures Spread

For Inter-Commodity futures, the 'Local Symbol' field in TWS is used for the 'Symbol' field in the API contract definition, e.g. "CL.BZ". They are always guaranteed combos, which is the default in the API.

In some instances, a generic symbol must be provided instead. For example, a inter-commodity future containing ZF and ZN will require that the symbol be set to "FYT".

Please be mindful that inter-commodity spreads are offered by the exchange directly, and so they are direct-routed though the legs have different underlyings. Only real time, and not historical, data is offered for inter-commodity spread contracts through the API.

It is also possible in many cases to create a spread of the same future contracts in a inter-commodity spread which is smart-routed and non-guaranteed. Historical data for this spread would generally be available from the API. Also, historical data for expired spread contracts is not available in TWS or the API.
