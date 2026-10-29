[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/account-management-introduction/introduction)

# Introduction

Interactive Brokers (IBKR) Account Management API is available for Registered Advisors and Introducing Brokers that would like to customize IBKR's Registration System and Client Portal or control client experience.

### Client Registration

* Create New Account
* View Account Status
* View Registration Tasks
* Complete Registration Tasks

### Account Maintenance

* Update Account Information
* Manage Account Settings
* Manage Trade Capabilities
* Fee Administration

### Funds and Banking

* Cash Transfers
* Configure Recurring Transactions
* Manage Banking Instructions
* Position Transfers
* View Transactions

### Reporting

* Generate Client Statement(s)
* Retrieve Tax Form

### Authentication

* Connect user to IBKR white branded platform.

The Account Management API can be used in parallel or as a replacement to the IBKR Portal which is our out of the box solution available to registered advisors and introducing brokers free of cost.

## Audience

Service is available by request only to advisors/brokers that are registered in a FATF Country. See [Setup Process](setup-process.md) for instructions on how to get started.

## Connectivity

IBKR's Web API implementation follows standard HTTP verbs for communication. It employs a range of HTTP status codes and JSON-formatted messages to convey operation status and error information. To ensure secure communication, all API requests must use HTTPS. Authorization and Authentication for IBKR's Web API is managed using OAuth 2.0.

## Authentication

IBKR only supports **private_key_jwt** client authentication as described in [RFC 7521](https://www.rfc-editor.org/rfc/rfc7521.html) and [RFC 7523](https://www.rfc-editor.org/rfc/rfc7523.html).

* Client authenticates against the authorization server by presenting a signed JWT token called a *client_assertion* which the authorization server validates against the public key(s) provided by the client during registration.

* This scheme is considered safer than the standard client id/client secret authentication scheme used in early OAuth 2.0 integrations given that it prevents the client from having to pass the client secret in back-end requests.

## Data Transmission

User requests will be sent to IBKR in JSON format using HTTPS.

* `[POST]` and `[PATCH]` will include JSON request that is encoded in base64.
* Maximum request size is 20MB
* There is no restriction on maximum response size
* Only ASCII characters are supported
