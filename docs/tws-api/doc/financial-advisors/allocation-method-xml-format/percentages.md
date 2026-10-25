[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/allocation-method-xml-format/percentages)

# Percentages

This method will split the total number of shares in the order between listed accounts based on the percentages you indicate.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1. Account A is set to have 60.0 percentage while Account B is set to have 40.0 percentage. Account A should receive 180 shares and Account B should receive 120 shares.

While making modifications to allocations for profiles, the method uses an enumerated value. The number shown below demonstrates precisely what profile corresponds to which value.

|                |                    |                    |
| -------------- | ------------------ | ------------------ |
| **BUY ORDER**  | *Positive Percent* | *Negative Percent* |
| Long Position  | Increases position | No effect          |
| Short Position | No effect          | Decreases position |

|                |                    |                    |
| -------------- | ------------------ | ------------------ |
| **SELL ORDER** | *Positive Percent* | *Negative Percent* |
| Long Position  | No effect          | Decreases position |
| Short Position | Increases position | No effect          |

**Note:**\
Do not specify an order size. Since the quantity is calculated by the system, the order size is displayed in the Quantity field after the order is acknowledged. This method increases or decreases an already existing position. Positive percents will increase a position, negative percents will decrease a position. For exmaple, to fully close out a position, you just need to specify percentage to be -100.

```
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>Percent</defaultMethod>
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>60.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>40.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```
