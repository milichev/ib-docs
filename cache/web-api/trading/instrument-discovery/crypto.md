> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Crypto Contract Definitions

Each Cryptocurrency maintains a unique Contract ID, conId, based on your routing exchange. For example, `BTC` hosted on `PAXOS` uses conId `479624278`. Meanwhile, Zerohash represents `BTC` as `557335679`.

When placing orders for Crypto Currencies, `conidEx` must be used instead of `conId` to specify both the contract identifier in addition to the exchange for trading.

```
// BTC ConId
"conidex": "557335679@ZEROHASH"
"conidex": "557335679@ZEROHASHE"
"conidex": "479624278@PAXOS"
```