[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/event-contracts/trading-schedule)

# Trading schedule

Provides contract trading schedules

`GET /forecast/contract/schedules`

#### Request Object

###### Query Params

**conid:** Integer\
Contract identifier

#### Abap

```abap
curl --location --globoff '{{base-url}}/forecast/contract/schedules?conid=767285167'
```

#### Response Object

**timezone:** String\
Exchange timezone

**trading schedule:** List\
List of strikes

**day_of_week:** String

**trading_times:** List\
List of trading time intervalse

**open:** String\
Start of trading interval

**close:** String\
End of trading interval

```
{
    "timezone": "US/Central",
    "trading_schedules": [
        {
            "day_of_week": "Saturday",
            "trading_times": [
                {
                    "open": "12:00 AM",
                    "close": "4:15 PM"
                },
                {
                    "open": "4:16 PM",
                    "close": "11:59 PM"
                }
            ]
        },
        {
            "day_of_week": "Sunday",
            "trading_times": [
                {
                    "open": "12:00 AM",
                    "close": "4:15 PM"
                },
                {
                    "open": "4:16 PM",
                    "close": "11:59 PM"
                }
            ]
        },
}
```
