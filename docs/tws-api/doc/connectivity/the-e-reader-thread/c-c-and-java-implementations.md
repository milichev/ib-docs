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

#### Python

```python
m_pReader = std::unique_ptr<EReader>( new EReader(m_pClient, &m_osSignal) );
m_pReader->start();
```

#### C#

```csharp
//Create a reader to consume messages from the TWS. The EReader will consume the incoming messages and put them in a queue
var reader = new EReader(clientSocket, readerSignal);
reader.Start();
//Once the messages are in the queue, an additional thread can be created to fetch them
new Thread(() => { while (clientSocket.IsConnected()) { readerSignal.waitForSignal(); reader.processMsgs(); } }) { IsBackground = true }.Start();
```

#### VB.NET

```vbnet
'Once the messages are in the queue, an additional thread need to fetch them
Dim msgThread As Thread = New Thread(AddressOf messageProcessing)
msgThread.IsBackground = True
If (wrapperImpl.serverVersion() > 0) Then Call msgThread.Start()
```

#### VB.NET

```vbnet
Private Sub messageProcessing()
    Dim reader As EReader = New EReader(wrapperImpl.socketClient, wrapperImpl.eReaderSignal)
    reader.Start()
    While (wrapperImpl.socketClient.IsConnected)
        wrapperImpl.eReaderSignal.waitForSignal()
        reader.processMsgs()
    End While
End Sub
```

Now it is time to revisit the role of IBApi.EReaderSignal initially introduced in The EClientSocket Class. As mentioned in the previous paragraph, after the EReader thread places a message in the queue, a notification is issued to make known that a message is ready for processing. In the (C++, C#/.NET, Java) APIs, this is done via the IBApi.EReaderSignal object we initiated within the IBApi.EWrapper's implementer.
