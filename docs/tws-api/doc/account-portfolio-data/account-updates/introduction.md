[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-updates/introduction)

# Introduction

The IBApi.EClient.reqAccountUpdates function creates a subscription to the TWS through which account and portfolio information is delivered. This information is the exact same as the one displayed within the TWS' Account Window. Just as with the TWS' Account Window, unless there is a position change this information is updated at a fixed interval of three minutes.

Unrealized and Realized P\&L is sent to the API function IBApi.EWrapper.updateAccountValue function after a subscription request is made with IBApi.EClient.reqAccountUpdates. This information corresponds to the data in the TWS Account Window, and has a different source of information, a different update frequency, and different reset schedule than PnL data in the TWS Portfolio Window and associated API functions (below). In particular, the unrealized P\&L information shown in the TWS Account Window which is sent to [EWrapper.updatePortfolio](receiving-account-updates.md) will update either (1) when a trade for that particular instrument occurs or (2) every 3 minutes. The realized P\&L data in the TWS Account Window is reset to 0 once per day.

It is important to keep in mind that the P\&L data shown in the Account Window and Portfolio Window will sometimes differ because there is a different source of information and a different reset schedule.

See [Profit & Loss](#pnl) for alternative PnL data
