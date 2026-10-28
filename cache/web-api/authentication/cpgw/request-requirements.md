> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Client Portal Gateway Request Structure

Each authentication method has a slightly different requirement to send and receive authenticated requests.

## Base URL

`localhost:5000`
The port used for localhost may change if the [listenPort was modified](/docs/web-api/authentication/cpgw/how-to-modify-the-client-portal-gateway-port)

## Headers

The Client Portal Gateway handles nearly request headers and parameters on the user's behalf.

* `User-Agent` : The `User-Agent` header should be defined for all requests