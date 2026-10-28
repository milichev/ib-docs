[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/equal-quantity)

# Equal Quantity

Requires you to specify an order size. This method distributes shares equally between all accounts in the group.

**Example:** You transmit an order for 400 shares of stock ABC. If your Account Group includes four accounts, each account receives 100 shares. If your Account Group includes six accounts, each account receives 66 shares, and then 1 share is allocated to each account until all are distributed.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
    <name>MyTestProfile2</name>
    <defaultMethod>Equal</defaultMethod>
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
