> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Finding Contract Details in Trader Workstation

If there is more than one contract matching the same description, TWS will return an error notifying you there is an ambiguity. In these cases the TWS needs further information to narrow down the list of contracts matching the provided description to a single element.

The best way of finding a contract's description is within TWS itself. Within TWS, you can easily check a contract's description either by double clicking it or through the Financial Instrument Info -> Description menu, which you access by right-clicking a contract in TWS:

![Right click menu containing Financial Instrument Info.](/docs/_fern-files/_img/ff6919a3b0cfcb7b5cdcae0ee8991026c6f764ce146060c424e592c0a57b4fd1.webp)

The description will then appear:

Note: you can see the extended contract details by choosing Contract Info -> Details. This option will open a web page showing all available information on the contract.

![Contract Description Window](/docs/_fern-files/_img/8e7bcb595c6da94210b9ebbeb31302426f192fb3d770f85e826c2a421051d9b9.webp)

Whenever a contract description is provided via the TWS API, the TWS will try to match the given description to a single contract. This mechanism allows for great flexibility since it gives the possibility to define the same contract in multiple ways.

The simplest way to define a contract is by providing its symbol, security type, currency, exchange, and primary exchange. The vast majority of stocks, CFDs, Indexes or FX pairs can be uniquely defined through these four attributes. More complex contracts such as options and futures require some extra information due to their nature. Below are several examples for different types of instruments.