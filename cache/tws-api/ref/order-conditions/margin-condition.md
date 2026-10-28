> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Margin Condition

Used with conditional orders to cancel or submit order based on price of an instrument.

| Field     | Type      | Description                                                                                |
| --------- | --------- | ------------------------------------------------------------------------------------------ |
| `Percent` | `integer` | The margin cushion percentage available.                                                   |
| `IsMore`  | `boolean` | Determine if the MarginCondition should trigger while more or less than the percent value. |