[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions-by-model/introduction)

# Introduction

The function IBApi.EClient.reqPositionsMulti can be used with any account structure to subscribe to positions updates for multiple accounts and/or models. The account and model parameters are optional if there are not multiple accounts or models available. It is more efficient to use this function for a specific subset of accounts than using IBApi.EClient.reqPositions. A profile name can be accepted in place of group in the account parameter.
