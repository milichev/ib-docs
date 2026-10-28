> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# OCA Types

Via the IBApi.Order.OcaType attribute, the way in which remaining orders should be handled after an execution can be configured as indicated in the table.

| Value | Description                                                         |
| ----- | ------------------------------------------------------------------- |
| 1     | Cancel all remaining orders with block.\*                           |
| 2     | Remaining orders are proportionately reduced in size with block.\*  |
| 3     | Remaining orders are proportionately reduced in size with no block. |

Note\*: if you use a value "with block" it gives the order overfill protection. This means that only one order in the group will be routed at a time to remove the possibility of an overfill. Click here for further discussion of OCA orders.

**Multiple OCA types cannot be used in a single OCA Group.**

More on [OCA Orders](https://www.interactivebrokers.com/en/index.php?f=617)