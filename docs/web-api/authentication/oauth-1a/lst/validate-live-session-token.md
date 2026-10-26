[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/lst/validate-live-session-token)

# Validate the Live Session Token

This step closes the loop on the Live Session Token derivation process, addressing the critical gap flagged in the prior documentation: **verifying that the locally computed LST matches IBKR's own computation** before it is trusted and put into use for signing future API requests.

This is a **mandatory security checkpoint**, not an optional integrity check. Only upon successful verification here does `computed_lst` become the authoritative `live_session_token` used for all subsequent authenticated API calls.

#### Prerequisites

| Input           | Source                   | Description                                                                                |
| --------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| `computed_lst`  | Previous derivation step | The locally computed, Base64-encoded Live Session Token                                    |
| `consumer_key`  | Application credentials  | Same consumer key used throughout the OAuth flow                                           |
| `lst_signature` | LST request response     | The signature IBKR returned alongside `dh_response` in the Live Session Token request step |

#### Compute the Verification Hash

This computes a second, independent HMAC-SHA1 operation — distinct in purpose from the HMAC used to *derive* the LST in the prior step:

$\text{verification\_hash} = \text{HMAC-SHA1}(\text{key}=\text{base64\_decode}(\text{computed\_lst}),\ \text{message}=\text{consumer\_key})$

| Parameter     | Value                                                                                                           | Note                                                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`         | The **raw bytes** of `computed_lst`, obtained by Base64-**decoding** the string produced in the derivation step | Note the directional inversion vs. the previous step: there, `K` was encoded *into* bytes; here, the LST string is decoded *back into* bytes to serve as an HMAC key |
| `msg`         | The application's `consumer_key`, UTF-8 encoded                                                                 | This is the same value used as `oauth_consumer_key` throughout the entire OAuth flow                                                                                 |
| `digestmod`   | `SHA1`                                                                                                          | Consistent with the SHA-1 usage established in the derivation step — **not** SHA-256                                                                                 |
| Output format | `.hexdigest()` — a **hex string**, not raw bytes or Base64                                                      | Differs from the derivation step's output encoding (Base64) — this must match the format IBKR uses for `lst_signature` for the comparison in Step 2 to be valid      |

> ⚠️ **Purpose distinction — do not confuse these two HMAC operations:**
>
> * **Derivation step (previous document):** HMAC keyed by the *DH shared secret* (`K`), over the *decrypted access token secret* (`prepend_bytes`) → produces the **LST itself**.
> * **This step:** HMAC keyed by the *computed LST*, over the *consumer key* → produces a **verification value** to confirm the LST derivation is correct.

#### Compare Against the Server-Provided Signature

If the locally computed hex digest matches `lst_signature` (returned by IBKR in the Live Session Token request response), the derivation is confirmed correct, and `computed_lst` is promoted to `live_session_token` — the value that should be used going forward for signing authenticated API requests.

> 🔒 **This comparison is the sole gate on trusting the derived LST.** A match cryptographically confirms that:
>
> 1. The Diffie-Hellman shared secret `K` was computed correctly by both parties.
> 2. The Access Token Secret was correctly decrypted (`prepend`/`prepend_bytes`).
> 3. All byte-encoding edge cases (odd-length hex, sign-bit padding) were handled identically to IBKR's server-side implementation.
>
> A mismatch means **any** of the above may have failed, and `computed_lst` **must not** be used for further requests.
