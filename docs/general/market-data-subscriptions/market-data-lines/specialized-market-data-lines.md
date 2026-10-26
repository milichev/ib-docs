[source](https://www.interactivebrokers.com/docs/general/market-data-subscriptions/market-data-lines/specialized-market-data-lines)

# Specialized Market Data Lines

Given the potentially high amount of data being sent, market depth and tick data requests are more limited. Just as with historical data requests, the amount of active depth or tick requests are related to the amount of market data lines:

| Number of market data lines | Tick By Tick Data | Max Market Depth (Level II) | Number of subscribed Quote Booster packs |
| --------------------------- | ----------------- | --------------------------- | ---------------------------------------- |
| 100                         | 5                 | 3                           | 0                                        |
| 101 – 200                   | 10                | 3                           | 1                                        |
| 201 – 300                   | 15                | 3                           | 2                                        |
| 301 – 400                   | 20                | 3                           | 3                                        |
| 401 – 500                   | 25                | 4                           | 4                                        |
| 501 – 600                   | 30                | 5                           | 5                                        |
| 601 – 700                   | 35                | 6                           | 6                                        |
| 701 – 800                   | 40                | 7                           | 7                                        |
| 801 – 900                   | 45                | 8                           | 8                                        |
| 901 – 1000                  | 50                | 9                           | 9                                        |
| 1001 – 1100                 | 55                | 10                          | 10                                       |
| 1100+                       | 60-500            | 11 – 60                     | special offer                            |

Note:

* Tick By Tick market data lines scale at 5% of total market data lines. The values shown in the table above are for approximations.
* End users from IB IBroker clients which use CP API + DAM SSO still have this limitation: each IBroker end-user can get up to max >= 100 data lines. However, the limit is on a per session basis per IP Address. For details, please contact IB DAM team.
