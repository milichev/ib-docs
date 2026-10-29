[home](../../index.md) | [excel](../index.md) | [source](https://www.interactivebrokers.com/docs/excel/activex/architecture)

# Architecture

The Interactive Brokers ActiveX API is rather unique in the sense that it demands the most Visual Basic knowledge to operate the API of our three Excel offerings. However, the API is similar to RTD in the sense that much of the underlying functionality and requests are based on C# source code.

To elaborate on this process further, C# makes the underlying requests to EClient.reqMktData, receiving data in EWrapper.tickData, and so on with accordance to the [Trader Workstation API](../../tws-api/doc.md). As such, changes to method request systems are built in the C# code directly. As with our other source code, this is the baseline for all clients and is used to interpret data from a TCP socket bridge connection to the Trader Workstation. This is documented within `C:\TWS API\source\CSharpClient\activex`

The ActiveX component of this API comes from the communication between C# and Visual Basic. Specifically, the use of the [System.Runtime.InteropServices Namespace](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices?view=net-7.0) supports the COM interoperability that provides the foundation of ActiveX.

Finally, Visual Basic will intercept the messages sent through the Namespace and then assign that data to specific cells in your active workbook. This code is all established at `{TWS API}\samples\Excel\TwsActiveX`
