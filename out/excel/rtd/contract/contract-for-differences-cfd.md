[source](https://www.interactivebrokers.com/docs/excel/rtd/contract/contract-for-differences-cfd)

# Contract for Differences ( CFD )

\*\*\*Note:\**Only Index CFD data can be directly queried via the API, but not equity CFD. Please directly request data for the underlying equity if you need data for an equity CFD contract.*

Simple Syntax

`=RTD("Tws.TwsRtdServerCtrl",,"IBDE30@SMART//CFD////EUR", "Bid")`

Complex Syntax

`=RTD("Tws.TwsRtdServerCtrl",,"sym=IBDE30","cur=EUR", "exch=SMART", "sec=CFD", "qt=ASK")`
