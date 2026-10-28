> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Client Portal Gateway FAQ

## Why is my browser saying I have an insecure connection? Why are my requests being rejected because of an invalid SSL certificate?

When navigating to the Client Portal Gateway login page, you may see a warning from your browser regarding a missing valid SSL certificate. This is expected. The API gateway does not come bundled with a valid certificate. While it is not required, users may sign a new certificate themselves for the localhost connection.

**Note:** The connection is only insecure between the user to their own localhost.Only the connection on the local computer is insecure. However, requests sent from the locahost to Interactive Brokers will maintain a secure connection.

## Can I automate the Client Portal Gateway authentication process?

Interactive Brokers does not support an automated authentication process for Client Portal Gateway.

## How often do I need to log in through the browser while using the Client Portal Gateway?

Clients must reauthenticate using the Client Portal Gateway at daily.

## Why did I receive "Server listen failed Address already in use" when running the Client Portal Gateway?

This error occurs because another process is actively running on the listening port.
Mac devices typically have other software operating on port 5000, so it is recommended to [change the default port](/docs/web-api/authentication/cpgw/how-to-modify-the-client-portal-gateway-port) of Client Portal Gateway.