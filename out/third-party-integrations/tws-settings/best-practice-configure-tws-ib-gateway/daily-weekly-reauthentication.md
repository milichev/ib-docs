[source](https://www.interactivebrokers.com/docs/third-party-integrations/tws-settings/best-practice-configure-tws-ib-gateway/daily-weekly-reauthentication)

# Daily & Weekly Reauthentication

### **Daily Reauthentication**

In TWS/ IB Gateway – "Global Configuration" – "Lock and Exit", you can choose the time of your TWS being shut down.

For API users, it is recommended to choose "Never lock Trader Workstation" and "Auto restart".

![TWS Global Configuration window displaying Lock and Exit Settings.](/docs/_fern-img/d27c25418033a51441503e13bcb7157ceba618843f72146e858f3e0587eb2680.webp)

Note:

1. IBHK users do not have "**Never lock Trader Workstation**" and "**Auto restart**" in TWS. It is suggested for IBHK users to use IB Gateway in order to have stable API connection because IB Gateway won't be locked due to inactivity. Also, IBHK users can choose "**Auto restart**" in IB Gateway.

### **Weekly Reauthentication**

The weekly authentication cycle starts on every Monday. If you receive `Login failed = Soft token=0 received instead of expected permanent for zdc1.ibllc.com:4001 (SSL)`,  this means you need to manually login again to complete the weekly reauthentication task.
