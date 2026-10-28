[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/third-party-oauth/authorization-verifier-token)

# Authorization & Verifier Token

This is the second step in the IBKR OAuth 1.0a flow. Having obtained an unauthorized **Request Token** (`rToken`) in the previous step, the application must now direct the resource owner (the end user) to IBKR's authorization endpoint to grant access. Upon successful login and consent, IBKR issues an **`oauth_verifier`** — a value the application must capture and exchange, along with the Request Token, for an **Access Token** and **Live Session Token** in the final step.

#### Prerequisites

Before implementing this flow, ensure you have:

| Requirement                 | Description                                                                   |
| --------------------------- | ----------------------------------------------------------------------------- |
| **`rToken`**                | The unauthorized Request Token returned from `/oauth/request_token`           |
| **`redirect_uri`**          | The URI IBKR will associate with this authorization request                   |
| **User's IBKR credentials** | The end user must have valid IBKR login credentials to complete authorization |

#### Construct the Authorization URL

```python
url = f'https://interactivebrokers.com/authorize?oauth_token={rToken}&redirect_uri={redirect_uri}'
```

The authorization URL is built as a simple query-string GET request against IBKR's `/authorize` endpoint, containing:

| Query Parameter | Purpose                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| `oauth_token`   | The Request Token obtained in Step 1 of the flow — identifies which pending authorization request this corresponds to |
| `redirect_uri`  | The URI the user would be redirected to after authorization                                                           |

#### Direct the User to Authorize

In the reference implementation, the URL is presented via console output and the user manually navigates to it:

```python
verifier = input(f"Please log in to {url} and paste the 'oauth_verifier' value here: ")
```

**What happens in this step, end-to-end:**

1. The user opens `url` in a browser.
2. IBKR prompts the user to log in with their IBKR credentials.
3. IBKR displays a consent screen describing the access being requested by your application (identified via the Request Token / Consumer Key association).
4. Upon approval, IBKR generates an **`oauth_verifier`** value and displays it directly on the confirmation page.
5. An HTTP endpoint/webhook should be constructed to capture `oauth_verifier` as a query parameter automatically from the oauth_callback.

The verifier token should be retained until the Access Tokens are generated in the next step. At which point, the verifier token may be discarded.
