[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/cf-ds)

# CFDs

**Symbol:** String. Specify the symbol of the CFD.

**SecType:** String. Specify CFD.

**Exchange:** String. Specify SMART.

**Currency:** String. Specify the base currency the CFD is traded with.

#### Python

```python
contract = Contract()
contract.symbol = "IBDE30"
contract.secType = "CFD"
contract.currency = "EUR"
contract.exchange = "SMART"
```
