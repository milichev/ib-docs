[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/mark-disclaimer-read)

# Mark Disclaimer Read

Mark disclaimer message read.

`PUT /fyi/disclaimer/{typecode}`

#### Request Object

###### Path Params

**typecode:** String. Required\
Code used to signify a specific type of FYI template.\
See [Typecode](fyi-typecodes.md) section for more details.

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
