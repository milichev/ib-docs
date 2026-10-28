[source](https://www.interactivebrokers.com/docs/general/market-data-subscriptions/popular-market-data-subscriptions/chinese-market-data-subscriptions)

# Chinese Market Data Subscriptions

API users can subscribe to the following "Alternative Display" market data packs for getting Chinese Market Data via API and TWS.

| NAME                                                                   | EXCHANGES COVERED                                                                      | Examples                                |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------- |
| Shanghai Stock Exchange 5 Second Snapshot via HKEx Alternative Display | Shanghai Stock Exchange, Shanghai-Hong Kong Stock Connect (SEHKNTL), SEHKSTAR, ChiNEXT | 600000, 601728 SEHKNTL, 688256 SEHKSTAR |
| Shanghai Stock Exchange Alternative Display Top of Book (L1)           | Shanghai Stock Exchange                                                                | 600000                                  |
| Shenzhen Stock Exchange 3 Second Snapshot via HKEx Alternative Display | Shenzhen Stock Exchange, Shanghai-Hong Kong Stock Connect (SEHKSZSE)                   | 000001, 000001 SEHKSZSE                 |

\*Please note that Non-Professional and Professional clients may have different available market data packs.

\*Do not subscribe "Alternative Display" market data pack(s) and Non-"Alternative Display" market data pack(s) at the same time. This may cause data pack conflict. For example, having "Shanghai Stock Exchange 5 Second Snapshot (via HKEx)" and "Shanghai Stock Exchange 5 Second Snapshot via HKEx Alternative Display" at the same time may cause data pack conflict.

\*For API clients, please unsubscribe Non-"Alternative Display" Chinese market data pack(s) before subscribing "Alternative Display" Chinese market data pack(s). If data pack conflict happens, please wait until next month or please contact Interactive Brokers Customer Services for unsubscribing the Non-"Alternative Display" Chinese market data pack(s) from IB back-end side.

\*"Shanghai Stock Exchange 5 Second Snapshot via HKEx Alternative Display" only provides 5 seconds snapshot bid, ask and last data.

\*"Shenzhen Stock Exchange 3 Second Snapshot via HKEx Alternative Display" provides real time data, but its bid/ ask data will be 3 seconds snapshot.
