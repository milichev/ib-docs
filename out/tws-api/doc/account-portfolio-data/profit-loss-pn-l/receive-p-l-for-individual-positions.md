[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/receive-p-l-for-individual-positions)

# Receive P&L for individual positions

#### EWrapper.pnlSingle (

**reqId:** int. Request identifier used for tracking.

**pos:** decimal. Current size of the position

**dailyPnL:** double. DailyPnL for the position

**unrealizedPnL:** double. Total unrealized PnL for the position (since inception) updating in real time

**realizedPnL:** double. Total realized PnL for the position (since inception) updating in real time

**value:** double. Current market value of the position.\
)

Receives real time updates for single position daily PnL values

#### Java

```java
@Override
public void pnlSingle(int reqId, Decimal pos, double dailyPnL, double unrealizedPnL, double realizedPnL, double value) {
  System.out.println(EWrapperMsgGenerator.pnlSingle(reqId, pos, dailyPnL, unrealizedPnL, realizedPnL, value));                
}
```
