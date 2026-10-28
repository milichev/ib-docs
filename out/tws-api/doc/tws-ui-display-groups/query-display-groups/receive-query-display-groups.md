[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/query-display-groups/receive-query-display-groups)

# Receive Query Display Groups

#### EWrapper.displayGroupList (

**requestId:** Request identifier used to track data.

**groups:** String. Returns a list of integers representing visible Group ID separated by the "|" character, and sorted by most used group first.\
)

A one-time response to querying the display groups.

#### Java

```java
@Override
public void displayGroupList(int reqId, String groups) {
  System.out.println("Display Group List. ReqId: " + reqId + ", Groups: " + groups + "\n");
}
```
