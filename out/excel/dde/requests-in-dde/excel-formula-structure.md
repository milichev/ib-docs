[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/dde/requests-in-dde/excel-formula-structure)

# Excel Formula Structure

Requests with the TWS API that do not take any arguments, such as EClient.reqCurrentTime, EClient.reqOpenOrders, or EClient.reqPositions are all made using an Excel Formula request using the [DDERequest Method call](https://learn.microsoft.com/en-us/office/vba/api/excel.application.dderequest).

There is a known restriction in Excel that the DDERequest method can only send 255 symbols in its request.

The Excel DDE formula is comprised of several separate components. As a baseline there is the Server, also known as the Service Name from your DDE Socket Bridge. This is followed by your Request Type, and finally the Request String.

We will use this formula to elaborate on this structure: `=@Stwsserver|reqCurrentTime!id4?time`

* '=@Stwsserver': This first part indicates the Service Name set for our socket bridge connection. The '=@S' indicates the start of a formula, and that the next value will be our Service Name.
* '|': The pipe, the character typically above the Enter/Return key, is used to divide our service name from the rest of the request.
* 'reqCurrentTime' immediately after the pipe is used to state the Request Type we would like to make. These request types are based on the TWS API EClient request types documented in the [TWS API Documentation](../../../tws-api/doc/introduction.md).\* "!'": The exclamation, (!) indicates the start of the request with the request ID. This is formatted as id1 or whichever number is pertinent.
  * After the ID we should indicate a question mark (?), to denote which parameter to receive. In the example above, we are both requesting the current time and then printing the time value to the cell using "?time".
