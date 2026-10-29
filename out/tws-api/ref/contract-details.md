[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/ref/contract-details)

## ContractDetails

| Field | Type | Description |
| ----- | ---- | ----------- |
| `marketName` | `string` | The market name for this product. |
| `minTick` | `string` | The minimum allowed price variation. Note that many securities vary their minimum tick size according to their price. This value will only show the smallest of the different minimum tick sizes regardless of the product's price. Full information about the minimum increment price structure can be obtained with the reqMarketRule function or the IB Contract and Security Search site. |
| `orderTypes` | `string` | Supported order types for this product. |
| `validExchanges` | `string` | Valid exchange fields when placing an order for this contract. |
| `priceMagnifier` | `int32` | Allows execution and strike prices to be reported consistently with market data |
| `underConId` | `int32` | For derivatives |
| `longName` | `string` | Descriptive name of the product. |
| `contractMonth` | `string` | Typically the contract month of the underlying for a Future contract. |
| `industry` | `string` | The industry classification of the underlying/product. For example |
| `category` | `string` | The industry category of the underlying. For example |
| `subcategory` | `string` | The industry subcategory of the underlying. For example |
| `timeZoneId` | `string` | The time zone for the trading hours of the product. For example |
| `tradingHours` | `string` | The trading hours of the product. This value will contain the trading hours of the current day as well as the next's. For example |
| `liquidHours` | `string` | The liquid hours of the product. This value will contain the liquid hours (regular trading hours) of the contract on the specified exchange. Format for TWS versions until 969: 20090507:0700-1830 |
| `evRule` | `string` | Contains the Economic Value Rule name and the respective optional argument. The two values should be separated by a colon. For example |
| `evMultiplier` | `double` | Tells you approximately how much the market value of a contract would change if the price were to change by 1. It cannot be used to get market value by multiplying the price by the approximate multiplier. |
| `secIdList` | `SecIdListEntry` | A list of contract identifiers that the customer is allowed to view. CUSIP/ISIN/etc. For US stocks |
| `aggGroup` | `int32` | Aggregated group Indicates the smart-routing group to which a contract belongs. contracts which cannot be smart-routed have aggGroup = -1. |
| `underSymbol` | `string` | For derivatives |
| `underSecType` | `string` | For derivatives |
| `marketRuleIds` | `string` | The list of market rule IDs separated by comma Market rule IDs can be used to determine the minimum price increment at a given price. |
| `realExpirationDate` | `string` | Real expiration date. |
| `stockType` | `string` | Stock type. |
| `minSize` | `string` | Order's minimal size. |
| `sizeIncrement` | `string` | Order's size increment. |
| `suggestedSizeIncrement` | `string` | Order's suggested size increment. |
| `fundName` | `string` | Fund's name. |
| `fundFamily` | `string` | Fund's family. |
| `fundType` | `string` | Fund's type. |
| `fundFrontLoad` | `string` | Fund's front load. |
| `fundBackLoad` | `string` | Fund's back load. |
| `fundBackLoadTimeInterval` | `string` | Fund's back load time interval. |
| `fundManagementFee` | `string` | Fund's management fee. |
| `fundClosed` | `bool` | Fund closed flag. |
| `fundClosedForNewInvestors` | `bool` | Fund closed for new investors flag. |
| `fundClosedForNewMoney` | `bool` | Fund closed for new money flag. |
| `fundNotifyAmount` | `string` | Fund's notify amount. |
| `fundMinimumInitialPurchase` | `string` | Fund's minimum initial purchase. |
| `fundMinimumSubsequentPurchase` | `string` |  |
| `fundBlueSkyStates` | `string` | Fund's blue sky states. |
| `fundBlueSkyTerritories` | `string` | Fund's blue sky territories. |
| `fundDistributionPolicyIndicator` | `string` | Fund's distribution policy indicator. |
| `fundAssetType` | `string` | Fund's asset type. |
| `cusip` | `string` | The nine-character bond CUSIP. For Bonds only. Receiving CUSIPs requires a CUSIP market data subscription. |
| `issueDate` | `string` | The date the bond was issued. This field is currently not available from the TWS API. For Bonds only. Not currently implemented due to bond market data restrictions. |
| `ratings` | `string` | Identifies the credit rating of the issuer. This field is not currently available from the TWS API. For Bonds only. A higher credit rating generally indicates a less risky investment. Bond ratings are from Moody's and S&P respectively. Not currently implemented due to bond market data restrictions. |
| `bondType` | `string` | The type of bond |
| `coupon` | `double` | The interest rate used to calculate the amount you will receive in interest payments over the course of the year. This field is currently not available from the TWS API. For Bonds only. |
| `couponType` | `string` | The type of bond coupon. This field is currently not available from the TWS API. For Bonds only. |
| `convertible` | `bool` | Indicates a debt instrument that can be converted into stock (equity) at a predetermined time at the discretion of the bondholder. |
| `callable` | `bool` | Indicates a debt security that lets the issuer buy back or redeem the principal before the scheduled maturity date |
| `puttable` | `bool` | Indicates a debt security that lets the bondholder require the issuer to repurchase the bond at specified dates before its maturity. |
| `descAppend` | `string` | A description string containing further descriptive information about the bond. For Bonds only. |
| `nextOptionDate` | `string` | Only if bond has embedded options. This field is currently not available from the TWS API. Refers to callable bonds and puttable bonds. Available in TWS description window for bonds. |
| `nextOptionType` | `string` | Type of embedded option. This field is currently not available from the TWS API. Only if bond has embedded options. |
| `nextOptionPartial` | `bool` | Only if bond has embedded options. This field is currently not available from the TWS API. For Bonds only. |
| `bondNotes` | `string` | Additional context regarding bond behavior. |
| `ineligibilityReasonList` | `IneligibilityReason` | List of details why the account cannot trade the given security. |
| `eventContract1` | `string` | Event Contract's topic |
| `eventContractDescription1` | `string` | Event contract's strike, expiry, and right. |
| `eventContractDescription2` | `string` | Complete event contract question. |
| `minAlgoSize` | `string` | Smallest order quantity for an algorithmic order. |
| `lastPricePrecision` | `string` | Decimal level rounding for the contract. |
| `lastSizePrecision` | `string` | Floating point rounding for order sizes |
| `settlementMethod` | `string` | How a product may settle on expiry. Supports "Physical" and "Cash" |

## ContractDetails.SecIdListEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
