[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/cpgw/request-requirements)

# Client Portal Gateway Request Structure

Each authentication method has a slightly different requirement to send and receive authenticated requests.

## Base URL

`localhost:5000`
The port used for localhost may change if the [listenPort was modified](how-to-modify-the-client-portal-gateway-port.md)

## Headers

The Client Portal Gateway handles nearly request headers and parameters on the user's behalf.

* `User-Agent` : The `User-Agent` header should be defined for all requests
