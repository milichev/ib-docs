[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/third-party-oauth/request-token)

# Request Token

This guide documents the implementation of the Request Token step in an OAuth 1.0a flow customized for the Interactive Brokers (IBKR) Web API. Unlike standard OAuth 1.0a implementations that typically use HMAC-SHA1 for signing, this implementation uses **RSA-SHA256** asymmetric signing, which is required by IBKR's authentication model.

This is the first of three OAuth 1.0a steps in the IBKR flow:

1. Request Token (documented here)
2. Authorize Token (user consent, typically out-of-band)
3. Access Token / Live Session Token exchange

#### Prerequisites

Before implementing this flow, ensure you have:

| Requirement         | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| **Consumer Key**    | Issued by IBKR upon API application registration                                                     |
| **RSA Private Key** | Used to sign the OAuth base string (`signature_key`)                                                 |
| **Realm**           | For TESTCONS, use "test_realm". For all other consumer keys, use "limited_poa"                       |
| **Base URL**        | IBKR's API gateway hostname (`baseUrl`)                                                              |
| **Dependencies**    | `pycryptodome` (for `SHA256`, `PKCS1_v1_5_Signature`), `requests`, standard `base64`, `urllib.parse` |

#### Construct the Endpoint URL

The Request Token endpoint is always accessed via `POST` over HTTPS.

```python
url = f'https://api.ibkr.com/v1/api/oauth/request_token'
```

#### Assemble OAuth Parameters

```python
oauth_params = {
    "oauth_callback": "oob",
    "oauth_consumer_key": consumer_key,
    "oauth_nonce": hex(random.getrandbits(128))[2:],
    "oauth_signature_method": "RSA-SHA256",
    "oauth_timestamp": str(int(datetime.now().timestamp()))
}
```

| Parameter                | Purpose                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `oauth_callback`         | Set to literal string `"oob"` (out-of-band) — IBKR does not use redirect-based callbacks for this flow |
| `oauth_consumer_key`     | Your registered application's consumer key                                                             |
| `oauth_nonce`            | A unique, non-guessable value per request; generated here as a 128-bit random hex string               |
| `oauth_signature_method` | Must be `RSA-SHA256` — **this deviates from the OAuth 1.0a core spec's default of HMAC-SHA1**          |
| `oauth_timestamp`        | Unix epoch time (seconds), used by the server to reject stale requests                                 |

#### Build the Signature Base String

```python
params_string = "&".join([f"{k}={v}" for k, v in sorted(oauth_params.items())])
base_string = f"POST&{quote_plus(url)}&{quote(params_string)}"
```

The OAuth 1.0a signature base string follows the format:

```
HTTP_METHOD & percent_encoded(URL) & percent_encoded(sorted_parameter_string)
```

**Implementation details:**

1. Parameters are sorted alphabetically by key.
2. The parameter string is constructed as `key=value` pairs joined by `&` **before** encoding — note this is a raw concatenation, not URL-encoded key/value pairs individually.
3. The entire parameter string is then percent-encoded using `quote()`.
4. The URL is percent-encoded using `quote_plus()`.
5. The three components are joined with literal `&` characters.

Note regarding the NONCE value: Standard OAuth 1.0a specifies that each key and value should be individually percent-encoded *before* being joined, and that reserved characters use `%20`-style encoding (via `quote()`, not `quote_plus()`). This implementation encodes the URL with `quote_plus()` (which encodes spaces as `+`) and the joined parameter string with `quote()`. Confirm this matches IBKR's server-side expectations — inconsistent encoding is the most common source of signature validation failures. **Do not deviate from this pattern without testing against IBKR's endpoint**, as it has been validated against their implementation.

#### Sign the Base String with RSA-SHA256

```python
encoded_base_string = base_string.encode("utf-8")
sha256_hash = SHA256.new(data=encoded_base_string)
bytes_pkcs115_signature = PKCS1_v1_5_Signature.new(
    rsa_key=signature_key
).sign(msg_hash=sha256_hash)
b64_str_pkcs115_signature = base64.b64encode(bytes_pkcs115_signature).decode("utf-8")
```

**Process:**

1. Encode the base string to UTF-8 bytes.
2. Compute the SHA-256 digest.
3. Sign the digest using **PKCS#1 v1.5** padding with your RSA private key (`signature_key` — a `Crypto.PublicKey.RSA` key object).
4. Base64-encode the raw signature bytes into a transmittable string.

#### Finalize and Encode the Signature

```python
oauth_params["oauth_signature"] = quote_plus(b64_str_pkcs115_signature)
oauth_params["realm"] = realm
```

The Base64 signature is percent-encoded (`quote_plus`) before insertion into the OAuth parameter set, since it may contain characters (`+`, `/`, `=`) that are invalid in HTTP header values.

The `realm` parameter is added at this stage — it is **not** part of the signature base string but **is** included in the final `Authorization` header, per OAuth 1.0a convention for realm scoping.

#### Construct the Authorization Header

```python
oauth_header = "OAuth " + ", ".join([f'{k}="{v}"' for k, v in sorted(oauth_params.items())])
headers = {"authorization": oauth_header}
headers["User-Agent"] = "python/3.11"
```

The header follows the standard OAuth scheme format:

```
Authorization: OAuth key1="value1", key2="value2", ...
```

Parameters are sorted alphabetically (matching convention, though not strictly required at this stage since the signature was already computed).
**User-Agent Note:** IBKR's API gateway may enforce User-Agent validation. Update this value to reflect your actual runtime/client rather than hardcoding `"python/3.11"` for production deployments — pin it to your actual interpreter/environment version, or set a custom identifying string as permitted by IBKR's integration guidelines.

#### Execute the Request and retrieve the oauth_token response

```python
request_request = requests.post(url=url, headers=headers)
print(pretty_request_response(request_request))
if request_request.status_code == 200:
    rToken = request_request.json()["oauth_token"]
```

The request is sent with **no request body** — all authentication data lives in the `Authorization` header.
The returned Request Token should be stored for the next two steps, though it should be discarded after retrieving the Access Token.
