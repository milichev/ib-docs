[source](https://www.interactivebrokers.com/docs/excel/activex/introduction)

# Introduction

The ActiveX API is available for Windows computers to create a means of communication between Microsoft Excel and TWS or IB Gateway.

The ActiveX API wraps the C#/.NET API and is provided as an open source project TWSLib. ActiveX is a legacy technology developed by Microsoft, it essentially allows applications to share information with each other. The current ActiveX API for Excel wraps the C#/.NET API and is provided as an open source project TWSLib. It is suggested to also consider using the C# API directly as it provides seamless integration with the .NET framework.

One possible advantage of using the ActiveX for Excel API as compared to RTDServer or DDE is that ActiveX does provide the same number of functions as the other socket-based technologies (C#, Java, C++, Python). Disadvantages of the ActiveX Excel API is that it is more difficult to program as compared to other Excel APIs and not as robust as non-Excel socket-based API applications.
