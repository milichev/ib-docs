[source](https://www.interactivebrokers.com/docs/tws-api/doc/troubleshooting-support/log-files/reading-exported-logs)

# Reading Exported Logs

Each supported API language of the API contains a message file that translates a given number identifier into their corresponding request. The message identifier numbers used in the underlying wire protocol is the core of the TWS API.

The information on the right documents where each message reader file is located. The \{TWS API} listed is the path to the primary TWS API or JTS folder created from the API installation.

By default, this will be saved directly on the C: drive.

Both the Incoming and Outgoing message IDs are listed in one file.

\{TWS API}\source\pythonclient\ibapi\messages.py

Incoming Message IDs:\
\{TWS API}\source\JavaClient\com\ib\client\EDecoder.java

Outgoing Message IDs:\
\{TWS API}\source\JavaClient\com\ib\client\EClient.java

Incoming Message IDs:\
\{TWS API}\source\CppClient\client\EDecoder.h

Outgoing Message IDs:\
\{TWS API}\source\CppClient\client\EClient.h

Incoming Message IDs:\
\{TWS API}\source\CSharpClient\client\IncomingMessage.cs

Outgoing Message IDs:\
\{TWS API}\source\CSharpClient\client\OutgoingMessages.cs

Depending on the Excel structure used, either C# or Java file path will be used.

For ActiveX and RTD, see C#

For DDE, see Java.

In our API logs, the direction of the message is indicated by the arrow at the beginning:

**->** for incoming messages (TWS to client)

**\<-** for outgoing messages (client to TWS)

Thus  **\<- 3** (outgoing request of type 3) is a placeOrder request, and the subsequent incoming requests are:

**-> 5**= openOrder response

**-> 11**= executionData response

**-> 59**= commissionReport response

Also note that the first openOrder response carries with it an orderStatus response in the same message. If that status were to change later, it would be delivered as a standalone message:

**-> 3**= orderStatus response
