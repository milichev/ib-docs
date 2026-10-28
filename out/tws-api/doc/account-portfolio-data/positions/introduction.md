[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions/introduction)

# Introduction

A limitation of the function IBApi.EClient.reqAccountUpdates is that it can only be used with a single account at a time. To create a subscription for position updates from multiple accounts, the function IBApi.EClient.reqPositions is available.

**Note:** The reqPositions function is not available in Introducing Broker or Financial Advisor master accounts that have very large numbers of subaccounts (> 50) to optimize the performance of TWS/IB Gateway. Instead the function reqPositionsMulti can be used to subscribe to updates from individual subaccounts. Also not available with IBroker accounts configured for on-demand account lookup.

After initially invoking reqPositions, information about all positions in all associated accounts will be returned, followed by the IBApi::EWrapper::positionEnd callback. Thereafter, when a position has changed an update will be returned to the IBApi::EWrapper::position function. To cancel a reqPositions subscription, invoke IBApi::EClient::cancelPositions.
