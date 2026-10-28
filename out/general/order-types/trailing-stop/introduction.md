[source](https://www.interactivebrokers.com/docs/general/order-types/trailing-stop/introduction)

# Introduction

For a discussion of the handling and behavior of Trailing Stop orders, please see our brokerage-wide documentation on this order type at: [Trailing Stop Orders](https://www.interactivebrokers.com/en/index.php?f=605)\
Supported exchanges for Trailing Stop orders: [Supported Exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=trail)

###### Order Type Identifier:

"TRAIL"

###### Parameters:

**Trail Offset.** Required.\
Specifies the distance that your order's stop price will maintain away from the market. A Trailing Stop order ticket must include exactly one of the following two forms of Trail Offset:

* **Absolute Offset:** An explicit numerical value (in the instrument's currency) which will be added to or subtracted from the market price of the instrument.
* **Relative Offset:** A percentage of the market price of the instrument, from which absolute price offsets will be computed (which in turn may vary in size as the market price moves).

***Note: The Trail Offset value, whether absolute or relative, must conform to the instrument's price increment rules.***

**Stop Price.**\
This value is not required. If supplied, this is the trigger price beyond which the Trailing Stop order will begin its trailing behavior. If no Stop Price value is supplied, the market price for the instrument at the time of submission will assigned to this value automatically.
