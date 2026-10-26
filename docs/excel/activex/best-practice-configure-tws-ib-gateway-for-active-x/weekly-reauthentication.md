[source](https://www.interactivebrokers.com/docs/excel/activex/best-practice-configure-tws-ib-gateway-for-active-x/weekly-reauthentication)

# Weekly Reauthentication

It is compulsory for TWS users to **auto logoff/auto restart TWS daily** and **manually login TWS weekly**.

In TWS/ IB Gateway – "Global Configuration" – "Lock and Exit", you can choose the time that your TWS will be shut down.

For API users, it is recommended to choose "Never lock Trader Workstation" and "Auto restart".

![Highlights the Weekly Reauthentication options within the TWS Global Configuration window.](/docs/_fern-img/f0352b13ec3b7f156a6020cd56eef86acf439732ea3c5b469ba2289ada2e96b1.webp)

Note:

1. IBHK users does not have "**Never lock Trader Workstation**" and "**Auto restart**" in TWS.
2. **Windows Sleeping Mode also causes API disconnection**. It is strongly suggested to choose "**Never Sleep**" in Windows.
