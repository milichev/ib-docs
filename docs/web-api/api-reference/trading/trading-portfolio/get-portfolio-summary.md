[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio/get-portfolio-summary)

# Account Portfolio Summary

GET https://localhost:5000/v1/api/portfolio/{accountId}/summary

Returns detailed summary of account values, by segment where appropriate.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-portfolio-summary

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Query parameters

- `model` (string, optional)

## Response

### 200

response with summary definitions

- `accountcode` (PortfolioSummaryAccountcode, optional) — The Account ID of the requested account. (value)
- `accountready` (PortfolioSummaryAccountready, optional) — Indicates whether the account is fully open and tradable. (value)
- `accounttype` (PortfolioSummaryAccounttype, optional) — Identifies the type of client with which the account is associated, such as an individual or LLC. (value)
- `accruedcash` (PortfolioSummaryAccruedcash, optional) — Amount of cash accrued (not yet disbursed) for all segments in the account. (amount)
- `accruedcash-c` (PortfolioSummaryAccruedcashC, optional) — Amount of cash accrued (not yet disbursed) for the commodities segment in the account. (amount)
- `accruedcash-s` (PortfolioSummaryAccruedcashS, optional) — Amount of cash accrued (not yet disbursed) for the securities segment in the account. (amount)
- `accrueddividend` (PortfolioSummaryAccrueddividend, optional) — Amount of dividends accrued (not yet disbursed) for all segments in the account. (amount)
- `accrueddividend-c` (PortfolioSummaryAccrueddividendC, optional) — Amount of dividends accrued (not yet disbursed) for the commodities segment in the account. (amount)
- `accrueddividend-s` (PortfolioSummaryAccrueddividendS, optional) — Amount of dividends accrued (not yet disbursed) for the securities segment in the account. (amount)
- `availablefunds` (PortfolioSummaryAvailablefunds, optional) — Available funds (ELV minus Initial Margin) for all segments in the account. (amount)
- `availablefunds-c` (PortfolioSummaryAvailablefundsC, optional) — Available funds (ELV minus Initial Margin) for the commodities segment in the account. (amount)
- `availablefunds-s` (PortfolioSummaryAvailablefundsS, optional) — Available funds (ELV minus Initial Margin) for the securities segment in the account. (amount)
- `availabletotrade` (PortfolioSummaryAvailabletotrade, optional) — Funds available for trading (ELV minus Initial Margin) for all segments in the account. (amount)
- `availabletotrade-c` (PortfolioSummaryAvailabletotradeC, optional) — Funds available for trading (ELV minus Initial Margin) for the commodities segment in the account. (amount)
- `availabletotrade-s` (PortfolioSummaryAvailabletotradeS, optional) — Funds available for trading (ELV minus Initial Margin) for the securities segment in the account. (amount)
- `availabletowithdraw` (PortfolioSummaryAvailabletowithdraw, optional) — Funds available for withdrawal for all segments in the account. (amount)
- `availabletowithdraw-c` (PortfolioSummaryAvailabletowithdrawC, optional) — Funds available for withdrawal for the commodities segment in the account. (amount)
- `availabletowithdraw-s` (PortfolioSummaryAvailabletowithdrawS, optional) — Funds available for withdrawal for the securities segment in the account. (amount)
- `billable` (PortfolioSummaryBillable, optional) — Billable commissions for all segments in the account. (amount)
- `billable-c` (PortfolioSummaryBillableC, optional) — Billable commissions for the commodities segment in the account. (amount)
- `billable-s` (PortfolioSummaryBillableS, optional) — Billable commissions for the securities segment in the account. (amount)
- `buyingpower` (PortfolioSummaryBuyingpower, optional) — Buying power (maximum value of securities that can be bought without adding funds) for the account. (amount)
- `columnprio-c` (PortfolioSummaryColumnprioC, optional) — columnprio-c
- `columnprio-s` (PortfolioSummaryColumnprioS, optional) — columnprio-s
- `cushion` (PortfolioSummaryCushion, optional) — Margin cushion as a decimal ratio, (ELV-Maintenance)/ELV. (value)
- `daytradesremaining` (PortfolioSummaryDaytradesremaining, optional) — Number of day trades currently still available for 4-day pattern day trader period. (value)
- `daytradesremainingt+1` (PortfolioSummaryDaytradesremainingt1, optional) — Number of day trades available tomorrow for 4-day pattern day trader period. (value)
- `daytradesremainingt+2` (PortfolioSummaryDaytradesremainingt2, optional) — Number of day trades available in two days for 4-day pattern day trader period. (value)
- `daytradesremainingt+3` (PortfolioSummaryDaytradesremainingt3, optional) — Number of day trades available in three days for 4-day pattern day trader period. (value)
- `daytradesremainingt+4` (PortfolioSummaryDaytradesremainingt4, optional) — Number of day trades available in four days for 4-day pattern day trader period. (value)
- `daytradingstatus-s` (PortfolioSummaryDaytradingstatusS, optional) — daytradingstatus-s
- `depositoncredithold` (PortfolioSummaryDepositoncredithold, optional) — Indicates whether a deposit is on credit hold. (value)
- `equitywithloanvalue` (PortfolioSummaryEquitywithloanvalue, optional) — Equity with Loan Value for all segments of the account. (amount)
- `equitywithloanvalue-c` (PortfolioSummaryEquitywithloanvalueC, optional) — Equity with Loan Value for the commodities segment of the account. (amount)
- `equitywithloanvalue-s` (PortfolioSummaryEquitywithloanvalueS, optional) — Equity with Loan Value for the securities segment of the account. (amount)
- `excessliquidity` (PortfolioSummaryExcessliquidity, optional) — Excess liquidity (ELV minus Maintenance Margin) for all segments of the account. (amount)
- `excessliquidity-c` (PortfolioSummaryExcessliquidityC, optional) — Excess liquidity (ELV minus Maintenance Margin) for the commodities segment of the account. (amount)
- `excessliquidity-s` (PortfolioSummaryExcessliquidityS, optional) — Excess liquidity (ELV minus Maintenance Margin) for the securities segment of the account. (amount)
- `fullavailablefunds` (PortfolioSummaryFullavailablefunds, optional) — Full available funds for all segments of the account. (amount)
- `fullavailablefunds-c` (PortfolioSummaryFullavailablefundsC, optional) — Full available funds (NLV minus Initial Margin) for the commodities segment of the account. (amount)
- `fullavailablefunds-s` (PortfolioSummaryFullavailablefundsS, optional) — Full available funds (ELV minus Initial Margin) for the securities segment of the account. (amount)
- `fullexcessliquidity` (PortfolioSummaryFullexcessliquidity, optional) — Full excess liquidity (ELV minus Maintenance Margin) for all segments of the account. (amount)
- `fullexcessliquidity-c` (PortfolioSummaryFullexcessliquidityC, optional) — Full excess liquidity (ELV minus Maintenance Margin) for the commodities segment of the account. (amount)
- `fullexcessliquidity-s` (PortfolioSummaryFullexcessliquidityS, optional) — Full excess liquidity (ELV minus Maintenance Margin) for the securities segment of the account. (amount)
- `fullinitmarginreq` (PortfolioSummaryFullinitmarginreq, optional) — Full Initial Margin requirement for all segments of the account. (amount)
- `fullinitmarginreq-c` (PortfolioSummaryFullinitmarginreqC, optional) — Full Initial Margin requirement for the commodities segment of the account. (amount)
- `fullinitmarginreq-s` (PortfolioSummaryFullinitmarginreqS, optional) — Full Initial Margin requirement for the securities segment of the account. (amount)
- `fullmaintmarginreq` (PortfolioSummaryFullmaintmarginreq, optional) — Full Maintenance Margin requirement for all segments of the account. (amount)
- `fullmaintmarginreq-c` (PortfolioSummaryFullmaintmarginreqC, optional) — Full Maintenance Margin requirement for the commodities segment of the account. (amount)
- `fullmaintmarginreq-s` (PortfolioSummaryFullmaintmarginreqS, optional) — Full Maintenance Margin requirement for the securities segment of the account. (amount)
- `grosspositionvalue` (PortfolioSummaryGrosspositionvalue, optional) — Gross Position Value (sum of Long and Short position values for stocks and options) for all segments of the account. (amount)
- `grosspositionvalue-s` (PortfolioSummaryGrosspositionvalueS, optional) — grosspositionvalue-s
- `guarantee` (PortfolioSummaryGuarantee, optional) — For accounts that clear away, value of Guarantee for all segments of the account. (amount)
- `guarantee-c` (PortfolioSummaryGuaranteeC, optional) — For accounts that clear away, value of Guarantee for the commodities segment of the account. (amount)
- `guarantee-s` (PortfolioSummaryGuaranteeS, optional) — For accounts that clear away, value of Guarantee for the securities segment of the account. (amount)
- `highestseverity` (PortfolioSummaryHighestseverity, optional) — highestseverity
- `indianstockhaircut` (PortfolioSummaryIndianstockhaircut, optional) — Indian Stock Haircut value for all segments of the account. (amount)
- `indianstockhaircut-c` (PortfolioSummaryIndianstockhaircutC, optional) — Indian Stock Haircut value for the commodities segment of the account. (amount)
- `indianstockhaircut-s` (PortfolioSummaryIndianstockhaircutS, optional) — Indian Stock Haircut value for the securities segment of the account. (amount)
- `initmarginreq` (PortfolioSummaryInitmarginreq, optional) — Initial Margin requirement for all segments of the account. (amount)
- `initmarginreq-c` (PortfolioSummaryInitmarginreqC, optional) — Initial Margin requirement for the commodities segment of the account. (amount)
- `initmarginreq-s` (PortfolioSummaryInitmarginreqS, optional) — Initial Margin requirement for the securities segment of the account. (amount)
- `leverage-s` (PortfolioSummaryLeverageS, optional) — Leverage ratio (GPV/NLV) of the securities segment of the account. (value)
- `lookaheadavailablefunds` (PortfolioSummaryLookaheadavailablefunds, optional) — Look-ahead Available Funds for all segments of the account. (amount)
- `lookaheadavailablefunds-c` (PortfolioSummaryLookaheadavailablefundsC, optional) — Look-ahead Available Funds for the commodities segment of the account. (amount)
- `lookaheadavailablefunds-s` (PortfolioSummaryLookaheadavailablefundsS, optional) — Look-ahead Available Funds for the securities segment of the account. (amount)
- `lookaheadexcessliquidity` (PortfolioSummaryLookaheadexcessliquidity, optional) — Look-ahead Excess Liquidity for all segments of the account. (amount)
- `lookaheadexcessliquidity-c` (PortfolioSummaryLookaheadexcessliquidityC, optional) — Look-ahead Excess Liquidity for the commodities segment of the account. (amount)
- `lookaheadexcessliquidity-s` (PortfolioSummaryLookaheadexcessliquidityS, optional) — Look-ahead Excess Liquidity for the securities segment of the account. (amount)
- `lookaheadinitmarginreq` (PortfolioSummaryLookaheadinitmarginreq, optional) — Look-ahead Intial Margin requirement (as of next margin period) for all segments of the account. (amount)
- `lookaheadinitmarginreq-c` (PortfolioSummaryLookaheadinitmarginreqC, optional) — Look-ahead Intial Margin requirement (as of next margin period) for the commodities segment of the account. (amount)
- `lookaheadinitmarginreq-s` (PortfolioSummaryLookaheadinitmarginreqS, optional) — Look-ahead Intial Margin requirement (as of next margin period) for the securities segment of the account. (amount)
- `lookaheadmaintmarginreq` (PortfolioSummaryLookaheadmaintmarginreq, optional) — Look-ahead Maintenance Margin requirement (as of next margin period) for all segments of the account. (amount)
- `lookaheadmaintmarginreq-c` (PortfolioSummaryLookaheadmaintmarginreqC, optional) — Look-ahead Maintenance Margin requirement (as of next margin period) for the commodities segment of the account. (amount)
- `lookaheadmaintmarginreq-s` (PortfolioSummaryLookaheadmaintmarginreqS, optional) — Look-ahead Maintenance Margin requirement (as of next margin period) for the securities segment of the account. (amount)
- `lookaheadnextchange` (PortfolioSummaryLookaheadnextchange, optional) — Unix epoch timestamp in seconds of start of next margin period. (value)
- `maintmarginreq` (PortfolioSummaryMaintmarginreq, optional) — Maintenance Margin requirement for all segments of the account. (amount)
- `maintmarginreq-c` (PortfolioSummaryMaintmarginreqC, optional) — Maintenance Margin requirement for the commodities segment of the account. (amount)
- `maintmarginreq-s` (PortfolioSummaryMaintmarginreqS, optional) — Maintenance Margin requirement for the securities segment of the account. (amount)
- `netliquidation` (PortfolioSummaryNetliquidation, optional) — Net Liquidation Value (NLV) for all segments of the account. (amount)
- `netliquidation-c` (PortfolioSummaryNetliquidationC, optional) — Net Liquidation Value (sum of values of cash and commodities options) for the commodities segment of the account. (amount)
- `netliquidation-s` (PortfolioSummaryNetliquidationS, optional) — Net Liquidation Value (sum of values of cash, stocks, securities options, bonds) for the securities segment of the account. (amount)
- `netliquidationuncertainty` (PortfolioSummaryNetliquidationuncertainty, optional) — Uncertainty of Net Liquidation Value associated with after-hours price changes. (amount)
- `nlvandmargininreview` (PortfolioSummaryNlvandmargininreview, optional) — Indicates whether the NLV and/or margin values for the account are in review. (value)
- `pasharesvalue` (PortfolioSummaryPasharesvalue, optional) — Personal Account shares value for all segments of the account. (amount)
- `pasharesvalue-c` (PortfolioSummaryPasharesvalueC, optional) — Personal Account shares value for the commodities segment of the account. (amount)
- `pasharesvalue-s` (PortfolioSummaryPasharesvalueS, optional) — Personal Account shares value for the securities segment of the account. (amount)
- `physicalcertificatevalue` (PortfolioSummaryPhysicalcertificatevalue, optional) — Physical Certificate value for all segments of the account. (amount)
- `physicalcertificatevalue-c` (PortfolioSummaryPhysicalcertificatevalueC, optional) — Physical Certificate value for the commodities segment of the account. (amount)
- `physicalcertificatevalue-s` (PortfolioSummaryPhysicalcertificatevalueS, optional) — Physical Certificate value for the securities segment of the account. (amount)
- `postexpirationexcess` (PortfolioSummaryPostexpirationexcess, optional) — Projected at-expiration Excess Liquidity for all segments of the account. (amount)
- `postexpirationexcess-c` (PortfolioSummaryPostexpirationexcessC, optional) — Projected at-expiration Excess Liquidity for the commodities segment of the account. (amount)
- `postexpirationexcess-s` (PortfolioSummaryPostexpirationexcessS, optional) — Projected at-expiration Excess Liquidity for the securities segment of the account. (amount)
- `postexpirationmargin` (PortfolioSummaryPostexpirationmargin, optional) — Projected at-expiration margin requirement for all segments of the account. (amount)
- `postexpirationmargin-c` (PortfolioSummaryPostexpirationmarginC, optional) — Projected at-expiration margin requirement for the commodities segment of the account. (amount)
- `postexpirationmargin-s` (PortfolioSummaryPostexpirationmarginS, optional) — Projected at-expiration margin requirement for the securities segment of the account. (amount)
- `previousdayequitywithloanvalue` (PortfolioSummaryPreviousdayequitywithloanvalue, optional) — Previous day's Equity with Loan Value (as of 16:00 US Eastern) for all segments of the account. (amount)
- `previousdayequitywithloanvalue-s` (PortfolioSummaryPreviousdayequitywithloanvalueS, optional) — Previous day's Equity with Loan Value (as of 16:00 US Eastern) for the securities segment of the account. (amount)
- `regtequity` (PortfolioSummaryRegtequity, optional) — Value of equity computed under Reg-T rules for all segments of the account. (amount)
- `regtequity-s` (PortfolioSummaryRegtequityS, optional) — Value of equity computed under Reg-T rules for the securities segment of the account. (amount)
- `regtmargin` (PortfolioSummaryRegtmargin, optional) — Margin computed under Reg-T rules for all segments of the account. (amount)
- `regtmargin-s` (PortfolioSummaryRegtmarginS, optional) — Margin computed under Reg-T rules for the securities segment of the account. (amount)
- `segmenttitle-c` (PortfolioSummarySegmenttitleC, optional) — Human-readable title of the commodities account segment to which the '-c' postfix character refers. (value)
- `segmenttitle-s` (PortfolioSummarySegmenttitleS, optional) — Human-readable title of the securities account segment to which the '-s' postfix character refers. (value)
- `sma` (PortfolioSummarySma, optional) — Value of the Reg-T Special Memoradum Account for all account segments, reflecting credit extended when the market value of the account's positions increases. (amount)
- `sma-s` (PortfolioSummarySmaS, optional) — Value of the Reg-T Special Memoradum Account for the securities account segment, reflecting credit extended when the market value of the account's positions increases. (amount)
- `totalcashvalue` (PortfolioSummaryTotalcashvalue, optional) — Total cash value for all segments of the account (cash balance plus Futures PnL). (amount)
- `totalcashvalue-c` (PortfolioSummaryTotalcashvalueC, optional) — Cash value of Futures PnL for the commodities account segment. (amount)
- `totalcashvalue-s` (PortfolioSummaryTotalcashvalueS, optional) — Cash balance in the securities account segment. (amount)
- `totaldebitcardpendingcharges` (PortfolioSummaryTotaldebitcardpendingcharges, optional) — Total pending debit card charges for all segments of the account. (amount)
- `totaldebitcardpendingcharges-c` (PortfolioSummaryTotaldebitcardpendingchargesC, optional) — Total pending debit card charges for the commodities segment of the account. (amount)
- `totaldebitcardpendingcharges-s` (PortfolioSummaryTotaldebitcardpendingchargesS, optional) — Total pending debit card charges for the securities segment of the account. (amount)
- `tradingtype-s` (PortfolioSummaryTradingtypeS, optional) — Identifier used internally to reflect the trading capabilities of the account, with respect to asset classes. (value)
- `whatifpmenabled` (PortfolioSummaryWhatifpmenabled, optional) — Indicates whether 'whatif' order preview functionality is enabled for a Portfolio-Margined account. (value)

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests. For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem.

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### PortfolioSummaryAccountcode

The Account ID of the requested account. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccountready

Indicates whether the account is fully open and tradable. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccounttype

Identifies the type of client with which the account is associated, such as an individual or LLC. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccruedcash

Amount of cash accrued (not yet disbursed) for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccruedcashC

Amount of cash accrued (not yet disbursed) for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccruedcashS

Amount of cash accrued (not yet disbursed) for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccrueddividend

Amount of dividends accrued (not yet disbursed) for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccrueddividendC

Amount of dividends accrued (not yet disbursed) for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAccrueddividendS

Amount of dividends accrued (not yet disbursed) for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailablefunds

Available funds (ELV minus Initial Margin) for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailablefundsC

Available funds (ELV minus Initial Margin) for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailablefundsS

Available funds (ELV minus Initial Margin) for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletotrade

Funds available for trading (ELV minus Initial Margin) for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletotradeC

Funds available for trading (ELV minus Initial Margin) for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletotradeS

Funds available for trading (ELV minus Initial Margin) for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletowithdraw

Funds available for withdrawal for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletowithdrawC

Funds available for withdrawal for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryAvailabletowithdrawS

Funds available for withdrawal for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryBillable

Billable commissions for all segments in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryBillableC

Billable commissions for the commodities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryBillableS

Billable commissions for the securities segment in the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryBuyingpower

Buying power (maximum value of securities that can be bought without adding funds) for the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryColumnprioC

columnprio-c

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryColumnprioS

columnprio-s

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryCushion

Margin cushion as a decimal ratio, (ELV-Maintenance)/ELV. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradesremaining

Number of day trades currently still available for 4-day pattern day trader period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradesremainingt1

Number of day trades available tomorrow for 4-day pattern day trader period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradesremainingt2

Number of day trades available in two days for 4-day pattern day trader period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradesremainingt3

Number of day trades available in three days for 4-day pattern day trader period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradesremainingt4

Number of day trades available in four days for 4-day pattern day trader period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDaytradingstatusS

daytradingstatus-s

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryDepositoncredithold

Indicates whether a deposit is on credit hold. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryEquitywithloanvalue

Equity with Loan Value for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryEquitywithloanvalueC

Equity with Loan Value for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryEquitywithloanvalueS

Equity with Loan Value for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryExcessliquidity

Excess liquidity (ELV minus Maintenance Margin) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryExcessliquidityC

Excess liquidity (ELV minus Maintenance Margin) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryExcessliquidityS

Excess liquidity (ELV minus Maintenance Margin) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullavailablefunds

Full available funds for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullavailablefundsC

Full available funds (NLV minus Initial Margin) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullavailablefundsS

Full available funds (ELV minus Initial Margin) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullexcessliquidity

Full excess liquidity (ELV minus Maintenance Margin) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullexcessliquidityC

Full excess liquidity (ELV minus Maintenance Margin) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullexcessliquidityS

Full excess liquidity (ELV minus Maintenance Margin) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullinitmarginreq

Full Initial Margin requirement for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullinitmarginreqC

Full Initial Margin requirement for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullinitmarginreqS

Full Initial Margin requirement for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullmaintmarginreq

Full Maintenance Margin requirement for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullmaintmarginreqC

Full Maintenance Margin requirement for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryFullmaintmarginreqS

Full Maintenance Margin requirement for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryGrosspositionvalue

Gross Position Value (sum of Long and Short position values for stocks and options) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryGrosspositionvalueS

grosspositionvalue-s

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryGuarantee

For accounts that clear away, value of Guarantee for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryGuaranteeC

For accounts that clear away, value of Guarantee for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryGuaranteeS

For accounts that clear away, value of Guarantee for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryHighestseverity

highestseverity

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryIndianstockhaircut

Indian Stock Haircut value for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryIndianstockhaircutC

Indian Stock Haircut value for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryIndianstockhaircutS

Indian Stock Haircut value for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryInitmarginreq

Initial Margin requirement for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryInitmarginreqC

Initial Margin requirement for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryInitmarginreqS

Initial Margin requirement for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLeverageS

Leverage ratio (GPV/NLV) of the securities segment of the account. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadavailablefunds

Look-ahead Available Funds for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadavailablefundsC

Look-ahead Available Funds for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadavailablefundsS

Look-ahead Available Funds for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadexcessliquidity

Look-ahead Excess Liquidity for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadexcessliquidityC

Look-ahead Excess Liquidity for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadexcessliquidityS

Look-ahead Excess Liquidity for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadinitmarginreq

Look-ahead Intial Margin requirement (as of next margin period) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadinitmarginreqC

Look-ahead Intial Margin requirement (as of next margin period) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadinitmarginreqS

Look-ahead Intial Margin requirement (as of next margin period) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadmaintmarginreq

Look-ahead Maintenance Margin requirement (as of next margin period) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadmaintmarginreqC

Look-ahead Maintenance Margin requirement (as of next margin period) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadmaintmarginreqS

Look-ahead Maintenance Margin requirement (as of next margin period) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryLookaheadnextchange

Unix epoch timestamp in seconds of start of next margin period. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryMaintmarginreq

Maintenance Margin requirement for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryMaintmarginreqC

Maintenance Margin requirement for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryMaintmarginreqS

Maintenance Margin requirement for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryNetliquidation

Net Liquidation Value (NLV) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryNetliquidationC

Net Liquidation Value (sum of values of cash and commodities options) for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryNetliquidationS

Net Liquidation Value (sum of values of cash, stocks, securities options, bonds) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryNetliquidationuncertainty

Uncertainty of Net Liquidation Value associated with after-hours price changes. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryNlvandmargininreview

Indicates whether the NLV and/or margin values for the account are in review. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPasharesvalue

Personal Account shares value for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPasharesvalueC

Personal Account shares value for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPasharesvalueS

Personal Account shares value for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPhysicalcertificatevalue

Physical Certificate value for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPhysicalcertificatevalueC

Physical Certificate value for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPhysicalcertificatevalueS

Physical Certificate value for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationexcess

Projected at-expiration Excess Liquidity for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationexcessC

Projected at-expiration Excess Liquidity for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationexcessS

Projected at-expiration Excess Liquidity for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationmargin

Projected at-expiration margin requirement for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationmarginC

Projected at-expiration margin requirement for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPostexpirationmarginS

Projected at-expiration margin requirement for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPreviousdayequitywithloanvalue

Previous day's Equity with Loan Value (as of 16:00 US Eastern) for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryPreviousdayequitywithloanvalueS

Previous day's Equity with Loan Value (as of 16:00 US Eastern) for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryRegtequity

Value of equity computed under Reg-T rules for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryRegtequityS

Value of equity computed under Reg-T rules for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryRegtmargin

Margin computed under Reg-T rules for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryRegtmarginS

Margin computed under Reg-T rules for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummarySegmenttitleC

Human-readable title of the commodities account segment to which the '-c' postfix character refers. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummarySegmenttitleS

Human-readable title of the securities account segment to which the '-s' postfix character refers. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummarySma

Value of the Reg-T Special Memoradum Account for all account segments, reflecting credit extended when the market value of the account's positions increases. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummarySmaS

Value of the Reg-T Special Memoradum Account for the securities account segment, reflecting credit extended when the market value of the account's positions increases. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotalcashvalue

Total cash value for all segments of the account (cash balance plus Futures PnL). (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotalcashvalueC

Cash value of Futures PnL for the commodities account segment. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotalcashvalueS

Cash balance in the securities account segment. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotaldebitcardpendingcharges

Total pending debit card charges for all segments of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotaldebitcardpendingchargesC

Total pending debit card charges for the commodities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTotaldebitcardpendingchargesS

Total pending debit card charges for the securities segment of the account. (amount)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryTradingtypeS

Identifier used internally to reflect the trading capabilities of the account, with respect to asset classes. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

### PortfolioSummaryWhatifpmenabled

Indicates whether 'whatif' order preview functionality is enabled for a Portfolio-Margined account. (value)

- `amount` (double, optional) — Numerical data for the associated key.
- `currency` (double, optional) — The currency in which the value of the 'amount' field is denominated.
- `isNull` (boolean, optional) — Indicates whether the associated key's value does not exist, as opposed to a value of zero.
- `severity` (long, optional) — severity
- `timestamp` (long, optional) — Unix epoch timestamp of returned data in milliseconds.
- `value` (string, optional) — String and boolean (non-numerical) data for the associated key.

## Examples

**Response**

```json
{
  "accountcode": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "DU123456"
  },
  "accountready": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "true"
  },
  "accounttype": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "LLC"
  },
  "accruedcash": {
    "amount": 880036.375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "accruedcash-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "accruedcash-s": {
    "amount": 880036.375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "accrueddividend": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "accrueddividend-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "accrueddividend-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availablefunds": {
    "amount": 205266944,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availablefunds-c": {
    "amount": 468839.75,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availablefunds-s": {
    "amount": 204798112,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletotrade": {
    "amount": 204680368,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletotrade-c": {
    "amount": 500449.375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletotrade-s": {
    "amount": 204179920,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletowithdraw": {
    "amount": 204676912,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletowithdraw-c": {
    "amount": 496993.75,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "availabletowithdraw-s": {
    "amount": 204179920,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "billable": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "billable-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "billable-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "buyingpower": {
    "amount": 821079744,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "columnprio-c": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "2"
  },
  "columnprio-s": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "1"
  },
  "cushion": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "0.994598"
  },
  "daytradesremaining": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "-1"
  },
  "daytradesremainingt+1": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "-1"
  },
  "daytradesremainingt+2": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "-1"
  },
  "daytradesremainingt+3": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "-1"
  },
  "daytradesremainingt+4": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "-1"
  },
  "daytradingstatus-s": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": ": : false: 205505601.94: :false"
  },
  "depositoncredithold": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "null"
  },
  "equitywithloanvalue": {
    "amount": 205505520,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "equitywithloanvalue-c": {
    "amount": 471830.0625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "equitywithloanvalue-s": {
    "amount": 205033696,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "excessliquidity": {
    "amount": 205300432,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "excessliquidity-c": {
    "amount": 471830.0625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "excessliquidity-s": {
    "amount": 204828608,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullavailablefunds": {
    "amount": 205252848,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullavailablefunds-c": {
    "amount": 454742.59375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullavailablefunds-s": {
    "amount": 204798112,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullexcessliquidity": {
    "amount": 205287616,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullexcessliquidity-c": {
    "amount": 459014.46875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullexcessliquidity-s": {
    "amount": 204828608,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullinitmarginreq": {
    "amount": 282575.34375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullinitmarginreq-c": {
    "amount": 46990.5,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullinitmarginreq-s": {
    "amount": 235584.84375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullmaintmarginreq": {
    "amount": 247882.796875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullmaintmarginreq-c": {
    "amount": 42718.640625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "fullmaintmarginreq-s": {
    "amount": 205164.171875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "grosspositionvalue": {
    "amount": 659611.375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "grosspositionvalue-s": {
    "amount": 659611.375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "guarantee": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "guarantee-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "guarantee-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "highestseverity": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "null"
  },
  "indianstockhaircut": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "indianstockhaircut-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "indianstockhaircut-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "initmarginreq": {
    "amount": 268478.1875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "initmarginreq-c": {
    "amount": 32893.3515625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "initmarginreq-s": {
    "amount": 235584.84375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "leverage-s": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "0.0"
  },
  "lookaheadavailablefunds": {
    "amount": 205266944,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadavailablefunds-c": {
    "amount": 468839.75,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadavailablefunds-s": {
    "amount": 204798112,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadexcessliquidity": {
    "amount": 205300432,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadexcessliquidity-c": {
    "amount": 471830.0625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadexcessliquidity-s": {
    "amount": 204828608,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadinitmarginreq": {
    "amount": 268478.1875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadinitmarginreq-c": {
    "amount": 32893.3515625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadinitmarginreq-s": {
    "amount": 235584.84375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadmaintmarginreq": {
    "amount": 235067.203125,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadmaintmarginreq-c": {
    "amount": 29903.05078125,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadmaintmarginreq-s": {
    "amount": 205164.171875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "lookaheadnextchange": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "1712157300"
  },
  "maintmarginreq": {
    "amount": 235067.203125,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "maintmarginreq-c": {
    "amount": 29903.05078125,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "maintmarginreq-s": {
    "amount": 205164.171875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "netliquidation": {
    "amount": 206415536,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "netliquidation-c": {
    "amount": 501733.09375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "netliquidation-s": {
    "amount": 205913808,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "netliquidationuncertainty": {
    "amount": 70.94000244140625,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "nlvandmargininreview": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "false"
  },
  "pasharesvalue": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "pasharesvalue-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "pasharesvalue-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "physicalcertificatevalue": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "physicalcertificatevalue-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "physicalcertificatevalue-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationexcess": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationexcess-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationexcess-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationmargin": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationmargin-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "postexpirationmargin-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "previousdayequitywithloanvalue": {
    "amount": 205044656,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "previousdayequitywithloanvalue-s": {
    "amount": 205044656,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "regtequity": {
    "amount": 205913808,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "regtequity-s": {
    "amount": 205913808,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "regtmargin": {
    "amount": 329761.1875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "regtmargin-s": {
    "amount": 329761.1875,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "segmenttitle-c": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "US Commodities"
  },
  "segmenttitle-s": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "US Securities"
  },
  "sma": {
    "amount": 205584048,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "sma-s": {
    "amount": 205584048,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totalcashvalue": {
    "amount": 205646432,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totalcashvalue-c": {
    "amount": 501733.09375,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totalcashvalue-s": {
    "amount": 205144704,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totaldebitcardpendingcharges": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totaldebitcardpendingcharges-c": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "totaldebitcardpendingcharges-s": {
    "amount": 0,
    "currency": 1.1,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": null
  },
  "tradingtype-s": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "STKNOPT"
  },
  "whatifpmenabled": {
    "amount": 0,
    "currency": null,
    "isNull": false,
    "severity": 0,
    "timestamp": 1712156105000,
    "value": "true"
  }
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/portfolio/DU123456/summary';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/DU123456/summary"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/portfolio/DU123456/summary")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/DU123456/summary', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/DU123456/summary")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```
