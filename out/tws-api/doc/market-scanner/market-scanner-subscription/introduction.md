[source](https://www.interactivebrokers.com/docs/tws-api/doc/market-scanner/market-scanner-subscription/introduction)

# Introduction

All values used for the ScannerSubscription object are pulled from EClient.scannerParams response. The XML tree will relay a tree containing a corresponding code to each ScannerSubscription field as documented below.

**instrument:** `<ScanParameterResponse> <InstrumentList> <Instrument> <type>`

**Location Code:**`<ScanParameterResponse> <LocationTree> <Location> <LocationTree> <Location> <locationCode>`

**Scan Code:** `<ScanParameterResponse> <ScanTypeList> <ScanType> <scanCode>`

**Subscription Options** should be an empty array of TagValues.

**Filter Options:** `<ScanParameterResponse> <FilterList> <RangeFilter> <AbstractField> <code>`

#### ScannerSubscription()

**Instrument:** String. Instrument Type to use.

**Location Code:** String. Country or region for scanner to search.

**Scan Code:** String. Value for scanner to sort by.

**Subscription Options:** Array of TagValues. For internal use only.

**Filter Options:** Array of TagValues. Contains an array of TagValue objects which filters the scanner subscription.
