[source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/the-e-reader-thread/python-implementation)

# Python Implementation

In Python IB API, the EReader logic is handled in the EClient.connect so the EReader thread is automatically started upon connection. There is **no need** for user to start the reader.

Once the client is connected, a reader thread will be automatically created to handle incoming messages and put the messages into a message queue for further process. User **is required** to trigger Client::run() below, where the message queue is processed in an infinite loop and the EWrapper call-back functions are automatically triggered.

Now it is time to revisit the role of IBApi.EReaderSignal initially introduced in The EClientSocket Class. As mentioned in the previous paragraph, after the EReader thread places a message in the queue, a notification is issued to make known that a message is ready for processing. In the Python API, this is handled automatically by the Queue class.
