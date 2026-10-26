[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/contract-details)

# get_contract_details()

Interactive Brokers trading is centered around [Contract Objects](../doc/contracts-financial-instruments/the-contract-object.md). This is used when submitting requests for market data, retrieving position information, and placing orders. The Synchronous Wrapper utilizes the same [Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) as the standard TWS API.

Passing as much known information through a Contract Details request will return all contracts that match the requesting information. At a minimum, the Contract ID, or Symbol and Security Type must be passed for contract discovery.

## Request Arguments

**`contract`** `object` — required

[Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) containing the details to search for.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 5 seconds.

---

## Response Object

The `get_contract_details()` function will return a list of [Contract](../doc/contracts-financial-instruments/the-contract-object.md) objects. Unless a relatively narrow scope is provided during the initial contract details request, multiple contract objects may be returned within the list. Please be aware that directly printing this information may result in the memory address being displayed, such as `3039334541648` in the example below.

## Example Implementation
