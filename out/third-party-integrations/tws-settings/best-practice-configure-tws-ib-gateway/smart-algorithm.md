[source](https://www.interactivebrokers.com/docs/third-party-integrations/tws-settings/best-practice-configure-tws-ib-gateway/smart-algorithm)

# Smart Routing

IB SmartRoutingSM is dedicated to best price execution for our customers. And with that, Interactive Brokers offers an array of SmartRouting options to our Trader Workstation and TWS API users. Users familiar with Trader Workstation are likely already familiar with the process of [Configuring SmartRouting via Global Configuration;](https://ibkrguides.com/tws/usersguidebook/configuretws/configure%20smartrouting.htm)however, these features are available in the API as well.

The values are specifically formatted when submitted through the TWS API, and must follow the specified patterns below.

#### Available throughout TWS API

| SMART Option Algorithm | API String       |
| ---------------------- | ---------------- |
| SMART Multipurpose     | "SMART"          |
| SMART Dark Only        | "SMART DarkOnly" |

#### Available for CAD-currency Exchanges Only

| SMART Option Algorithm                      | API String           |
| ------------------------------------------- | -------------------- |
| SMART Maximize Rebate                       | "SMART MaxRebate"    |
| SMART Maximize Fill                         | "SMART MaxFill"      |
| SMART Prefer Rebate                         | "SMART PreferRebate" |
| SMART Prefer Fill                           | "SMART PreferFill"   |
| SMART Primary Exchange                      | "SMART Primary"      |
| SMART Highest Volume Exchange w/ Rebate     | "SMART VRebate"      |
| SMART Highest Volume Exchange w/ Lowest Fee | "SMART VLowFee"      |

In TWS Global Configuration – Orders – Smart Routing, you can set your SMART order routing algorithm.

![TWS Global Configuration window displaying Smart Routing.](/docs/_fern-img/afebaa8f237dcee6ffa3fc3f28ae523a13bae4e2256528e50aac547973c2baff.webp)
