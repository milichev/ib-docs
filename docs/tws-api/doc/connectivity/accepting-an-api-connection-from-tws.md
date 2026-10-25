[source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/accepting-an-api-connection-from-tws)

# Accepting an API connection from TWS

For security reasons, by default the API is not configured to automatically accept connection requests from API applications. After a connection attempt, a dialogue will appear in TWS asking the user to manually confirm that a connection can be made:

Untrusted IPs attempting to make a connection will be denied without prompting.

![Confirmation dialogue to confirm connection attempt.](../../../_fern-img/c50f4cba6e19ad1f076f0b85c5b87cf71ada3f806de959bbd02c2afb0925592d.webp.md)

To prevent the TWS from asking the end user to accept the connection, it is possible to configure it to automatically accept the connection from a trusted IP address and/or the local machine. This can easily be done via the TWS API settings:

![TWS API settings with localhost and trust IP section.](../../../_fern-img/543621c6d684d293d7de9b2a16cae0b62c5de1d4a687d08cbe9af837f98f6424.webp.md)
