[source](https://www.interactivebrokers.com/docs/web-api/introduction)

# Introduction

Interactive Brokers (IBKR) RESTful Web API is designed to provide users with seamless, secure, and real-time access to their IBKR account. The Web API runs parallel to the IBKR hosted application, providing users with scalable, and efficient access to essential services. Our API is split into two key components:

#### [Account Management](/docs/web-api/account-management)

Provides solution for Introducing Brokers and Financial Advisors to preserve their current user experience and interface design while relying on IBKR's brokerage services. Advisors and brokers can integrate with the Account Management API to manage Client Registration, Client Account Maintenance, User Authentication, Funding, and Reporting.

#### [Trading](trading.md)

Our trading API is available to all IBKR clients free of cost and can be used to manage trades, view real-time portfolio information, access market data, view contract information, and authenticate for brokerage sessions.

### Connectivity

IBKR's Web API implementation follows standard HTTP verbs for communication. It employs a range of HTTP status codes and JSON-formatted messages to convey operation status and error information. To ensure secure communication, all API requests must use HTTPS. Authorization and Authentication for IBKR's Web API is managed using OAuth 2.0.

### Authentication

IBKR only supports **private_key_jwt** client authentication as described in [RFC 7521](https://www.rfc-editor.org/rfc/rfc7521.html) and [RFC 7523](https://www.rfc-editor.org/rfc/rfc7523.html).

* Client authenticates against the authorization server by presenting a signed JWT token called a *client_assertion* which the authorization server validates against the public key(s) provided by the client during registration.
* This scheme is considered safer than the standard client id/client secret authentication scheme used in early OAuth 2.0 integrations given that it prevents the client from having to pass the client secret in back-end requests.

### Data Transmission

User requests will be sent to IBKR in JSON format using HTTPS.
