[source](https://www.interactivebrokers.com/docs/tws-api/doc/architecture/the-trader-workstation/the-ib-gateway)

# The IB Gateway

As an alternative to TWS for API users, IBKR also offers IB Gateway (IBGW). From the perspective of an API application, IB Gateway and TWS are identical; both represent a server to which an API client application can open a socket connection after the user has authenticated. With either application (TWS or IBGW), the user must manually enter their username and password into a login window. For security reasons, a headless session of TWS or IBGW without a GUI is not supported. From the user's perspective, IB Gateway may be advantageous because it is a lighter application which consumes about 40% fewer resources.

Both TWS and IBGW were designed to be restarted daily. This is necessary to perform functions such as re-downloading contract definitions in cases where contracts have been changed or new contracts have been added. Beginning in version 974+ both applications offer an autorestart feature that allows the application to restart daily without user intervention. With this option enabled, TWS or IBGW can potentially run from Sunday to Sunday without re-authenticating. After the nightly server reset on Saturday night it will be necessary to again enter security credentials.

The advantages of TWS over IBGW is that it provides the end user with many tools (Risk Navigator, OptionTrader, BookTrader, etc) and a graphical user interface which can be used to monitor an account or place orders. For beginning API users, it is recommended to first become acquainted with TWS before using IBGW.

**For simplicity, this guide will mostly refer to the TWS although the reader should understand that for the TWS API's purposes, TWS and IB Gateway are synonymous.**
