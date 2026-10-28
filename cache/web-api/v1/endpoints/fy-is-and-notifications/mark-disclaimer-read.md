> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Mark Disclaimer Read

Mark disclaimer message read.

`PUT /fyi/disclaimer/{typecode}`

#### Request Object

###### Path Params

**typecode:** String. Required\
Code used to signify a specific type of FYI template.\
See [Typecode](/docs/web-api/v1/endpoints/fy-is-and-notifications/fyi-typecodes) section for more details.

#### Python

```python
request_url = f"{baseUrl}/fyi/disclaimer/CT"
json_content = {}
requests.put(url=request_url, json=json_content
```

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/disclaimer/CT \
--request PUT \
--data ''
```

#### Response Object

**V:** int.\
Returns 1 to state message was acknowledged.

**T:** int.\
Returns the time in ms to complete the edit.

```
{
  "V": 1,
  "T": 10
}
```