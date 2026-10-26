[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/accumulate-distribute)

# Accumulate/Distribute

The [Accumulate/Distribute](https://www.interactivebrokers.com/en/index.php?f=1223) algo can help you to achieve the best price for a large volume order without being noticed in the market, and can be set up for high frequency trading. By slicing your order into smaller randomly-sized order increments that are released at random time intervals within a user-defined time period, the algo allows the trading of large blocks of stock and other instruments without being detected in the market. The algo allows limit, market, and relative order types. It is important to keep in mind the API A/D algo will not have all available parameters of the A/D algos that can be created in TWS.

**Algo Strategy Value:** AD

**componentSize:** int. Quantity of increment.\
Valid Value/Format: Cannot exceed initial size

**timeBetweenOrders:** int. Time interval in seconds between each order.\
Valid Value/Format: 30

**randomizeTime20:** bool. Randomize time period by +/- 20%.\
Valid Value/Format: 1 (true) or 0 (false)

**randomizeSize55:** bool. Randomize size by +/- 55%.\
Valid Value/Format: 1 (true) or 0 (false)

**giveUp:** int. Stop attempting to catch up to the size value if the conditions are not achieved.

**catchUp:** bool. Catch up in time.\
Valid Value/Format: 1 (true) or 0 (false)

**waitForFill:** bool. Wait for current order to fill before submitting next order.\
Valid Value/Format: 1 (true) or 0 (false)

**activeTimeStart:** String. Algorithm starting time.\
Valid Value/Format: YYYYMMDD-hh:mm:ss TMZ

**activeTimeEnd:** String. Algorithm ending time.\
Valid Value/Format: YYYYMMDD-hh:mm:ss TMZ
