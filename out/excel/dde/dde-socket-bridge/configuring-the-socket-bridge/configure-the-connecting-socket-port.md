[home](../../../../index.md) | [excel](../../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/dde/dde-socket-bridge/configuring-the-socket-bridge/configure-the-connecting-socket-port)

# Configure the Connecting Socket Port

1. Launch Trader Workstation or IB Gateway
2. Open the Windows File Explorer
3. Navigate to `C:\TWS API\samples\DdeSocketBridge`
4. Right click the "runDdeSocketBridge.bat" file.
5. Click **Edit** from the list. This will open a new Notepad window.
   * NOTE: Windows 11 users may need to choose "Show more options" first.
6. On the third line after "DdeSocketBridge.jar" **add -p** followed by whichever socket port you have specified in TWS or IB Gateway.

The default ports supplied by Interactive Brokers are as follows:

* TWS Live Account: 7496 (Socket Bridge's default value)
* TWS Paper Account: 7497
* IB Gateway Live Account: 4001
* IB Gateway Paper Account: 4002

```
echo off
if not exist "DdeSocketBridge.jar" goto :error
java -Djava.library.path=.\src\main\resources -jar DdeSocketBridge.jar -p7497
goto :end
:error
echo DdeSocketBridge.jar is not found
:end
```
