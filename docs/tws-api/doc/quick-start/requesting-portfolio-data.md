[source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/requesting-portfolio-data)

# Requesting Portfolio Data

Requesting portfolio data requires the use of the [`reqAccountUpdates()`](../account-portfolio-data/account-updates/requesting-account-updates.md) function which returns data via the [`updateAccountValue()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateaccountvalue-), [`updatePortfolio()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateportfolio-), and the [`updateAccountTime()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateaccounttime-) callback functions.

The [`accountDownloadEnd()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperaccountdownloadend-) callback function runs when all account information has been returned.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python and Visual Basic can be found in the /samples directory of the downloaded TWS API file.
