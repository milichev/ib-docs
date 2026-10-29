[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/activex/downloads/download-tws-or-ib-gateway)

# Download TWS or IB Gateway

In order to use the TWS API, all customers must install either Trader Workstation or IB Gateway to connect. Both downloads maintain the same level of usage and support; however, they both have equal benefits.

* The Trader Workstation has access all of the same information as the API, if users would like an interface to confirm data.
* IB Gateway will be less resource intensive as there is no UI.
* TWS will be locked from inactivity for IBHK users which will disconnect any API sessions. IB Gateway does not maintain this behavior.

Download Trader Workstation

Download IB Gateway

## What is the Trader Workstation?

Our market maker-designed IBKR Trader Workstation (TWS) lets traders, investors, and institutions trade stocks, options, futures, forex, bonds, and funds on over 100 markets worldwide from a single account. The TWS API is a programming interface to TWS, and as such, for an application to connect to the API there must first be a running instance of TWS or IB Gateway.

### TWS Online or Offline Version?

It is recommended for API users to use offline TWS because TWS online version has automatic update. Please use same TWS version to make sure the TWS version and TWS API version are synced. These will help preventing version conflict issue.

![Highlights the Offline TWS versions on the download page.](/docs/_fern-files/_img/b5e13ceec142d6fef660b5087aa3e17182d992242d7efcb3143d9e992026b139.webp)

## What is the IB Gateway?

As an alternative to TWS for API users, IBKR also offers IB Gateway (IBGW). From the perspective of an API application, IB Gateway and TWS are identical; both represent a server to which an API client application can open a socket connection after the user has authenticated. With either application (TWS or IBGW), the user must manually enter their username and password into a login window. For security reasons, a headless session of TWS or IBGW without a GUI is not supported. From the user's perspective, IB Gateway may be advantageous because it is a lighter application which consumes about 40% fewer resources.

Both TWS and IBGW were designed to be restarted daily. This is necessary to perform functions such as re-downloading contract definitions in cases where contracts have been changed or new contracts have been added. Beginning in version 974+ both applications offer an autorestart feature that allows the application to restart daily without user intervention. With this option enabled, TWS or IBGW can potentially run from Sunday to Sunday without re-authenticating. After the nightly server reset on Saturday night it will be necessary to again enter security credentials.

The advantages of TWS over IBGW is that it provides the end user with many tools (Risk Navigator, OptionTrader, BookTrader, etc) and a graphical user interface which can be used to monitor an account or place orders. For beginning API users, it is recommended to first become acquainted with TWS before using IBGW.

**For simplicity, this guide will mostly refer to the TWS although the reader should understand that for the TWS API's purposes, TWS and IB Gateway are synonymous.**
