[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/authentication/cpgw/limitations-of-the-client-portal-gateway)

# Limitations of the Client Portal Gateway

While the vast majority of the endpoints published by Interactive Brokers' through our WebAPI documentation can be used in both Client Portal Gateway (CPGW) and through OAuth, there are a few unique limitations of the system that should be understood.

* Users must log in through the browser on the same machine as Client Portal Gateway in order to authenticate.
* All API Endpoint calls must be made on the same machine where the Client Portal Gateway was authenticated.
* None of the endpoints beginning with /gw/api, /oauth, or /oauth2 are supported for use in the Client Portal Gateway.
