> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Retrieve the Report

Next, you'll make a GET request to the [/GetStatement endpoint](/docs/web-api/api-reference/get-statement), again passing your access token. However, the reference code obtained from the prior endpoint must now be passed for the `q` query parameter:

`https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?t={AccessToken}&q={ReferenceCode}&v=3`

Depending on the size of the request, you may need to wait longer between the [/SendRequest endpoint](/docs/web-api/api-reference/send-request) and [/GetStatement endpoint](/docs/web-api/api-reference/get-statement) calls for the full report to finish generating.

Note that a given Flex Query template can be used to generate multiple reports over time, each populated with data at the time of generation, so this ReferenceCode identifier is used to retrieve a specific instance, presumably the one generated immediately prior.

The returned values will be constructed using `"Content-Type": "text/plain;charset=UTF-8"`.