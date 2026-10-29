[home](../index.md) | [third-party-integrations](index.md) | [source](https://www.interactivebrokers.com/docs/third-party-integrations/general-third-party-frequently-asked-questions)

# General Third Party Frequently Asked Questions

## How to fix "API support is not available for accounts that support commission free trading"?

In order to use third-party platforms, you will need to have a funded IBKR PRO account. If you are getting the message that API support is not available, you either have an IBKR Lite account or need to wait until after the daily server reset for your pricing plan to be updated to Pro in Interactive Brokers' backend servers.

## Linked Accounts and Multi-Account Structures with Third Party Platforms

It is important to keep in mind that not all third party API platforms are compatible with all IBKR account structures. Always check first with the software vendor before opening a specific account type or converting an IB account type. For instance, many third party API platforms such as NinjaTrader and TradeNavigator are not compatible with IB linked account structures, so it is highly recommended to first check with the third party vendor before linking your IB accounts.

## How to connect a 3rd party platform to Interactive Brokers' Trader Workstation

All platforms that connect to Trader Workstation must have the initial connection available within TWS first. This process is documented in [Configure TWS / IBG for API Connectivity.](tws-settings/tws-configuration-for-api-use.md)

However, Interactive Brokers support cannot provide connection instruction for all third party platforms. The third party must provide their own instructions for connecting to Interactive Brokers.

## Where to get support for a third party software connecting to the TWS?

Interactive Brokers cannot provide any kind of support or advice for software not developed by IBKR itself. Depending on the nature of your inquiry, our support staff may be able to review logs in order to confirm if data is being properly sent to the third party platform. However, Interactive Brokers is not able to modify the behavior of a third party platform, and must be corrected by the third party developer.

## My program's vendor did not find any issue on its side and asked me to contact Interactive Brokers directly.

There will be occasions when a given operation will not be fulfilled as expected not because of a malfunction in either platform but because of the business logic involved. The typical behaviour of the TWS is to either perform the requested operation or to return an explanatory message which will point you in the right direction. It is the duty of the third party program to clearly show these TWS' messages within its own user interface. Without a relevant error message our support team will not be able to give any advice.

In case of a malfunction on Interactive Broker's side, clear and concise technical information needs to be provided including evidence of the malfunction in the form of TWS or API message log files as detailed in our [Troubleshooting & Support Log Guide](../tws-api/doc/troubleshooting-support/log-files/api-logs.md)

## TWS generates warning messages that block my orders being automatically transmitted

There are precautionary settings in TWS that are designed to be a order safety check. TWS would usually generate a pop-up warning dialogue, or sent back an error message via the API, when there is any violation to the pre-define precautionary settings in [Understanding Order Precautions](../tws-api/doc/tws-settings/order-precautions.md)

For users who uses a third party software to place orders but also receives data feed from a different vendor other than IB, TWS would also generate a default warning *"You are trying to submit an order without having market data for this instrument"* on receiving orders from third party. The checked order will not be transmitted automatically unless user click "Transmit" button of the order in TWS.

Some TWS precautions can be bypassed by navigating to *File/Edit → Global Configuration → API → Precautions*, and check the box *"Bypass Order Precautions for API Orders"*. Once this is done, API orders placed from a third party software will not be checked by TWS precautions.

## I cannot see any market data in my third party program

In order to retrieve market data off-platform through an API, exchanges require users to subscribe to market data. Specific requirements for these subscriptions can be found on the \[API Market Data Subscription page].

## I have the Live Data Subscriptions I need but when using my paper trading user name I am still unable to obtain it.

Market data is attached to each username. As such, users must be subscribed on each username, or be sharing market data to the paper account from their live username. You can read more about linking market data in our \[Market Data Provisioning section].

## I am obtaining a message saying "Historical data request pacing violation"

It is likely that the third party is requesting more historical market data than is allowed by our [Historical Data Limitations](/docs/tws-api/doc/md/market-data-limitations#historical-data-limitations).

## My third party program shows "No data of type EODChart is available" when trying to load a chart

This message is returned when the requested End of Day (EOD) market data is not available in our systems. You can verify this by loading the same chart using the Trader Workstation. Please contact our General Support team's Market Data department for further information.

## I am obtaining a "HMDS query returned no data" message.

Sometimes the data prior to the specified requested date is also not available for several reasons. Suppose a product started quoting (generating data) on 1st January 2016 but your third party program requests data prior to this date. To prevent this error message adjust your third party program's charting parameters accordingly.

## I cannot chart CFDs from my third party program yet the TWS shows the data correctly.

Except for Index CFDs, CFDs do not have any market data of their own. What the TWS displays is the CFD's underlying contract's data. Whenever you try to fetch non-Index CFD data from the TWS, you will obtain an error message asking you to pull it's underlying contract's data instead. Some third party programs' user interface only allow placing orders via their charts. Given that no data can be loaded for these products and the impossibility of the third party program to apply a similar conversion as the TWS, you might find your third party software not able to place orders as a consequence!

## How can I connect my third party program to my paper trading account?

Connections via the TWS API are not aware of the user name with which you are logged in with in your TWS. From this point of view the API makes no difference between live or paper trading. Since third party programs only connect any running TWS on the specified host and port it only takes you to launch the TWS and log into it with your paper trading credentials, make sure you [Enable API connections](/docs/tws-api/doc/api-settings) and connect to it from your third party application using the same procedure.

## Can I connect simultaneously to my live and paper TWS?

From our side, yes. You can launch as many instances of the TWS as you need using different user name/password combinations. It is crucial though to make sure each TWS is listening on a different port as described in the [Enable API connections section](/docs/tws-api/doc/api-settings). Note that your might as well need to launch multiple instances of your third party program and/or have a way of telling when is your program using the paper or the live accounts.

## The charts shown by my charting software differ from the ones shown by the TWS

Given that the historical data sent down the TWS API comes from the same source as the one displayed by the TWS itself it is almost impossible for it to differ.

Some charting platforms circumvent our [Historical Data Limitations](/docs/tws-api/doc/md/market-data-limitations#historical-data-limitations) by combining real time and historical data. Since our real time market data is not tick-by-tick, bars built from it will hardly match those retrieved from our historical market data service.

Alternatively, you might as well be comparing different charts without noticing. A chart displaying data from NYSE will never be the same as another built from the ARCA exchange or from our SMART routing strategy. inadvertently you might as well be looking at TRADES on one side while having MIDPOINT or BID_ASK on another. Another common mistake involves having different timezones between the TWS and your client application.

## Is there a fee involved to receive data from the API?

Streaming real time data or receiving historical bars from the API requires streaming level 1 market data subscriptions. Subscriptions for instruments other than forex, bonds, and index CFDs incur a monthly fee.

## Can the TWS API be used with trial accounts?

Yes it is possible to connect an API application to a trial account. However it is not possible to receive real time market data or historical candlesticks for most instruments from the TWS API with a trial account login.

## What are differences between connecting to the TWS API and using a FIX/CTCI connection?

The TWS API is an interface to TWS or IB Gateway. It provides many functionalities, such as the ability to receive market data, place orders, and receive account information. The TWS API requires that the user first login to either TWS or IB Gateway, both standalone desktop applications. The TWS API has an order rate limitation of 50 orders per second.

FIX/CTCI connectivity can be configured to connect either with IB Gateway or directly to IB. Unlike the TWS API, FIX/CTCI is only for order placement and can not be used to receive market data. Also, FIX/CTCI has monthly minimum commissions involved.

## Can I use another trading application (IBKR mobile, WebTrader, TWS) while an API program is connected?

To connect to the same IBKR account simultaneously with multiple trading applications it is necessary to have multiple usernames. Additional usernames can be created through Account Management free of charge. Market data subscriptions however only apply to individual usernames so the fees would be charged separately.

## Can the TWS API be used with any IBKR account?

Most third party API applications do not support all IBKR account structures, so it is highly recommended to consult with the third party software vendor before opening or converting to a specific IB account type to use with a third party application.

## Why does an order from the API appear as untransmitted in TWS with a 'Transmit' button next to it?

If an order appears in TWS as untransmitted and is not sent to IB, there are generally three causes:

* There is an error in the order preventing transmission
* There is a TWS precautionary setting preventing transmission to IB. Precautionary settings can be globally overridden in TWS as described by our [Understanding Order Precautions](../tws-api/doc/tws-settings/order-precautions.md) section.
* The order was sent with the 'transmit' boolean flag in the API Order class set to False. By default, its value is True.

## Is it possible to disable the daily auto-logoff requirement of TWS?

TWS and IB Gateway have the ability to automatically restart daily without user authentication at a chosen time from Monday-Saturday. On Sunday, following the Saturday night server reset, it is necessary for the user to re-authenticate any running session of TWS or IB Gateway. With the auto-restart option chosen in the settings, the session is designed to be able to continue until the following Sunday as long as there are no other logins with the same username to Client Portal, TWS, or IBKR mobile.

## Do you recommend any third party products or programming consultants?

Interactive Brokers can not offer recommendations or suggestions for third party platforms.

## What are the differences between using an API application with TWS and IB Gateway?

From the point of view of an API application, TWS and IB Gateway are essentially identical. TWS additionally offers the user the ability to directly view positions, trades, and market data, and provides a number of tools for trading, research, and analysis. IB Gateway has a simple graphical user interface that is only used for modifying settings. The advantages of IB Gateway is that it consumes 40% fewer resources and can run for longer periods without automatically closing down.

## Is it possible to run TWS or IB Gateway on a headless server?

Both TWS and IB Gateway are designed to have a user interface for the client to enter their account credentials. For that reason, headless or GUI-less operation is not supported.
