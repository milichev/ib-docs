[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/market-depth)

# Market Depth

## Introduction

Market depth data, also known as Depth of Market or Level 2 data, represents an instrument's order book and may be retrieved with [EClient.reqMarketDepth()](#request-market-depth). To verify if market depth may be received via API, make a request with [EClient.ReqMktDepthExchanges](#request-market-depth-exchanges).

Unlike [Top Market Data (Level I)](streaming-data.md), market depth data is sent without sampling or filtering, however we cannot guarantee that every price quoted for a particular security will be displayed. In particular, odd lot orders are not included.

It is possible to Smart-route requests to receive aggregated data from all available exchanges.

An integral part of processing the incoming data is monitoring [EWrapper.error](../error-handling/receiving-error-messages.md) for message 317 "Market depth data has been RESET. Please empty deep book contents before applying any new entries." and handling it appropriately, otherwise the update process would be corrupted.

> **Info**
>
> Market Depth is not support for Calendar Spreads or Combos.

---

## Request Market Depth

`EClient.reqMarketDepth(tickerId, contract, numRows, isSmartDepth, mktDepthOptions)`

> **Note**
>
> Different programming languages use different method names for requesting market depth. C# and Visual Basic APIs use **reqMarketDepth()**. The Python, Java, and C++ APIs use **reqMktDepth()**.

Requests the contract's market depth (order book).

**`tickerId`** `int`

Request identifier used to track data.

---

**`contract`** `object`

The Contract for which the depth is being requested.

---

**`numRows`** `int`

The number of rows on each side of the order book.

---

**`isSmartDepth`** `bool`

Flag indicates that this is a Smart-routed market depth request. Supplying `True` will return data identical to the [TWS Book Trader](https://www.ibkrguides.com/traderworkstation/booktrader.htm) while `False` returns direct routed data similar to the [TWS Market Depth tool](https://www.ibkrguides.com/traderworkstation/level-ii-market-depth.htm). `isSmartDepth` should only be set to `True` if the [Contract Object](../contracts-financial-instruments/the-contract-object.md) uses "SMART" in the `exchange` field.

---

**`mktDepthOptions`** `object`

Internal use only. Leave an empty array or None type.

---

#### Java

```java
client.reqMktDepth(2001, contract, 5, false, null);
```

---

## Receive Market Depth

Market depth information returns data differently depending on the `isSmartDepth` field.

* If `isSmartDepth=True`, see [EWrapper.updateMktDepth()](#ewrapperupdatemktdepth)
* If `isSmartDepth=False`, see [EWrapper.updateMktDepthL2()](#ewrapperupdatemktdepthl2)

### EWrapper.updateMktDepth

`EWrapper.updateMktDepth(tickerId, position, operation, side, price, size)`

Returns the order book. Used for direct routed requests only.

**`tickerId`** `int`

Request identifier used to track data.

---

**`position`** `int`

The order book's row being updated

---

**`operation`** `int`

Indicates a change in the row's value. 0 = insert (insert new price into the row), 1 = update (update the existing order in the row), 2 = delete (delete the existing order at the row).

---

**`side`** `int`

0 for ask, 1 for bid

---

**`price`** `double`

The order's price

---

**`size`** `decimal`

The order's size

---

#### Java

```java
@Override
public void updateMktDepth(int tickerId, int position, int operation, int side, double price, Decimal size) {
	System.out.println(EWrapperMsgGenerator.updateMktDepth(tickerId, position, operation, side, price, size));
}
```

---

### EWrapper.updateMktDepthL2

`EWrapper.updateMktDepthL2(tickerId, position, marketMaker, operation, side, price, size, isSmartDepth)`

Returns the order book.

**`tickerId`** `int`

Request identifier used to track data.

---

**`position`** `int`

The order book's row being updated.

---

**`marketMaker`** `string`

The exchange holding the order if isSmartDepth is True, otherwise the MPID of the market maker.

---

**`operation`** `int`

Indicates a change in the row's value. 0 = insert (insert new price into the row), 1 = update (update the existing order in the row), 2 = delete (delete the existing order at the row).

---

**`side`** `int`

0 for ask, 1 for bid

---

**`price`** `double`

The order's price

---

**`size`** `decimal`

The order's size

---

**`isSmartDepth`** `bool`

Flag indicating if this is smart depth response (True) or the MPID of the market maker.

---

#### Java

```java
@Override
public void updateMktDepthL2(int tickerId, int position, String marketMaker, int operation, int side, double price, Decimal size, boolean isSmartDepth) {
	System.out.println(EWrapperMsgGenerator.updateMktDepthL2( tickerId, position, marketMaker, operation, side, price, size, isSmartDepth));
}
```

---

### EWrapper.rerouteMktDepthReq

`EWrapper.rerouteMktDepthReq(reqId, conId, exchange)`

Returns the conId and exchange for an underlying contract when a request is made for level 2 data for the underlying instrument. IB does not provide market data for stock and forex CFDs. When level 2 data is requested for a CFD, a callback is made to EWrapper.rerouteMktDepthReq respectively with details about the underlying instrument in IB's database which does have market data.

**`reqId`** `int`

Request identifier used to track data.

---

**`conId`** `int`

Contract identifier of the underlying instrument which has market data.

---

**`exchange`** `int`

Primary exchange of the underlying.

---

#### Java

```java
@Override
public void rerouteMktDepthReq(int reqId, int conId, String exchange) {
	System.out.println(EWrapperMsgGenerator.rerouteMktDepthReq(reqId, conId, exchange));
}
```

---

## Cancel Market Depth

`EClient.cancelMarketDepth(tickerId, isSmartDepth)`

Cancel market depth request.

**`tickerId`** `int`

Request identifier used to track data.

---

**`isSmartDepth`** `bool`

Flag indicates that this is smart depth request.

---

#### Java

```java
client.cancelMktDepth(2001, false);
```

---

## Requesting Market Depth Exchanges

`EClient.reqMktDepthExchanges()`

Requests venues for which market depth data is available.

#### Java

```java
client.reqMktDepthExchanges();
```

---

## Receive Market Depth Exchanges

`EWrapper.mktDepthExchanges(depthMktDataDescriptions)`

Called when receives Depth Market Data Descriptions.

**`depthMktDataDescriptions`** `object`

A list containing [DepthMarketDataDescription](../../protobuf/depth-market-data-description.md) objects. Each object contains information about what security types are availble at a given exchange, and indicates if the exchange may only provide direct-routed Level 2 (Deep2) data, or if smart market depth is supported.

---

#### Java

```java
@Override
public void mktDepthExchanges(DepthMktDataDescription[] depthMktDataDescriptions) {
	System.out.println(EWrapperMsgGenerator.mktDepthExchanges(depthMktDataDescriptions));
}
```
