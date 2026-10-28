> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Cryptocurrency

**Important:** Please be aware that a Contract ID (conid) will vary for Cryptocurrencies based on their Listing Exchange.

Bitcoin (BTC) held at PAXOS (479624278) will have a different conid than the listing at Zerohash (541686651). This behavior will apply to all other coins.

**Symbol:** String. Specify the symbol of the cryptocurrency.

**SecType:** String. Specify `CRYPTO`.

**Exchange:** String. Specify `PAXOS` or `ZEROHASH` (IB-IE clients must submit `ZEROHASHE`). Not all accounts are permitted for both routing destinations.

**Currency:** String. Only USD is available at this time.

#### PAXOS

```generic
symbol = "ETH"
secType = "CRYPTO"
currency = "USD"
exchange = "PAXOS"
```

#### ZEROHASH

```generic
symbol = "ETH"
secType = "CRYPTO"
currency = "USD"
exchange = "ZEROHASH"
```

#### ZEROHASHE

```generic
symbol = "ETH"
secType = "CRYPTO"
currency = "USD"
exchange = "ZEROHASHE"
```