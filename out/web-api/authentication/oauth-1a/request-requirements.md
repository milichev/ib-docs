[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-1a/request-requirements)

# OAuth 1.0a Request Structure

Each authentication method has a slightly different requirement to send and receive authenticated requests.

## Base URL

`api.ibkr.com`

## Headers

OAuth 1.0a requests

| Header          | Requirement | Description                                                                                                                                                |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accept`        | Required    | Should be set to `"*/*"`                                                                                                                                   |
| `Authorization` | Required    | Should be set to `OAuth {oauth_header}`. See [OAuth 1.0a Authorization Header](request-requirements.md#headers) for details. |
| `Connection`    | Suggested   | Recommended to be set to `"keep-alive"` for best performance.                                                                                              |
| `Host`          | Required    | Should be set to `api.ibkr.com` for all requests.                                                                                                          |
| `User-Agent`    | Required    | May be set to any identifiable interface.                                                                                                                  |
