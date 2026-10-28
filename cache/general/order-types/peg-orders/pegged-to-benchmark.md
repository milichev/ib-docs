> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Pegged to Benchmark

The Pegged to Benchmark order is similar to the Pegged to Stock order for options, except that the Pegged to Benchmark allows you to specify any asset type as the reference (benchmark) contract for a stock or option order. Both the primary and reference contracts must use the same currency.

Products: STK, OPT

More on [Pegged to Benchmark Orders](https://www.interactivebrokers.com/en/index.php?f=7100)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=pegbench)

#### Python

```python
order = Order()
order.orderType = "PEG BENCH"
#BUY or SELL
order.action = action
order.totalQuantity = quantity
#Beginning with price...
order.startingPrice = startingPrice
#increase/decrease price..
order.isPeggedChangeAmountDecrease = peggedChangeAmountDecrease
#by... (and likewise for price moving in opposite direction)
order.peggedChangeAmount = peggedChangeAmount
#whenever there is a price change of...
order.referenceChangeAmount = referenceChangeAmount
#in the reference contract...
order.referenceContractId = referenceConId
#being traded at...
order.referenceExchange = referenceExchange
#starting reference price is...
order.stockRefPrice = stockReferencePrice
#Keep order active as long as reference contract trades between...
order.stockRangeLower = referenceContractLowerRange
#and...
order.stockRangeUpper = referenceContractUpperRange
```

#### Generic

```generic
Order order = new Order();
order.orderType("PEG BENCH");
//BUY or SELL
order.action(action);
order.totalQuantity(quantity);
//Beginning with price...
order.startingPrice(startingPrice);
//increase/decrease price...
order.isPeggedChangeAmountDecrease(peggedChangeAmountDecrease);
//by... (and likewise for price moving in opposite direction)
order.peggedChangeAmount(peggedChangeAmount);
//whenever there is a price change of...
order.referenceChangeAmount(referenceChangeAmount);
//in the reference contract...
order.referenceContractId(referenceConId);
//being traded at...
order.referenceExchangeId(referenceExchange);
//starting reference price is...
order.stockRefPrice(stockReferencePrice);
//Keep order active as long as reference contract trades between...
order.stockRangeLower(referenceContractLowerRange);
//and...
order.stockRangeUpper(referenceContractUpperRange);
```

#### C++

```cpp
Order order = new Order();
order.orderType("PEG BENCH");
//BUY or SELL
order.action(action);
order.totalQuantity(quantity);
//Beginning with price...
order.startingPrice(startingPrice);
//increase/decrease price...
order.isPeggedChangeAmountDecrease(peggedChangeAmountDecrease);
//by... (and likewise for price moving in opposite direction)
order.peggedChangeAmount(peggedChangeAmount);
//whenever there is a price change of...
order.referenceChangeAmount(referenceChangeAmount);
//in the reference contract...
order.referenceContractId(referenceConId);
//being traded at...
order.referenceExchangeId(referenceExchange);
//starting reference price is...
order.stockRefPrice(stockReferencePrice);
//Keep order active as long as reference contract trades between...
order.stockRangeLower(referenceContractLowerRange);
//and...
order.stockRangeUpper(referenceContractUpperRange);
```

#### Generic

```generic
Order order = new Order();
order.OrderType = "PEG BENCH";
//BUY or SELL
order.Action = action;
order.TotalQuantity = quantity;
//Beginning with price...
order.StartingPrice = startingPrice;
//increase/decrease price..
order.IsPeggedChangeAmountDecrease = peggedChangeAmountDecrease;
//by... (and likewise for price moving in opposite direction)
order.PeggedChangeAmount = peggedChangeAmount;
//whenever there is a price change of...
order.ReferenceChangeAmount = referenceChangeAmount;
//in the reference contract...
order.ReferenceContractId = referenceConId;
//being traded at...
order.ReferenceExchange = referenceExchange;
//starting reference price is...
order.StockRefPrice = stockReferencePrice;
//Keep order active as long as reference contract trades between...
order.StockRangeLower = referenceContractLowerRange;
//and...
order.StockRangeUpper = referenceContractUpperRange;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.OrderType = "PEG BENCH"
'BUY Or SELL
order.Action = action
order.TotalQuantity = quantity
'Beginning with price...
order.StartingPrice = startingPrice
'increase/decrease price..
order.IsPeggedChangeAmountDecrease = peggedChangeAmountDecrease
'by... (And likewise for price moving in opposite direction)
order.PeggedChangeAmount = peggedChangeAmount
'whenever there Is a price change of...
order.ReferenceChangeAmount = referenceChangeAmount
'in the reference contract...
order.ReferenceContractId = referenceConId
'being traded at...
order.ReferenceExchange = referenceExchange
'starting reference price Is...
order.StockRefPrice = stockReferencePrice
'Keep order active as long as reference contract trades between...
order.StockRangeLower = referenceContractLowerRange
'And...
order.StockRangeUpper = referenceContractUpperRange
```