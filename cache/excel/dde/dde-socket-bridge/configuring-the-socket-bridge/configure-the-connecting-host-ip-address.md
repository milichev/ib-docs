> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Configure the Connecting Host IP Address

1. Launch Trader Workstation or IB Gateway
2. Open the Windows File Explorer
3. Navigate to `C:\TWS API\samples\DdeSocketBridge`
4. Right click the "runDdeSocketBridge.bat" file.
5. Click **Edit** from the list. This will open a new Notepad window.
   * NOTE: Windows 11 users may need to choose "Show more options" first.
6. On the third line after "DdeSocketBridge.jar" **add -h** followed by whichever IP Address you need to connect to.

NOTE: Be sure this IP address matches the location of your Trader Workstation. Also be sure that the Socket Bridge's IP matches where Excel is being hosted.

```
echo off
if not exist "DdeSocketBridge.jar" goto :error
java -Djava.library.path=.\src\main\resources -jar DdeSocketBridge.jar -h123.123.123.123
goto :end
:error
echo DdeSocketBridge.jar is not found
:end
```