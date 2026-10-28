[source](https://www.interactivebrokers.com/docs/web-api/trading/usage-and-availability/pacing-limitations)

# Pacing Limitations

Interactive Brokers currently enforces a global request rate limit of 10 requests per second for each authenticated username -- that is, each Web API session.

Additionally, some endpoints are also subject to their own pacing limits as described in the table below.

When a rate limit is exceeded, the Web API will return a `429 Too Many Requests` status code.

Violator IP addresses may be put in a penalty box for 10 minutes. After this period, the IP address is removed from the penalty box. Repeat violator IP addresses may be permanently blocked until the issue is resolved.

### Per Endpoint Request Rate Limits

| Endpoint                              | Method | Limit                     |
| ------------------------------------- | ------ | ------------------------- |
| `/iserver/marketdata/snapshot`        | GET    | 10 req/s                  |
| `/iserver/marketdata/history`         | GET    | 10 req/s or 50 req/minute |
| `/iserver/scanner/params`             | GET    | 1 req/15 mins             |
| `/iserver/scanner/run`                | POST   | 1 req/sec                 |
| `/iserver/trades`                     | GET    | 1 req/5 secs              |
| `/iserver/orders`                     | GET    | 1 req/5 secs              |
| `/iserver/account/pnl/partitioned`    | GET    | 1 req/5 secs              |
| `/portfolio/accounts`                 | GET    | 1 req/5 secs              |
| `/portfolio/subaccounts`              | GET    | 1 req/5 secs              |
| `/pa/performance`                     | POST   | 1 req/15 mins             |
| `/pa/summary`                         | POST   | 1 req/15 mins             |
| `/pa/transactions`                    | POST   | 1 req/15 mins             |
| `/fyi/unreadnumber`                   | GET    | 1 req/sec                 |
| `/fyi/settings`                       | GET    | 1 req/sec                 |
| `/fyi/settings/{typecode}`            | POST   | 1 req/sec                 |
| `/fyi/disclaimer/{typecode}`          | GET    | 1 req/sec                 |
| `/fyi/disclaimer/{typecode}`          | PUT    | 1 req/sec                 |
| `/fyi/deliveryoptions`                | GET    | 1 req/sec                 |
| `/fyi/deliveryoptions/email`          | PUT    | 1 req/sec                 |
| `/fyi/deliveryoptions/device`         | POST   | 1 req/sec                 |
| `/fyi/deliveryoptions/{deviceId}`     | DELETE | 1 req/sec                 |
| `/fyi/notifications`                  | GET    | 1 req/sec                 |
| `/fyi/notifications/more`             | GET    | 1 req/sec                 |
| `/fyi/notifications/{notificationId}` | PUT    | 1 req/sec                 |
| `/tickle`                             | GET    | 1 req/sec                 |
| `/sso/validate`                       | GET    | 1 req/min                 |
