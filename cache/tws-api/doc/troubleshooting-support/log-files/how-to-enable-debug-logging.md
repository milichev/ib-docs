> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# How To Enable Debug Logging

Enabling DEBUG-level logging for the host platform (TWS or IBG, this does not affect API logs):

1. Navigate to the root TWS/IBG installation directory
2. Find jts.ini and open in text editor
3. Put debug=1 under the \[Communication] section
4. Reboot TWS/IBG

Setting debug=1 has added benefits in TWS.

1. Debug=1 also allows you to enter conIds into a watchlist to resolve them into symbols. Type/paste the conId in an empty watchlist row, add |C (vertical bar, capital C) at the end, and press Enter. Example: 265598|C will resolve immediately to AAPL (exchange will be SMART where available, primary otherwise).
   * If the instrument is already present in the watchlist, nothing will happen.
2. Additional detail in the "Description" window for an instrument, normally available by right-clicking on an instrument in a watchlist and selecting Financial Instrument Info >> Description from the context menu. Debug=1 will add the conId, min order sizes, market rules (i.e., min price increments and thresholds), all available order types, and all available exchanges to this interface. Changing the behavior of TWS to bring up that Description window on double-click can make it easier to find.
   1. In TWS, go to Global Configuration >> Display >> Ticker Row
   2. Change "Double-click on Financial Instrument will" dropdown menu to "Open Contract Details"