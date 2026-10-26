[source](https://www.interactivebrokers.com/docs/tws-api/contracts/mutual-funds)

# Mutual Funds

**Symbol:** String. Specify the symbol for the mutual fund.

**SecType:** String. Specify FUND.

**Exchange:** String. Specify the exchange of the fund. FUNDSERV is the most common.

**Currency:** String. Specify the base currency of the fund.

Note: It is recommended to understand mutual fund orders on TWS UI before implementing via API due to restrictions enforced on trading mutual funds For example to buy ARBIX one requires to use cash quantity ie cashQty while selling ARBIX can be implemented using total quantity ie totalQuantity
