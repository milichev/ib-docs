[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/net-liquidation-value)

# Net Liquidation Value

Requires you to specify an order size. This method distributes shares based on the net liquidation value of each account. The system calculates ratios based on the Net Liquidation value in each account and allocates shares based on these ratios.

**Example:** You transmit an order for 700 shares of stock XYZ. The account group includes three accounts, A, B and C with Net Liquidation values of $25,000, $50,000 and \$100,000 respectively. The system calculates a ratio of 1:2:4 and allocates 100 shares to Client A, 200 shares to Client B, and 400 shares to Client C.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
    <name>MyTestProfile2</name>
    <defaultMethod>NetLiq</defaultMethod>
    <ListOfAccts varName="list">
      <Account>
        <acct>DU6202167</acct>
      </Account>
      <Account>
        <acct>DU6202168</acct>
      </Account>
    </ListOfAccts>
  </Group>
</ListOfGroups>
```
