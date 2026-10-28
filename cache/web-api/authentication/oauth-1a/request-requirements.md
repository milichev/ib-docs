> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# OAuth 1.0a Request Structure

Each authentication method has a slightly different requirement to send and receive authenticated requests.

## Base URL

`api.ibkr.com`

## Headers

OAuth 1.0a requests

| Header          | Requirement | Description                                                                                                                                                |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accept`        | Required    | Should be set to `"*/*"`                                                                                                                                   |
| `Authorization` | Required    | Should be set to `OAuth {oauth_header}`. See [OAuth 1.0a Authorization Header](/docs/web-api/authentication/oauth-1a/request-requirements#headers) for details. |
| `Connection`    | Suggested   | Recommended to be set to `"keep-alive"` for best performance.                                                                                              |
| `Host`          | Required    | Should be set to `api.ibkr.com` for all requests.                                                                                                          |
| `User-Agent`    | Required    | May be set to any identifiable interface.                                                                                                                  |