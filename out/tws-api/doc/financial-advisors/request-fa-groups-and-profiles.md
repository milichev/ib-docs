[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/request-fa-groups-and-profiles)

# Request FA Groups and Profiles

#### EClient.requestFA (

**faDataType:** int. The configuration to change. Set to 1 or 3 as defined in the table below.\
)

Requests the FA configuration as set in TWS for the given FA Group or Profile.

#### Java

```java
client.requestFA(1);
```

#### requestFA FA Data Types

| Type Code | Type Name       | Description                                                                                                          |
| --------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1         | Groups          | offer traders a way to create a group of accounts and apply a single allocation method to all accounts in the group. |
| 3         | Account Aliases | let you easily identify the accounts by meaningful names rather than account numbers.                                |
