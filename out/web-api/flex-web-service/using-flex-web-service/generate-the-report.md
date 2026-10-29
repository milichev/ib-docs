[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/flex-web-service/using-flex-web-service/generate-the-report)

# Generate a Report

To begin, you'll make a GET request to the [/SendRequest endpoint](../../api-reference/send-request.md), passing your access token and the desired Flex Query template's query ID as query parameters:

`https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?t={CurrentToken}&q={QueryID}&v=3`

**IMPORTANT:** The [/SendRequest endpoint](../../api-reference/send-request.md) maintains a pacing limitation of 1 request per second. A maximum of 10 requests per minute may be submitted.

```
requestBase = "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService"
token = 528191644107458877539776
queryId = 800969
flex_version = 3

## Optional values:
# period = "5"             # This would retrieve 5 days of data.
# fromDate = "20260801"    # Starting date of the request range
# toDate = "20260807"      # Ending date of the request range
```

By default, the predefined date range within Client Portal will be used for the request. However, the `q` parameter may be declared to retrieve data prior to today, or `fd` and `td` may be requested to request a specific date range.

```
send_path = "/SendRequest"
send_params = {
    "t":token, 
    "q":queryId, 
    "v":flex_version

    # "p": period             # Period cannot be used with date range.

    # "fd": fromDate,         # Must be submitted with `td`.
    # "td": toDate            # Must be submitted with `fd`.
}

flexReq = requests.get(url=requestBase+send_slug, params=send_params)
```

Successful requests will return `<Status>Success</Status>` alongside a `<ReferenceCode>` used to identify the generated report in our following request. The `<url>` returned in the response body should be ignored.

Failed requests will return `<Status>Fail</Status>` along with an `<ErrorMessage>` value defining the reason for the failure.
