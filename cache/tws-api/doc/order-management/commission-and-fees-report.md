> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Commission And Fees Report

When an order is filled either fully or partially, the [IBApi.EWrapper.execDetails](/docs/tws-api/doc/order-management/execution-details) and IBApi.EWrapper.commissionReport events will deliver [IBApi.Execution](#exec-details) and IBApi.CommissionAndFeesReport objects. This allows to obtain the full picture of the order's execution and the resulting commissions.

* Advisors executing allocation orders will receive execution details and commissions for the allocation order itself. To receive allocation details and commissions for a specific subaccount [IBApi.EClient.reqExecutions](/docs/tws-api/doc/order-management/execution-details) can be used.

#### EWrapper.commissionReport (

**commissionAndFeesReport:** [CommissionAndFeesReport](/docs/tws-api/ref/commission-and-fees-report). Returns a commissions report object containing the fields execId, commission, currency, realizedPnl, yield, and yieldRedemptionDate.\
)

Provides the Commission Report of an Execution

#### Python

```python
def commissionAndFeesReport(self, commissionAndFeesReport: CommissionAndFeesReport):
    print("CommissionReport.", commissionAndFeesReport)
```

#### Java

```java
@Override
public void commissionAndFeesReport(CommissionAndFeesReport commissionAndFeesReport) {
     System.out.println(EWrapperMsgGenerator.commissionAndFeesReport(commissionAndFeesReport));
}
```

#### C++

```cpp
void TestCppClient::commissionAndFeesReport( const CommissionAndFeesReport& commissionAndFeesReport) {
    printf( "CommissionAndFeesReport. %s - %s %s RPNL %s\n", commissionAndFeesReport.execId.c_str(), Utils::doubleMaxString(commissionAndFeesReport.commission).c_str(), commissionAndFeesReport.currency.c_str(), Utils::doubleMaxString(commissionAndFeesReport.realizedPNL).c_str());
}
```

#### C\#

```csharp
public virtual void commissionAndFeesReport(CommissionAndFeesReport commissionAndFeesReport)
{
  Console.WriteLine("CommissionAndFeesReport. " + commissionAndFeesReport.ExecId + " - " + Util.DoubleMaxString(commissionAndFeesReport.Commission) + " " + commissionAndFeesReport.Currency + " RPNL " + Util.DoubleMaxString(commissionAndFeesReport.RealizedPNL));
}
```

#### VB.NET

```vbnet
Public Sub commissionAndFeesReport(commissionAndFeesReportAs IBApi.CommissionAndFeesReport) Implements IBApi.EWrapper.commissionAndFeesReport
  Console.WriteLine("CommissionAndFeesReport - CommissionAndFeesReport[" & Util.DoubleMaxString(commissionAndFeesReport.Commission) & " " & commissionAndFeesReport.Currency & "]")
End Sub
```