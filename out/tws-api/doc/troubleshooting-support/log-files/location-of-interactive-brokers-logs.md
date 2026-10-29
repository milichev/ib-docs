[home](../../../../index.md) | [tws-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/troubleshooting-support/log-files/location-of-interactive-brokers-logs)

# Location of Interactive Brokers Logs

Logs are stored in the TWS settings directory, C:\Jts\ and then your user subdirectory by default on a Windows computer (the default can be configured differently on the login screen).

The path to the log file directory can be found by:

1. Log in to Trader Workstation or IB Gateway (You must use the platform your API is connecting to)
2. Press **Ctrl-Alt-U** to display the user directory window.
3. This will reveal path such as `C:\Jts\detcfsvirl\`.

Due to privacy regulations, logs are encrypted before they are saved to disk. To review them on your machine, you may need to [Export Your Logs](exporting-logs.md).
