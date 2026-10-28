> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Per-Currency Account Value Prefix

When you subscribe to account data updates through the TWS API (using reqAccountUpdates or reqAccountUpdatesMulti), the system delivers two categories of data:

* Account-level values – aggregate data representing the entire account
* Per-currency values – data broken down by individual currency (ledger entries)

The key name AccruedCash exists in both categories, making it impossible for API clients to determine whether a received value represents an account-level aggregate or a single-currency entry based on the key alone.

**Setting**

Location: File – Global Configuration – API – Settings

Checkbox: Prepend "\$LEDGER-" prefix to per-currency account values

Enabled (default for new users): Per-currency value keys are prefixed with \$LEDGER -. Account-level keys remain unchanged.\
Disabled (default for upgrading users): All keys are delivered as-is, preserving backward compatibility with existing client implementations.

**Example**\
With the setting disabled:\
Key: "AccruedCash" Currency: "USD" Value: "1500" \< account-level\
Key: "AccruedCash" Currency: "USD" Value: "1000" \< per-currency\
Key: "AccruedCash" Currency: "EUR" Value: "500" \< per-currency

With the setting enabled:\
Key: "AccruedCash" Currency: "USD" Value: "1500" + account-level\
Key: "$LEDGER-AccruedCash" Currency: "USD" Value: "1000" \< per-currency  
Key: "$LEDGER-AccruedCash" Currency: "EUR" Value: "500" \< per-currency

**Important Notes**

* Upgrading users: The setting is disabled by default after upgrade to avoid breaking existing API client applications. Enable it once your client code is updated to handle the prefixed keys.
* Applies globally: The setting affects all connected API clients for the given TWS session.