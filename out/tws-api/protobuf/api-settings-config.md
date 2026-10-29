[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/api-settings-config)

## ApiSettingsConfig

| Field | Type | Description |
| ----- | ---- | ----------- |
| `readOnlyApi` | `bool` | true indicates modifications cannot be made throuh the API. |
| `totalQuantityForMutualFunds` | `bool` | If set to true, Mutual Fund API client can send monetary value for BUY order and NOT send CashQty, or send CashQty and NOT send totalQuantity. |
| `downloadOpenOrdersOnConnection` | `bool` | Declare that all open orders be returned to EWrapper.OpenOrders. |
| `includeVirtualFxPositions` | `bool` | true to include VirtualFX in the EWrapper.positions reponses. |
| `prepareDailyPnL` | `bool` | Prepare profit and loss value calculations when downloading positions data. |
| `sendStatusUpdatesForVolatilityOrders` | `bool` | Receive notifications for every |
| `encodeApiMessages` | `string` | Define API message encoding. Supports "osCodePage" (For C++) or "ascii7". |
| `socketPort` | `int32` | Supported socket port connection allowed for API connection requests. |
| `useNegativeAutoRange` | `bool` | If this flag is checked, orders that are automatically bound to an API client as a result of reqOpenOrders or reqAutoOpenOrders calls or system-generated orders like volatility hedging orders, will be assigned negative API Order ID numbers. If this flag is unchecked, orders bound as a result of reqOpenOrders or reqAutoOpenOrders calls will be assigned incremental API Order ID numbers. Volatility hedging orders will be assigned API Order ID numbers in the format 'parent order API ID + 1" when possible. |
| `createApiMessageLogFile` | `bool` | Toggle if an API log should be created. |
| `includeMarketDataInLogFile` | `bool` | true to have market data included in API logs. |
| `exposeTradingScheduleToApi` | `bool` | Flag as true to have Trader Workstation expose the complete known look-ahead trading schedule to the API, which is one week for most products. Leave unchecked to only send trading schedule for today plus the next open trading day. |
| `splitInsuredDepositFromCashBalance` | `bool` | False: The API "Cash Balance" includes the "Insured Bank Deposit Sweep Program" balance. True: Report "Cash Balance" and "Insured Bank Deposit Sweep Program" balances separately in the API. |
| `sendZeroPositionsForTodayOnly` | `bool` | True will return all positions that have already closed with a '0' value. |
| `letApiAccountRequestsSwitchSubscription` | `bool` | Internal use. Market data management. |
| `useAccountGroupsWithAllocationMethods` | `bool` | See [Unification of Groups and Profiles](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/unification-of-groups-and-profiles) for details. |
| `loggingLevel` | `string` | Level of detail for API logs. Supports "system", "warning", "error", "info" and "detail". |
| `masterClientId` | `int32` | The master identifier for order updates. |
| `bulkDataTimeout` | `int32` | When amount of data sent by the Trader Workstation becomes too large, it is possible that network connection to API client cannot handle the load. Trader Workstation waits for specified amount of seconds and then disconnects API client if data cannot be sent fast enough. |
| `componentExchSeparator` | `string` | Delimeter for smartComponentMap |
| `showForexDataIn1_10Pips` | `bool` | True indicates forex market data uses 1/10 pips instead of 1/2. |
| `allowForexTradingIn1_10Pips` | `bool` | If true, forex trades can be received in 1/10 pips instead of 1/2. |
| `roundAccountValuesToNearestWholeNumber` | `bool` | Account values will be rounded to whole numbers instead of precise values. |
| `sendMarketDataInLotsForUsStocks` | `bool` | Deliver market data as represented in lots rather than direct share sizes. |
| `showAdvancedOrderRejectInUi` | `bool` | True indicates AdvancedOrderReject messages will appear in the UI instead of through the socket. |
| `rejectMessagesAboveMaxRate` | `bool` | false indicates the API messages above maximum allowed message rate will be paced at max-msg/second. true indicates overhead messages will be rejected instantly to ensure timely response. |
| `maintainConnectionOnIncorrectFields` | `bool` | true to maintain API connection if requests are sent with incorrect API socket attributes. |
| `compatibilityModeNasdaqStocks` | `bool` | Indicate "ISLAND" is a valid exchange value for NASDAQ listed stocks. |
| `sendInstrumentTimezone` | `string` | Historical data will be returned based on the indicated value. Supported values include "instrument": representing the timezone of the instrument's primary listing exchange; "operator": representing the local timezone set in TWS or IBG; and "utc": representing the Coordinated Universal Time. |
| `sendForexDataInCompatibilityMode` | `bool` | Foreign exchange values will be delivered as integer rates instead of decimal. |
| `maintainAndResubmitOrdersOnReconnect` | `bool` | true to submit orders that attempted transmissions while disconnected from the network. |
| `historicalDataMaxSize` | `int32` | The maximum data size for historical bars. Supports 1, 4, 16 |
| `autoReportNettingEventContractTrades` | `bool` | True to net event contract trades |
| `optionExerciseRequestType` | `string` | Definition of how options should behave when exercised. |
| `allowLocalhostOnly` | `bool` | Determine if API connections are only permitted from localhost. If this value is true, trustedIPs will be ignored. |
| `trustedIPs` | `string` | A string of IP addresses that may connect to the Trader Workstation. |
