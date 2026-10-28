[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/introduction)

# Introduction

Requests can be made to receive real time updates about the daily P\&L and unrealized P\&L for an account, or for individual positions. Financial Advisors can also request P\&L figures for 'All' subaccounts, or for a portfolio model. This is further extended to include realized P\&L information at the account or individual position level.

The P\&L API functions demonstrated below return the data which is displayed in the TWS Portfolio Window in current versions of TWS. As such, the P\&L values are calculated based on the reset schedule specified in TWS Global Configuration (by default an instrument-specific reset schedule) and this setting affects values sent to the associated API functions as well. Also in TWS, P\&L data from virtual forex positions will be included in the account P\&L if and only if the Virtual Fx section of the Account Window is expanded.

See [Account Updates](#account-updates) for alternative PnL data.
