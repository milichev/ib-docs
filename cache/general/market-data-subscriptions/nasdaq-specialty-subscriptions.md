> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# NASDAQ Specialty Subscriptions

Interactive Brokers will typically require a Level 1 market data subscription for tick data and a Level 2 subscription for market depth. However, to retrieve Tick data or Market Depth through NASDAQ/ISLAND, users requires an additional market data subscription in order to retrieve market depth off-platform in the form of the API or third party platforms.

Clients must subscribe to the following:

1. All US level 1 US Equity market data subscriptions. This includes either:
   * "NYSE (Network A/CTA)", "NYSE American, BATS, ARCA, IEX, and Regional Exchanges (Network B)", AND "NASDAQ (Network C/UTP)" (All three subscriptions)
   * "US Equity and Options Add-On Streaming Bundle"
2. The "NASDAQ TotalView-OpenView" is required for all platforms.
   * While this is necessary for market depth and NASDAQ tick data, this alone will not provide data for off-platform subscriptions
   * If "NASDAQ (Network C)" and "NASDAQ TotalView-OpenView" are subscribed without the EDS subscription, NASDAQ data will not be available whatsoever through the API. Users must either subscribed to the single Network subscription, or all three subscriptions.
3. The "NASDAQ TotalView-OpenView EDS" market data subscription is required for off-platform market data subscriptions.