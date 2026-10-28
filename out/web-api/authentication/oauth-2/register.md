[source](https://www.interactivebrokers.com/docs/web-api/authentication/oauth-2/register)

# OAuth 2.0 Registration Process

Interactive Brokers offers an OAuth 2.0 authentication procedure for licensed Organizations, Financial Advisors, and IBrokers. Interested institutions should contact [api-solutions@interactivebrokers.com](mailto:api-solutions@interactivebrokers.com) for registration guidance.

**OAuth 2.0 is not available to Individual account structures**.

### OAuth 2.0 public key requirement

Once approved for OAuth 2.0 access, the initial set-up for OAuth 2.0 requires an RSA public key (with key bit size >= 3072) sent to IBKR via secure message center.

Please provide just the public key and please submit the ticket via a user on the live account:

> `openssl genrsa -out privatekey.pem 3072`

> `openssl rsa -pubout -in privatekey.pem -out publickey.pem -outform PEM`

or

> `openssl genrsa -out privatekey.pem 4096`

> `openssl rsa -pubout -in privatekey.pem -out publickey.pem -outform PEM`
