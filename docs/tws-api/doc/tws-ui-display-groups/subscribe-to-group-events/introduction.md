[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/subscribe-to-group-events/introduction)

# Introduction

To integrate with a specific Group, you need to first subscribe to the group number by invoking IBApi.EClient.subscribeToGroupEvents. The IBApi.EWrapper.displayGroupUpdated call back is triggered once after receiving the subscription request, and will be sent again if the selected contract in the subscribed display group has changed.
