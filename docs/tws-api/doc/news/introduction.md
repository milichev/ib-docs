[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/introduction)

# Introduction

API news requires news subscriptions that are specific to the API; most news services in TWS are not also available in the API. There are three API news services enabled in accounts by default and available from the API. They are:

* Briefing.com General Market Columns (BRFG)
* Briefing.com Analyst Actions (BRFUPDN)
* Dow Jones Newsletters (DJNL)

There are also four additional news services available with all TWS versions which require **API-specific subscriptions** to first be made in Account Management. They have different data fees than the subscription for the same news in TWS-only. As with all subscriptions, they only apply to the specific TWS username under which they were made:

* Briefing Trader (BRF)
* Benzinga Pro (BZ)
* Fly on the Wall (FLY)

The API functions which handle news are able to query available news provides, subscribe to news in real time to receive headlines as they are released, request specific news articles, and return a historical list of news stories that are cached in the system.
