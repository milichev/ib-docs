> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# DLL Management

In some scenario, Windows may experience issues with the DLL file that provides ActiveX functionality in Excel. If "#N/A" is displayed in all cells of an Excel sheet, the first step to resolve the issue is to reregister the DLL.

1. TWSAPI must be installed using Admin rights. This allows required dll (CSharpAPI.dll and TwsLib.dll) to be correctly registered in Windows system registry and Excel will find it.
   * Optional: to manually unregister dll run the following (using Admin rights): `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe /unregister "C:\TWS API\source\CSharpClient\activex\bin\Release\TwsLib.dll"`
   * Optional: to. To manually register dll run the following (using Admin rights): `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe /codebase "C:\TWS API\source\CSharpClient\activex\bin\Release\TwsLib.dll"`
2. Open "Excel > File > Options > Excel Options > Trust Center > Trust Center Settings"
3. Make sure that :
   * ActiveX Settings: "ActiveX Settings for all Office Applications -> Disable all controls without notification" is NOT selected (any other button should be selected)
   * Macro Settings: "Macro Settings – Enable VBA macros" is selected
4. After settings were changed, Excel must be restarted