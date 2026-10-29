[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/notes-limitations/introduction)

# General Limitations

* Please keep in mind that the **Excel RTD offering can only retrieve streaming market data**. There is no other established utility for this offering.
* Sample spreadsheet applications are distributed with the API download for each of the API technologies (RTD Server, ActiveX, DDE). It is important to keep in mind that the sample applications are intended as simple demonstrations of API functionality for third party programmers. They do not have robust error handling functionality and are not intended to be used as production level trading tools.
* Excel must be set to the US convention for numbers.
  * Commas `,` denote digit grouping
  * Period `.` denote decimal symbol
  * [Microsoft Guide](https://support.microsoft.com/en-au/office/change-the-windows-regional-settings-to-modify-the-appearance-of-some-data-types-in-access-databases-edf41006-f6e2-4360-bc1b-30e9e8a54989#id0efbd=windows_11) for changing Regional Settings with Microsoft 365
* Since the TWS RTD Server API technology directly refers to the C# API client source functions, it is supported on Windows Environment only.
