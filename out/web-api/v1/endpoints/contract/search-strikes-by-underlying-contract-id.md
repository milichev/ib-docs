[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/contract/search-strikes-by-underlying-contract-id)

# Search Strikes by Underlying Contract ID

Query to receive a list of potential strikes supported for a given underlying.

This endpoint will always return empty arrays unless [/iserver/secdef/search](search-contract-by-symbol.md) is called for the same underlying symbol beforehand. The inclusion of the name field with the [/iserver/secdef/search](search-contract-by-symbol.md) endpoint will prohibit the strikes endpoint from returning data. After retrieving your expected contract from the initial search, developers looking to create option chains should remove the name field from the request.

`GET /iserver/secdef/strikes`

#### Request Object

###### Query Parameters

**conid:** *String.* Required\
Contract Identifier number for the underlying

**sectype:** *String.* Required\
Security type of the derivatives you are looking for.\
Value Format: "OPT" or "WAR"

**month:** *String.* Required\
Expiration month and year for the given underlying\
Value Format: \{3 character month}\{2 character year}\
Example: AUG23

**exchange:** String. Optional\
Exchange from which derivatives should be retrieved from.\
Default value is set to SMART

#### Python

```python
request_url = f"{baseUrl}/iserver/secdef/strikes?conid=265598&sectype=OPT&month=JAN24&exchange=SMART"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/secdef/strikes?conid=265598&sectype=OPT&month=JAN24&exchange=SMART \
--request GET
```

Response Object

**call:** Array of Floats\
Array containing a series of comma separated float values representing potential call strikes for the instrument.

**put:** Array of Floats\
Array containing a series of comma separated float values representing potential put strikes for the instrument.

```
{
  "call":[
    185.0,
    190.0,
    195.0,
    200.0
  ],
  "put":[
    185.0,
    190.0,
    195.0,
    200.0
  ]
}
```
