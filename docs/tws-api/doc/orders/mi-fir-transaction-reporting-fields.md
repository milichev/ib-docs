[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/mi-fir-transaction-reporting-fields)

# MiFIR Transaction Reporting Fields

For EEA investment firms required to comply with MiFIR reporting, and who have opted in to Enriched and Delegated Transaction Reporting, we have added four new order attributes to the Order class, and several new presets to TWS and IB Gateway Global Configuration.

New order attributes include:

* **IBApi.Order.Mifid2DecisionMaker** – Used to send "investment decision within the firm" value (if IBApi.Order.Mifid2DecisionAlgo is not used).
* **IBApi.Order.Mifid2DecisionAlgo** – Used to send "investment decision within the firm" value (if IBApi.Order.Mifid2DecisionMaker is not used).
* **IBApi.Order.Mifid2ExecutionTrader** – Used to send "execution within the firm" value (if IBApi.Order.Mifid2ExecutionAlgo is not used).
* **IBApi.Order.Mifid2ExecutionAlgo** – Used to send "execution within the firm" value (if IBApi.Order.Mifid2ExecutionTrader is not used).

New TWS and IB Gateway Order Presets can be found in the Orders > MiFIR page of Global Configuration, and include TWS Decision-Maker Defaults, API Decision-Maker Defaults, and Executing Trader/Algo presets.

The following choices are available for the "investment decision within the firm" IBApi.Order.Mifid2DecisionMaker and IBApi.Order.Mifid2DecisionAlgo attributes:

1. This field does not need to be reported if you are:

   * Using the TWS API to transmit orders, AND
   * The investment decision is always made by the client, AND
   * None of these clients are an EEA investment firm with delegated reporting selected (the "delegated reporting firm").

   You can configure the preset to indicate this via TWS Global Configuration using the Orders > MiFIR page. In this scenario, the orders for the proprietary account will need to be placed via TWS.
2. If you are using the TWS API to transmit orders, and the investment decision is made by a person, or a group of people within a delegated reporting firm, with one person being the primary decision maker:
   * Your TWS API program can, on each order, transmit a decision maker's IB-assigned short code using the field IBApi.Order.Mifid2DecisionMaker. You can define persons who can be the decision-makers via IB Account Management. To obtain the short codes that IB assigned to those persons, please contact IB Client Services.
   * If your TWS API program is unable to transmit the above field, and the investment decision is either made by, or approved by, a single person who can be deemed to be the primary investment decision maker, you can pre-configure a default investment decision-maker that will be used for orders where the above fields are not present. You must define the investment decision-maker(s) in IB Account Management, and can then configure the default investment decision-maker in TWS Global Configuration using the Orders > MiFIR page.
3. If you are using the TWS API to transmit orders and the investment decision is made by an algorithm:
   * Your TWS API program can, on each order, transmit a decision maker's IB-assigned short code using the field IBApi.Order.Mifid2DecisionAlgo. You can define algorithms that can be the decision-makers via IB Account Management. To obtain the short codes that IB assigned to those persons, please contact IB Client Services.
   * If your TWS API program is unable to transmit the above field, and/or the investment decision is made by a single or primary decision-maker algorithm, you can pre-configure a default investment decision-maker algo that will be used for orders where the above field is not sent. You must define the investment decision-maker(s) in IB Account Management, and can then configure the default investment decision-maker in TWS Global Configuration using the Orders > MiFIR page.

     *NOTE: Only ONE investment decision-maker, either a primary person or algorithm, should be provided on an order, or selected as the default.*

The following choices are available for "execution within the firm" IBApi.Order.Mifid2ExecutionTrader and IBApi.Order.Mifid2ExecutionAlgo attributes:

1. No additional information is needed if you are using the TWS API to transmit orders entered in a third-party trading interface, and you are the trader responsible for execution within the firm.
2. If your TWS API program transmits orders to IB automatically without human intervention, please contact **IB Client Services** to register the program or programs with IB as an algo. Only the primary program or algo needs to be registered and identified. You can then configure the default in TWS Global Configuration using the Orders > MiFIR page.
3. Your TWS API program, on each order, can transmit the IB-assigned short code of the algo or person responsible for execution within the firm using the field IBApi.Order.Mifid2ExecutionAlgo (for the algorithm) or IBApi.Order.Mifid2ExecutionTrader (for the person).

For more information, or to obtain short codes for persons or algos defined in IB Account Management, please contact IB Client Services.

To find out more about the MiFIR transaction reporting obligations, see the [MiFIR Enriched and Delegated Transaction Reporting for EEA Investment Firms](https://ibkr.info/node/2975) knowledge base article.
