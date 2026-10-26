[source](https://www.interactivebrokers.com/docs/excel/rtd/rtd-request-structure)

# RTD Request Structure

The default Excel RTD API library is made up of at least four primary components, with an optional fifth component for those not using a Live TWS session.

The basic components of a the RTD formula are **ProgID**, **Server**, **[Ticker](ticker/introduction.md)**, **[Topic](topic/introduction.md)** and **[Connection Parameters](connection-parameters.md)** (optional).

While there may be some variety for the other topics, **ProgID** should always be set to "Tws.TwsRtdServerCtrl" or an equivalent cell, and **Server** should always be left as an empty string.

`=RTD(ProgID, Server, Ticker, Topic, ConnectionParams...)`
