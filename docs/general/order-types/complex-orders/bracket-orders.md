[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/bracket-orders)

# Bracket Orders

Bracket Orders are designed to help limit your loss and lock in a profit by "bracketing" an order with two opposite-side orders. A BUY order is bracketed by a high-side sell limit order and a low-side sell stop order. A SELL order is bracketed by a high-side buy stop order and a low side buy limit order. Note how bracket orders make use of the TWS API's Attaching Orders mechanism.

One key thing to keep in mind is to handle the order transmission accurately. Since a Bracket consists of three orders, there is always a risk that at least one of the orders gets filled before the entire bracket is sent. To avoid it, make use of the IBApi.Order.Transmit flag. When this flag is set to 'false', the TWS will receive the order but it will not send (transmit) it to the servers. In the example below, the first (parent) and second (takeProfit) orders will be send to the TWS but not transmitted to the servers. When the last child order (stopLoss) is sent however and given that its IBApi.Order.Transmit flag is set to true, the TWS will interpret this as a signal to transmit not only its parent order but also the rest of siblings, removing the risks of an accidental execution.

More on [Bracket Orders](https://www.interactivebrokers.com/en/index.php?f=583)

#### Generic

```generic
@staticmethod
def BracketOrder(parentOrderId:int, action:str, quantity:Decimal, 
                 limitPrice:float, takeProfitLimitPrice:float, 
                 stopLossPrice:float):

	#This will be our main or "parent" order
	parent = Order()
	parent.orderId = parentOrderId
	parent.action = action
	parent.orderType = "LMT"
	parent.totalQuantity = quantity
	parent.lmtPrice = limitPrice
	#The parent and children orders will need this attribute set to False to prevent accidental executions.
	#The LAST CHILD will have it set to True, 
	parent.transmit = False

	takeProfit = Order()
	takeProfit.orderId = parent.orderId + 1
	takeProfit.action = "SELL" if action == "BUY" else "BUY"
	takeProfit.orderType = "LMT"
	takeProfit.totalQuantity = quantity
	takeProfit.lmtPrice = takeProfitLimitPrice
	takeProfit.parentId = parentOrderId
	takeProfit.transmit = False

	stopLoss = Order()
	stopLoss.orderId = parent.orderId + 2
	stopLoss.action = "SELL" if action == "BUY" else "BUY"
	stopLoss.orderType = "STP"
	#Stop trigger price
	stopLoss.auxPrice = stopLossPrice
	stopLoss.totalQuantity = quantity
	stopLoss.parentId = parentOrderId
	#In this case, the low side order will be the last child being sent. Therefore, it needs to set this attribute to True 
	#to activate all its predecessors
	stopLoss.transmit = True

	bracketOrder = [parent, takeProfit, stopLoss]
	return bracketOrder

bracket = OrderSamples.BracketOrder(self.nextOrderId(), "BUY", 100, 30, 40, 20)
for o in bracket:
	self.placeOrder(o.orderId, ContractSamples.EuropeanStock(), o)
	self.nextOrderId()  # need to advance this we'll skip one extra oid, it's fine
```

#### Generic

```generic
public static List<Order> BracketOrder(int parentOrderId, string action, decimal quantity, double limitPrice, 
            double takeProfitLimitPrice, double stopLossPrice)
{
	//This will be our main or "parent" order
	Order parent = new Order();
	parent.OrderId = parentOrderId;
	parent.Action = action;
	parent.OrderType = "LMT";
	parent.TotalQuantity = quantity;
	parent.LmtPrice = limitPrice;
	//The parent and children orders will need this attribute set to false to prevent accidental executions.
	//The LAST CHILD will have it set to true, 
	parent.Transmit = false;
	Order takeProfit = new Order();
	takeProfit.OrderId = parent.OrderId + 1;
	takeProfit.Action = action.Equals("BUY") ? "SELL" : "BUY";
	takeProfit.OrderType = "LMT";
	takeProfit.TotalQuantity = quantity;
	takeProfit.LmtPrice = takeProfitLimitPrice;
	takeProfit.ParentId = parentOrderId;
	takeProfit.Transmit = false;
	Order stopLoss = new Order();
	stopLoss.OrderId = parent.OrderId + 2;
	stopLoss.Action = action.Equals("BUY") ? "SELL" : "BUY";
	stopLoss.OrderType = "STP";
	//Stop trigger price
	stopLoss.AuxPrice = stopLossPrice;
	stopLoss.TotalQuantity = quantity;
	stopLoss.ParentId = parentOrderId;
	//In this case, the low side order will be the last child being sent. Therefore, it needs to set this attribute to true 
	//to activate all its predecessors
	stopLoss.Transmit = true;
	List<Order> bracketOrder = new List<Order>();
	bracketOrder.Add(parent);
	bracketOrder.Add(takeProfit);
	bracketOrder.Add(stopLoss);
	return bracketOrder;
}

List<Order> bracket = OrderSamples.BracketOrder(nextOrderId++, "BUY", 100, 30, 40, 20);
foreach (Order o in bracket)
	client.placeOrder(o.OrderId, ContractSamples.EuropeanStock(), o);
```
