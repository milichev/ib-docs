[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/ref/contract)

## Contract

| Field | Type | Description |
| ----- | ---- | ----------- |
| `conId` | `int32` | The unique IB contract identifier. |
| `symbol` | `string` | The underlying's asset symbol. |
| `secType` | `string` | The security's type: STK – stock (or ETF) OPT – option FUT – future IND – index FOP – futures option CASH – forex pair BAG – combo WAR – warrant BOND- bond CMDTY- commodity NEWS- news FUND- mutual fund. |
| `lastTradeDateOrContractMonth` | `string` | The contract's last trading day or contract month (for Options and Futures). Strings with format YYYYMM will be interpreted as the Contract Month whereas YYYYMMDD will be interpreted as Last Trading Day. |
| `strike` | `double` | The option's strike price. |
| `right` | `string` | Either Put or Call (i.e. Options). Valid values are P, PUT, C, CALL. |
| `multiplier` | `double` | The instrument's multiplier (i.e. options, futures). |
| `exchange` | `string` | The destination exchange. |
| `primaryExch` | `string` | The contract's primary exchange. For smart routed contracts, used to define contract in case of ambiguity.Should be defined as native exchange of contract. For exchanges which contain a period in name, will only be part of exchange name prior to period, i.e. ENEXT for ENEXT.BE |
| `currency` | `string` | The underlying's currency. |
| `localSymbol` | `string` | The contract's symbol within its primary exchange. For options, this will be the OCC symbol |
| `tradingClass` | `string` | The trading class name for this contract. Available in TWS contract description window as well. For example, GBL Dec '13 future's trading class is "FGBL" |
| `secIdType` | `string` | Security's identifier when querying contract's details or placing orders ISIN – Example: Apple: US0378331005 CUSIP – Example: Apple: 037833100. |
| `secId` | `string` | Identifier of the security type. More… |
| `description` | `string` | Description of the contract. |
| `issuerId` | `string` | IssuerId of the contract. |
| `deltaNeutralContract` | `DeltaNeutralContract` | Delta and underlying price for Delta-Neutral combo orders. Underlying (STK or FUT) |
| `includeExpired` | `bool` | If set to true, contract details requests and historical data queries can be performed pertaining to expired futures contracts. Expired options or other instrument types are not available. |
| `comboLegsDescrip` | `string` | Details for each leg of the combination contract. |
| `comboLegs` | `ComboLeg` | The legs of a combined contract definition. More… |
| `lastTradeDate` | `string` | The contract's last trading day. |
