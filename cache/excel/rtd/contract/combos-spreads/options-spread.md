> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Options Spread

Complex Syntax

Buy 1 DBK May19'17 15 CALL @EUREX+ Sell 1 DBK May19'17 16 CALL @EUREX:

`=RTD("tws.twsrtdserverctrl",,"sym=DBK", "exch=EUREX", "cur=EUR", "sec=BAG", "cmb=270579950#1#BUY#EUREX;270579957#1#SELL#EUREX;", "Bid")`