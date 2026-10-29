[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/dde/dde-socket-bridge/steps-to-launch-dde-socket-bridge)

# Steps to launch DDE Socket Bridge

1. Launch Trader Workstation or IB Gateway
2. Open the Windows File Explorer
3. Navigate to `C:\TWS API\samples\DdeSocketBridge`
4. Double click the file, runDdeSocketBridge.bat. It may just be labeled as runDdeSocketBridge on your computer.
5. There should be two popup windows that appear.
   * The first will be a black command prompt window. You may see a few lines stating you are connected, and a few stating "Error… data farm connection is OK." These "errors" are only notifications, and should not cause concern.
   * You will also see a small java window. This will list the service name, host, port, clientId, and you should see "Connected!". If you see "Disconnected" instead, you may need to Configure Your Socket Bridge.
6. Assuming your socket bridge is showing "Connected!" then you can navigate to `C:\TWS API\samples\Excel` and open the  TwsDde.xls file sample.

Note:

DDE Socket Bridge is built with Java. Excel DDE users must have installed [Java 21](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.exe) in order to launch DDE Socket Bridge. If you open the runDdeSocketBridge.bat without an installed Java, you may discover that your Windows Command Prompt (CMD) is automatically opened and closed very quickly.
