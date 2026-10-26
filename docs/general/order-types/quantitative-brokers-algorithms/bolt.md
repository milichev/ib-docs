[source](https://www.interactivebrokers.com/docs/general/order-types/quantitative-brokers-algorithms/bolt)

# Bolt

**Algo Strategy Value:** Bolt

**StartTime:** String. Start Time.\
Valid Value/Format: hh:mm:ss tmz

**EndTime:** String.Must be on the same date as Start Time. Takes precedence over Duration.\
Valid Value/Format: hh:mm:ss tmz

**Duration:** double. Alternative order end time specifier. This value is a number of minutes that the order should be worked.\
Valid Value/Format: 10. A value of -99 will specify that the end time should be the exchange close time.

**Mode:** String. Mode\
Valid Value/Format: Passive, Normal, Aggressive

**PercentVolume:** double. Volume %\
Valid Value/Format: 0 \<= PercentVolume \<= 1

**EventPause:** String. Event Pause\
Valid Value/Format: Attempt_To_Complete, Pause_Trading, Trade_Through

**NoCleanup:** bool. No Cleanup\
Valid Value/Format: "0" (false) or "1" (true)

**LiquidityAggressThreshold:** double. Liquidity Aggressiveness Threshold\
Valid Value/Format: 0 \<= LiquidityAggressThreshold \<= 1
