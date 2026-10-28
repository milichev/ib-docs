[source](https://www.interactivebrokers.com/docs/excel/rtd/notes-limitations/unset-value-responses/na-connection-unavailable)

# 'NA' Connection Unavailable

Clients who may have installed the API into a unique location may receive an #NA message in each RTD cell. While this is often indicative of a reference error, the #NA reference may be failing to call an installed DLL essential for the connection with Trader Workstation. To resolve this error, please follow the steps listed below:

1. Uninstall the API from the "Add/Remove Tool" in the Windows Control Panel as usual
2. Delete the C:\TWS API\ folder if any files are still remaining to prevent a version mismatch.
3. Locate the file "C:\Windows\SysWOW64\TwsSocketClient.dll". Delete this file.
