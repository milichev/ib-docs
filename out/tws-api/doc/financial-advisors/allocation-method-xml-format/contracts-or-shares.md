[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/contracts-or-shares)

# Contracts Or Shares

This method allocates the absolute number of shares you enter to each account listed. If you use this method, the order size is calculated by adding together the number of shares allocated to each account in the profile.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1. Account A is set to receive 100.0 shares while Account B is set to receive 200.0 shares. Account A should receive 100 shares and Account B should receive 200 shares.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>ContractsOrShares</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>100.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>200.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```
