[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/third-party-oauth/access-tokens)

# Access Token & Access Token Secret

This is the third and final step of the initial OAuth 1.0a handshake with the Interactive Brokers API. Having obtained an authorized Request Token (rToken) and an oauth_verifier (vToken) from the user consent step, the application now exchanges these credentials for a permanent Access Token and Access Token Secret.

Structurally, this step closely mirrors the Request Token step (same signing method, same header construction pattern), with two key differences: the inclusion of oauth_token and oauth_verifier in the parameter set, and a response payload containing an additional secret component.

Note on terminology: In the IBKR OAuth model, the oauth_token_secret returned here is not used directly as a signing key for subsequent requests, unlike in standard OAuth 1.0a. IBKR requires a further Diffie-Hellman-based derivation to produce the Live Session Token, which is used for signing all subsequent authenticated API calls. This should be clarified in the docs for this step to prevent integrators from misusing aTokenSecret directly. This distinction is critical and should be flagged loudly for downstream implementers — treating aTokenSecret as an HMAC signing key (as in canonical OAuth 1.0a) will produce silent authentication failures against IBKR endpoints.

#### Prerequisites

Before this step can be executed, ensure you have:

| Requirement         | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| **`rToken`**        | The Request Token obtained from `/oauth/request_token`                         |
| **`vToken`**        | The `oauth_verifier` obtained after user authorization                         |
| **Consumer Key**    | Issued by IBKR upon API application registration                               |
| **RSA Private Key** | Used to sign the OAuth base string (`signature_key`)                           |
| **Realm**           | For TESTCONS, use "test_realm". For all other consumer keys, use "limited_poa" |

#### Construct the Endpoint URL

```python
url = f'https://api.ibkr.com/v1/api/oauth/access_token'
```

The Access Token endpoint follows the same host as the Request Token endpoint, differing only in path. As with the prior step, this is invoked via `POST`.

#### Assemble OAuth Parameters

```python
oauth_params = {
    "oauth_callback": "oob",
    "oauth_consumer_key": consumer_key,
    "oauth_nonce": hex(random.getrandbits(128))[2:],
    "oauth_signature_method": "RSA-SHA256",
    "oauth_timestamp": str(int(datetime.now().timestamp())),
    "oauth_token": rToken,
    "oauth_verifier": vToken,
}
```

This parameter set extends the Request Token step's set with two additional required fields:

| New Parameter    | Purpose                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `oauth_token`    | The previously issued Request Token — identifies which authorized session this exchange corresponds to                               |
| `oauth_verifier` | The verifier obtained from the user during the authorization step — proves the user actually granted consent for this specific token |

> **Nonce/timestamp warning:** A **new** nonce and timestamp are generated for this request, as required by the spec. Do not reuse values from the Request Token step — each signed request must carry its own unique nonce/timestamp pair, even within the same overall authorization flow.

#### Build the Signature Base String

```python
params_string = "&".join([f"{k}={v}" for k, v in sorted(oauth_params.items())])
base_string = f"POST&{quote_plus(url)}&{quote(params_string)}"
```

This follows the identical pattern established in the Request Token step:

1. Parameters sorted alphabetically by key.
2. Joined into a raw `key=value&key=value...` string.
3. URL encoded via `quote_plus()`, parameter string encoded via `quote()`.
4. Combined into the `METHOD&URL&PARAMS` base string format.

#### Sign the Base String with RSA-SHA256

```python
encoded_base_string = base_string.encode("utf-8")
sha256_hash = SHA256.new(data=encoded_base_string)
bytes_pkcs115_signature = PKCS1_v1_5_Signature.new(
    rsa_key=signature_key
).sign(msg_hash=sha256_hash)
b64_str_pkcs115_signature = base64.b64encode(bytes_pkcs115_signature).decode("utf-8")
```

Identical process to the Request Token step: SHA-256 digest of the base string, signed with PKCS#1 v1.5 padding using the application's RSA private key, then Base64-encoded for transport.

#### Finalize and Encode the Signature

```python
oauth_params["oauth_signature"] = quote_plus(b64_str_pkcs115_signature)
oauth_params["realm"] = realm
```

As before, the signature is percent-encoded prior to header insertion, and `realm` is appended for the `Authorization` header only — it remains excluded from the signature base string itself.

#### Construct the Authorization Header

```python
oauth_header = "OAuth " + ", ".join([f'{k}="{v}"' for k, v in sorted(oauth_params.items())])
headers = {"authorization": oauth_header}
headers["User-Agent"] = "python/3.11"
```

Identical construction pattern to the Request Token step. See prior documentation regarding the `User-Agent` hardcoding caveat — the same recommendation to parameterize this value for production applies here.

#### Execute the Request

```python
request_request = requests.post(url=url, headers=headers)
print(pretty_request_response(request_request))
```

As with the Request Token call, no request body is sent — all authentication material is carried in the `Authorization` header.

#### Parse the Access Token and Secret

```python
if request_request.status_code == 200:
    aToken = request_request.json()["oauth_token"]
    aTokenSecret = request_request.json()["oauth_token_secret"]
```

**Two credentials are returned on success:**

| Field                                 | Purpose                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `oauth_token` (`aToken`)              | The **Access Token** — used to authenticate all subsequent API requests on behalf of the authorized user                      |
| `oauth_token_secret` (`aTokenSecret`) | A secret component required as input to the **Live Session Token derivation** step (Diffie-Hellman exchange) — see note below |

> 🔒 **Critical security handling:** `aTokenSecret` must be treated as highly sensitive material. It should:
>
> * Never be logged, including in debug output (`pretty_request_response` should redact this field if response bodies are logged at any verbosity).
> * Never be persisted in plaintext at rest — encrypt if storage is required.
> * Be held only in memory for the duration needed to complete the Live Session Token derivation, if your architecture allows discarding it afterward.
