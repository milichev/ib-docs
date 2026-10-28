> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Connection Parameters

Since the TWS RTD Server API directly refers to the C# API Client, so it connects to TWS (or IB Gateway) the same as C# via the socket. The Host IP Address, Socket Port and Client ID are required parameters for initiating a socket connection.

* The Host IP Address is the IP address where your TWS is running on. For a local connection, local IP 127.0.0.1 can be used.
* The Socket Port is the port for socket connection. You can setup the host port in TWS API Settings, and you need to have your API connect to the same port as you setup in TWS.
* The Client ID is an identification for each API connection. TWS can maintain up to 32 API Clients connecting at the same time, and the Client ID is used to distinguish each connection. This was originally designed so that API users can have multiple API programs (i.e. clients) running at the same using different strategies to trade separately. Since the TWS RTD Server API is only provided for relaying real-time data, there is no need to use multiple client IDs.

The above three parameters are defaulted to the following values if not directly specified by the user:

* Host = "127.0.0.1" (i.e. the "localhost")
* Port = "7496"
* ClientID = Integer.MaxValue – 1

Simple Syntax supports several pre-defined Connection Parameters that can be specified as a separate string (i.e. String2, String3…) in the RTD formula:

* "paper": use port=7497 for connection instead (7497 is the default port for paper TWS sessions)
* "gw": use port=4001 for connection instead (4001 is the default port for live IB Gateway sessions)
* "gwpaper": use port=4002 for connection instead (4002 is the default port for paper IB Gateway sessions)

For example, to request High price for SPY\@SMART while connecting to a TWS logged with a paper account via port 7497:

`=RTD("Tws.TwsRtdServerCtrl",,"SPY@ARCA", "High", "paper")`