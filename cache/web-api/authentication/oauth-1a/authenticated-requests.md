> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Standard Structure for Authenticated Requests

This is the culmination of the entire OAuth 1.0a / Diffie-Hellman handshake documented across the preceding five steps. Having derived and verified the **Live Session Token (LST)**, this function represents the **general-purpose authenticated request pattern** used to call IBKR's actual trading/portfolio API endpoints — in this example, `/portfolio/accounts`, though the function is written generically enough to serve any authenticated IBKR endpoint.

This marks a shift in signing methodology from every previous step: whereas the OAuth handshake steps (Request Token, Access Token, Live Session Token request) all signed requests using **RSA-SHA256** with the application's private key, **all authenticated API calls going forward use HMAC-SHA256, keyed by the Live Session Token**. This is the expected and correct behavior, and should be documented as the clear dividing line between the one-time handshake phase and the ongoing operational phase of the integration.

#### Prerequisites

| Requirement                         | Description                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **`live_session_token`**            | The verified LST from the previous derivation/verification steps                                               |
| **`access_token`**                  | The Access Token (`aToken`) obtained from `/oauth/access_token` or the Interactive Brokers Self Service Portal |
| **consumer_key**                    | Issued by IBKR upon API application registration                                                               |
| **realm**                           | For TESTCONS, use "test_realm". For all other consumer keys, use "limited_poa"                                 |
| **`method`, `endpoint`, `baseUrl`** | Caller-supplied values identifying the specific API call (e.g., `GET`, `/portfolio/accounts`)                  |
| **`query_params`, `content`**       | Optional caller-supplied query string parameters and JSON request body, respectively                           |

> **Generic function design:** Unlike the previous handshake steps, which were each dedicated to a single fixed endpoint, this function is parameterized by `method` and `endpoint`, making it the reusable core for **all** authenticated IBKR API traffic post-handshake. This should be documented as the primary, ongoing integration point that most consumers of this library will actually call — the handshake steps are a one-time (or infrequent) setup cost, while this function runs on every API interaction.

#### Construct the Request URL

```python
url = f'https://{baseUrl}{endpoint}'
```

Unlike the fixed OAuth endpoint URLs used in earlier steps, `endpoint` is caller-supplied, allowing this function to target any path on IBKR's API gateway (e.g., `/portfolio/accounts`, `/iserver/account/orders`, etc.).

#### Assemble OAuth Parameters

```python
oauth_params = {
    "oauth_consumer_key": consumer_key,
    "oauth_nonce": hex(random.getrandbits(128))[2:],
    "oauth_signature_method": "HMAC-SHA256",
    "oauth_timestamp": str(int(datetime.now().timestamp())),
    "oauth_token": access_token
}
```

**This parameter set is notably leaner than every prior step** — it omits `oauth_callback` and `oauth_verifier` (relevant only to the initial handshake) and, critically, declares `oauth_signature_method` as **`HMAC-SHA256`** rather than `RSA-SHA256`.

| Parameter                | Purpose                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oauth_consumer_key`     | Identifies the application, as in all prior steps                                                                                                         |
| `oauth_nonce`            | Freshly generated per request, as always                                                                                                                  |
| `oauth_signature_method` | **`HMAC-SHA256`** — signals the shift from asymmetric (RSA) to symmetric (HMAC) signing, now that both client and server share the LST as a common secret |
| `oauth_timestamp`        | Freshly generated per request                                                                                                                             |
| `oauth_token`            | The **Access Token**, not the Request Token — this identifies the authorized user session for this and all future API calls                               |

#### Build the Signature Base String

```python
params_string = "&".join([f"{k}={v}" for k, v in sorted(oauth_params.items())])
base_string = f"{method}&{quote_plus(url)}&{quote(params_string)}"
```

Follows the same structural pattern as the Request Token and Access Token steps: sorted `key=value` pairs joined with `&`, then combined into `METHOD&URL&PARAMS`, with the URL encoded via `quote_plus()` and the parameter string via `quote()`.

> **Query parameters excluded from signature base string:** Note that `query_params` (passed separately to the final `requests` call in Step 6) are **not** included in this signature base string. Per OAuth 1.0a's core specification, query string parameters that will be sent with the request are normally required to be included in the signature base string alongside the OAuth parameters.

#### Sign the Base String with HMAC-SHA256

```python
bytes_hmac_hash = HMAC.new(
    key=base64.b64decode(live_session_token),
    msg=base_string.encode("utf-8"),
    digestmod=SHA256
).digest()

b64_str_hmac_hash = base64.b64encode(bytes_hmac_hash).decode("utf-8")
oauth_params["oauth_signature"] = quote_plus(b64_str_hmac_hash)
```

The signature is computed as:

$\text{signature} = \text{HMAC-SHA256}(\text{key}=\text{base64\_decode}(\text{live\_session\_token}),\ \text{message}=\text{base\_string})$

| Parameter   | Value                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| `key`       | The raw bytes of the Live Session Token, obtained by Base64-decoding it |
| `msg`       | The UTF-8 encoded signature base string from Step 3                     |
| `digestmod` | `SHA256`                                                                |

The resulting digest is Base64-encoded, then percent-encoded (`quote_plus`) for safe inclusion in the `Authorization` header — consistent with every prior signing step in this series.

> **This is the moment the LST is actually put to use.** All prior documentation in this series has been building toward this single line: `live_session_token`, once decoded from Base64 back into raw bytes, becomes the **symmetric signing key** for every authenticated request.

#### Construct the Authorization Header

```python
oauth_params["realm"] = realm
oauth_header = "OAuth " + ", ".join([f'{k}="{v}"' for k, v in sorted(oauth_params.items())])
headers = {"Authorization": oauth_header}
headers["User-Agent"] = "python/3.12"
headers["Accept"] = "*/*"
headers["Connection"] = "keep-alive"
```

`realm` is added to `oauth_params` (and thus rendered quoted) only after signature computation.

**New headers introduced at this step:**

| Header                   | Purpose                                                                                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accept: */*`            | Signals acceptance of any response content type — reasonable default for a generic multi-endpoint function, though specific endpoints may benefit from a more precise `Accept: application/json` if IBKR's API is JSON-only |
| `Connection: keep-alive` | Requests persistent connection reuse — sensible given this function is likely called repeatedly against the same host during a session                                                                                      |

#### Execute the Request

```python
try:
    with s.request(method=method, url=url, headers=headers, params=query_params, json=content, stream=True) as req:
        if print_data == "y":
            print(pretty_request_response(req))
        if not req.ok:
            logger.error(f"Request to {url} failed: {req.status_code} - {req.text}")
            raise IBKRApiError(f"Request failed with status {req.status_code}: {req.text}")
        return req
except requests.exceptions.RequestException as e:
    logger.exception(f"Failed to submit request to {url}")
    raise IBKRApiError(f"Request submission failed: {e}") from e
```

This is the most operationally significant step, as it is executed on **every** authenticated API call rather than once during setup.