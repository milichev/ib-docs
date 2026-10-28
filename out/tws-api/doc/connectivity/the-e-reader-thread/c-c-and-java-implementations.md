[source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/the-e-reader-thread/c-c-and-java-implementations)

# C++, C#, and Java Implementations

For C#, Java, C++, and Visual Basic, we instead maintain a triple thread structure which requires the creation of a reader thread, a queue thread, and then a wrapper thread. The documentation listed here further elaborates on the structure for those languages.

#### Java

```java
final EReader reader = new EReader(m_client, m_signal); 

reader.start();
//An additional thread is created in this program design to empty the messaging queue
new Thread(() -> {
    while (m_client.isConnected()) {
        m_signal.waitForSignal();
        try {
             reader.processMsgs();
        } catch (Exception e) {
            System.out.println("Exception: "+e.getMessage());
        }
    }
}).start();
```

Now it is time to revisit the role of IBApi.EReaderSignal initially introduced in The EClientSocket Class. As mentioned in the previous paragraph, after the EReader thread places a message in the queue, a notification is issued to make known that a message is ready for processing. In the (C++, C#/.NET, Java) APIs, this is done via the IBApi.EReaderSignal object we initiated within the IBApi.EWrapper's implementer.
