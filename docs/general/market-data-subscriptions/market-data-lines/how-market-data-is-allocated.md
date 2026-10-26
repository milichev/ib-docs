[source](https://www.interactivebrokers.com/docs/general/market-data-subscriptions/market-data-lines/how-market-data-is-allocated)

# How Market Data is Allocated

In order to receive real-time market data, customers must be a subscriber to market data. All clients initially receive 100 concurrent lines of real-time market data (which can be displayed in TWS or via the API) and always have a minimum of 100 lines of data. After the first month of trading, the quantity of market data is allocated using the greater value of:

* USD monthly commissions divided by 8
* USD equity multiplied by 100 divided by \$1,000,000 (rounded down to the nearest integer)
* 100

**Example 1:**

In month two, your account shows the following values: USD Monthly Commissions: \$16, USD Equity: \$950,000\
Using the calculations above, you would still receive the minimum 100 lines of data, since:

* Commissions: \$16/8 = 2
* Equity: \$950,000 / 10000 = 95

As 100 is the greatest of these values, you are left with 100 market data lines.

**Example 2:**

In month three, your account shows the following values: USD Monthly Commissions: \$500, USD Equity: \$1,245,000\
Using the calculations above, you would receive 124 lines of data, since:

* Commissions: \$500/8 = 62.5
* Equity: \$1,245,000 / \10000 = 124.5, rounded down to 124.

As 124 is the greatest of these values, you would have 124 market data lines.
