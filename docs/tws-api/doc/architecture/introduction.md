[source](https://www.interactivebrokers.com/docs/tws-api/doc/architecture/introduction)

# Introduction

The TWS API is a BSD implementation that communicates request and response values across TCP socket using a end-line-delimited message protocol. While the underlying structure of the message will vary by request, requests typically follow a patter of indicating a message identifier, request identifier, and then directly relevant content for the request such as contract details or market data parameters.

The provided TWS API package use two distinct classes to accommodate the request / response functionality of the socket protocol, EClient and EWrapper respectively.

The EWrapper class is used to receive all messages from the host and distribute them amongst the affiliated response functions. The EReader class will retrieve the messages from the socket connection and decode them for distribution by the EWrapper class.

#### Python

```python
class TestWrapper(wrapper.EWrapper):
```

#### Java

```java
public class EWrapperImpl implements EWrapper {
```

#### C++

```cpp
class TestCppClient : public EWrapper
    {
```

#### C#

```csharp
public class EWrapperImpl : EWrapper 
   {
```

#### C#

```csharp
Public Class EWrapperImpl
    Implements EWrapper
```

EClient or EClientSocket is used to send requests to the Trader Workstation. This client class contains all the available methods to communicate with the host. Up to 32 clients can be connected to a single instance of the host Trader Workstation or IB Gateway simultaneously.

The primary distinction in EClient and EClientSocket is the involvement of the EReader Class to trigger when requests should be processed. EClient is unique to the Python implementation and utilizes the Python Queue module in place of the EReaderSignal directly. Both the EReaderSignal and Python Queue module handle the queueing process for submitting messages across the socket connection. In either scenario, the EWrapper class must be implemented first to acknowledge the EClient requests.

#### Python

```python
class TestClient(EClient):
     def __init__(self, wrapper):
         EClient.__init__(self, wrapper)
...
class TestApp(TestWrapper, TestClient):
	def __init__(self):
	TestWrapper.__init__(self)
         TestClient.__init__(self, wrapper=self)
```

#### Java

```java
private EReaderSignal readerSignal;
private EClientSocket clientSocket;
protected int currentOrderId = -1;
```

#### Java

```java
public EWrapperImpl() {
    readerSignal = new EJavaSignal();
    clientSocket = new EClientSocket(this, readerSignal);
}
```

#### C++

```cpp
EReaderOSSignal m_osSignal;
    EClientSocket * const m_pClient;
```

…

#### C++

```cpp
TestCppClient::TestCppClient() :
      m_osSignal(2000)//2-seconds timeout
    , m_pClient(new EClientSocket(this, &m_osSignal))
    , m_state(ST_CONNECT)
    , m_sleepDeadline(0)
    , m_orderId(0)
    , m_extraAuth(false)
{
}
```

#### C#

```csharp
EClientSocket clientSocket;
public readonly EReaderSignal Signal;
```

…

#### C#

```csharp
public EWrapperImpl()
{
    Signal = new EReaderMonitorSignal();
    clientSocket = new EClientSocket(this, Signal);
}
```

#### VB.NET

```vbnet
Public eReaderSignal As EReaderSignal
Public socketClient As EClientSocket
```

…

```
Sub New()
    eReaderSignal = New EReaderMonitorSignal
    socketClient = New EClientSocket(Me, eReaderSignal)
End Sub
```
