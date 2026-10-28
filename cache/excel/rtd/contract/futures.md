> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Futures

Simple Syntax

For futures that have multipler Multipliers (e.g. DAX has 5 and 25), Simple Syntax is not adequate to define the contract uniquely. Mixed Syntax can help to add addition specification for the Multiplier.

`=RTD("Tws.TwsRtdServerCtrl",,"ES@CME//FUT/201712///USD", "Bid")`

Complex Syntax

The LastTradeDateOrContractMonth and underlying Symbol can be replaced with the contract's own symbol, also known as LocalSymbol (named as Symbol within the TWS' Contract Description dialog). Local Symbol is not available in Simple Syntax.

`=RTD("Tws.TwsRtdServerCtrl",,"loc=ESZ7","cur=USD", "exch=CME", "sec=FUT", "qt=Ask")`