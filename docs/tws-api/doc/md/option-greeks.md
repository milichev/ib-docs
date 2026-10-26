[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/option-greeks)

# Options & Greeks

## Introduction

The option greek values- delta, gamma, theta, vega- are automatically requested by [EClient.reqMktData()](streaming-data.md#request-watchlist-data) when requesting data for an option. See [Available Tick Types](streaming-data.md#available-tick-types)

Tick types "Bid Option Computation" (#10), "Ask Option Computation" (#11), "Last Option Computation" (#12), and "Model Option Computation" (#13) return all Greeks (delta, gamma, vega, theta), the underlying price and the stock and option reference price when requested.

> **Note**
>
> It is necessary to have market data subscriptions for both the option and the underlying contract to receive greek values.

The implied volatility for an option given its price and the price of the underlying can be calculated with the function [EClient.calculateImpliedVolatility](#calculate-implied-volatility).

Given the price of the underlying and an implied volatility it is possible to calculate the option price using the function [EClient.calculateOptionPrice](#calculate-option-price).

After the request, the option specific information will be delivered via [EWrapper.tickOptionComputation](#tick-option-computation).

---

## Request Market Data

`EClient.reqMktData(reqId, contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions)`

Greeks are requested automatically when pulling market data for an Options contract. Users that do not have a valid [Market Data Subscription](../../../general/market-data-subscriptions/popular-market-data-subscriptions/introduction.md) for the underlying contract will receive an error that Market Data Is Not Subscribed. This error can be ignored if Greeks are not wanted.

**`reqId`** `int`

Request identifier for tracking data.

---

**`contract`** `object`

Contract object used for specifying an instrument.

---

**`genericTickList`** `string`

Comma separated ids of the available generic ticks.

---

**`snapshot`** `bool`

Set to True for snapshot data with a relevant subscription or False for live data.

---

**`regulatorySnapshot`** `bool`

Set to True for a paid, regulatory snapshot or False for live data.

---

**`mktDataOptions`** `object`

Internal use only.

---

---

### Receiving Options Data

`EWrapper.tickOptionComputation(tickerId, field, tickAttrib, impliedVolatility, delta, optPrice, pvDividend, gamma, vega, theta, undPrice)`

Receives option specific market data. This method is called when the market in an option or its underlier moves. TWS's option model volatilities, prices, and deltas, along with the present value of dividends expected on that options underlier are received.

**`tickerId`**

the request's unique identifier.

---

**`field`** `int`

Specifies the type of option computation. Pass the field value into TickType.getField(int tickType) to retrieve the field description. For example, a field value of 13 will map to modelOptComp, etc. 10 = Bid 11 = Ask 12 = Last

---

**`tickAttrib`** `int`

0 – return based, 1- price based.

---

**`impliedVolatility`** `double`

the implied volatility calculated by the TWS option modeler, using the specified tick type value.

---

**`delta`** `double`

The option delta value.

---

**`optPrice`** `double`

The option price.

---

**`pvDividend`** `double`

The present value of dividends expected on the option's underlying.

---

**`gamma`** `double`

The option gamma value.

---

**`vega`** `double`

The option vega value.

---

**`theta`** `double`

The option theta value.

---

**`undPrice`** `double`

The price of the underlying.

---

---

## Calculate Option Price

`EClient.calculateOptionPrice(reqId, contract, volatility, underPrice, optionPriceOptions)`

Calculates an option's price based on the provided volatility and its underlying's price.

**`reqId`** `int`

Request identifier used to track data.

---

**`contract`** `object`

The Contract object for which the depth is being requested

---

**`volatility`** `double`

Hypothetical volatility.

---

**`underPrice`** `double`

Hypothetical option's underlying price.

---

**`optionPriceOptions`** `object`

Internal use only. Send an empty tag value list.

---

---

## Calculating Implied volatility

`EClient.calculateImpliedVolatility(reqId, contract, optionPrice, udnerPrice, impliedVolatilityOptions)`

Calculate the volatility for an option. Request the calculation of the implied volatility based on hypothetical option and its underlying prices.

**`reqId`** `int`

Request identifier used to track data.

---

**`contract`** `object`

The Contract object for which the depth is being requested

---

**`optionPrice`** `double`

Hypothetical option price.

---

**`underPrice`** `double`

Hypothetical option's underlying price.

---

**`impliedVolatilityOptions`** `object`

Internal use only. Send an empty tag value list.

---

\<Tabs>
