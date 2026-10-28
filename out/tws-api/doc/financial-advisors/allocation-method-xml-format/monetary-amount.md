[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/monetary-amount)

# MonetaryAmount

The Monetary Amount method calculates the number of units to be allocated based on the monetary value assigned to each account.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>MonetaryAmount</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>1000.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>2000.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```
