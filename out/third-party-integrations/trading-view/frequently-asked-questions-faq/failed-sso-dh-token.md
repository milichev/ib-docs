[home](../../../index.md) | [third-party-integrations](../../index.md) | [source](https://www.interactivebrokers.com/docs/third-party-integrations/trading-view/frequently-asked-questions-faq/failed-sso-dh-token)

# Receiving "Failed to generate sso dh token" on login

Receiving "Failed to generate sso dh token" during the login process is caused through indistinct Live and Paper trading user information.

To resolve this, the paper environment's password must be reset to a distinct value.

1. Log in to the Live environment on [Client Portal](https://interactivebrokers.com)
2. Select the Head & Shoulders icon in the top right corner and click "Settings"
3. Select "Paper Trading Account".
4. Click the "Reset Paper Trading Password" button and proceed through resetting your password.
   * **IMPORTANT:** This will only affect the Paper Trading environment. Your Live user password will remain unchanged.
5. Future attempts to log in to the Live or Paper trading environment will authenticate as expected.

![TradingView Login Failure](/docs/_fern-files/_img/7a04fb69c30da2adfdbc733f8d2e71e11bb7cfa43ad5abb44d331ea27179bf7b.webp)

Token failure for Trading View login
