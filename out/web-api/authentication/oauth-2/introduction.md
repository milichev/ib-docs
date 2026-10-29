[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-2/introduction)

# Introduction

Interactive Brokers offers an OAuth 2.0 authentication procedure for licensed Organizations, Financial Advisors, and IBrokers. Beyond the initial authentication procedure, the OAuth implementation will behave the same as the standard [Client Portal Gateway](../introduction.md).

Authentication via tokens produced by our OAuth 2.0 workflow permits requests to be made directly to `https://api.ibkr.com`, without the need for any intermediary software such as the Client Portal Gateway.

OAuth 2.0 allows access to both our Trading and Account Management APIs based on the designated scope. Scope access is provided to select Financial Advisors and IBrokers during the [Registration Process](register.md)
