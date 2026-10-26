[source](https://www.interactivebrokers.com/docs/tws-api/doc/market-scanner/market-scanner-subscription/request-market-scanner-subscription)

# Request Market Scanner Subscription

#### EClient.reqScannerSubscription (

**reqId:** int. Request identifier used for tracking data.

**subscription:** ScannerSubscription. Object containing details on what values should be used to construct and sort the list.

**scannerSubscriptionOptions:** List. Internal use only.

**scannerSubscriptionFilterOptions:** List. List of values used to filter the results of the scanner subscription. May result in an empty scanner response from over-filtering.\
)

Starts a subscription to market scan results based on the provided parameters.
