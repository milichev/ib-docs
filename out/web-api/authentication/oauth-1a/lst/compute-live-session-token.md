[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/lst/compute-live-session-token)

# Compute the Live Session Token

This is the final computational step in the IBKR OAuth 1.0a / Diffie-Hellman handshake. Using the values gathered across the previous steps — the client's private DH exponent (`dh_random`), the server's public DH value (`dh_response`), and the decrypted Access Token Secret (`prepend`) — this step computes the **shared Diffie-Hellman secret** and uses it to derive the **Live Session Token (LST)** via HMAC-SHA1.

The resulting `computed_lst` is the credential that will be used to sign **all subsequent authenticated IBKR API requests**, replacing the RSA-signature-based authentication used in the OAuth handshake steps themselves.

> **Scope note:** This document covers only the LST *computation*. A critical follow-up step of **verifying `computed_lst` against the `lst_signature` value returned by IBKR** is handled in the next step of documentation.

#### Prerequisites

This step consumes the outputs of the previous Live Session Token *request* step:

| Input         | Source                                     | Description                                                   |
| ------------- | ------------------------------------------ | ------------------------------------------------------------- |
| `prepend`     | Decrypted Access Token Secret (hex string) | From Step 2 of the LST request document                       |
| `dh_random`   | Client's private DH exponent               | Generated locally in Step 1 of the LST request document       |
| `dh_response` | Server's public DH value (hex string)      | Returned by IBKR in the LST request response                  |
| `dh_prime`    | DH group prime                             | Same domain parameter used to generate the original challenge |

#### Convert the Prepend to Bytes

```python
prepend_bytes = bytes.fromhex(prepend)
```

The `prepend` value — the hex-string representation of the decrypted Access Token Secret — is converted back into raw bytes. This will serve as the **message** input to the HMAC computation in Step 5, not as key material at this stage.

#### Compute the Diffie-Hellman Shared Secret

```python
a = dh_random
B = int(dh_response, 16)
p = dh_prime
K = pow(B, a, p)
```

This completes the Diffie-Hellman key exchange begun in the LST request step:

$K = B^{a} \bmod p$

| Variable | Meaning                                                                                   |
| -------- | ----------------------------------------------------------------------------------------- |
| `a`      | The client's private DH exponent (`dh_random`) — kept secret, never transmitted           |
| `B`      | The server's public DH value, parsed from the hex string `dh_response` received from IBKR |
| `p`      | The shared DH prime (domain parameter)                                                    |
| `K`      | The resulting **shared secret integer**, known only to the client and IBKR                |

> **This is the cryptographic core of the exchange.** Because the client never transmits `dh_random` (`a`) and IBKR never transmits its private exponent, both sides can independently arrive at the same value `K` without it ever traversing the network — this is the standard Diffie-Hellman security property. `K` must be treated as top-secret material for the remainder of this process: never logged, and discarded from memory as soon as it is no longer needed for the HMAC computation below.

#### Convert the Shared Secret to a Byte String

```python
hex_str_K = hex(K)[2:]

if len(hex_str_K) % 2:
    print("adding leading 0 for even number of chars")
    hex_str_K = "0" + hex_str_K

hex_bytes_K = bytes.fromhex(hex_str_K)
```

Python's `hex()` function produces a variable-length hex string with the `0x` prefix stripped here via `[2:]`. Because `bytes.fromhex()` requires an even number of hex characters (each byte = 2 hex digits), an odd-length string is left-padded with a single `"0"` character before conversion.

#### Apply Sign-Bit Padding

```python
if len(bin(K)[2:]) % 8 == 0:
    hex_bytes_K = bytes(1) + hex_bytes_K
```

This step addresses a subtle but important cryptographic encoding concern: **big-integer sign representation**.

When `K`'s bit length is an exact multiple of 8 (i.e., it fills whole bytes with no leading zero bits), the most significant bit of the resulting byte string could be interpreted as a **sign bit** by systems that treat the byte string as a signed big-endian integer (e.g., certain BigInteger implementations in Java or elsewhere). To guarantee `K` is always unambiguously interpreted as a **positive/unsigned** value when converted to bytes, a leading null byte (`0x00`) is prepended whenever this edge case is detected.

> **Why this matters for interoperability:** This padding step exists specifically to ensure the byte representation of `K` produced here is **byte-for-byte identical** to what IBKR's server computes on their end (which may use a different language/library with different big-integer-to-bytes conventions, such as Java's `BigInteger.toByteArray()`, which always includes a sign bit). Any mismatch here — even a single stray or missing byte — will cause the subsequent HMAC computation to diverge silently, producing an LST that IBKR's server will reject. This is a common source of hard-to-diagnose cross-implementation bugs in DH exchanges and deserves explicit callout in public documentation.

#### Compute the HMAC-SHA1 Hash

```python
bytes_hmac_hash_K = HMAC.new(
    key=hex_bytes_K,
    msg=prepend_bytes,
    digestmod=SHA1,
).digest()
```

The Live Session Token is derived as an **HMAC-SHA1** computation:

$\text{LST} = \text{HMAC-SHA1}(\text{key}=K_{\text{bytes}}, \text{message}=\text{prepend\_bytes})$

| Parameter   | Value                                                               |
| ----------- | ------------------------------------------------------------------- |
| `key`       | The sign-bit-padded byte representation of the DH shared secret `K` |
| `msg`       | The decrypted Access Token Secret bytes (`prepend_bytes`)           |
| `digestmod` | `SHA1`                                                              |

> **SHA usage distinction:** This is notably the **only** point in the entire IBKR OAuth flow where **SHA-1** is used, in contrast to **SHA-256** used for all RSA signature operations in the Request Token, Access Token, and LST request steps.

#### Encode the Final Live Session Token

```python
computed_lst = base64.b64encode(bytes_hmac_hash_K).decode("utf-8")
```

The raw HMAC digest bytes are Base64-encoded into a string. This `computed_lst` value is the final **Live Session Token** — the credential used going forward to sign authenticated API requests against IBKR's trading endpoints (typically via `HMAC-SHA1` request signing, distinct from the `RSA-SHA256` signing used throughout the handshake itself).
