[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/flex-web-service/introduction)

# Introduction

The Flex Web Service is a small, standalone HTTP API for programmatically generating and retrieving pre-configured Flex Queries. Flex Queries are first constructed manually as templates in Client Portal, after which the Flex Web Service API is used to generate an instance of a report populated with up-to-date data and deliver it back to the requesting client. The Flex Web Service offers access to the same Flex Query reports that you'd otherwise retrieve manually from within Client Portal.

#### Create Access Token

Before using the Flex Web Service API to programmatically retrieve Flex Query reports, you’ll need to manually obtain some values from within Client Portal.

#### Create queries & retrieve their ID

Users create a Flex Query within Client Portal as a template of information to retrieve programmatically or through the Portal directly.

#### Generate a Report

Make a request to trigger IB’s backend to generate an instance of your report, which will populate your Flex Query template with the available data. This provides a reference code identifying this particular instance of the report.

#### Retrieve the Report

Finally, you’ll make a request to fetch the generated report using the reference code.

For more information about Flex Queries and about IB's reporting functionality overall, please consult the following documentation:

* [Flex Queries](https://www.ibkrguides.com/clientportal/performanceandstatements/flex.htm)
* [Reporting Guide](https://www.ibkrguides.com/clientportal/performanceandstatements/reports.htm)
