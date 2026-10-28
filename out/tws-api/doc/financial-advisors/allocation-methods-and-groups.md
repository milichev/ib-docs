[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-methods-and-groups)

# Allocation Methods and Groups

A number of methods for account allocations are available with Financial Advisor and IBroker account structures to specify how trades should be distributed across multiple accounts.

Allocation Groups can be created or modified in the Trader Workstation directly as described in [TWS: Allocations and Transfers](https://www.ibkrguides.com/tws/usersguidebook/financialadvisors/create%20an%20account%20group%20for%20share%20allocation.htm).

Alternatively, allocation groups can be created or modified through the [EClient.replaceFA()](replace-fa-allocations.md) method in the API.

Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified.

#### IB-computed allocation methods

* [Available Equity](allocation-method-xml-format/available-equity.md)
* [Equal Quantity](allocation-method-xml-format/equal-quantity.md)
* [Net Liquidation Value](allocation-method-xml-format/net-liquidation-value.md)

#### User-specified allocation methods

###### Formerly known as Allocation Profiles

* [Cash Quantity](allocation-method-xml-format/monetary-amount.md)
* [Percentages](allocation-method-xml-format/percentages.md)
* [Ratios](allocation-method-xml-format/ratios.md)
* [Shares](allocation-method-xml-format/contracts-or-shares.md)
