[source](https://www.interactivebrokers.com/docs/tws-api/doc/third-party-api-platforms/non-standard-tws-api-languages-and-packages/ib-insync-and-ib-async)

# ib_insync and ib_async

While Interactive Brokers' API Support is aware of the ib_insync package, we [cannot provide coding assistance](../../troubleshooting-support/introduction.md) for the package.

With that in mind, users should be aware that the original ib_insync package is built using a legacy release of the TWS API and is no longer updated. Users who wish to implement the ib_insync structure using supported releases of the Trader Workstation should migrate to the [ib_async package](https://pypi.org/project/ib_async/), which is a modernized implementation of the package by one of its original developers.

*This is neither an endorsement or admonishment of either the ib_insync or ib_async library. Interactive Brokers will always advise clients use our direct TWS API implementation whenever possible.*
