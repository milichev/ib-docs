[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/system-message-codes)

# System Message Codes

The messages in the table below are not a consequence of any action performed by the client application. They are notifications about the connectivity status between the TWS and our servers. Your client application must pay special attention to them and handle the situation accordingly. You are very likely to lose connectivity to our servers at least once a day due to our daily server maintenance downtime as clearly detailed in our Current System Status page. Note that after the system reset, the TWS/IB Gateway will automatically reconnect to our servers and you can resume your operations normally.

**Note:**

1. During a reset period, there may be an interruption in the ability to log in or manage orders. Existing orders (native types) will operate normally although execution reports and simulated orders will be delayed until the reset is complete. It is not recommended to operate during the scheduled reset times.

| Code | TWS message                                                                                                         | Additional notes                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1100 | Connectivity between IB and the TWS has been lost.                                                                  | Your TWS/IB Gateway has been disconnected from IB servers. This can occur because of an internet connectivity issue, a nightly reset of the IB servers, or a competing session. |
| 1101 | Connectivity between IB and TWS has been restored- data lost.\*                                                     | The TWS/IB Gateway has successfully reconnected to IB's servers. Your market data requests have been lost and need to be re-submitted.                                          |
| 1102 | Connectivity between IB and TWS has been restored- data maintained.                                                 | The TWS/IB Gateway has successfully reconnected to IB's servers. Your market data requests have been recovered and there is no need for you to re-submit them.                  |
| 1300 | TWS socket port has been reset and this connection is being dropped. Please reconnect on the new port – \<port_num> | The port number in the TWS/IBG settings has been changed during an active API connection.                                                                                       |
