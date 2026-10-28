> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Futures Options

Simple Syntax

*Comment: Futures Options follow the same rule as conventional option contracts.*

`=RTD("Tws.TwsRtdServerCtrl",,"ES@CME//FOP/20180316/C/1000/USD", "Close")`

Complex Syntax

`=RTD("Tws.TwsRtdServerCtrl",,"loc=ESH8 C1000", "cur=USD", "exch=CME", "sec=FOP", "qt=Close")`