[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-2/access-token)

# Access Token

This guide documents the implementation of the Access Token step in an OAuth 2.0 flow customized for the Interactive Brokers (IBKR) Web API. Unlike standard OAuth 2.0 client credentials grants that transmit a static client secret, this implementation uses a **signed JWT client assertion** (per RFC 7523, the JWT Bearer grant extension), constructed as a compact JWS and signed with **RSA-SHA256**.

This is the first of two OAuth 2.0 steps in the IBKR flow:

1. Access Token (documented here)
2. Bearer Token / SSO Session establishment (exchanges the Access Token for a gateway session — a separate flow)

#### Prerequisites

Before implementing this flow, ensure you have:

| Requirement                       | Description                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Client ID** (`clientId`)        | Issued by IBKR upon API application registration; used as both `iss` and `sub` in the JWT claims                    |
| **Client Key ID** (`clientKeyId`) | Identifies which registered public key should be used to verify the JWT signature; sent in the JWT header as `kid`  |
| **RSA Private Key**               | Used to sign the JWT (`jwtPrivateKey`); loaded from a PEM file and imported via `Crypto.PublicKey.RSA.import_key()` |
| **Scope**                         | Space-delimited scope string requested for the access token (e.g. `sso-sessions.write`)                             |
| **OAuth2 Base URL**               | IBKR's OAuth2 token endpoint host (`oauth2Url`)                                                                     |
| **Audience**                      | Fixed literal path value `/token` — **not** the fully-qualified URL                                                 |
| **Dependencies**                  | `pycryptodome` (for `RSA`, `SHA256`, `PKCS1_v1_5`), `requests`, standard `base64`, `json`, `time`, `math`           |

#### Construct the Endpoint URL

The Access Token endpoint is always accessed via `POST` over HTTPS, using `application/x-www-form-urlencoded` content.

```python
url = f'{oauth2Url}/api/v1/token'
headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}
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
    'iss': f'{clientId}',
    'sub': f'{clientId}',
    'aud': f'{audience}',
    'exp': now + 20,
    'iat': now - 10
}
```

| Field         | Purpose                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alg`         | Must be `RS256` — the signing algorithm identifier expected by IBKR's JWT verifier                                                                                   |
| `typ`         | Standard JWT type header, always `"JWT"`                                                                                                                             |
| `kid`         | Identifies the registered public key (by `clientKeyId`) IBKR should use to verify the signature                                                                      |
| `iss` / `sub` | Both set to your `clientId` — IBKR requires the assertion to self-identify as both issuer and subject for this grant type                                            |
| `aud`         | The literal string `"/token"` — **note this is a path segment, not the full endpoint URL**; deviating from this value will cause signature/claim validation failures |
| `exp`         | Assertion expiry — deliberately short-lived (20 seconds from generation) since this JWT authenticates a single token request, not a session                          |
| `iat`         | Issued-at, backdated by 10 seconds to tolerate minor clock skew between client and IBKR's servers                                                                    |

**Implementation note:** `compute_client_assertion()` is a shared helper reused later for the Bearer Token step, where it builds a different claim set (`ip`, `credential`, `exp` of 24 hours) based on the target `url`. Only the branch matching `{oauth2Url}/api/v1/token` is relevant to this step.

#### Base64URL-Encode the Header and Claims

```python
def base64_encode(val):
    return base64.b64encode(val).decode().replace('+', '-').replace('/', '_').rstrip('=')

json_header = json.dumps(header, separators=(',', ':')).encode()
encoded_header = base64_encode(json_header)
json_claims = json.dumps(claims, separators=(',', ':')).encode()
encoded_claims = base64_encode(json_claims)
payload = f"{encoded_header}.{encoded_claims}"
```

**Implementation details:**

1. Both `header` and `claims` are serialized to compact JSON (no whitespace) before encoding, to ensure a deterministic byte representation.
2. Encoding uses **base64url** (per RFC 4648 §5), not standard base64 — `+` and `/` are substituted with `-` and `_`, and trailing `=` padding is stripped. This is required by the JWS compact serialization spec, and standard `base64.b64encode` output must be manually converted, as shown.
3. The header and claims segments are joined with a literal `.` to form the unsigned `payload`.

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
3. Sign the digest using **PKCS#1 v1.5** padding with your RSA private key (`jwtPrivateKey` — a `Crypto.PublicKey.RSA` key object).
4. Base64URL-encode the raw signature bytes using the same encoding helper as the header/claims — **not** standard base64.

#### Assemble the Client Assertion (JWS)

```python
assertion = payload + "." + encoded_signature
```

Concatenating `encoded_header`, `encoded_claims`, and `encoded_signature` with `.` separators produces the compact JWS serialization:

```
base64url(header) . base64url(claims) . base64url(signature)
```

This full string is the `client_assertion` value submitted in the token request. It is **self-contained and stateless** — no separate signing request or nonce exchange is required, unlike the OAuth 1.0a Request Token flow.

#### Construct the Token Request Body

```python
form_data = {
    'client_assertion_type': 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    'client_assertion': assertion,
    'grant_type': 'client_credentials',
    'scope': scope
}
```

| Field                   | Purpose                                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_assertion_type` | Fixed URN identifying the assertion as a JWT-bearer credential, per RFC 7523                                                                         |
| `client_assertion`      | The signed JWS produced in the previous step                                                                                                         |
| `grant_type`            | Fixed value `client_credentials` — IBKR issues the access token directly against the assertion, with no authorization code or user redirect involved |
| `scope`                 | Requested scope string (e.g. `sso-sessions.write`), constraining what the resulting access token may be used for                                     |

Unlike the OAuth 1.0a Request Token step, **no `Authorization` header is used** here — all credentials are conveyed via the signed assertion in the form body.

#### Execute the Request and retrieve the access_token

```python
token_request = requests.post(url=url, headers=headers, data=form_data)
print(web_header_print(token_request))

if token_request.status_code == 200:
    access_token = token_request.json()["access_token"]
```

The request is sent as a standard form-encoded `POST`; the signed assertion inside `form_data` carries all authentication material.
The returned `access_token` should be retained for the subsequent Bearer Token / SSO Session step — it is passed as a `Bearer` credential in that request's `Authorization` header and is **not** a long-lived credential; treat it as scoped to the immediate session-establishment exchange.
