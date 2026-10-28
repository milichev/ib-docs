> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Historical Data

## Subscribe to Historical Data

Request streaming historical bar data for a contract. Only a maximum of 5 concurrent historical data requests are available at a time. Historical data will respond once with the requested data; the subscription must still be cancelled after data is received.

### Request

`smh+{{conid}}+{"exchange":"exchange", "period":"period", "bar":"bar", "outsideRth": bool, "source":"source", "format":"format"}`

#### Properties

**`smh`** `const`

The leading topic message indicating a request to retrieve historical bar data.

---

**`conid`** `string`

A single contract identifier. Contracts use SMART routing by default. To specify an exchange, use the format `conId@EXCHANGE`.

---

`object`

---

**`exchange`** `string`

The exchange from which to request data.

---

**`period`** `string`

Total duration for which bars will be requested.

#### Supported Values

`{1-30}min`, `{1-8}h`, `{1-1000}d`, `{1-792}w`, `{1-182}m`, `{1-15}y`

---

**`bar`** `string`

Interval of time for each bar.

#### Supported Values

`1min`, `2min`, `3min`, `5min`, `10min`, `15min`, `30min`, `1h`, `2h`, `3h`, `4h`, `8h`, `1d`, `1w`, `1m`

---

**`outsideRth`** `boolean`

Set to `true` to include data outside regular trading hours. Defaults to `false`.

---

**`source`** `string`

The type of market data to return.

#### Supported Values

`"midpoint"`, `"trades"`, `"bid_ask"`, `"bid"`, `"ask"`

---

**`format`** `string`

The format in which bar values are returned.

#### Supported Values

`%o` (open), `%c` (close), `%h` (high), `%l` (low), `%v` (volume)

---

```
smh+265598+{"exchange":"SMART","period":"1d","bar":"1h","outsideRth":false,"source":"trades","format":"%o/%c/%h/%l"}
```

### Response

#### Properties

**`serverId`** `string` — required

Request identifier for the specific historical data request. Used when cancelling the subscription.

---

**`symbol`** `string`

Symbol for the requested contract.

---

**`text`** `string`

Company long name.

---

**`priceFactor`** `integer`

Price multiplier based on \$0.01.

---

**`startTime`** `string`

Starting time of the response in epoch format.

---

**`high`** `string`

Highest high value, volume value, or outside RTH volume for the period.

---

**`low`** `string`

Lowest low value, volume value, or outside RTH volume for the period.

---

**`timePeriod`** `string`

Period covered by the request.

---

**`barLength`** `integer`

Length of the bar response string.

---

**`mdAvailability`** `string`

Internal IBKR message indicating market data availability.

---

**`mktDataDelay`** `integer`

Indicates any delay in the market data feed.

---

**`outsideRth`** `boolean`

Indicates whether the data contains information outside regular trading hours.

---

**`volumeFactor`** `integer`

Indicates whether volume is returned as lots, multipliers, or as-is.

---

**`priceDisplayRule`** `integer`

Internal IBKR message.

---

**`priceDisplayValue`** `string`

Internal IBKR message.

---

**`negativeCapable`** `boolean`

Indicates whether the contract supports negative values.

---

**`messageVersion`** `integer`

Internal IBKR message version.

---

**`data`** `array`

Array of bar objects within the requested period.

---

`object`

---

**`o`** `number`

Opening value for the bar's duration.

---

**`c`** `number`

Closing value for the bar's duration.

---

**`h`** `number`

Highest value for the bar's duration.

---

**`l`** `number`

Lowest value for the bar's duration.

---

**`v`** `integer`

Total volume for the bar.

---

**`t`** `integer`

Epoch time of the bar.

---

**`points`** `integer`

Total number of bars returned within `data`.

---

**`topic`** `string` — required

Restates the requesting topic.

---

```json wordWrap
{"serverId":"smh265598","symbol":"AAPL","text":"APPLE INC","priceFactor":100,"startTime":"1699797600","high":"185.00/1250000/0","low":"180.00/800000/0","timePeriod":"1d","barLength":3600,"mdAvailability":"S","mktDataDelay":0,"outsideRth":false,"volumeFactor":1,"priceDisplayRule":0,"priceDisplayValue":"2","negativeCapable":false,"messageVersion":2,"data":[{"o":182.0,"c":183.5,"h":184.2,"l":181.5,"v":95000,"t":1699801200},{"o":183.5,"c":182.8,"h":185.0,"l":182.0,"v":110000,"t":1699804800}],"points":2,"topic":"smh+265598"}
```

---

## Unsubscribe from Historical Data

`umh+{{serverId}}`

Request to cancel a historical data subscription using the `serverId` returned in the initial response. Cancelling frees one of the five available concurrent subscriptions.

### Request

#### Properties

**`umh`** `const`

Unsubscribes the user from historical bar data for the given server identifier.

---

**`serverId`** `string` — required

The `serverId` value returned in the initial `smh` response.

---

```
umh+smh265598
```

### Response Example

Unsubscribing from historical data does not deliver any acknowledgement. There will be an end to the historical data stream for the given `serverId`, and one of the five concurrent subscriptions will become available again.