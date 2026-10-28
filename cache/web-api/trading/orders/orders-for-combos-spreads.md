> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Orders for Combos/Spreads

Combo or spread orders may be submitted using the same `/iserver/account/{accountId}/orders` endpoint described above. In the case of combo orders, we must include the `conidex` field in our request body instead of `conid`. The `conidex` field is a string representation of our combo order's composition.

A combo order's `conidex` value takes the following form: `{spread_conid};;;{leg_conid1}/{ratio},{leg_conid2}/{ratio}`

The `spread_conid` value is a unique identifier associated with the currency in which the combo's legs trade. For US Stock Combos, the `spread_conid` value will the the USD conid integer by itself. For combo orders in all other currencies, `spread_conid` takes the form `spread_conid@exchange`.

*Available currency spread `conids`:*

Currency

Spread ConID

AUD

61227077

CAD

61227082

CHF

61227087

CNH

136000441

GBP

58666491

HKD

61227072

INR

136000444

JPY

61227069

KRW

136000424

MXN

136000449

SEK

136000429

SGD

426116555

USD

28812380

The `spread_conid` is followed by three semicolons, and then the first leg's `leg_conid`. Next, a forward slash `/`, followed by the *ratio* of the preceding leg.

The ratio value conveys two pieces of information. The first is the side, buy or sell, of the leg, indicated by the sign of the ratio value, positive or negative. A positive ratio integer indicates a Buy, while a negative ratio integer represents a Sell. The second piece of information is the relative size of the leg in the combo, indicated by the integer magnitude itself. This magnitude acts as a multiplier when placing an order for the overall combo instrument.

Additional legs are separated by commas, and follow the same pattern as above: `{leg_conid}/{ratio}`.

Please be aware that the number of legs permissible in a single combo order varies by exchange.

Combo orders are priced by summing the per-leg prices, taking into account the side of each leg: `Combo order price = (Price_Leg1 * Ratio_Leg1) + (Price_Leg2 * Ratio_Leg2) + ... + (Cost_LegN * Ratio_LegN)`