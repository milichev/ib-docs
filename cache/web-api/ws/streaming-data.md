> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Streaming Market Data

## Subscribe to Streaming Market Data

Subscribe to streaming, top-of-book, level one market data for a contract. Market data streams terminate after 15 minutes; send a new subscription request before 10 minutes have elapsed to maintain a continuous stream.

The maximum number of concurrent market data subscriptions is governed by your account's [Market Data Lines](/docs/general/market-data-subscriptions/market-data-lines).

### Request

`smd+{{conId}}+{"fields":["field_1","field_2"]}`

#### Properties

**`smd`** `const`

The leading topic message indicating a request to subscribe to streaming market data.

---

**`conId`** `string`

A single contract identifier. Contracts use SMART routing by default. To specify an exchange, use the format `conId@EXCHANGE`.

Combo or spread market data can be retrieved using the same format as [Combo or Spread Orders](/docs/web-api/v1/endpoints/orders/combo-spread-orders), with a `spread_conid` of `0`.

---

`object`

---

**`fields`** `array`

An array of field IDs to subscribe to. Each ID should be passed as a string. See the Market Data Fields for a full list of available field IDs.

#### Market Data Fields

* `31` - **Last Price** — The last price at which the contract traded. May contain one of the following prefixes: C – Previous day's closing price. H – Trading has halted.
* `55` - **Symbol**
* `58` - **Text**
* `70` - **High** — Current day high price.
* `71` - **Low** — Current day low price.
* `73` - **Market Value** — The current market value of your position in the security. Market Value is calculated with real time market data (even when not subscribed to market data).
* `74` - **Avg Price** — The average price of the position.
* `75` - **Unrealized PnL** — Unrealized profit or loss. Unrealized PnL is calculated with real time market data (even when not subscribed to market data).
* `76` - **Formatted Position**
* `77` - **Formatted Unrealized PnL**
* `78` - **Daily PnL** — Your profit or loss of the day since prior close. Daily PnL is calculated with real time market data (even when not subscribed to market data).
* `79` - **Realized PnL** — Realized profit or loss. Realized PnL is calculated with real time market data (even when not subscribed to market data).
* `80` - **Unrealized PnL %** — Unrealized profit or loss expressed in percentage.
* `82` - **Change** — The difference between the last price and the close on the previous trading day.
* `83` - **Change %** — The difference between the last price and the close on the previous trading day in percentage.
* `84` - **Bid Price** — The highest-priced bid on the contract.
* `85` - **Ask Size** — The number of contracts or shares offered at the ask price.
* `86` - **Ask Price** — The lowest-priced offer on the contract.
* `87` - **Volume** — Volume for the day, formatted with 'K' for thousands or 'M' for millions. For higher precision volume refer to field 7762.
* `88` - **Bid Size** — The number of contracts or shares bid for at the bid price.
* `201` - **Right** — Returns the right of the instrument, such as P for Put or C for Call.
* `6004` - **Exchange**
* `6008` - **Conid** — Contract identifier from IBKR's database.
* `6070` - **SecType** — The asset class of the instrument.
* `6072` - **Months**
* `6073` - **Regular Expiry**
* `6119` - **Marker for Market Data Delivery Method** — Similar to a request id.
* `6457` - **Underlying Conid** — Use /trsrv/secdef to get more information about the security.
* `6508` - **Service Params**
* `6509` - **Market Data Availability** — The field may contain three chars. First char defines: R = RealTime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed, i – incomplete, v – VDR Exempt (Vendor Display Rule 603c). Second char defines: P = Snapshot, p = Consolidated. Third char defines: B = Book. RealTime – Data is relayed back in real time without delay, market data subscription(s) are required. Delayed – Data is relayed back 15-20 min delayed. Frozen – Last recorded data at market close, relayed back in real time. Frozen Delayed – Last recorded data at market close, relayed back delayed. Not Subscribed – User does not have the required market data subscription(s) to relay back either real time or delayed data. Snapshot – Snapshot request is available for contract. Consolidated – Market data is aggregated across multiple exchanges or venues. Book – Top of the book data is available for contract.
* `7051` - **Company Name**
* `7057` - **Ask Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7058` - **Last Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7059` - **Last Size** — The number of units traded at the last price.
* `7068` - **Bid Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7084` - **Implied Vol./Hist. Vol %** — The ratio of the implied volatility over the historical volatility, expressed as a percentage.
* `7085` - **Put/Call Interest** — Total put option open interest divided by call option open interest for the trading day. Only available for Underlying contracts.
* `7086` - **Put/Call Volume** — Put option volume/call option volume for the trading day.
* `7087` - **Hist. Vol. %** — 30-day real-time historical volatility.
* `7088` - **Hist. Vol. Close %** — Shows the historical volatility based on previous close price.
* `7089` - **Opt. Volume** — Option volume.
* `7094` - **Conid + Exchange**
* `7184` - **canBeTraded** — If contract is a trade-able instrument. Returns 1(true) or 0(false).
* `7219` - **Contract Description**
* `7220` - **Contract Description**
* `7221` - **Listing Exchange**
* `7280` - **Industry** — Displays the type of industry under which the underlying company can be categorized.
* `7281` - **Category** — Displays a more detailed level of description within the industry under which the underlying company can be categorized.
* `7282` - **Average Volume** — The average daily trading volume over 90 days.
* `7283` - **Option Implied Vol. %** — A prediction of how volatile an underlying will be in the future. At the market volatility estimated for a maturity thirty calendar days forward of the current trading day, and based on option prices from two consecutive expiration months. To query the Implied Vol. % of a specific strike refer to field 7633.
* `7284` - **Historical Volatility %** — Deprecated, see field 7087.
* `7285` - **Put/Call Ratio**
* `7292` - **Cost Basis** — Your current position in this security multiplied by the average price and multiplier.
* `7293` - **52 Week High** — The highest price for the past 52 weeks.
* `7294` - **52 Week Low** — The lowest price for the past 52 weeks.
* `7295` - **Open** — Today's opening price.
* `7296` - **Close** — Today's closing price.
* `7308` - **Delta** — The ratio of the change in the price of the option to the corresponding change in the price of the underlying.
* `7309` - **Gamma** — The rate of change for the delta with respect to the underlying asset's price.
* `7310` - **Theta** — A measure of the rate of decline the value of an option due to the passage of time.
* `7311` - **Vega** — The amount that the price of an option changes compared to a 1% change in the volatility.
* `7607` - **Opt. Volume Change %** — Today's option volume as a percentage of the average option volume.
* `7633` - **Implied Vol. %** — The implied volatility for the specific strike of the option in percentage. To query the Option Implied Vol. % from the underlying refer to field 7283.
* `7635` - **Mark** — The mark price is the ask price if ask is less than last price, the bid price if bid is more than the last price, otherwise it's equal to last price.
* `7636` - **Shortable Shares** — Number of shares available for shorting.
* `7637` - **Fee Rate** — Interest rate charged on borrowed shares.
* `7638` - **Option Open Interest** — Available for Underlyings and Call & Put options.
* `7639` - **% of Mark Value** — Displays the market value of the contract as a percentage of the total market value of the account. Mark Value is calculated with real time market data (even when not subscribed to market data).
* `7644` - **Shortable** — Describes the level of difficulty with which the security can be sold short.
* `7671` - **Dividends** — This value is the total of the expected dividend payments over the next twelve months per share.
* `7672` - **Dividends TTM** — This value is the total of the expected dividend payments over the last twelve months per share.
* `7674` - **EMA(200)** — Exponential moving average (N=200).
* `7675` - **EMA(100)** — Exponential moving average (N=100).
* `7676` - **EMA(50)** — Exponential moving average (N=50).
* `7677` - **EMA(20)** — Exponential moving average (N=20).
* `7678` - **Price/EMA(200)** — Price to Exponential moving average (N=200) ratio -1, displayed in percents.
* `7679` - **Price/EMA(100)** — Price to Exponential moving average (N=100) ratio -1, displayed in percents.
* `7681` - **Price/EMA(20)** — Price to Exponential moving average (N=20) ratio -1, displayed in percents.
* `7682` - **Change Since Open** — The difference between the last price and the open price.
* `7683` - **Upcoming Event** — Shows the next major company event. Requires Wall Street Horizon subscription.
* `7684` - **Upcoming Event Date** — The date of the next major company event. Requires Wall Street Horizon subscription.
* `7685` - **Upcoming Analyst Meeting** — The date and time of the next scheduled analyst meeting. Requires Wall Street Horizon subscription.
* `7686` - **Upcoming Earnings** — The date and time of the next scheduled earnings/earnings call event. Requires Wall Street Horizon subscription.
* `7687` - **Upcoming Misc Event** — The date and time of the next shareholder meeting, presentation or other event. Requires Wall Street Horizon subscription.
* `7688` - **Recent Analyst Meeting** — The date and time of the most recent analyst meeting. Requires Wall Street Horizon subscription.
* `7689` - **Recent Earnings** — The date and time of the most recent earnings/earnings call event. Requires Wall Street Horizon subscription.
* `7690` - **Recent Misc Event** — The date and time of the most recent shareholder meeting, presentation or other event. Requires Wall Street Horizon subscription.
* `7694` - **Probability of Max Return** — Customer implied probability of maximum potential gain.
* `7695` - **Break Even** — Break even points.
* `7696` - **SPX Delta** — Beta Weighted Delta is calculated using the formula: Delta x dollar adjusted beta, where adjusted beta is adjusted by the ratio of the close price.
* `7697` - **Futures Open Interest** — Total number of outstanding futures contracts.
* `7698` - **Last Yield** — Implied yield of the bond if it is purchased at the current last price. Last yield is calculated using the Last price on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7699` - **Bid Yield** — Implied yield of the bond if it is purchased at the current bid price. Bid yield is calculated using the Ask on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7700` - **Probability of Max Return** — Customer implied probability of maximum potential gain.
* `7702` - **Probability of Max Loss** — Customer implied probability of maximum potential loss.
* `7703` - **Profit Probability** — Customer implied probability of any gain.
* `7704` - **Organization Type**
* `7705` - **Debt Class**
* `7706` - **Ratings** — Ratings issued for bond contract.
* `7707` - **Bond State Code**
* `7708` - **Bond Type**
* `7714` - **Last Trading Date**
* `7715` - **Issue Date**
* `7720` - **Ask Yield** — Implied yield of the bond if it is purchased at the current offer. Ask yield is calculated using the Bid on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7724` - **Price/EMA(50)** — Price to Exponential moving average (N=50) ratio -1, displayed in percents.
* `7741` - **Prior Close** — Yesterday's closing price.
* `7762` - **Volume Long** — High precision volume for the day. For formatted volume refer to field 87.
* `7768` - **hasTradingPermissions** — If user has trading permissions for specified contract. Returns 1(true) or 0(false).
* `7899` - **Stock Type** — Determines the stock type. Includes: Common, CORP, ADR, ETF, ETN, EFN, REIT, CEF, ETMF.
* `7920` - **Daily PnL Raw** — Your profit or loss of the day since prior close. Daily PnL is calculated with real-time market data (even when not subscribed to market data).
* `7921` - **Cost Basis Raw** — Your current position in this security multiplied by the average price and multiplier.
* `7943` - **Rebate Rate** — Fed funds or other currency-relevant benchmark rate minus the interest rate charged on borrowed shares.

---

```
smd+265598+{"fields":["31","84","86"]}
```

### Response

Watchlist market data at Interactive Brokers is derived from time-based snapshot intervals which vary by product. All products update at a maximum frequency of 500ms.

#### Properties

**`server_id`** `string` — required

Request identifier for the specific market data subscription.

---

**`conidEx`** `string`

The passed conid field. May include exchange if specified in the request.

---

**`conid`** `integer`

Contract identifier of the subscribed contract.

---

**`_updated`** `integer`

Epoch timestamp of the update in 13-digit millisecond format.

---

**`6119`** `string`

Field value of the `server_id`. Returns the request's identifier.

---

**`{{field_id}}`** `string`

Each requested field is returned as a key-value pair. See the Market Data Fields reference for field descriptions.

#### Market Data Fields

* `31` - **Last Price** — The last price at which the contract traded. May contain one of the following prefixes: C – Previous day's closing price. H – Trading has halted.
* `55` - **Symbol**
* `58` - **Text**
* `70` - **High** — Current day high price.
* `71` - **Low** — Current day low price.
* `73` - **Market Value** — The current market value of your position in the security. Market Value is calculated with real time market data (even when not subscribed to market data).
* `74` - **Avg Price** — The average price of the position.
* `75` - **Unrealized PnL** — Unrealized profit or loss. Unrealized PnL is calculated with real time market data (even when not subscribed to market data).
* `76` - **Formatted Position**
* `77` - **Formatted Unrealized PnL**
* `78` - **Daily PnL** — Your profit or loss of the day since prior close. Daily PnL is calculated with real time market data (even when not subscribed to market data).
* `79` - **Realized PnL** — Realized profit or loss. Realized PnL is calculated with real time market data (even when not subscribed to market data).
* `80` - **Unrealized PnL %** — Unrealized profit or loss expressed in percentage.
* `82` - **Change** — The difference between the last price and the close on the previous trading day.
* `83` - **Change %** — The difference between the last price and the close on the previous trading day in percentage.
* `84` - **Bid Price** — The highest-priced bid on the contract.
* `85` - **Ask Size** — The number of contracts or shares offered at the ask price.
* `86` - **Ask Price** — The lowest-priced offer on the contract.
* `87` - **Volume** — Volume for the day, formatted with 'K' for thousands or 'M' for millions. For higher precision volume refer to field 7762.
* `88` - **Bid Size** — The number of contracts or shares bid for at the bid price.
* `201` - **Right** — Returns the right of the instrument, such as P for Put or C for Call.
* `6004` - **Exchange**
* `6008` - **Conid** — Contract identifier from IBKR's database.
* `6070` - **SecType** — The asset class of the instrument.
* `6072` - **Months**
* `6073` - **Regular Expiry**
* `6119` - **Marker for Market Data Delivery Method** — Similar to a request id.
* `6457` - **Underlying Conid** — Use /trsrv/secdef to get more information about the security.
* `6508` - **Service Params**
* `6509` - **Market Data Availability** — The field may contain three chars. First char defines: R = RealTime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed, i – incomplete, v – VDR Exempt (Vendor Display Rule 603c). Second char defines: P = Snapshot, p = Consolidated. Third char defines: B = Book. RealTime – Data is relayed back in real time without delay, market data subscription(s) are required. Delayed – Data is relayed back 15-20 min delayed. Frozen – Last recorded data at market close, relayed back in real time. Frozen Delayed – Last recorded data at market close, relayed back delayed. Not Subscribed – User does not have the required market data subscription(s) to relay back either real time or delayed data. Snapshot – Snapshot request is available for contract. Consolidated – Market data is aggregated across multiple exchanges or venues. Book – Top of the book data is available for contract.
* `7051` - **Company Name**
* `7057` - **Ask Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7058` - **Last Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7059` - **Last Size** — The number of units traded at the last price.
* `7068` - **Bid Exch** — Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY.
* `7084` - **Implied Vol./Hist. Vol %** — The ratio of the implied volatility over the historical volatility, expressed as a percentage.
* `7085` - **Put/Call Interest** — Total put option open interest divided by call option open interest for the trading day. Only available for Underlying contracts.
* `7086` - **Put/Call Volume** — Put option volume/call option volume for the trading day.
* `7087` - **Hist. Vol. %** — 30-day real-time historical volatility.
* `7088` - **Hist. Vol. Close %** — Shows the historical volatility based on previous close price.
* `7089` - **Opt. Volume** — Option volume.
* `7094` - **Conid + Exchange**
* `7184` - **canBeTraded** — If contract is a trade-able instrument. Returns 1(true) or 0(false).
* `7219` - **Contract Description**
* `7220` - **Contract Description**
* `7221` - **Listing Exchange**
* `7280` - **Industry** — Displays the type of industry under which the underlying company can be categorized.
* `7281` - **Category** — Displays a more detailed level of description within the industry under which the underlying company can be categorized.
* `7282` - **Average Volume** — The average daily trading volume over 90 days.
* `7283` - **Option Implied Vol. %** — A prediction of how volatile an underlying will be in the future. At the market volatility estimated for a maturity thirty calendar days forward of the current trading day, and based on option prices from two consecutive expiration months. To query the Implied Vol. % of a specific strike refer to field 7633.
* `7284` - **Historical Volatility %** — Deprecated, see field 7087.
* `7285` - **Put/Call Ratio**
* `7292` - **Cost Basis** — Your current position in this security multiplied by the average price and multiplier.
* `7293` - **52 Week High** — The highest price for the past 52 weeks.
* `7294` - **52 Week Low** — The lowest price for the past 52 weeks.
* `7295` - **Open** — Today's opening price.
* `7296` - **Close** — Today's closing price.
* `7308` - **Delta** — The ratio of the change in the price of the option to the corresponding change in the price of the underlying.
* `7309` - **Gamma** — The rate of change for the delta with respect to the underlying asset's price.
* `7310` - **Theta** — A measure of the rate of decline the value of an option due to the passage of time.
* `7311` - **Vega** — The amount that the price of an option changes compared to a 1% change in the volatility.
* `7607` - **Opt. Volume Change %** — Today's option volume as a percentage of the average option volume.
* `7633` - **Implied Vol. %** — The implied volatility for the specific strike of the option in percentage. To query the Option Implied Vol. % from the underlying refer to field 7283.
* `7635` - **Mark** — The mark price is the ask price if ask is less than last price, the bid price if bid is more than the last price, otherwise it's equal to last price.
* `7636` - **Shortable Shares** — Number of shares available for shorting.
* `7637` - **Fee Rate** — Interest rate charged on borrowed shares.
* `7638` - **Option Open Interest** — Available for Underlyings and Call & Put options.
* `7639` - **% of Mark Value** — Displays the market value of the contract as a percentage of the total market value of the account. Mark Value is calculated with real time market data (even when not subscribed to market data).
* `7644` - **Shortable** — Describes the level of difficulty with which the security can be sold short.
* `7671` - **Dividends** — This value is the total of the expected dividend payments over the next twelve months per share.
* `7672` - **Dividends TTM** — This value is the total of the expected dividend payments over the last twelve months per share.
* `7674` - **EMA(200)** — Exponential moving average (N=200).
* `7675` - **EMA(100)** — Exponential moving average (N=100).
* `7676` - **EMA(50)** — Exponential moving average (N=50).
* `7677` - **EMA(20)** — Exponential moving average (N=20).
* `7678` - **Price/EMA(200)** — Price to Exponential moving average (N=200) ratio -1, displayed in percents.
* `7679` - **Price/EMA(100)** — Price to Exponential moving average (N=100) ratio -1, displayed in percents.
* `7681` - **Price/EMA(20)** — Price to Exponential moving average (N=20) ratio -1, displayed in percents.
* `7682` - **Change Since Open** — The difference between the last price and the open price.
* `7683` - **Upcoming Event** — Shows the next major company event. Requires Wall Street Horizon subscription.
* `7684` - **Upcoming Event Date** — The date of the next major company event. Requires Wall Street Horizon subscription.
* `7685` - **Upcoming Analyst Meeting** — The date and time of the next scheduled analyst meeting. Requires Wall Street Horizon subscription.
* `7686` - **Upcoming Earnings** — The date and time of the next scheduled earnings/earnings call event. Requires Wall Street Horizon subscription.
* `7687` - **Upcoming Misc Event** — The date and time of the next shareholder meeting, presentation or other event. Requires Wall Street Horizon subscription.
* `7688` - **Recent Analyst Meeting** — The date and time of the most recent analyst meeting. Requires Wall Street Horizon subscription.
* `7689` - **Recent Earnings** — The date and time of the most recent earnings/earnings call event. Requires Wall Street Horizon subscription.
* `7690` - **Recent Misc Event** — The date and time of the most recent shareholder meeting, presentation or other event. Requires Wall Street Horizon subscription.
* `7694` - **Probability of Max Return** — Customer implied probability of maximum potential gain.
* `7695` - **Break Even** — Break even points.
* `7696` - **SPX Delta** — Beta Weighted Delta is calculated using the formula: Delta x dollar adjusted beta, where adjusted beta is adjusted by the ratio of the close price.
* `7697` - **Futures Open Interest** — Total number of outstanding futures contracts.
* `7698` - **Last Yield** — Implied yield of the bond if it is purchased at the current last price. Last yield is calculated using the Last price on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7699` - **Bid Yield** — Implied yield of the bond if it is purchased at the current bid price. Bid yield is calculated using the Ask on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7700` - **Probability of Max Return** — Customer implied probability of maximum potential gain.
* `7702` - **Probability of Max Loss** — Customer implied probability of maximum potential loss.
* `7703` - **Profit Probability** — Customer implied probability of any gain.
* `7704` - **Organization Type**
* `7705` - **Debt Class**
* `7706` - **Ratings** — Ratings issued for bond contract.
* `7707` - **Bond State Code**
* `7708` - **Bond Type**
* `7714` - **Last Trading Date**
* `7715` - **Issue Date**
* `7720` - **Ask Yield** — Implied yield of the bond if it is purchased at the current offer. Ask yield is calculated using the Bid on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worst may be the same as yield to maturity but never higher.
* `7724` - **Price/EMA(50)** — Price to Exponential moving average (N=50) ratio -1, displayed in percents.
* `7741` - **Prior Close** — Yesterday's closing price.
* `7762` - **Volume Long** — High precision volume for the day. For formatted volume refer to field 87.
* `7768` - **hasTradingPermissions** — If user has trading permissions for specified contract. Returns 1(true) or 0(false).
* `7899` - **Stock Type** — Determines the stock type. Includes: Common, CORP, ADR, ETF, ETN, EFN, REIT, CEF, ETMF.
* `7920` - **Daily PnL Raw** — Your profit or loss of the day since prior close. Daily PnL is calculated with real-time market data (even when not subscribed to market data).
* `7921` - **Cost Basis Raw** — Your current position in this security multiplied by the average price and multiplier.
* `7943` - **Rebate Rate** — Fed funds or other currency-relevant benchmark rate minus the interest rate charged on borrowed shares.

---

**`6509`** `string`

Multi-character value representing the Market Data Availability.

---

**`topic`** `string` — required

Restates the requesting topic.

---

```json wordWrap
{"server_id":"smd265598","conidEx":"265598","conid":265598,"_updated":1699885800500,"6119":"smd265598","31":"182.50","84":"182.48","86":"182.52","6509":"RB","topic":"smd+265598"}
```

---

## Unsubscribe from Streaming Market Data

`umd+{{conId}}+{}`

Request to cancel a streaming market data subscription for the given contract.

### Request

#### Properties

**`umd`** `const`

Unsubscribes the user from streaming market data for the specified contract.

---

**`conId`** `string`

A single contract identifier matching the one used in the original `smd` request.

---

```
umd+265598+{}
```

### Response Example

Unsubscribing from streaming market data does not deliver any acknowledgement. It would be expected for `smd` responses to immediately halt for the given contract.