> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Remote TWS API Connections with Trader Workstation

## Connecting an API to a remote Trader Workstation

If you want to connect TWS/ IB Gateway from a remote server, uncheck the "Allow connection from localhost only" setting. Under the "Trusted IPs" section, click "Create" and enter the IP Address detected in "Accept incoming connection attempt from \<IP Address>" into "Trusted IPs".

"Trusted IPs" does not accept subnet (e.g. /27, /28). It only accepts single IP Addresses. Assuming a remote computing cluster /27 which has 32 IP Addresses, a remote computing cluster will randomly assign one of the computing nodes to connect to TWS in every connection.  To make this happen, every Private IPv4 Address of the subnet must be put into the "Trusted IPs" (You can also exclude the first IP Network Address and the last IP Broadcast Address of the subnet).

## Accepting an API connection from TWS

For security reasons, by default the API is not configured to automatically accept connection requests from API applications. After a connection attempt, a dialogue will appear in TWS asking the user to manually confirm that a connection can be made:

Untrusted IPs attempting to make a connection will be denied without prompting.

![Confirmation dialogue to confirm connection attempt.](/docs/_fern-files/_img/c50f4cba6e19ad1f076f0b85c5b87cf71ada3f806de959bbd02c2afb0925592d.webp)

To prevent the TWS from asking the end user to accept the connection, it is possible to configure it to automatically accept the connection from a trusted IP address and/or the local machine. This can easily be done via the TWS API settings:

![TWS API settings with localhost and trust IP section.](/docs/_fern-files/_img/543621c6d684d293d7de9b2a16cae0b62c5de1d4a687d08cbe9af837f98f6424.webp)