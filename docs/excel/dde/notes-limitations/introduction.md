[source](https://www.interactivebrokers.com/docs/excel/dde/notes-limitations/introduction)

# Introduction

* Sample spreadsheet applications are distributed with the API download for each of the API technologies (RTD Server, ActiveX, DDE). It is important to keep in mind that the sample applications are intended as simple demonstrations of API functionality for third party programmers. They do not have robust error handling functionality and are not intended to be used as production level trading tools.

* Interactive Brokers does not offer any programming assistance and therefore it is strongly advised to anyone willing to use any of the TWS DDE API to become familiar with the technologies involved such as the DDE protocol and VBA.

* By design, Microsoft Excel gives precedence to the user interface over the data connection to other applications. For that reason, Excel only receives updates when it is in a 'ready' state, and may ignore data sent for instance when a modal dialogue box is displayed to the user, a cell is being edited, or Excel is busy doing other things. A new Excel Real Time Data server (RTD) API has been introduced to help address some of these limitations, but they are inherent to Excel as a trading application and not specific to an API technology.

* Excel must be set to the US convention for numbers.
  * Commas `,` denote digit grouping
  * Period `.` denote decimal symbol
  * [Microsoft Guide](https://support.microsoft.com/en-au/office/change-the-windows-regional-settings-to-modify-the-appearance-of-some-data-types-in-access-databases-edf41006-f6e2-4360-bc1b-30e9e8a54989#id0efbd=windows_11) for changing Regional Settings with Microsoft 365

* Other programs running on the same computer which use DDE can interfere with the communication between Excel and TWS and cause Excel to 'hang' or 'freeze' after making the initial request. The only solution to this problem is to close other programs using DDE one-by-one to find the culprit. Programs which are known to cause this issue include Google Chrome, Microsoft OneNote, Skype and Adobe Creative Cloud.

* Because the DDE Bridge is built using Java technologies, please install the latest version on your operating system from [https://www.oracle.com/java/technologies/downloads/#jdk21-windows](https://www.oracle.com/java/technologies/downloads/#jdk21-windows) .
