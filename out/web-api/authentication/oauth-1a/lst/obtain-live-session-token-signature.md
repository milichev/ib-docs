[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/lst/obtain-live-session-token-signature)

# Retrieve Live Session Token Signature

This step is the most cryptographically involved stage of the IBKR OAuth flow. It combines a **Diffie-Hellman (DH) key exchange** with an OAuth 1.0a-style signed request to obtain the materials necessary to compute the **Live Session Token (LST)** — the key ultimately used to sign all subsequent authenticated IBKR API calls (replacing the Access Token Secret from the previous step).

This function does **not** compute the final Live Session Token itself. It performs the request/response exchange and returns the raw components (`dh_random`, `prepend`, `dh_response`, `lst_signature`, `lst_expiration`) required for that computation, which is documented in the next step.

#### Prerequisites

| Requirement                     | Description                                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **`access_token`**              | The Access Token (`aToken`) obtained from `/oauth/access_token` or the Interactive Brokers Self Service Portal                                |
| **`access_token_secret`**       | The Access Token Secret (`aTokenSecret`) obtained from the same step — used here in encrypted form                                            |
| **`encryption_key`**            | Your RSA **private encryption key** — distinct from `signature_key`; used to decrypt the access token secret                                  |
| **`signature_key`**             | Your RSA **private signing key** — same key used in prior steps of the Third Party OAuth workflow, used to sign this request's base string    |
| **`dh_generator` / `dh_prime`** | Diffie-Hellman domain parameters. IBKR fixes the generator at `2`; the prime is IBKR-specified and must match their server-side value exactly |
| **Consumer Key**                | Issued by IBKR upon API application registration                                                                                              |
| **Realm**                       | For TESTCONS, use "test_realm". For all other consumer keys, use "limited_poa"                                                                |

#### Generate the Diffie-Hellman Challenge

```python
dh_random = random.getrandbits(256)
dh_challenge = hex(pow(base=dh_generator, exp=dh_random, mod=dh_prime))[2:]
```

This computes the client's half of a standard Diffie-Hellman key exchange:

$\text{dh\_challenge} = generator^{\text{dh\_random}} \bmod \text{dh\_prime}$

| Value          | Description                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `dh_random`    | A locally generated, secret 256-bit random integer — the client's DH private value. **Must never be transmitted or logged.** |
| `dh_generator` | Fixed at `2` per IBKR's specification                                                                                        |
| `dh_prime`     | A large prime shared with/specified by IBKR, defining the DH group                                                           |
| `dh_challenge` | The client's public DH value, sent to IBKR in this request. Hex-encoded with the `0x` prefix stripped (`[2:]`) for transport |

> **Critical secret material:** `dh_random` is returned by this function and must be retained (in memory, or securely if persisted) — it is required as an input to compute the final Live Session Token from IBKR's `dh_response` in the next step.

#### Decrypt the Access Token Secret to Produce the Base String Prepend

```python
bytes_decrypted_secret = PKCS1_v1_5_Cipher.new(
    key=encryption_key
).decrypt(
    ciphertext=base64.b64decode(access_token_secret),
    sentinel=None,
)
prepend = bytes_decrypted_secret.hex()
base_string = prepend
```

This is a step unique to the IBKR OAuth model and has no equivalent in the prior Request Token / Access Token steps.

**Process:**

1. Base64-decode `access_token_secret` (received as a string from the Access Token response) into raw ciphertext bytes.
2. Decrypt using **PKCS#1 v1.5** encryption padding (note: encryption/decryption padding, distinct from the PKCS#1 v1.5 *signature* padding used elsewhere) with the private `encryption_key`.
3. Convert the resulting decrypted bytes to a hex string — this becomes the `prepend`.
4. The `prepend` is placed at the very beginning of what will become the signature base string — **before** the standard `METHOD&URL&PARAMS` structure.

#### Construct the Signature Base String

```python
method = 'POST'
url = f'https://{baseUrl}/oauth/live_session_token'
oauth_params = {
    "oauth_consumer_key": consumer_key,
    "oauth_nonce": hex(random.getrandbits(128))[2:],
    "oauth_timestamp": str(int(datetime.now().timestamp())),
    "oauth_token": access_token,
    "oauth_signature_method": "RSA-SHA256",
    "diffie_hellman_challenge": dh_challenge,
}

params_string = "&".join([f"{k}={v}" for k, v in sorted(oauth_params.items())])
base_string += f"{method}&{quote_plus(url)}&{quote_plus(params_string)}"
```

**Parameter set for this request:**

| Parameter                  | Purpose                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `oauth_consumer_key`       | Same as prior steps                                                                                                               |
| `oauth_nonce`              | Freshly generated per request — do not reuse from earlier steps                                                                   |
| `oauth_timestamp`          | Freshly generated per request                                                                                                     |
| `oauth_token`              | The **Access Token** (`aToken`) obtained in the previous step — note this differs from the Request Token used earlier in the flow |
| `oauth_signature_method`   | `RSA-SHA256`, consistent with the rest of the flow                                                                                |
| `diffie_hellman_challenge` | The DH public value computed in Step 1 — this is IBKR-specific and **not** a standard OAuth 1.0a parameter                        |

This is the most important structural distinction in this entire flow: the signature base string is **prefixed with the hex-encoded decrypted secret (`prepend`)** before the standard `METHOD&URL&PARAMS` string is appended. This prepend is **not URL-encoded** and is **not** separated from the rest of the base string by an `&` — it is direct string concatenation.

#### Sign the Base String with RSA-SHA256

```python
encoded_base_string = base_string.encode("utf-8")
sha256_hash = SHA256.new(data=encoded_base_string)
bytes_pkcs115_signature = PKCS1_v1_5_Signature.new(
    rsa_key=signature_key
).sign(msg_hash=sha256_hash)
b64_str_pkcs115_signature = base64.b64encode(bytes_pkcs115_signature).decode("utf-8")
oauth_params['oauth_signature'] = quote_plus(b64_str_pkcs115_signature)
```

**Process:**

1. Encode the base string to UTF-8 bytes.
2. Compute the SHA-256 digest.
3. Sign the digest using **PKCS#1 v1.5** padding with your RSA private key (`signature_key` — a `Crypto.PublicKey.RSA` key object).
4. Base64-encode the raw signature bytes into a transmittable string.

#### Construct the Authorization Header

```python
oauth_header = f"OAuth realm={realm}, " + ", ".join([f'{k}="{v}"' for k, v in sorted(oauth_params.items())])
headers = {"Authorization": oauth_header}
headers["User-Agent"] = "python/3.11"
```

The header follows the standard OAuth scheme format:

```
Authorization: OAuth key1="value1", key2="value2", ...
```

Parameters are sorted alphabetically (matching convention, though not strictly required at this stage since the signature was already computed).
**User-Agent Note:** IBKR's API gateway may enforce User-Agent validation. Update this value to reflect your actual runtime/client rather than hardcoding `"python/3.11"` for production deployments — pin it to your actual interpreter/environment version, or set a custom identifying string as permitted by IBKR's integration guidelines.

#### Execute the Request

```python
lst_request = requests.post(url=url, headers=headers)
print(pretty_request_response(lst_request))
```

This is a header-only `POST` with no request body.

#### Parse the Response

```python
response_data = lst_request.json()
dh_response = response_data["diffie_hellman_response"]
lst_signature = response_data["live_session_token_signature"]
lst_expiration = response_data["live_session_token_expiration"]

return dh_random, prepend, dh_response, lst_signature, lst_expiration
```

**Response fields:**

| Field                           | Purpose                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `diffie_hellman_response`       | IBKR's public DH value — the server's half of the key exchange, needed to compute the shared secret                             |
| `live_session_token_signature`  | A signature IBKR provides so the client can **verify the integrity/authenticity of the derived LST** before trusting it         |
| `live_session_token_expiration` | Expiration timestamp for the resulting Live Session Token — should be tracked so the application knows when to re-run this flow |

The next stage in computing the Live Session Token will require the following details from the Live Session Token Signature request:

* `dh_random` — client's private DH exponent (Step 1)
* `prepend` — decrypted secret hex string (Step 2)
* `dh_response` — server's public DH value (this step)
* `lst_signature` — for verifying the computed LST
* `lst_expiration` — for session lifecycle management
