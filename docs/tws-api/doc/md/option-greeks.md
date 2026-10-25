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

Greeks are requested automatically when pulling market data for an Options contract. Users that do not have a valid [Market Data Subscription](/docs/general/market-data-subscriptions/popular-market-data-subscriptions/introduction) for the underlying contract will receive an error that Market Data Is Not Subscribed. This error can be ignored if Greeks are not wanted.

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

#### Python

```python
self.reqMktData(reqId, OptionContract, "", False, False, [])
```

#### Java

```java
client.reqMktData(reqId, OptionContract, "", false, false, null);
```

#### C++

```cpp
m_pClient->reqMktData(reqId, OptionContract, "", false, false, TagValueListSPtr());
```

#### C#

```csharp
client.reqMktData(reqId, OptionContract, "", false, false, null);
```

#### VB.NET

```vbnet
client.reqMktData(reqId, OptionContract, "", False, False, Nothing)
```

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

#### Python

```python
def tickOptionComputation(self, reqId: TickerId, tickType: TickType, tickAttrib: int, impliedVol: float, delta: float, optPrice: float, pvDividend: float, gamma: float, vega: float, theta: float, undPrice: float):
	print("TickOptionComputation. TickerId:", reqId, "TickType:", tickType, "TickAttrib:", intMaxString(tickAttrib), "ImpliedVolatility:", floatMaxString(impliedVol), "Delta:", floatMaxString(delta), "OptionPrice:", floatMaxString(optPrice), "pvDividend:", floatMaxString(pvDividend), "Gamma: ", floatMaxString(gamma), "Vega:", floatMaxString(vega), "Theta:", floatMaxString(theta), "UnderlyingPrice:", floatMaxString(undPrice))
```

#### Java

```java
@Override
public void tickOptionComputation(int tickerId, int field, int tickAttrib, double impliedVol, double delta, double optPrice,
		double pvDividend, double gamma, double vega, double theta, double undPrice) {
	System.out.println("TickOptionComputation: " + EWrapperMsgGenerator.tickOptionComputation( tickerId, field, tickAttrib, impliedVol, delta, optPrice, pvDividend, gamma, vega, theta, undPrice));
}
```

#### C++

```cpp
void TestCppClient::tickOptionComputation( TickerId tickerId, TickType tickType, int tickAttrib, double impliedVol, double delta, double optPrice, double pvDividend, double gamma, double vega, double theta, double undPrice) {
    printf( "TickOptionComputation. Ticker Id: %ld, Type: %d, TickAttrib: %s, ImpliedVolatility: %s, Delta: %s, OptionPrice: %s, pvDividend: %s, Gamma: %s, Vega: %s, Theta: %s, Underlying Price: %s\n", tickerId, (int)tickType, Utils::intMaxString(tickAttrib).c_str(), Utils::doubleMaxString(impliedVol).c_str(), Utils::doubleMaxString(delta).c_str(), Utils::doubleMaxString(optPrice).c_str(), Utils::doubleMaxString(pvDividend).c_str(), Utils::doubleMaxString(gamma).c_str(), Utils::doubleMaxString(vega).c_str(), Utils::doubleMaxString(theta).c_str(), Utils::doubleMaxString(undPrice).c_str());
}
```

#### C#

```csharp
public virtual void tickOptionComputation(int tickerId, int field, int tickAttrib, double impliedVolatility, double delta, double optPrice, double pvDividend, double gamma, double vega, double theta, double undPrice)
{
	Console.WriteLine("TickOptionComputation. TickerId: " + tickerId + ", field: " + field + ", TickAttrib: " + Util.IntMaxString(tickAttrib) + ", ImpliedVolatility: " + Util.DoubleMaxString(impliedVolatility) + ", Delta: " + Util.DoubleMaxString(delta) + ", OptionPrice: " + Util.DoubleMaxString(optPrice) +", pvDividend: " + Util.DoubleMaxString(pvDividend) + ", Gamma: " + Util.DoubleMaxString(gamma) + ", Vega: " + Util.DoubleMaxString(vega) + ", Theta: " + Util.DoubleMaxString(theta) + ", UnderlyingPrice: " + Util.DoubleMaxString(undPrice));
}
```

#### VB.NET

```vbnet
Public Sub tickOptionComputation(tickerId As Integer, field As Integer, tickAttrib As Integer, impliedVolatility As Double, delta As Double, optPrice As Double, pvDividend As Double, gamma As Double, vega As Double, theta As Double, undPrice As Double) Implements IBApi.EWrapper.tickOptionComputation
	Console.WriteLine("TickOptionComputation. TickerId: " & tickerId & ", field: " & field & ", TickAttrib: " & Util.IntMaxString(tickAttrib) & ", ImpliedVolatility: " & Util.DoubleMaxString(impliedVolatility) & ", Delta: " & Util.DoubleMaxString(delta) & ", OptionPrice: " & Util.DoubleMaxString(optPrice) & ", pvDividend: " & Util.DoubleMaxString(pvDividend) & ", Gamma: " & Util.DoubleMaxString(gamma) & ", Vega: " & Util.DoubleMaxString(vega) & ", Theta: " & Util.DoubleMaxString(theta) & ", UnderlyingPrice: " & Util.DoubleMaxString(undPrice))
End Sub
```

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

#### Python

```python
self.calculateOptionPrice(5002, OptionContract, 0.6, 55, [])
```

#### Java

```java
client.calculateOptionPrice(5002, OptionContract, 0.5, 55, null);
```

#### C++

```cpp
m_pClient->calculateOptionPrice(5002, OptionContract, 0.6, 55, TagValueListSPtr());
```

#### C#

```csharp
client.calculateOptionPrice(5002, OptionContract, 0.6, 55, null);
```

#### VB.NET

```vbnet
client.calculateOptionPrice(5002, OptionContract, 0.6, 55, Nothing)
```

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

#### Python

```python
self.calculateImpliedVolatility(5001, OptionContract, 0.5, 55, [])
```

#### Java

```java
client.calculateImpliedVolatility(5001, OptionContract, 0.6, 55, null);
```

#### C++

```cpp
m_pClient->calculateImpliedVolatility(5001, OptionContract, 0.5, 55, TagValueListSPtr());
```

#### C#

```csharp
client.calculateImpliedVolatility(5001, OptionContract, 0.5, 55, null);
```

#### VB.NET

```vbnet
client.calculateImpliedVolatility(5001, OptionContract, 0.5, 55, Nothing)
```
