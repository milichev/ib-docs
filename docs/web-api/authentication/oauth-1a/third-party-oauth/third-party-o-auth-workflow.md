[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/third-party-oauth/third-party-o-auth-workflow)

# Third Party OAuth Workflow

Once approved for Third Party OAuth, developers must use the supplied certificates and consumer key to register, authorize, and generate an access token for a user before they are able to retrieve a live session token for  [Authenticated Requests With OAuth 1.0A](../introduction.md).

#### Generate a Request Token

Third Party OAuth users start the OAuth process with a request token from the /v1/api/oauth/request_token endpoint.

The Request Token will be used as a temporary authentication token used by an individual to authenticate with Interactive Brokers to authroize the third-party's consumer key with their user. After the Access Token step, the returned token will be discarded.

> **Warning**
>
> If you are a First Party OAuth users, do not follow this step. You will receive an error. For developers implementing First Party OAuth, proceed directly to Requesting the Live Session Token.

#### Authorize The Consumer Key

After retrieving our request token, we need to authorize the value against the Interactive Brokers server. This is done by directing users to [https://interactivebrokers.com/authorize?oauth\\\_token=\\\{REQUEST_TOKEN}](https://interactivebrokers.com/authorize?oauth\\_token=\\\{REQUEST_TOKEN}) where they will log in with their Interactive Brokers credentials.

After the user logs in, they will be redirected to a URL specified during consumer key creation, and there will be two query parameters in the URL:
oauth_token and oauth_verifier

oauth_token is the request token, and oauth_verifier is the verifier token required for the next step and should be captured for the following step.

An example of url after the user logs in `{CALLBACK_URL}?oauth_token=b9082d68cfef06b030de&oauth_verifier=0ffb93ab9aa0d2177cc2`.

Like the Request Token, the Verifier Token may be discarded after retrieving the Access Token.

#### Generate Access Tokens

After retrieving the Verifier Token, we make a request to the /v1/api/oauth/access_token endpoint.

`oauth_verifier` must be added to the authorization header, with the value being the verifier token retrieved from the previous step.

`oauth_token` must also be added to the authorization header, the value being the request token.

If the request succeeds, the response will contain two values: `oauth_token` and `oauth_token_secret`. The `oauth_token` in the response is the user's Access Token, and the `oauth_token_secret` will be used for the next step.

The Access Token values will be used for all requests moving forward as an identifier of the user's authorization of our consumer key. Meanwhile, the Access Token Secret is used to generate a Live Session Token, in the next step, to validate a session for the next 24 hours. The Access Token and Access Token Secret only needs to be generated once, unless deleted by the user. This may be cached and re-used for the lifetime of the connection between client and third-party.

#### Generate a Live Session Token

This is the final stage of authorizing your user for each session. In this step we must calculate a Diffie-Hellman challenge using the prime and generator in the Diffie-Hellman spec provided when registering your consumer key.

The live session token will allow the user to access their API, for trading or for portfolio access, over a 24 hour period. The creation of the Live Session Token does not establish a complete trading session, as that would be handled by Initializing the Brokerage Session.

#### Initialize the Brokerage Session

After generating a Live Session Token, users must initalize the session to begin retrieving market data, submitting orders, or analyzing account information. The parameters used for /v1/api/iserver/auth/ssodh/init will be used for all other trading api endpoints.
