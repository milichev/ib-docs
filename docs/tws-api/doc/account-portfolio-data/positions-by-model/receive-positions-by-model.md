[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions-by-model/receive-positions-by-model)

# Receive Positions By Model

#### EWrapper.positionMulti(

**requestId:** int. The id of request

**account:** String. The account holding the position.

**modelCode:** String. The model code holding the position.

**contract:** Contract. The position's Contract

**pos:** decimal. The number of positions held.

**avgCost:** double. The average cost of the position.\
)

Provides the portfolio's open positions.

#### EWrapper.positionMultiEnd(

**requestId:** int. The id of request\
)

Indicates all the positions have been transmitted.
