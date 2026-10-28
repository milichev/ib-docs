[source](https://www.interactivebrokers.com/docs/excel/dde/requests-in-dde/introduction)

# Introduction

Requests made through the Excel DDE are handled through two primary methods: An [Excel Formula Structure](excel-formula-structure.md) or a [DDEPoke method call](dde-poke-requests.md).

Requests with the TWS API that do not take any arguments, such as EClient.reqCurrentTime, EClient.reqOpenOrders, or EClient.reqPositions are all made using an Excel Formula request using the [DDERequest Method call](https://learn.microsoft.com/en-us/office/vba/api/excel.application.dderequest). Please note there is a known restriction in Excel that the DDERequest method can only send 255 symbols in its request.

For requests that contain at least one or more argument, such as EClient.reqMktData, EClient.reqContractDetails, or EClient.placeOrder, must be made using the [Visual Basic DDEPoke Method Call](https://learn.microsoft.com/en-us/office/vba/api/excel.application.ddepoke).

Please be sure to review the underlying [TWS API functions](../../../tws-api/doc/introduction.md) to understand which requests have arguments and which do not.
