[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/watchlists/get-all-watchlists)

# Get All Watchlists

Retrieve a list of all available watchlists for the account.

`GET /iserver/watchlists`

#### Request Object:

###### Body Params

**SC:** String.\
Specify the scope of the request.\
Valid Values: USER_WATCHLIST

#### Python

```python
request_url = f"{baseUrl}/iserver/watchlist?SC=USER_WATCHLIST"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/watchlists?SC=USER_WATCHLIST \
--request GET
```

#### Response Object

**data:** Object.\
Contains all of the data about the watchlist.\
\{\
**scanners_only:** bool.\
Shows if the system is only displaying scanners.

**system_lists:** Array of Objects.\
Returns all IB-created watchlists.\
\[\{\
**is_open:** bool.\
Internal use only.

**read_only:** bool.\
Returns if the watchlist can be edited or not.

**name:** String.\
Returns the human-readable name of the watchlist.

**id:** String.\
Returns the code identifier of the watchlist.

**type:** String.\
Returns the watchlist type.\
Always returns "watchlist".\
}],

**show_scanners:** bool.\
Returns if scanners are shown.

**bulk_delete:** bool.\
Displays if the watchlists should be deleted.

**user_lists:** Array of Objects.\
Returns all of the available user-created lists.\
\[\{\
**is_open:** bool.\
Internal use only.

**read_only:** bool.\
Returns if the watchlist can be edited or not.

**name:** String.\
Returns the human-readable name of the watchlist.

**id:** String.\
Returns the code identifier of the watchlist.

**type:** String.\
Returns the watchlist type.\
Always returns "watchlist".\
}]\
},

**action:** String.\
Internal use only.\
Returns "content".

**MID:** String.\
Returns the number of times the endpoint was requested this session.\
}

```
{
  "data": {
    "scanners_only": false,
    "show_scanners": false,
    "bulk_delete": false,
    "user_lists": [
      {
        "is_open": false,
        "read_only": false,
        "name": "Test Watchlist",
        "modified": 1702581306241,
        "id": "1234",
        "type": "watchlist"
      }
    ]
  },
  "action": "content",
  "MID": "1"
}
```
