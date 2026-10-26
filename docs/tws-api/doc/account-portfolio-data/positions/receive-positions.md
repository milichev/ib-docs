[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions/receive-positions)

# Receive Positions

#### EWrapper.position(

**account:** String. The account holding the position.

**contract:** Contract. The position's Contract

**pos:** decimal. The number of positions held. avgCost the average cost of the position.

**avgCost:** double. The total average cost of all trades for the currently held position.\
)

Provides the portfolio's open positions. After the initial callback (only) of all positions, the IBApi.EWrapper.positionEnd function will be triggered.

For futures, the exchange field will not be populated in the position callback as some futures trade on multiple exchanges

#### Ewrapper.positionEnd()

Indicates all the positions have been transmitted. Only returned after the initial callback of EWrapper.position.
