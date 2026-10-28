> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# RTD Request Structure

The default Excel RTD API library is made up of at least four primary components, with an optional fifth component for those not using a Live TWS session.

The basic components of a the RTD formula are **ProgID**, **Server**, **[Ticker](/docs/excel/rtd/ticker/introduction)**, **[Topic](/docs/excel/rtd/topic/introduction)** and **[Connection Parameters](/docs/excel/rtd/connection-parameters)** (optional).

While there may be some variety for the other topics, **ProgID** should always be set to "Tws.TwsRtdServerCtrl" or an equivalent cell, and **Server** should always be left as an empty string.

`=RTD(ProgID, Server, Ticker, Topic, ConnectionParams...)`