[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/contract/foreign-exchange-forex-fx-cash)

# Foreign Exchange/Forex/FX/CASH

Simple Syntax

Forex Ticker is defined in format "CURRENCY1.CURRENCY2/CASH".

`=RTD("Tws.TwsRtdServerCtrl",,"EUR.USD/CASH", "Bid")`

Complex Syntax

For Complex Syntax, Forex Symbol is defined as the foreign currency, and the Currency is defined as the base currency.

`=RTD("Tws.TwsRtdServerCtrl",,"sym=EUR","cur=USD", "exch=IDEALPRO", "sec=CASH", "qt=Bid")`
