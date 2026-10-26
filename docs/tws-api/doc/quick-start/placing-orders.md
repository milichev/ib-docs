[source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/placing-orders)

# Placing Orders

Placing orders first requires a [`contract`](/docs/tws-api/doc/contracts-financial-instruments) to be defined.

In the code below, the [`reqContractDetails()`](../contracts-financial-instruments/contract-details/request-contract-details.md) function initiates the sequence of function calls that place an order. Inside the defined [`contractDetails()`](../contracts-financial-instruments/contract-details/receive-contract-details.md) callback function below, the [`placeOrder()`](../orders/place-order/introduction.md#eclientplaceorder-) function is called, which places the order.

Data from the [`placeOrder()`](../orders/place-order/introduction.md#eclientplaceorder-) function is returned via the [`openOrder()`](../order-management/open-orders.md#ewrapperopenorder-) and [`orderStatus()`](../order-management/order-status/introduction.md) callback functions.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python, and Visual Basic can be found in the /samples directory of the downloaded TWS API file.

The requested contract object is returned via the [`contractDetails()`](../contracts-financial-instruments/contract-details/receive-contract-details.md) callback function.
