[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/component-exchanges)

# Component Exchange Mapping

## Introduction

A single data request from the API can receive aggregate quotes from multiple exchanges. The tick types 'bidExch' (tick type 32), 'askExch' (tick type 33), 'lastExch' (tick type 84) are used to identify the source of a quote. To preserve bandwidth, the data returned to these tick types consists of a sequence of capital letters rather than a long list of exchange names for every returned exchange name field. To find the full exchange name corresponding to a single letter code returned in tick types 32, 33, or 84, and API function [EClient.reqSmartComponents](#request-component-exchanges) is available. Note: This function can only be used when the exchange is open.

Different IB contracts have a different exchange map containing the set of exchanges on which they trade. Each exchange map has a different code, such as "a6" or "a9". This exchange mapping code is returned to [EWrapper.tickReqParams](#exchange-component-mapping) immediately after a market data request is made by a user with market data subscriptions. To find a particular map of single letter codes to full exchange names, the function reqSmartComponents is invoked with the exchange mapping code returned to tickReqParams.

For instance, a market data request for the IBKR US contract may return the exchange mapping identifier "a6" to [EWrapper.tickReqParams](streaming-data.md#ewrappertickreqparams) . Invoking the function [EClient.reqSmartComponents](#request-component-exchanges) with the symbol "a9" will reveal the list of exchanges offering market data for the IBKR US contract, and their single letter codes. The code for "ARCA" may be "P". In that case if "P" is returned to the exchange tick types, that would indicate the quote was provided by ARCA.

---

## Request Component Exchanges

`EClient.reqSmartComponents(reqId, bboExchange)`

Returns the mapping of single letter codes to exchange names given the mapping identifier.

**`reqId`** `int`

Request identifier used to track data.

---

**`bboExchange`** `string`

Mapping identifier received from EWrapper.tickReqParams

---

---

## Receive Component Exchanges

`EWrapper.smartComponents(reqId, smartComponentMap)`

Containing a bit number to exchange + exchange abbreviation dictionary. All IDs can be initially retrieved using [reqTickParams](streaming-data.md#ewrappertickreqparams).

**`reqId`** `int`

Request identifier used to track data.

---

**`smartComponentMap`** `object`

Unique object containing a map of all key-value pairs

---
