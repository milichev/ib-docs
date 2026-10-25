[source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/remote-tws-api-connections-with-trader-workstation)

# Remote TWS API Connections with Trader Workstation

If you want to connect TWS/ IB Gateway from a remote server, uncheck the "Allow connection from localhost only" setting. Under the "Trusted IPs" section, click "Create" and enter the IP Address detected in "Accept incoming connection attempt from \<IP Address>" into "Trusted IPs".

"Trusted IPs" does not accept subnet (e.g. /27, /28). It only accepts single IP Addresses. Assuming a remote computing cluster /27 which has 32 IP Addresses, a remote computing cluster will randomly assign one of the computing nodes to connect to TWS in every connection.  To make this happen, every Private IPv4 Address of the subnet must be put into the "Trusted IPs" (You can also exclude the first IP Network Address and the last IP Broadcast Address of the subnet).
