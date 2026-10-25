[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/query-display-groups/introduction)

# Introduction

The IBApi.EClient.queryDisplayGroups method is used to request all available Display Groups in TWS. The IBApi.EWrapper.displayGroupList is a one-time response to IBApi.EClient.queryDisplayGroups.

It returns a list of integers representing visible Group ID separated by the "|" character, and sorted by most used group first. This list will not change during TWS session. In other words, user cannot add a new group, but only the sorting of the group numbers can change.

Example: "4|1|2|5|3|6|7"
