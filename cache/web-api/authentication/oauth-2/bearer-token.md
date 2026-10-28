> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bearer Token

This guide documents the implementation of the Bearer Token step in an OAuth 2.0 flow customized for the Interactive Brokers (IBKR) Web API. This step exchanges the OAuth2 **access token** obtained in the previous step for a **gateway session token** (referred to in the response as `access_token`, but functionally an SSO session credential) at IBKR's `sso-sessions` endpoint. Like the Access Token step, authentication is conveyed via a **signed JWT client assertion** using **RSA-SHA256**, but the claim set, transport, and header structure differ meaningfully from the prior step.

This is the second of two OAuth 2.0 steps in the IBKR flow:

1. Access Token (prerequisite — produces the `access_token` used as the Bearer credential here)
2. Bearer Token / SSO Session establishment (documented here)

#### Prerequisites

Before implementing this flow, ensure you have:

| Requirement                       | Description                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Access Token**                  | The OAuth2 access token obtained from the Access Token step; used as the `Bearer` credential in the `Authorization` header           |
| **Client ID** (`clientId`)        | Issued by IBKR upon API application registration; used as `iss` in the JWT claims                                                    |
| **Client Key ID** (`clientKeyId`) | Identifies which registered public key should be used to verify the JWT signature; sent in the JWT header as `kid`                   |
| **RSA Private Key**               | Used to sign the JWT (`jwtPrivateKey`); the same key used in the Access Token step                                                   |
| **Credential**                    | The username of the account authenticating the session; included in the JWT claims                                                   |
| **Client IP Address**             | The requesting client's public IP; required as a claim. The reference implementation auto-detects this via a call to `api.ipify.org` |
| **Gateway Base URL**              | IBKR's API gateway host (`gatewayUrl`)                                                                                               |
| **Dependencies**                  | `pycryptodome` (for `RSA`, `SHA256`, `PKCS1_v1_5`), `requests`, standard `base64`, `json`, `time`, `math`                            |

#### Construct the Endpoint URL

The Bearer Token (SSO Session) endpoint is always accessed via `POST` over HTTPS.

```python
url = f'{gatewayUrl}/api/v1/sso-sessions'
```

#### Assemble the JWT Header and Claims

```python
now = math.floor(time.time())
header = {
    'alg': 'RS256',
    'typ': 'JWT',
    'kid': f'{clientKeyId}'
}
claims = {
    'ip': ip,
    'credential': f'{credential}',
    'iss': f'{clientId}',
    'exp': now + 86400,
    'iat': now
}
```

| Field        | Purpose                                                                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alg`        | Must be `RS256`, matching the Access Token step                                                                                                           |
| `typ`        | Standard JWT type header, always `"JWT"`                                                                                                                  |
| `kid`        | Identifies the registered public key (by `clientKeyId`) IBKR should use to verify the signature                                                           |
| `ip`         | The client's current public IP address; IBKR validates this against the originating request, so it must be accurate and current                           |
| `credential` | The username the session is being established for                                                                                                         |
| `iss`        | Set to your `clientId` — note there is **no `sub` or `aud` claim** in this step's assertion, unlike the Access Token step                                 |
| `exp`        | Expiry set to 24 hours (`now + 86400`) — this assertion authorizes a longer-lived session than the short-lived assertion used to request the Access Token |
| `iat`        | Issued-at, set to the current time with no backdating in this branch                                                                                      |

**Implementation note:** this claim set is produced by the same `compute_client_assertion()` helper documented in the Access Token step, branching on the target `url`. Confirm your implementation routes to the `{gatewayUrl}/api/v1/sso-sessions` branch, not the token endpoint branch, when building this assertion.

#### Base64URL-Encode the Header and Claims

```python
json_header = json.dumps(header, separators=(',', ':')).encode()
encoded_header = base64_encode(json_header)
json_claims = json.dumps(claims, separators=(',', ':')).encode()
encoded_claims = base64_encode(json_claims)
payload = f"{encoded_header}.{encoded_claims}"
```

This reuses the same `base64_encode()` helper and base64url encoding rules (strip padding, substitute `-`/`_`) as the Access Token step — see that guide for details. Consistency here matters: any deviation in JSON serialization or encoding between steps will produce a structurally valid but unverifiable JWS.

#### Sign the Payload with RSA-SHA256

```python
md = SHA256.new(payload.encode())
signer = PKCS1_v1_5.new(jwtPrivateKey)
signature = signer.sign(md)
encoded_signature = base64_encode(signature)
```

**Process:**

1. Encode the `payload` (`encoded_header.encoded_claims`) to UTF-8 bytes.
2. Compute the SHA-256 digest.
3. Sign the digest using **PKCS#1 v1.5** padding with the same RSA private key used throughout the flow.
4. Base64URL-encode the raw signature bytes.

#### Assemble the Client Assertion (JWS)

```python
assertion = payload + "." + encoded_signature
```

As in the Access Token step, this produces a complete compact JWS:

```
base64url(header) . base64url(claims) . base64url(signature)
```

Unlike the Access Token step, this assertion is **not** wrapped in a `client_assertion` form field — it is transmitted as the **raw request body**, as shown next.

#### Construct the Authorization Header and Request Body

```python
headers = {
    "Authorization": "Bearer " + access_token,
    "Content-Type": "application/jwt"
}
signed_request = assertion
```

| Field           | Purpose                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Authorization` | Set to `Bearer <access_token>` — the OAuth2 access token retrieved in the prior step, presented as a standard bearer credential                                               |
| `Content-Type`  | Set to `application/jwt`, **not** `application/x-www-form-urlencoded` — this endpoint expects the raw compact JWS as the entire request body, with no surrounding form fields |

**This differs structurally from the Access Token step**, which conveyed its assertion as one field within a form-encoded body and required no `Authorization` header at all. Here, both an `Authorization` header **and** a JWT body are required simultaneously — mixing bearer-token authentication with a signed-assertion payload.

#### Execute the Request and retrieve the session access_token

```python
bearer_request = requests.post(url=url, headers=headers, data=signed_request)
print(web_header_print(bearer_request))

if bearer_request.status_code == 200:
    return bearer_request.json()["access_token"]
return
```

The request body is the raw JWS string (`data=signed_request`), sent with `Content-Type: application/jwt`.
On success, the response JSON contains an `access_token` field — **do not confuse this with the OAuth2 access token from the previous step**; this value represents the established SSO gateway session and is the credential used for subsequent authenticated Client Portal / streaming requests (e.g. via `websocket`).
A non-200 response returns `None` in the reference implementation; production code should inspect the response body and status code for actionable error details rather than failing silently.