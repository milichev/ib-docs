[source](https://www.interactivebrokers.com/docs/tws-api/ref/order)

## Order

| Field | Type | Description |
| ----- | ---- | ----------- |
| `clientId` | `int32` | The API client id which placed the order. |
| `orderId` | `int32` | The API client's order id. |
| `permId` | `int64` | The Host order identifier. |
| `parentId` | `int32` | The order ID of the parent order, used for bracket and auto trailing stop orders. |
| `action` | `string` | Identifies the side. Generally available values are BUY and SELL. Additionally, SSHORT and SLONG are available in some institutional-accounts only. |
| `totalQuantity` | `string` | The number of positions being bought/sold. |
| `displaySize` | `int32` | The publicly disclosed order size |
| `orderType` | `string` | The order's type. |
| `lmtPrice` | `double` | The LIMIT price. Used for limit |
| `auxPrice` | `double` | Generic field to contain the stop price for STP LMT orders, trailing amount, etc. |
| `tif` | `string` | The time in force. Valid values are: DAY – Valid for the day only. GTC – Good until canceled. The order will continue to work within the system and in the marketplace until it executes or is canceled. GTC orders will be automatically be cancelled under the following conditions: If a corporate action on a security results in a stock split (forward or reverse) |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `settlingFirm` | `string` | Indicates the firm which will settle the trade. Institutions only. |
| `clearingAccount` | `string` | Specifies the true beneficiary of the order. For IBExecution customers. This value is required for FUT/FOP orders for reporting to the exchange. |
| `clearingIntent` | `string` | For execution-only clients to know where do they want their shares to be cleared at. Valid values are: IB |
| `allOrNone` | `bool` | Indicates whether or not all the order has to be filled on a single execution. |
| `blockOrder` | `bool` | If set to true |
| `hidden` | `bool` | If set to true, the order will not be visible when viewing the market depth. This option only applies to orders routed to the NASDAQ exchange. |
| `outsideRth` | `bool` | If set to true, allows orders to also trigger or fill outside of regular trading hours. |
| `sweepToFill` | `bool` | If set to true |
| `percentOffset` | `double` | The percent offset amount for relative orders. |
| `trailingPercent` | `double` | Specifies the trailing amount of a trailing stop order as a percentage. Observe the following guidelines when using the trailingPercent field: Guidelines * This field is mutually exclusive with the existing trailing amount. That is, the API client can send one or the other but not both. * This field is read AFTER the stop price (barrier price) as follows: deltaNeutralAuxPrice stopPrice, trailingPercent, scale order attributes. * The field will also be sent to the API in the openOrder message if the API client version is >= 56. It is sent after the stopPrice field as follows: stopPrice, trailingPct, basisPoint. |
| `trailStopPrice` | `double` | Trail stop price for TRAIL LIMIT orders. |
| `minQty` | `int32` | Identifies a minimum quantity order type. |
| `goodAfterTime` | `string` | Specifies the date and time after which the order will be active. Format: yyyymmdd hh:mm:ss {optional Timezone}. |
| `goodTillDate` | `string` | The date and time when the order should cancel if not already filled. Only valid for orders using the "GTD" tif. Users that would prefer to specify a number of seconds should use the Duration parameter instead. Both values cannot be specified at the same time. |
| `ocaGroup` | `string` | One-Cancels-All group identifier. |
| `orderRef` | `string` | The order reference. Intended for institutional customers only |
| `rule80A` | `string` | Individual = 'I' Agency = 'A' AgentOtherMember = 'W' IndividualPTIA = 'J' AgencyPTIA = 'U' AgentOtherMemberPTIA = 'M' IndividualPT = 'K' AgencyPT = 'Y' AgentOtherMemberPT = 'N'. |
| `ocaType` | `int32` | Tells how to handle remaining orders in an OCA group when one order or part of an order executes. Valid values are: 1 – Cancel all remaining orders with block. 2 – Remaining orders are proportionately reduced in size with block. 3 – Remaining orders are proportionately reduced in size with no block. If you use a value "with block" it gives the order overfill protection. This means that only one order in the group will be routed at a time to remove the possibility of an overfill. |
| `triggerMethod` | `int32` | Specifies how Simulated Stop |
| `activeStartTime` | `string` | Defines the start time of GTC orders. |
| `activeStopTime` | `string` | Defines the stop time of GTC orders. |
| `faGroup` | `string` | The Financial Advisor group the trade will be allocated to. Use an empty string if not applicable. |
| `faMethod` | `string` | The Financial Advisor allocation method the trade will be allocated to. Use an empty string if not applicable. |
| `faPercentage` | `string` | The Financial Advisor percentage concerning the trade's allocation. Use an empty string if not applicable. |
| `volatility` | `double` | The option price in volatility |
| `volatilityType` | `int32` | Values include: 1 – Daily Volatility 2 – Annual Volatility. |
| `continuousUpdate` | `bool` | Specifies whether TWS will automatically update the limit price of the order as the underlying price moves. VOL orders only. |
| `referencePriceType` | `int32` | Specifies how you want TWS to calculate the limit price for options |
| `deltaNeutralOrderType` | `string` | Enter an order type to instruct TWS to submit a delta neutral trade on full or partial execution of the VOL order. VOL orders only. For no hedge delta order to be sent |
| `deltaNeutralAuxPrice` | `double` | Use this field to enter a value if the value in the deltaNeutralOrderType field is an order type that requires an Aux price |
| `deltaNeutralConId` | `int32` | The unique contract identifier specifying the security in Delta Neutral order. |
| `deltaNeutralOpenClose` | `string` | Specifies whether the order is an Open or a Close order and is used when the hedge involves a CFD and and the order is clearing away. |
| `deltaNeutralShortSale` | `bool` | Used when the hedge involves a stock and indicates whether or not it is sold short. |
| `deltaNeutralShortSaleSlot` | `int32` | Indicates a short sale Delta Neutral order. Has a value of 1 (the clearing broker holds shares) or 2 (delivered from a third party). If you use 2 |
| `deltaNeutralDesignatedLocation` | `string` | Identifies third party order origin. Used only when deltaNeutralShortSaleSlot = 2. |
| `scaleInitLevelSize` | `int32` | Defines the size of the first |
| `scaleSubsLevelSize` | `int32` | Defines the order size of the subsequent scale order components. For Scale orders only. Used in conjunction with scaleInitLevelSize(). |
| `scalePriceIncrement` | `double` | Defines the price increment between scale components. For Scale orders only. This value is compulsory. |
| `scalePriceAdjustValue` | `double` | Modifies the value of the Scale order. For extended Scale orders. |
| `scalePriceAdjustInterval` | `int32` | Specifies the interval when the price is adjusted. For extended Scale orders. |
| `scaleProfitOffset` | `double` | Specifies the offset when to adjust profit. For extended scale orders. |
| `scaleAutoReset` | `bool` | Restarts the Scale series if the order is cancelled. For extended scale orders. |
| `scaleInitPosition` | `int32` | The initial position of the Scale order. For extended scale orders. |
| `scaleInitFillQty` | `int32` | Specifies the initial quantity to be filled. For extended scale orders. |
| `scaleRandomPercent` | `bool` | Defines the random percent by which to adjust the position. For extended scale orders. |
| `scaleTable` | `string` | The list of scale orders. Used for scale orders. |
| `hedgeType` | `string` | For hedge orders. Possible values include: D – Delta B – Beta F – FX P – Pair |
| `hedgeParam` | `string` | For hedge orders. Beta = x for Beta hedge orders |
| `algoStrategy` | `string` | The algorithm strategy. ArrivalPx – Arrival Price DarkIce – Dark Ice PctVol – Percentage of Volume Twap – TWAP (Time Weighted Average Price) Vwap – VWAP (Volume Weighted Average Price) For more information about IB's API algorithms |
| `algoParams` | `AlgoParamsEntry` | The list of parameters for the IB algorithm. For more information about IB's API algorithms |
| `algoId` | `string` | Identifies orders generated by algorithmic trading. |
| `smartComboRoutingParams` | `SmartComboRoutingParamsEntry` |  |
| `whatIf` | `bool` | Allows to retrieve the commissions and margin information. When placing an order with this attribute set to true |
| `transmit` | `bool` | Specifies whether the order will be transmitted by TWS. If set to false, the order will be created at TWS but will not be sent. Users implementing directly from Protobuf should be aware that Transmit should be implicitly set to 'true' when placing orders to transmit an order. |
| `overridePercentageConstraints` | `bool` | Overrides TWS constraints. Precautionary constraints are defined on the TWS Presets page |
| `openClose` | `string` | For institutional customers only. Valid values are O (open) and C (close). Available for institutional clients to determine if this order is to open or close a position. When Action = "BUY" and OpenClose = "O" this will open a new position. When Action = "BUY" and OpenClose = "C" this will close and existing short position. |
| `origin` | `int32` | The order's origin. Same as TWS "Origin" column. Identifies the type of customer from which the order originated. Valid values are:0 – Customer 1 – Firm. |
| `shortSaleSlot` | `int32` | For institutions only. Valid values are: 1 – Broker holds shares 2 – Shares come from elsewhere. |
| `designatedLocation` | `string` | For institutions only. Indicates the location where the shares to short come from. Used only when short sale slot is set to 2 (which means that the shares to short are held elsewhere and not with IB). |
| `exemptCode` | `int32` | Only available with IB Execution-Only accounts with applicable securities. Mark order as exempt from short sale uptick rule. |
| `deltaNeutralSettlingFirm` | `string` | Indicates the firm which will settle the Delta Neutral trade. Institutions only. |
| `deltaNeutralClearingAccount` | `string` | Specifies the beneficiary of the Delta Neutral order. |
| `deltaNeutralClearingIntent` | `string` | Specifies where the clients want their shares to be cleared at. Must be specified by execution-only clients. Valid values are: IB |
| `discretionaryAmt` | `double` | The amount off the limit price allowed for discretionary orders. |
| `optOutSmartRouting` | `bool` | Use to opt out of default SmartRouting for orders routed directly to ASX. This attribute defaults to false unless explicitly set to true. When set to false |
| `startingPrice` | `double` | The auction's starting price. For BOX orders only. |
| `stockRefPrice` | `double` | The stock's reference price. The reference price is used for VOL orders to compute the limit price sent to an exchange (whether or not Continuous Update is selected) |
| `delta` | `double` | The stock's Delta. For orders on BOX only. |
| `stockRangeLower` | `double` | The lower value for the acceptable underlying stock price range. For price improvement option orders on BOX and VOL orders with dynamic management. |
| `stockRangeUpper` | `double` | The upper value for the acceptable underlying stock price range. For price improvement option orders on BOX and VOL orders with dynamic management. |
| `notHeld` | `bool` | Orders routed to IBDARK are tagged as "post only" and are held in IB's order book |
| `orderMiscOptions` | `OrderMiscOptionsEntry` | For internal use only. Use the default value XYZ. |
| `solicited` | `bool` | The Solicited field should be used for orders initiated or recommended by the broker or adviser that were approved by the client (by phone, email, chat, verbally, etc.) prior to entry. Please note that orders that the adviser or broker placed without specifically discussing with the client are discretionary orders, not solicited. |
| `randomizeSize` | `bool` | Randomizes the order's size. Only for Volatility and Pegged to Volatility orders. |
| `randomizePrice` | `bool` | Randomizes the order's price. Only for Volatility and Pegged to Volatility orders. |
| `referenceContractId` | `int32` | Pegged-to-benchmark orders: this attribute will contain the conId of the contract against which the order will be pegged. |
| `peggedChangeAmount` | `double` | Pegged-to-benchmark orders: amount by which the order's pegged price should move. |
| `isPeggedChangeAmountDecrease` | `bool` | Pegged-to-benchmark orders: indicates whether the order's pegged price should increase or decreases. |
| `referenceChangeAmount` | `double` | Pegged-to-benchmark orders: the amount the reference contract needs to move to adjust the pegged order. |
| `referenceExchangeId` | `string` |  |
| `adjustedOrderType` | `string` | Adjusted Stop orders: the parent order will be adjusted to the given type when the adjusted trigger price is penetrated. |
| `triggerPrice` | `double` | Adjusted Stop orders: specifies the trigger price to execute. |
| `adjustedStopPrice` | `double` | Adjusted Stop orders: specifies the stop price of the adjusted (STP) parent. |
| `adjustedStopLimitPrice` | `double` | Adjusted Stop orders: specifies the stop limit price of the adjusted (STPL LMT) parent. |
| `adjustedTrailingAmount` | `double` | Adjusted Stop orders: specifies the trailing amount of the adjusted (TRAIL) parent. |
| `adjustableTrailingUnit` | `int32` | Adjusted Stop orders: specifies where the trailing unit is an amount (set to 0) or a percentage (set to 1) |
| `lmtPriceOffset` | `double` | Adjusted Stop orders: specifies the price offset for the stop to move in increments. |
| `conditions` | `OrderCondition` | Conditions determining when the order will be activated or canceled. |
| `conditionsCancelOrder` | `bool` | Conditions can determine if an order should become active or canceled. |
| `conditionsIgnoreRth` | `bool` | Indicates whether or not conditions will also be valid outside Regular Trading Hours. |
| `modelCode` | `string` | Is used to place an order to a model. For example |
| `extOperator` | `string` | Following CME Rule 576, the ExtOperator field will signify if the unique API operator at the time of trading for order management. |
| `softDollarTier` | `SoftDollarTier` |  |
| `cashQty` | `double` | The native cash quantity. |
| `mifid2DecisionMaker` | `string` | Identifies a person as the responsible party for investment decisions within the firm. Orders covered by MiFID 2 (Markets in Financial Instruments Directive 2) must include either Mifid2DecisionMaker or Mifid2DecisionAlgo field (but not both). Requires TWS 969+. |
| `mifid2DecisionAlgo` | `string` | Identifies the algorithm responsible for investment decisions within the firm. Orders covered under MiFID 2 must include either Mifid2DecisionMaker or Mifid2DecisionAlgo |
| `mifid2ExecutionTrader` | `string` | For MiFID 2 reporting; identifies a person as the responsible party for the execution of a transaction within the firm. Requires TWS 969+. |
| `mifid2ExecutionAlgo` | `string` | For MiFID 2 reporting; identifies the algorithm responsible for the execution of a transaction within the firm. Requires TWS 969+. |
| `dontUseAutoPriceForHedge` | `bool` | Don't use auto price for hedge. |
| `isOmsContainer` | `bool` | Set to true to create tickets from API orders when TWS is used as an OMS. |
| `discretionaryUpToLimitPrice` | `bool` | Set to true to convert order of type 'Primary Peg' to 'D-Peg'. |
| `autoCancelDate` | `string` | Specifies the date to auto cancel the order. |
| `filledQuantity` | `string` | Specifies the initial order quantity to be filled. |
| `refFuturesConId` | `int32` | Identifies the reference future conId. |
| `autoCancelParent` | `bool` | Cancels the parent order if child order was cancelled. |
| `shareholder` | `string` | Identifies the Shareholder. |
| `imbalanceOnly` | `bool` | Used to specify "imbalance only open orders" or "imbalance only closing orders". |
| `routeMarketableToBbo` | `int32` | Routes market order to Best Bid Offer. |
| `parentPermId` | `int64` | Parent order Id. |
| `usePriceMgmtAlgo` | `int32` | Specifies wether to use Price Management Algo. CTCI users only. |
| `duration` | `int32` | Specifies the number of seconds the order should remain active. For GTD orders only. Users that would prefer to specify an exact date should user the "GoodTillDate" parameter instead. Both values cannot be specified at the same time. |
| `postToAts` | `int32` | Value must be positive |
| `advancedErrorOverride` | `string` | Accepts a string with parameters obtained from advancedOrderRejectJson. |
| `manualOrderTime` | `string` | Used by brokers and advisors when manually entering an order request. Format should be "YYYYMMDD-HH:mm:ss" using UTC as the timezone value. |
| `minTradeQty` | `int32` | Defines the minimum trade quantity to fill. For IBKRATS orders. |
| `minCompeteSize` | `int32` | Defines the minimum size to compete. For IBKRATS orders. |
| `competeAgainstBestOffset` | `double` | Dpecifies the offset Off The Midpoint that will be applied to the order. For IBKRATS orders. |
| `midOffsetAtWhole` | `double` | This offset is applied when the spread is an even number of cents wide. This offset must be in whole-penny increments or zero. For IBKRATS orders. |
| `midOffsetAtHalf` | `double` | This offset is applied when the spread is an odd number of cents wide. This offset must be in half-penny increments. For IBKRATS orders. |
| `customerAccount` | `string` | Required for Nondisclosed Omnibus Accounts. A unique identifier for each account within the Omnibus structure to signify the account holder being traded. Best practice (Not Required): clients should look to hash this value, using something along the lines of 5 digits of SHA1 of the account number. This should not be implemented for non-omnibus accounts. |
| `professionalCustomer` | `bool` |  |
| `bondAccruedInterest` | `string` |  |
| `includeOvernight` | `bool` | Specify if the order should include overnight trading or not. False (no Overnight) is set by default. |
| `manualOrderIndicator` | `int32` | Following CME Rule 576, the ManualOrderIndicator field will signify if an order is manual (1) or automated (0). |
| `submitter` | `string` |  |
| `deactivate` | `bool` | Determines if the order is Active (False) or Deactivated (True). Orders that are deactivated are not submitted and will not execute, though they can be reviewed and transmitted via API, Trader Workstation, or Client Portal. This is unique from the Transmit field as orders submitted as Transmit=False will not leave the current TWS instance, and will be erased upon logout. Deactivated orders will persist internally at Interactive Brokers. |
| `postOnly` | `bool` |  |
| `allowPreOpen` | `bool` |  |
| `ignoreOpenAuction` | `bool` |  |
| `seekPriceImprovement` | `int32` |  |
| `whatIfType` | `int32` |  |
| `hedgeMaxSize` | `int32` | hedgeMaxSize (also referred to as "Max Hedging Size") is a user-supplied parameter that caps the maximum number of shares that can be shorted in a beta hedge child order. It provides an upper bound for risk and credit assessment purposes. Applied only to beta hedge orders (sell side only) for stocks in IB- cleared accounts. |

## Order.AlgoParamsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |

## Order.OrderMiscOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |

## Order.SmartComboRoutingParamsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
