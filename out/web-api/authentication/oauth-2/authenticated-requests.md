[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-2/authenticated-requests)

# Initialize Brokerage Session

This guide documentshow to make **authenticated requests** to IBKR's Client Portal API once a Bearer session token has been established. Unlike the preceding OAuth2 steps, this is not a token-issuance exchange; it is the pattern used for all subsequent authenticated API calls. It is demonstrated here against the `/iserver/auth/ssodh/init` endpoint, which activates (initializes) the brokerage session required before trading or account-data endpoints become usable.

This is the final step in the IBKR OAuth2 authentication flow, following:

1. Access Token
2. Bearer Token / SSO Session
3. Initialize Brokerage Session (authenticated request, documented here)

#### Prerequisites

Before implementing this flow, ensure you have:

| Requirement                | Description                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Bearer Token**           | The session token (`bearerToken`) obtained from the Bearer Token / SSO Session step; presented as a standard `Bearer` credential |
| **Client Portal Base URL** | IBKR's Client Portal API host (`clientPortalUrl`)                                                                                |

#### Construct the Endpoint URL

Authenticated Client Portal endpoints are accessed over HTTPS, using whichever HTTP method the target endpoint requires. `/iserver/auth/ssodh/init` specifically requires `POST`.

```python
request_url = "https://api.ibkr.com/v1/api/iserver/auth/ssodh/init"
```

#### Assemble Standard Headers

```python
req_headers = {
    "Host": "api.ibkr.com",
    "User-Agent": "python/3.x",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Authorization": f"Bearer {bearer_token}",
    "Content-Type": "application/json"
}
```

| Header          | Purpose                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`          | Explicitly pinned to `api.ibkr.com`; redundant with the URL's host but set defensively, since it is also applied as a session-level default                                 |
| `User-Agent`    | Identifies the calling client; **update this to your actual runtime/environment** rather than hardcoding a placeholder value, consistent with IBKR's integration guidelines |
| `Accept`        | Set to `*/*`, accepting any response content type IBKR returns                                                                                                              |
| `Connection`    | Set to `keep-alive` to reuse the underlying TCP connection across sequential authenticated calls, in conjunction with the persistent `session` object                       |
| `Authorization` | Set to `Bearer <bearer_token>` — the SSO session token obtained from the Bearer Token step, **not** the OAuth2 access token from the earlier step                           |

#### Construct the Request Body

```python
req_content = {"compete": True, "publish": True}
```

| Field     | Purpose                                                                                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compete` | When `true`, instructs IBKR to take over (compete for) the brokerage session even if another session is already active for the account, rather than failing the initialization   |
| `publish` | When `true`, instructs IBKR to publish session status updates, which downstream consumers (e.g. a streaming `websocket` connection) can subscribe to. This *must* be set to true |

#### Execute the Request

```python
endpoint = "/iserver/auth/ssodh/init"
req_content = {"compete": True, "publish": True}

requests.post(url=endpoint, headers=req_headers, json=req_content)

```
