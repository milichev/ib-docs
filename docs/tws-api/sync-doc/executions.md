[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/executions)

# get_executions()

The `get_executions()` function requests all executions matching the provided [ExecutionFilter](../protobuf/execution-filter.md) criteria. All executions within the context of the filter are returned in a list.

## Request Arguments

**`exec_filter`** `object`

[ExecutionFilter Object](../protobuf/execution-filter.md) containing parameters to restrict the execution data to be returned.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 10 seconds.

---

## Response Object

Returns a list of execution objects. Each item in the list contains the associated contract and execution details.

#### Properties

**`contract`** `object`

[Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) for the instrument that was traded.

---

**`execution`** `object`

[Execution Object](../ref/execution.md) containing execution details for the completed trade.

---

```json wordWrap
[{'contract': 1530250139984: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: IEX, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'execution': 1530250140432: ExecId: 0000e0d5.68fa9014.01.01, Time: 20251022 14:56:24 US/Eastern, Account: U1234567, Exchange: IEX, Side: BOT, Shares: 100, Price: 256.62, PermId: 1395073936, ClientId: 8675309, OrderId: 355, Liquidation: 0, CumQty: 100, AvgPrice: 256.62, OrderRef: , EvRule: , EvMultiplier: 0, ModelCode: , LastLiquidity: 2, PendingPriceRevision: False, Submitter: csdem9545, OptExerciseOrLapseType: None}]
```

## Example Implementation
