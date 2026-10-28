[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/ratios)

# Ratios

This method calculates the allocation of shares based on the ratios you enter.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1. A ratio of 1.0 and 2.0 is set to Account A and Account B. Account A should receive 100 shares and Account B should receive 200 shares.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>Ratio</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>1.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>2.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```
