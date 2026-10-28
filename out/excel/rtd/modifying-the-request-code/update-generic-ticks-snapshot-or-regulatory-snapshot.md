[source](https://www.interactivebrokers.com/docs/excel/rtd/modifying-the-request-code/update-generic-ticks-snapshot-or-regulatory-snapshot)

# Update GenericTicks, Snapshot, or RegulatorySnapshot

By default, all generic ticks are requested in the RTD sample. For those who only need minimum values, such as Bid, Ask, Last, and their respective sizes, may want to change the genericTicks variable from monitoring the sample-provided values, and instead return an empty list.

![A modified version of the reqMktData request without genericTicks](/docs/_fern-img/d71a6fc69ef527bdb9a1b141395079fbc96e19c4747004532f147f33eb555f3a.webp)
