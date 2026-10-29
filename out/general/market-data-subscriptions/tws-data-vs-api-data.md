[home](../../index.md) | [general](../index.md) | [source](https://www.interactivebrokers.com/docs/general/market-data-subscriptions/tws-data-vs-api-data)

# TWS Data vs API Data

IBKR allows for free on-platform data; however, data on the API is considered off-platform. Exchanges maintain different licensing requirements and agreements for off-platform market data viewing.

While you may receive live pricing through the Trader Workstation for some securities like US Stocks in your Trader Workstation, this may not be the same through your API. This is because this data is often provided for free to our customers under our existing market data agreements. In some IB accounts, clients may see there are 2 different data bundles with same names, but one is free while another one is not free.

For example,  `Hong Kong Securities Exchange (Stocks, Warrants & Bonds) (L1) HKD 0/month` is free while `Hong Kong Securities Exchange (Stocks, Warrants & Bonds) (L1) HKD 130/month` is not free.

The free one only provides data in Trader Workstation, and it does not provide data via API or 3rd Party platform. Some regional users (e.g. IB-HK Users) cannot manually unsubscribe the free data bundles (e.g. `Hong Kong Securities Exchange (Stocks, Warrants & Bonds) (L1) HKD 0/month`). For users who need to unsubscribe the free data bundle(s), please contact IB Customer Service to cancel the free data subscription from IB back-end side.
