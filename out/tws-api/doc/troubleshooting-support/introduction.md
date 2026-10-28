[source](https://www.interactivebrokers.com/docs/tws-api/doc/troubleshooting-support/introduction)

# Introduction

If there are remaining questions about available API functionality after reviewing the content of this documentation, the API Support group is available to help.

-> It is important to keep in mind that IB **cannot provide programming assistance** or give suggestions on how to code custom applications. The API group can review log files which contain a record of communications between API applications and TWS, and give details about what the API can provide.

General suggestions on starting out with the IB system:

* **Become familiar with the analogous functionality in TWS before using the API**: the TWS API is nothing but a communication channel between your client application and TWS. Each API function has a corresponding tool in TWS. For instance, the market data tick types in the API correspond to watchlist columns in TWS. Any order which can be created in the API can first be created in TWS, and it is recommended to do so. Additionally, if information is not available in TWS, it will not be available in the API. Before using IB Gateway with the API, it is recommended to first become familiar with TWS.
* **Make use of the sample API applications**: the sample applications distributed with the API download have examples of essentially every API function in each of the available programming languages. If an issue does not occur in the corresponding sample application, that implies there is a problem with the custom implementation.
* **Upgrade TWS or IB Gateway periodically**: TWS and IB Gateway often have new software releases that have enhancements, and that can sometimes have bug fixes. Because of this, we strongly recommend our users to keep their software as up to date as possible. If you are experiencing a specific problem that is occurring in TWS or IB Gateway and not in the API program, it is likely resolved in the more recent software build.
