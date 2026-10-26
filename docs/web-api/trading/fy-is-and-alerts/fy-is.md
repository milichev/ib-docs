[source](https://www.interactivebrokers.com/docs/web-api/trading/fy-is-and-alerts/fy-is)

# FYIs

#### Unread FYIs

To get number of un-read notifications/disclaimers next api should be called `GET /fyi/unreadnumber` which return integer number that can be display to make user aware. For example, let's assume we have `1` un-read and `3` in total notifications/disclaimers.

`GET https://api.ibkr.com/v1/api/fyi/unreadnumber`

Response:

```{
  "BN":  1
}
```

#### All Recent FYIs

A list of all recent notifications can be retrieved by calling `GET /fyi/notifications`. An `R` in the response indicates if the notification was read or not.

The response also contains a title (`MS`), notification code/"FYI code" (`FC`), unique identifier (`ID`) and a detailed, HTML-formatted message (`MD`).

`GET https://api.ibkr.com/v1/api/fyi/notifications`

Returns:

```[
  {
    "R": 0,
    "D": "1710847062.0",
    "MS": "FYI: Changes in Analyst Ratings",
    "MD": "<html>Some investors use analysts ratings to stay informed about their investments. Analysts have changed their ratings for one or more companies in which you hold positions.    <br />The following summary displays the affected companies, the current number of analysts by rating category and, in parentheses, the recent change in the number of analysts rating the company within each rating category.  <br /> - JWN@NYSE: Buy: 1(0), Outperform: 1(0), Hold: 12(-1), Underperform: 5(0), Sell: 0(0). Held in: D****000 <br /> - RF@NYSE: Buy: 4(+1), Outperform: 5(0), Hold: 17(-1), Underperform: 1(0), Sell: 0(0). Held in: D****000 <br /> <br />   Note: Current ratings are from Reuters and may not reflect all rating changes from other sources such as Street Insider and Briefing.</html>",
    "ID": "2024031947509444",
    "HT": 0,
    "FC": "PF"
  },
...
]
```

#### Marking FYIs Read

FYI notifications can be marked as read via `PUT /fyi/notifications/{notificationID}`.

Please note that you can have multiple notifications in the same category (grouped by `fyi code`)

#### Managing FYI Subscriptions

`GET https://api.ibkr.com/v1/api/fyi/settings`

```[
  {
    "FC": "PF",
    "H": 0,
    "A": 1,
    "FD": "Notify me of recent activity affecting my portfolio holdings.",
    "FN": "Portfolio FYIs"
  },
  {
    "FC": "PT",
    "H": 0,
    "A": 1,
    "FD": "Notify me of potential account configuration changes needed and useful features based on my position transfers.",
    "FN": "Position Transfer"
  } 
]
```

#### FYI Disclaimers

Detailed message for notification must be shown to user only when user accept corresponding disclaimer.

Use `GET /fyi/settings` to see what disclaimers accepted and what not. `H` represents fact of disclaimer acceptance. More about fyi settings will be below.

```[
  {
    "FC": "PF",
    "H": 0,
    "A": 1,
    "FD": "Notify me of recent activity affecting my portfolio holdings.",
    "FN": "Portfolio FYIs"
  },
  {
    "FC": "PT",
    "H": 0,
    "A": 1,
    "FD": "Notify me of potential account configuration changes needed and useful features based on my position transfers.",
    "FN": "Position Transfer"
  } 
]
```

Supplemental text for accept disclaimer can be retrieved by calling `GET /fyi/disclaimer/{typecode}`

```{
  "FC": "PF",
  "DT": "This communication is provided for information purposes only and is not intended as a recommendation or a solicitation to buy, sell or hold any investment product. Customers are solely responsible for their own trading decisions."
}
```

And call `PUT /fyi/disclaimer/{typecode}` to accept disclaimer. Once disclaimer is acknowledged, it should not be forced on notifications of the same type.
