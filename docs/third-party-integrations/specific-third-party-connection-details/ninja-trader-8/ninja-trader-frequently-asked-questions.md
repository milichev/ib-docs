[source](https://www.interactivebrokers.com/docs/third-party-integrations/specific-third-party-connection-details/ninja-trader-8/ninja-trader-frequently-asked-questions)

# NinjaTrader: Frequently Asked Questions

IB Gateway or Trader Workstation is telling me that I must upgrade by March. Will my NinjaTrader connection still work?

As of NinjaTrader 8.1.4, the NinjaTrader platform does not function with most modern releases of the Trader Workstation due to the use of a legacy implementation of the TWS API software. As a result, the minimum support TWS release and the newest NinjaTrader 8 release are incompatible.

Clients intended to use the NinjaTrader platform should continue to use their supported [IB Gateway](https://ninjatrader.com/ninjatrader/TWS/IB-Gateway-10.23-2a.exe) version until an update is released. NinjaTrader's release notes are listed in [their support guide](https://ninjatrader.com/support/helpguides/nt8/NT%20HelpGuide%20English.html?release_notes.htm).

Why am I not seeing my account information in NinjaTrader?

NinjaTrader requires customers to pay for their platform license fee in addition to the 3rd party license fee.

You can read more about this here: [https://forum.ninjatrader.com/forum/ninjatrader-8/platform-technical-support-aa/1099959-ib-account-does-not-show](https://forum.ninjatrader.com/forum/ninjatrader-8/platform-technical-support-aa/1099959-ib-account-does-not-show)

I can't find the symbol I'm looking for in NinjaTrader, but I can find it in Trader Workstation

NinjaTrader may map symbols uniquely from Interactive Brokers. As such, you will need to implement Symbol Mapping.

You can read more about this here: [https://forum.ninjatrader.com/forum/ninjatrader-8/strategy-development/98027-symbol-mapping-to-interactive-brokers#post828876](https://forum.ninjatrader.com/forum/ninjatrader-8/strategy-development/98027-symbol-mapping-to-interactive-brokers#post828876)
