[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/stocks)

# Stocks

**Symbol:** String. Specify the symbol for the Stock or ETF.

**SecType:** String. Specify STK.

**Exchange:** String. Smart routing is available. Otherwise, a direct exchange may be specified.

**Currency:** String. Specify the base currency of the stock.

#### Python

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.currency = "USD"
```

For certain smart-routed stock that have the same symbol, currency and exchange, you would also need to specify the primary exchange attribute to uniquely define the This should be defined as the native exchange of a and is good practice to include for all stocks.

For the purpose of requesting market data, the routing exchange and primary exchange can be specified in a single 'exchange' field if they are separated by a valid component exchange separator, for instance exchange = "SMART:ARCA" The default separators available are colon ":" and slash "/" Other component exchange separators can be defined using the field defined in TWS Global Configuration under API -> Settings.

**Symbol:** String. Specify the symbol for the Stock or ETF.

**SecType:** String. Specify STK.

**Exchange:** String. Smart routing is available. Otherwise, a direct exchange may be specified.

**Currency:** String. Specify the base currency of the stock.

**PrimaryExchange:** Specify the primary listing exchange of the instrument.

#### Python

```python
contract = Contract()
contract.symbol = "SPY"
contract.secType = "STK"
contract.currency = "USD"
contract.exchange = "SMART"
contract.primaryExchange = "ARCA"
```
