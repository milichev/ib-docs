[source](https://www.interactivebrokers.com/docs/tws-api/doc/troubleshooting-support/log-files/api-logs)

# API Logs

TWS and IB Gateway can be configured to create a separate log file which has a record of just communications with API applications. This log is not enabled by default; but needs to be enabled by the Global Configuration setting **"Create API Message Log File"**(picture below).

* API logs contain a record of exchanged messages between API applications and TWS/IB Gateway. Since only API messages are recorded, the API logs are more compact and easier to handle. However they do not contain general diagnostic information about TWS/IBG as the TWS/IBG logs. The TWS/IBG settings folder is by default **C:\Jts** (or IBJts on Mac/Linux). The API logs are named **api.\[clientId].\[day].log**, where \[clientId] corresponds to the Id the client application used to connect to the TWS and \[day] to the week day (i.e. api.123.Thu.log).
* There is also a setting "Include Market Data in API Log" that will include streaming market data values in the API log file. Historical candlestick data is always recorded in the API log.

**Note:** Both the API and TWS logs are encrypted locally. The API logs can be decrypted for review from the associated TWS or IB Gateway session, just like the TWS logs, as shown in the section describing the Local location of logs.

**Note:** The TWS/IB Gateway log file setting has to be set to 'Detail' level before an issue occurs so that information recorded correctly when it manifests. However due to the high amount of information that will be generated under this level, the resulting logs can grow considerably in size.

**Enabling creation of API logs**

TWS:

1. Navigate to File/Edit → Global Configuration → API → Settings
2. Check the box *Create API message log file*
3. Set *Logging Level* to *Detail*
4. Click Apply and Ok

![TWS Global Configuration window displaying API settings with API logging.](../../../../_fern-img/7d0185f7d90778e6aa891e46f8c6ef3483a74e1a506724056bce7a672101351c.webp.md)

IB Gateway:

1. Navigate to Configure → Settings → API → Settings
2. Check the box *Create API message log file*
3. Set *Logging Level* to *Detail*
4. Click Apply and Ok

![IB Gateway settings window displaying API settings with API logging.](../../../../_fern-img/55a7a7ee7af4fe2a3fa9cacc39967271c2e934ea12b300581d9106800107c776.webp.md)
