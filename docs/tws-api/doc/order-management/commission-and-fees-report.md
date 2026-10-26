[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/commission-and-fees-report)

# Commission And Fees Report

When an order is filled either fully or partially, the [IBApi.EWrapper.execDetails](execution-details/receive-execution-details.md) and IBApi.EWrapper.commissionReport events will deliver [IBApi.Execution](#exec-details) and IBApi.CommissionAndFeesReport objects. This allows to obtain the full picture of the order's execution and the resulting commissions.

* Advisors executing allocation orders will receive execution details and commissions for the allocation order itself. To receive allocation details and commissions for a specific subaccount [IBApi.EClient.reqExecutions](execution-details/request-execution-details.md) can be used.

#### EWrapper.commissionReport (

**commissionAndFeesReport:** [CommissionAndFeesReport](../../ref/commission-and-fees-report.md). Returns a commissions report object containing the fields execId, commission, currency, realizedPnl, yield, and yieldRedemptionDate.\
)

Provides the Commission Report of an Execution
