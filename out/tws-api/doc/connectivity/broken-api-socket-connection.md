[source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/broken-api-socket-connection)

# Broken API socket connection

If there is a problem with the socket connection between TWS and the API client, for instance if TWS suddenly closes, this will trigger an exception in the EReader thread which is reading from the socket. This exception will also occur if an API client attempts to connect with a client ID that is already in use.

The socket EOF is handled slightly differently in different API languages. For instance in Java, it is caught and sent to the client application to IBApi::EWrapper::error with errorCode 507: "Bad Message". In C# it is caught and sent to IBApi::EWrapper::error with errorCode -1. The client application needs to handle this error message and use it to indicate that an exception has been thrown in the socket connection.

Clients can validate a broken connection with the EWrapper.connectionClosed and EClient.isConnected functions.

Once a connection fails for any reason, the EWrapper.connectionClosed function will be called. This function can be used to build reconnection logic or affirm a system disconnect.

#### Java

```java
public void connectClosed(){
	System.out.println("API Connection Lost.");
}
```
