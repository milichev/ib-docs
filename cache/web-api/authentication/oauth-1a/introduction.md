> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

Interactive Brokers offers an OAuth 1.0a authentication procedure for licensed Financial Advisors, Organizations, IBrokers, and third party services. Beyond the initial authentication procedure, the OAuth implementation will behave the same as the standard [Client Portal Gateway](/docs/web-api/authentication/introduction).

Authentication via tokens produced by our OAuth 1.0a workflow permits requests to be made directly to `https://api.ibkr.com`, without the need for any intermediary software such as the Client Portal Gateway. Resource paths remain the same regardless of the method of authentication.

Interactive Brokers makes a distinction between first-party use of OAuth directly by clients and third-party use of OAuth by vendors of software, described below.