[source](https://www.interactivebrokers.com/docs/excel/rtd/troubleshooting/dll-management)

# DLL Management

In some scenario, Windows may experience issues with the DLL file that provides RTD functionality in Excel. If "#N/A" is displayed in all cells of an Excel sheet, the first step to resolve the issue is to reregister the DLL.

1. TWSAPI must be installed using Admin rights. This allows required dlls (CSharpAPI.dll and TwsRtdServer.dll) to be correctly registered in Windows system registry and Excel will find it.
   * Optional: to manually unregister dll run the following (using Admin rights): `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe /unregister "C:\TWS API\source\CSharpClient\TwsRtdServer\bin\Release\TwsRtdServer.dll"`
   * Optional: to manually register dll run the following (using Admin rights): `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe /codebase "C:\TWS API\source\CSharpClient\TwsRtdServer\bin\Release\TwsRtdServer.dll"`
2. Open "Excel > File > Options > Excel Options > Trust Center > Trust Center Settings"
3. Make sure that :
   * "Add-ins -> Require Application Add-ins to be signed by Trusted Publisher" is NOT selected
   * "Add-ins -> Disable all Application Add-ins" is NOT selected
4. After settings were changed, Excel must be restarted
