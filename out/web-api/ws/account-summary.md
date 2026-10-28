[source](https://www.interactivebrokers.com/docs/web-api/ws/account-summary)

# Account Summary

## Subscribe to Account Summary

Request account summary details for a given account, covering ubiquoutous account details along with splitting out values by segment.

### Request

`ssd+{{accountId}}+{"keys":["Key1", "Key2"], "fields":["Field1", "Field2"]}`

#### Properties

**`ssd`** `const`

The leading topic message indicating a request to retrieve account summary details.

---

**`accountId`** `string`

The `accountId` variable indicates the Interactive Brokers account identifier to retrieve summary details for. Only one `accountId` may be included per request.

---

`object`

---

**`keys`** `array`

An array of data topics to filter in. If no value is passed, all topics are requested. In addition to base values, tags are appended to certain keys, such as `"NetLiquidation-S"`, to represent individual segments of an account.

Segment Values:

* `-C` -- Commoddities
* `-S` -- Securities
* `-P` -- Cryptocurrencies

#### Supported Values

`"ExcessLiquidity-P"`, `"ExcessLiquidity-S"`, `"FullExcessLiquidity-S"`, `"LookAheadInitMarginReq"`, `"FullExcessLiquidity-P"`, `"AccruedCash-C"`, `"AccruedCash-P"`, `"FullExcessLiquidity-C"`, `"AccruedCash-S"`, `"FullMaintMarginReq-C"`, `"AccruedDividend"`, `"InitMarginReq-P"`, `"PhysicalCertificateValue-C"`, `"InitMarginReq-S"`, `"Cushion"`, `"BuyingPower"`, `"PhysicalCertificateValue"`, `"ColumnPrio-P"`, `"InitMarginReq"`, `"ExcessLiquidity-C"`, `"GrossPositionValue"`, `"IncentiveCoupons-P"`, `"PhysicalCertificateValue-S"`, `"PhysicalCertificateValue-P"`, `"ColumnPrio-S"`, `"IncentiveCoupons-S"`, `"GrossPositionValue-C"`, `"FullInitMarginReq"`, `"EquityWithLoanValue-C"`, `"IndianStockHaircut-C"`, `"NetLiquidationUncertainty"`, `"MaintMarginReq-C"`, `"Billable-C"`, `"LookAheadAvailableFunds"`, `"GrossPositionValue-S"`, `"LookAheadInitMarginReq-C"`, `"SegmentTitle-C"`, `"EquityWithLoanValue-S"`, `"MaintMarginReq-P"`, `"MaintMarginReq-S"`, `"EquityWithLoanValue-P"`, `"TotalDebitCardPendingCharges-C"`, `"Guarantee"`, `"IncentiveCoupons"`, `"ExcessLiquidity"`, `"AvailableFunds"`, `"HighestSeverity"`, `"PASharesValue-S"`, `"FullMaintMarginReq-P"`, `"TotalDebitCardPendingCharges-S"`, `"FullMaintMarginReq-S"`, `"LookAheadMaintMarginReq-C"`, `"TotalDebitCardPendingCharges-P"`, `"PASharesValue-C"`, `"TotalCashValue-C"`, `"LookAheadMaintMarginReq"`, `"MaintMarginReq"`, `"LookAheadMaintMarginReq-S"`, `"LookAheadMaintMarginReq-P"`, `"LookAheadNextChange"`, `"PASharesValue-P"`, `"TotalCashValue-P"`, `"TotalCashValue-S"`, `"PostExpirationMargin-C"`, `"SettledCashByDate"`, `"AccountReady"`, `"FullAvailableFunds"`, `"AvailableFunds-P"`, `"AvailableFunds-S"`, `"FullMaintMarginReq"`, `"PASharesValue"`, `"PostExpirationExcess-C"`, `"AccountCode"`, `"Guarantee-S"`, `"Guarantee-P"`, `"PostExpirationMargin"`, `"SegmentTitle-S"`, `"SegmentTitle-P"`, `"AvailableFunds-C"`, `"TotalDebitCardPendingCharges"`, `"Leverage-S"`, `"PostExpirationExcess-S"`, `"NLVAndMarginInReview"`, `"PostExpirationExcess-P"`, `"Guarantee-C"`, `"IndianStockHaircut-P"`, `"IndianStockHaircut-S"`, `"PostExpirationMargin-S"`, `"Leverage-C"`, `"PostExpirationMargin-P"`, `"FullExcessLiquidity"`, `"Billable-S"`, `"LookAheadInitMarginReq-P"`, `"Billable-P"`, `"NetLiquidation-S"`, `"LookAheadInitMarginReq-S"`, `"DepositOnCreditHold"`, `"AccruedCash"`, `"FullAvailableFunds-C"`, `"NetLiquidation-P"`, `"ColumnPrio-C"`, `"IncentiveCoupons-C"`, `"NetLiquidation-C"`, `"LookAheadExcessLiquidity"`, `"LookAheadAvailableFunds-C"`, `"IndianStockHaircut"`, `"FullAvailableFunds-S"`, `"InitMarginReq-C"`, `"LookAheadExcessLiquidity-S"`, `"FullAvailableFunds-P"`, `"FullInitMarginReq-S"`, `"AccruedDividend-C"`, `"FullInitMarginReq-P"`, `"SettledCashByDate-C"`, `"LookAheadExcessLiquidity-P"`, `"Billable"`, `"EquityWithLoanValue"`, `"LookAheadExcessLiquidity-C"`, `"AccountType"`, `"FullInitMarginReq-C"`, `"SettledCashByDate-P"`, `"AccruedDividend-S"`, `"SettledCashByDate-S"`, `"LookAheadAvailableFunds-P"`, `"NetLiquidation"`, `"TotalCashValue"`, `"TradingType-S"`, `"LookAheadAvailableFunds-S"`, `"PostExpirationExcess"`, `"AccruedDividend-P"`

---

**`fields`** `array`

An array of values to filter in. If no values are passed, all fields are returned for all responses.

#### Supported Values

`"currency"`, `"monetaryValue"`, `"severity"`, `"timestamp"`, `"value"`

---

```
ssd+U1234567+{"keys":["ExcessLiquidity-P","NetLiquidation"], "fields":["currency", "monetaryValue"]}
```

### Response

#### Properties

**`result`** `array` — required

Key contianing an array of account summary objects.

---

`object`

---

**`key`** `string` — required

Account summary value's key, indicating returned information of the object. In addition to base values, tags are appended to certain keys, such as `"NetLiquidation-S"`, to represent individual segments of an account.

Segment Values:

* `-C` -- Commoddities
* `-S` -- Securities
* `-P` -- Cryptocurrencies

#### Supported Values

`"ExcessLiquidity-P"`, `"ExcessLiquidity-S"`, `"FullExcessLiquidity-S"`, `"LookAheadInitMarginReq"`, `"FullExcessLiquidity-P"`, `"AccruedCash-C"`, `"AccruedCash-P"`, `"FullExcessLiquidity-C"`, `"AccruedCash-S"`, `"FullMaintMarginReq-C"`, `"AccruedDividend"`, `"InitMarginReq-P"`, `"PhysicalCertificateValue-C"`, `"InitMarginReq-S"`, `"Cushion"`, `"BuyingPower"`, `"PhysicalCertificateValue"`, `"ColumnPrio-P"`, `"InitMarginReq"`, `"ExcessLiquidity-C"`, `"GrossPositionValue"`, `"IncentiveCoupons-P"`, `"PhysicalCertificateValue-S"`, `"PhysicalCertificateValue-P"`, `"ColumnPrio-S"`, `"IncentiveCoupons-S"`, `"GrossPositionValue-C"`, `"FullInitMarginReq"`, `"EquityWithLoanValue-C"`, `"IndianStockHaircut-C"`, `"NetLiquidationUncertainty"`, `"MaintMarginReq-C"`, `"Billable-C"`, `"LookAheadAvailableFunds"`, `"GrossPositionValue-S"`, `"LookAheadInitMarginReq-C"`, `"SegmentTitle-C"`, `"EquityWithLoanValue-S"`, `"MaintMarginReq-P"`, `"MaintMarginReq-S"`, `"EquityWithLoanValue-P"`, `"TotalDebitCardPendingCharges-C"`, `"Guarantee"`, `"IncentiveCoupons"`, `"ExcessLiquidity"`, `"AvailableFunds"`, `"HighestSeverity"`, `"PASharesValue-S"`, `"FullMaintMarginReq-P"`, `"TotalDebitCardPendingCharges-S"`, `"FullMaintMarginReq-S"`, `"LookAheadMaintMarginReq-C"`, `"TotalDebitCardPendingCharges-P"`, `"PASharesValue-C"`, `"TotalCashValue-C"`, `"LookAheadMaintMarginReq"`, `"MaintMarginReq"`, `"LookAheadMaintMarginReq-S"`, `"LookAheadMaintMarginReq-P"`, `"LookAheadNextChange"`, `"PASharesValue-P"`, `"TotalCashValue-P"`, `"TotalCashValue-S"`, `"PostExpirationMargin-C"`, `"SettledCashByDate"`, `"AccountReady"`, `"FullAvailableFunds"`, `"AvailableFunds-P"`, `"AvailableFunds-S"`, `"FullMaintMarginReq"`, `"PASharesValue"`, `"PostExpirationExcess-C"`, `"AccountCode"`, `"Guarantee-S"`, `"Guarantee-P"`, `"PostExpirationMargin"`, `"SegmentTitle-S"`, `"SegmentTitle-P"`, `"AvailableFunds-C"`, `"TotalDebitCardPendingCharges"`, `"Leverage-S"`, `"PostExpirationExcess-S"`, `"NLVAndMarginInReview"`, `"PostExpirationExcess-P"`, `"Guarantee-C"`, `"IndianStockHaircut-P"`, `"IndianStockHaircut-S"`, `"PostExpirationMargin-S"`, `"Leverage-C"`, `"PostExpirationMargin-P"`, `"FullExcessLiquidity"`, `"Billable-S"`, `"LookAheadInitMarginReq-P"`, `"Billable-P"`, `"NetLiquidation-S"`, `"LookAheadInitMarginReq-S"`, `"DepositOnCreditHold"`, `"AccruedCash"`, `"FullAvailableFunds-C"`, `"NetLiquidation-P"`, `"ColumnPrio-C"`, `"IncentiveCoupons-C"`, `"NetLiquidation-C"`, `"LookAheadExcessLiquidity"`, `"LookAheadAvailableFunds-C"`, `"IndianStockHaircut"`, `"FullAvailableFunds-S"`, `"InitMarginReq-C"`, `"LookAheadExcessLiquidity-S"`, `"FullAvailableFunds-P"`, `"FullInitMarginReq-S"`, `"AccruedDividend-C"`, `"FullInitMarginReq-P"`, `"SettledCashByDate-C"`, `"LookAheadExcessLiquidity-P"`, `"Billable"`, `"EquityWithLoanValue"`, `"LookAheadExcessLiquidity-C"`, `"AccountType"`, `"FullInitMarginReq-C"`, `"SettledCashByDate-P"`, `"AccruedDividend-S"`, `"SettledCashByDate-S"`, `"LookAheadAvailableFunds-P"`, `"NetLiquidation"`, `"TotalCashValue"`, `"TradingType-S"`, `"LookAheadAvailableFunds-S"`, `"PostExpirationExcess"`, `"AccruedDividend-P"`

---

**`currency`** `string`

The currency represented by monetaryValue.

---

**`monetaryValue`** `number`

The cash value associated with the key. Returned when the key pertains to pricing or balance details.

---

**`timestamp`** `integer` — required

---

**`value`** `string`

A non-monetary value associated with the key. This may include dates, account titles, or other relevant information.

---

**`severity`** `integer` — required

Internal use. Returns `0`.

---

**`topic`** `string` — required, default: ssd+\{\{accountId}}

Returns the ssd topic and accountId.

---

```json wordWrap
{'result': [{'key': 'ExcessLiquidity-P', 'currency': 'USD', 'monetaryValue': 4.25, 'timestamp': 1792425192}, {'key': 'NetLiquidation', 'currency': 'USD', 'monetaryValue': 256603351.55455604, 'timestamp': 1792425192}], 'topic': 'ssd+DU5240685'}
```

---

## Unsubscribe from Account Summary

`usd+{{accountId}}+{}`

Request to cancel an Account Summary stream for the given account.

### Request

#### Properties

**`usd`** `const`

Unsubscribes the user from account summary information for the specified account.

---

**`accountId`** `string`

The `accountId` variable indicates the Interactive Brokers account identifier to retrieve summary details for. Only one `accountId` may be included per request.

---

```
usd+U1234567+{}
```

### Response Example

Unsubscribing from account summary updates does not deliver any acknowledgement. It would be expected for `ssd` responses to immediately halt.
