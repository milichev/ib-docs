> This page is for Third-Party Integrations.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Multicharts: Frequently Asked Questions

Does Multicharts support Financial Advisors with Interactive Brokers?

Yes, according to the [Multicharts-Interactive Brokers connection guide](https://www.multicharts.com/trading-software/index.php/Interactive_Brokers_Broker_Profile#Financial_Advisor_Settings), Financial Advisors can connect with Multicharts. Please be aware that Multicharts maintains an additional configuration process clients must complete in order to integrate.

Why doesn't my data appear at all? Why does my data seem weird?

There may be an issue with your Multicharts connection status. It may not be in Online mode.

You can read more in this article: [https://www.multicharts.com/trading-software/index.php/Problems\\\_with\\\_Data\\\_in\\\_MultiCharts](https://www.multicharts.com/trading-software/index.php/Problems\\_with\\_Data\\_in\\_MultiCharts)

Why can't I find a contract in Multicharts? Why does it say my symbol doesn't exist?

Different companies may choose to reference data differently.

Some companies will use different symbols for different trading classes or multiplier values. This is popular comparing in cases such as ES and MES where the only unique variant is the multiplier.

In these cases, you may need to create the symbol mapping yourself. This guide can walk through those steps directly: [https://www.multicharts.com/trading-software/index.php/Symbol_Mapping](https://www.multicharts.com/trading-software/index.php/Symbol_Mapping)