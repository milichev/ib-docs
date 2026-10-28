> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Get disclaimer for a certain kind of fyi

Receive additional disclaimers based on the specified typecode.

`GET /fyi/disclaimer/{typecode}`

#### Request Object

###### Path Params

**typecode:** String. Required\
Code used to signify a specific type of FYI template.\
See [FYI Typecodes](/docs/web-api/v1/endpoints/fy-is-and-notifications/fyi-typecodes) section for more details.

#### Python

```python
request_url = f"{baseUrl}/fyi/disclaimer/SM"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/disclaimer/SM\
--request GET
```

#### Response Object

**FC:** String.\
Returns the Typecode for the given disclaimer.

**DT:** String.\
Returns the Disclaimer message

```
{
  "FC": "SM",
  "DT": "This communication is provided for information purposes only and is not intended as a recommendation or a solicitation to buy, sell or hold any investment product. Customers are solely responsible for their own trading decisions."
}
```