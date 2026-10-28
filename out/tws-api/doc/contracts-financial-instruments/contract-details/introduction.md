[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/contract-details/introduction)

# Introduction

Complete details about a contract in IB's database can be retrieved using the function [IBApi.EClient.reqContractDetails](#request-contract-details). This includes information about a contract's conID, symbol, local symbol, currency, etc. which is returned in a IBApi.ContractDetails object. reqContractDetails takes as an argument a Contract object which may uniquely match one contract, and unlike other API functions it can also take a Contract object which matches multiple contracts in IB's database. When there are multiple matches, they will each be returned individually to the function [IBApi::EWrapper::contractDetails.](#receive-contract-details)

Request for Bond details will be returned to [IBApi::EWrapper::bondContractDetails](#receive-bond-details) instead. Because of bond market data license restrictions, there are only a few available fields to be returned in a bond contract description, namely the minTick, exchange, and short name.

Notes:

* Invoking reqContractDetails with a Contract object which has currency = USD will only return US contracts, even if there are non-US instruments which have the USD currency.
* Derivative contract requests are internally paced. Attempts to query Options, Warrants, or Futures Options must contain their maximum level of detail such as Symbol, SecType, Exchange, Currency, Strike, Right, LastTradeDateOrExpiration, and potentially TradingClass.

  Another function of IBApi::EClient::reqContractDetails is to request the trading schedule of an instrument via the TradingHours and LiquidHours fields. The corresponding timeZoneId field will then indicate the time zone for the trading schedule of the instrument. TWS sends these timeZoneId strings to the API from the schedule responses as-is, and may not exactly match the time zones displayed in the TWS contract description.

  Possible timeZoneId values are:

  * Europe/Riga
  * Australia/NSW
  * Europe/Warsaw
  * US/Pacific
  * Europe/Tallinn
  * Japan
  * US/Eastern
  * Europe/London
  * Africa/Johannesburg
  * Israel
  * Europe/Vilnius
  * MET
  * Europe/Helsinki
  * US/Central
  * Europe/Budapest
  * Asia/Calcutta
  * Hongkong
  * Europe/Moscow
  * GMT
