[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/market-data/unsubscribe-single)

# Unsubscribe (Single)

Cancel market data for given conid.

#### Abap

```abap
POST /iserver/marketdata/unsubscribe
```

#### Python

```python
request_url = f"{baseUrl}/iserver/marketdata/unsubscribe" 
json_content ={
  "conid":265598 
}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/marketdata/unsubscribe \ 
--request POST
--data '{
  "conid":265598
}'
```

#### Response Object

**success:** bool.\
Returns a confirmation status of your unsubscribe request. A true response indicates that the market data feed has been successfully cancelled.

```
{
  "success": true
}
```

#### Eror Response Object

A status 500 response will be sent when attempting to unsubscribe from a market data feed that is not currently open.

**error:** String.\
Returns an error response with message unknown indicating that the user does not have an existing data feed for the given conid.

```
{
  "error": "unknown"
}
```
