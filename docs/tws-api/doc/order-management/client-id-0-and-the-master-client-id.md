[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/client-id-0-and-the-master-client-id)

# ClientId 0 and the Master Client ID

Each TWS API connection maintains its own ClientID to the host through the EClient.connect function. There are two unique client ID behaviors developers must be aware of:

* **Master ClientID:** The Master Client ID is set in the Global Configuration and is used to distinguish the connecting Client ID used to pull order and trades data even from other API connections. Connecting without using the Master Client ID will mean only trades on the connected Client ID will be returning from calls to the openOrder or execDetails functions.
* **ClientID 0:** ClientID 0 is unique from the rest of the client IDs in that users can receive trades made through Trader Workstation or through FIX in addition to trades that take place on the current client ID.

The Master ClientID value can be assigned to 0 so that a connection can retrieve orders placed from TWS, FIX sessions, and all API connections on the account.

![Highlights the "Master API client ID" setting under API Settings.](../../../_fern-img/79c72ba0c5c9f8424935e056460973296175b13837273b4f9182d87f6baf9c94.webp.md)
