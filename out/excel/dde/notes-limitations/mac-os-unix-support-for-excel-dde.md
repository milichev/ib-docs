[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/dde/notes-limitations/mac-os-unix-support-for-excel-dde)

# macOS / Unix Support For Excel DDE

Excel DDE, Dynamic Data Exchange, is a system which produces a sub-task in order to exchange information to and from a given program. Given the TWS API is built around the EClient and EWrapper communication, discussed further in [TWS API Connectivity](/docs/tws-api/doc/connectivity/connectivity-behavior). This data exchange system is essential for the functionality of our API offering.

The macOS [App Sandbox](https://developer.apple.com/documentation/security/app-sandbox) limit's an apps ability to create additional tasks required for dynamic data exchange and is required for macOS application distribution.

Because this process limits the task creation of DDE, the TWS API Excel DDE offering cannot run on macOS, and is the reason the library is excluded from the Mac and Unix distribution of the TWS API.
