[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/first-party-oauth/first-party-o-auth-workflow)

# First Party OAuth Workflow

#### Generate Access Tokens

Users may generate an Access Token and Access Token Secret through the Interactive Brokers Self-Serivce Portal. Portal access is only made available after a user registers following approval. See our [Registration Process](registration-process.md) for details on gaining access.

The Access Token and Access Token Secret should be saved by the user as they will be used to generate a live session token for use until access is manually revoked.

#### Generate a Live Session Token

This is the final stage of authorizing your user for each session. In this step we must calculate a Diffie-Hellman challenge using the prime and generator in the Diffie-Hellman spec provided when registering your consumer key.

The live session token will allow the user to access their API for trading or portfolio access over a 24 hour period. The creation of the Live Session Token does not establish a complete trading session, as that would be handled by [Initializing the Brokerage Session](first-party-o-auth-workflow.md).

#### Initialize the Brokerage Session

After generating a Live Session Token, users must initalize the session to begin retrieving market data, submitting orders, or analyzing account information. The parameters used for /v1/api/iserver/auth/ssodh/init will be used for all other trading api endpoints.
