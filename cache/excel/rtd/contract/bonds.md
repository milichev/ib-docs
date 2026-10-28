> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bonds

Simple Syntax

*Comment: Bonds can be specified by defining the **Symbol** as the CUSIP. **Currency** = "USD" is used as default here.*

`=RTD("Tws.TwsRtdServerCtrl",,"912828C57@SMART//BOND", "Bid")`

Complex Syntax

*Comment: Bonds can also be defined with the **ConId** and **Exchange** as with any security type.*

`=RTD("Tws.TwsRtdServerCtrl",,"sym=912828C57","cur=USD", "exch=SMART", "sec=BOND", "qt=Bid")`

`=RTD("Tws.TwsRtdServerCtrl",,"conid=147554578", "exch=SMART", "qt=Ask")`