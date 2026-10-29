[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/activex/notes-limitations/introduction)

# Introduction

* The sample ActiveX spreadsheet provided with the API is meant only as a demonstration of API functionality, and not intended as a production-level tool to be used in trading. While it is designed with examples of almost all API functions, it does not have the necessary functionality to handle problems that may occur during trading such as disconnections, error codes, or dropped events in a robust way.
* One possible advantage of using the ActiveX for Excel API as compared to RTDServer or DDE is that ActiveX does provide the same number of functions as the other socket-based technologies (C#, Java, C++, Python). Disadvantages of the ActiveX Excel API is that it is more difficult to program as compared to other Excel APIs and not as robust as non-Excel socket-based API applications.
* Sample spreadsheet applications are distributed with the API download for each of the API technologies (RTD Server, ActiveX, DDE). It is important to keep in mind that the sample applications are intended as simple demonstrations of API functionality for third party programmers. They do not have robust error handling functionality and are not intended to be used as production level trading tools.
* Interactive Brokers does not offer any programming assistance and therefore it is strongly advised to anyone willing to use any of the TWS ActiveX API to become familiar with the technologies involved such as C#.
* By design, Microsoft Excel gives precedence to the user interface over the data connection to other applications. For that reason, Excel only receives updates when it is in a 'ready' state, and may ignore data sent for instance when a modal dialogue box is displayed to the user, a cell is being edited, or Excel is busy doing other things. A new Excel Real Time Data server (RTD) API has been introduced to help address some of these limitations, but they are inherent to Excel as a trading application and not specific to an API technology.
* Excel must be set to the US convention for numbers.
  * Commas `,` denote digit grouping
  * Period `.` denote decimal symbol
  * [Microsoft Guide](https://support.microsoft.com/en-au/office/change-the-windows-regional-settings-to-modify-the-appearance-of-some-data-types-in-access-databases-edf41006-f6e2-4360-bc1b-30e9e8a54989#id0efbd=windows_11) for changing Regional Settings with Microsoft 365
