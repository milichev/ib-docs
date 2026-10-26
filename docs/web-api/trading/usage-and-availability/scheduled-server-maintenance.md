[source](https://www.interactivebrokers.com/docs/web-api/trading/usage-and-availability/scheduled-server-maintenance)

# Scheduled Server Maintenance

Interactive Brokers conducts scheduled maintenance on the infrastructure that serves the Web API. During maintenance windows, some features of the Web API are momentarily unavailable.

The timing of the Web API's maintenance windows vary slightly from the those observed in other platforms, such as Trader Workstation.

The Web API itself is accessible 24 hours a day during the week. It receives maintenance only on Saturday evenings.

Brokerage functionality (provided by `/iserver` endpoints) is briefly unavailable each evening at approximately 0100 local time by region.

##### *Weekday IServer Reset Timing*

| Region                           | Maintenance Onset |
| -------------------------------- | ----------------- |
| North America *(NY and Chicago)* | 01:00 US/Eastern  |
| Europe                           | 01:00 CEST        |
| Asia                             | 01:00 HKT         |
