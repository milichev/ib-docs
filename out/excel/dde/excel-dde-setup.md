[source](https://www.interactivebrokers.com/docs/excel/dde/excel-dde-setup)

# Excel DDE Setup

### Step 1: Install Java

DDE Bridge is built using Java technologies, please install Java to run the DDE Socket Bridge. If Java is not installed, the Command Prompt window will be immediately shut down after you attempt to run DDE Socket Bridge.

Java Installation Link

### **Step 2: Download TWS or IB Gateway**

In order to use the TWS API, all customers must install either Trader Workstation or IB Gateway to connect the API to. Both downloads maintain the same level of usage and support; however, they both have equal benefits. For example, IB Gateway will be less resource intensive as there is no UI; however, the Trader Workstation has access all of the same information as the API, if users would like an interface to confirm data.

It is recommended for API users to use offline TWS because TWS online version has automatic update. Please use same TWS version to make sure the TWS version and TWS API version are synced. These will help preventing version conflict issue.

Note:

1. For IBHK API users, it is commended to use IB Gateway instead of TWS. it is because all IBHK users cannot choose "Never Lock Trader Workstation" in TWS – Global Configuration – Lock and Exit. If there is inactivity, TWS will be locked and there will be API disconnection.

Download Trader Workstation

Download IB Gateway

### Step 3: Download TWS API

It is recommended for API users to use same TWS API version to make sure the TWS version and TWS API version are synced in order to prevent version conflict issue.

Running the Windows version of the API installer creates a directory "C:\TWS API" for the API source code in addition to automatically copying two files into the Windows directory for the DDE and C++ APIs. ***It is important that the API installs to the C: drive***, as otherwise API applications may not be able to find the associated files. The Windows installer also copies compiled dynamic linked libraries (DLL) of the ActiveX control TWSLib.dll, C# API CSharpAPI.dll, and C++ API TwsSocketClient.dll. Running the API installer is designed to install an ActiveX control TWSLib.dll, and TwsRtdServer control TwsRTDServer.dll which are compatible with both 32 and 64 bit applications.

It is important to know that the TWS API is **only** available through the interactivebrokers.github.io MSI or ZIP file. Any other resource, including pip, NuGet, or any other online repository is not hosted, endorsed, supported, or connected to Interactive Brokers. As such, updates to the installation should always be downloaded from the github directly.

TWS API Download Page
