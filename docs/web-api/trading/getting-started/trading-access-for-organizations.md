[source](https://www.interactivebrokers.com/docs/web-api/trading/getting-started/trading-access-for-organizations)

# Trading Access for Organizations

Enterprise and Institutional clients have several methods of authorization and authentication at their disposal. All methods permit requests to be made directly to Interactive Brokers' infrastructure.

The list below outlines the general suitability of the available methods for various use-cases. For a more thorough discussion of these access methods, please contact our API Integrations team.

* OAuth2.0 (beta)
  * Supports first-party (accessing one's own accounts) and third-party (accessing the accounts of unaffiliated IB clients with their authorization) usage
  * Offers access to account management and trading features
* OAuth1.0a
  * Supports first-party (accessing one's own accounts) and third-party (accessing the accounts of unaffiliated IB clients with their authorization) usage
  * Offers access to trading features only
* SSO
  * Available to Financial Advisors and Introducing Brokers
  * Supports the development of alternative UIs specifically for clients under your management
  * Offers access to account management and trading features
