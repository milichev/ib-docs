[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/contract-details/request-contract-details)

# Request Contract Details

#### EClient.reqContractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. the contract used as sample to query the available contracts.\
Typically contains at least the Symbol, SecType, Exchange, and Currency.\
)

Upon requesting EClient.reqContractDetails, all contracts matching the requested \[Contract Object] will be returned to [EWrapper.contractDetails](request-contract-details.md) or [EWrapper.bondContractDetails](receive-bond-details.md).

When reqContractDetails is called for STK using symbol security type, exchange, and currency, TWS caches the contract data internally. Future order submissions for these contracts utilizing contract ID and exchange combination utilize the cached values to expedite order transmission speeds.
