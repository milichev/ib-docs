[source](https://www.interactivebrokers.com/docs/tws-api/doc/troubleshooting-support/unset-values)

# Unset Values

Developers may often find a super-massive value returned from requests like market data, P\&L information, and elsewhere. These are known as Unset values. Unset values are used throughout programming systems to indicate that a value is not available. Unset values are used in place of NULL characters to prevent any unexpected error be thrown in your code. Unset values are also used in place of values like 0 to avoid confusing viewers to believe they have an account balance of 0, or that an equity is worth \$0.

An unset value is the maximum value of a given data type. So the Unset Double value will appear like 1.7976931348623157E308, which contains approximately 308 digits to intentionally appear extraneous.
