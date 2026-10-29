[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-settings/connected-ib-server-location-in-tws)

# Connected IB Server Location in TWS

Each IB account has a pre-decided IB server. You can visit this link to know our IB servers' locations: [https://www.interactivebrokers.com/download/IB-Host-and-Ports.pdf](https://www.interactivebrokers.com/download/IB-Host-and-Ports.pdf)

Yet, all IB paper accounts are connected to US server by default and its location cannot be changed.

As IB servers in different regions have different scheduled server maintenance time ( [https://www.interactivebrokers.com/en/software/systemStatus.php](https://www.interactivebrokers.com/en/software/systemStatus.php)), you may need to change the IB server location in order to avoid service downtime.

For checking your connected IB server location, you can go to TWS and click "Data" to see your Primary server. In the below image, the pre-decided IB server location is: cdc1.ibllc.com

![TWS Connections Window. ](/docs/_fern-files/interactive-brokers-585439.docs.buildwithfern.com/d92f54f9e1f6bb733f2382fa7657e32e6eb2009de4f5603f0f2d3347c20a51eb/docs/assets/media/market-data-farm.png)

If you want to change your live IB account server location in TWS, please submit a web ticket to "Technical Assistance" – "Connectivity" in order to request changing the IB server location.

In the web ticket, you need to provide:

1. Which account do you want to have IB server location change?
2. Which IB server location would you like to connect to?
   * TWS AMERICA – EAST (New York)
   * TWS AMERICA – CENTRAL (Chicago)
   * TWS Europe (Zurich)
   * TWS Asia (Hong Kong)
   * TWS Asia – CHINA (For mainland China users, if the account server is hosted in Hong Kong, they will automatically connect with the Shenzhen Gateway mcgw1.ibllc.com.cn)
3. Which IB scheduled maintenance time do you choose? (Recommended to choose the default schedule maintenance time of its own IB server location)
   * North America
   * Europe
   * Asia

After you submit the ticket, you will receive a web ticket reply which **require you to confirm and understand the migration request**.

Note:

1. For Internet users, as the connection between IB server and Exchange goes through a dedicated line, it is commonly recommended to choose a IB server location which is closer to your TWS location. For IB connection types, please visit: [https://www.interactivebrokers.com/en/software/connectionInterface.php](https://www.interactivebrokers.com/en/software/connectionInterface.php)
2. The pre-decided IB server location connected from TWS is different from the IB Server location connected from IB Client Portal and IBKR Mobile.
   * IB server location connected from TWS is pre-decided. You can submit a web ticket to request the IB server relocation for the TWS connection.
   * IB server location connected from Client Portal or IBKR Mobile is based on your nearest IB server location. You cannot request the IB server relocation for Client Portal and IBKR Mobile connections. OAuth CP API users now cannot specify which server they want to connect to by themselves.
