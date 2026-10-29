[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/flex-web-service/using-flex-web-service/retrieve-the-report)

# Retrieve the Report

Next, you'll make a GET request to the [/GetStatement endpoint](../../api-reference/get-statement.md), again passing your access token. However, the reference code obtained from the prior endpoint must now be passed for the `q` query parameter:

`https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?t={AccessToken}&q={ReferenceCode}&v=3`

Depending on the size of the request, you may need to wait longer between the [/SendRequest endpoint](../../api-reference/send-request.md) and [/GetStatement endpoint](../../api-reference/get-statement.md) calls for the full report to finish generating.

Note that a given Flex Query template can be used to generate multiple reports over time, each populated with data at the time of generation, so this ReferenceCode identifier is used to retrieve a specific instance, presumably the one generated immediately prior.

The returned values will be constructed using `"Content-Type": "text/plain;charset=UTF-8"`.
