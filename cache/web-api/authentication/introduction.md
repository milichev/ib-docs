> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

The Interactive Brokers Web API offers three unique ways to authenticate. These authentication methods are made available based upon client account type and need. The core Trading API functionality is available for all authentication types.

## Client Portal Gateway

The standard method of authenticating for authentication for the Web API. The Client Portal Gateway is a Java client that reverse-proxies authentication through SSO.

### Supported Account Types

* [Individual Accounts](https://www.interactivebrokers.com/en/accounts/individual.php#:~:text=Individual%2C%20Joint%2C%20IRA%20and%20Trust%20Account%20Structures)

### Getting Started

See our Quick Start guide for authenticating with the Client Portal Gateway
Our [WebAPI Basics Tutorial](https://www.interactivebrokers.com/campus/trading-course/ibkrs-client-portal-api/) provides a video format to help get started.

## OAuth 1.0a

OAuth 1.0a allows users to authenticate fully programmatically using a custom build of the OAuth 1.0a authentication scheme passing a Live Session Token build by hashing a set of private keys within request headers.
OAuth 1.0a is the only supported authentication method for Third Party Developers.

### Supported Account Types

* [Advisor Accounts](https://www.interactivebrokers.com/en/accounts/advisor.php)
* [Broker & FCM Accounts](https://www.interactivebrokers.com/en/accounts/broker.php)
* [Proprietary Trading Group Accounts](https://www.interactivebrokers.com/en/accounts/proprietary-trading-group.php)
* [Hedge and Mutual Fund Accounts](https://www.interactivebrokers.com/en/accounts/hedge-fund.php)
* [Institutional Hedge Fund Investors](https://www.interactivebrokers.com/en/accounts/hedge-fund-allocator.php)
* [Third Party Software Developers](https://www.interactivebrokers.com/docs/third-party-integrations/prospective-third-party-integrations)

### Getting Started

See our [OAuth 1.0a](/docs/web-api/authentication/oauth-1a/introduction) section for authenticating with the Client Portal Gateway

## OAuth 2.0

OAuth 2.0 allows users to authenticate fully programmatically using a modified OAuth 2.0 authentication scheme.
Account Management endpoints are only avialable through OAuth 2.0 for [Advisor](https://www.interactivebrokers.com/en/accounts/advisor.php) and [Broker](https://www.interactivebrokers.com/en/accounts/broker.php) account types.

### Supported Account Types

* [Advisor Accounts](https://www.interactivebrokers.com/en/accounts/advisor.php)
* [Broker & FCM Accounts](https://www.interactivebrokers.com/en/accounts/broker.php)
* [Proprietary Trading Group Accounts](https://www.interactivebrokers.com/en/accounts/proprietary-trading-group.php)
* [Hedge and Mutual Fund Accounts](https://www.interactivebrokers.com/en/accounts/hedge-fund.php)
* [Institutional Hedge Fund Investors](https://www.interactivebrokers.com/en/accounts/hedge-fund-allocator.php)