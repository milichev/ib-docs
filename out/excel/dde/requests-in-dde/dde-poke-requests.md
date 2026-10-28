[source](https://www.interactivebrokers.com/docs/excel/dde/requests-in-dde/dde-poke-requests)

# DDE Poke Requests

For requests that contain at least one or more argument, the request must be made using the [Visual Basic DDEPoke Method Call](https://learn.microsoft.com/en-us/office/vba/api/excel.application.ddepoke).

The DDEPoke request method call will send Excel table values in binary format to the [DdeSocketBridge](../dde-socket-bridge/introduction.md).

The VBA code below is an example of how DDE Poke requests are sent from Excel to the DDE Socket Bridge. Please be aware that this function call uses the sendPoke function of the TwsDde Sample's "util.bas" file located at "C:\TWS API\samples\Excel\TwsDde\util.bas".

```
Sub sendPlaceOrder(server As String, cell As Range)

    ' get id
    Dim id As String
    Dim placeOrderStr As String
    Dim requestStr As String
    Dim i As Integer
    Dim columnsArray() As Variant
    Dim columnIndex As Integer

    With Worksheets(STR_SHEET_NAME)
        id = .Cells(cell.row, errorColumnIndex + 1).value
        If id = util.STR_EMPTY Then ' none exists yet -- is original placement as opposed to modify
            id = OrderFunctions.makeId(server)

            ' fill "id" column with id
            .Cells(cell.row, errorColumnIndex + 1).value = id
        End If
        
        
        ' fill "error" column with formula
        .Cells(cell.row, errorColumnIndex).Formula = util.composeLink(server, requestStr, id, util.STR_ERROR)

        
        ' send request
        util.sendPoke Worksheets(STR_SHEET_NAME), server, placeOrderStr, id, cell, startOfContractColumns, getContractColumns(), 0, idColumnIndex, orderBaseColumnsStart, orderBaseColumnsEnd, orderExtColumnsStart, orderExtColumnsEnd
        
        ' fill columns with formulas
        For i = 0 To UBound(columnsArray) - LBound(columnsArray)
            .Cells(cell.row, columnIndex + i).Formula = util.composeLink(server, requestStr, id, columnsArray(i))
        Next i
    End With

End Sub
```
