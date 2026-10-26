[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/event-contracts/contract-details)

# Contract details

Provides contract rules for specific event binary options

`GET /forecast/contract/details`

#### Request Object

###### Query Params

**conid:** Integer\
Contract identifier

#### Abap

```abap
curl --location --globoff '{{base-url}}/forecast/contract/details?conid=767285167'
```

#### Response Object

**conid_yes:** Integer\
Contract id of "yes" contract

**conid_no:** Integer\
Contract id of "no" contract

**question:** String\
Contract question(i.e "Will this happen on this date?")

**side:** String\
"Y" or "N" – yes or no contract

**strike_label:** String\
Strike label to display

**strike:** Double\
Contract strike

**exchange:** String\
Contract exchange

**expiration:** String\
Contract expiration

**symbol:** String\
Contract symbol

**logo_category:** String

**measured_period:**

**market_name:** String\
Name of contract's market

**unerlying_conid:** Integer\
Underlying asset of the contract

```
{
    "conid_yes": 767285167,
    "conid_no": 767285169,
    "question": "Will Stacey Abrams win the Georgia Democratic primary for governor in 2026?",
    "side": "Y",
    "strike_label": "Stacey Abrams",
    "strike": 1.0,
    "exchange": "FORECASTX",
    "expiration": "20260612",
    "symbol": "GPGAD",
    "category": "g7428",
    "logo_category": "g17467",
    "measured_period": "May19'26",
    "market_name": "Georgia Governor Democratic Primary",
    "underlying_conid": 766914406,
    "payout": 1.0
}
```
