[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/event-contracts/contract-rules)

# Contract Rules

Provides contract rules for specific binary options.

`GET /forecast/contract/rules`

#### Request Object

###### Query Params

**conid:** Integer\
Contract identifier

#### Python

```python
import requests

url = "{{base-url}}/forecast/contract/rules?conid=767285167"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

#### Abap

```abap
curl --location --globoff '{{base-url}}/forecast/contract/rules?conid=767285167'
```

#### Response Object

**asset_class:** String\
Product asset class

**description:** String\
Product description

**market_name:** String\
Name of contract's market

**measured_period:** String

**threshold:** String\
Either strike or strike label depending on the contract

**source_agency:** String\
Name of source agency

**data_and_resolution_link:** String\
Link to data from source agency

**last_trade_time:**  Long\
Last trade time in EPOCH

**product_code:** String\
Product code, symbo

**market_rules_link:** String\
Link to market rules document

**release_time:** Long\
Release time in EPOCH seconds

**payout_time:** Long\
Payout time in EPOCH seconds

**payout:** String\
Formatted payout amount

**price_increment:** String\
Formatted price increment amount

**exchange_timezone:** String\
Exchange timezone

```
{
    "asset_class": "OPT",
    "description": "The Georgia Democratic Gubernatorial Primary determines the party nominee for governor, shaping state leadership and national political influence.",
    "market_name": "Georgia Governor Democratic Primary",
    "measured_period": "May19'26",
    "threshold": "Stacey Abrams",
    "source_agency": "Georgia Secretary of State Elections Division",
    "data_and_resolution_link": "https://sos.ga.gov/index.php/elections",
    "last_trade_time": 1781301540,
    "product_code": "GPGAD",
    "market_rules_link": "https://data.forecastex.com/regulatory/GPTermsandConditions.pdf",
    "release_time": 1781301540,
    "payout_time": 1781373600,
    "payout": "$1.00",
    "price_increment": "$0.01",
    "exchange_timezone": "US/Central"
}
```
