> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Additional Security Features

Interactive Brokers (IBKR) offers an array of security features for our WebAPI users.

> **Info**
>
> The restriction methods denoted below are not applicable to all authentication types. Be sure to review **Availability** for each section.

## Pre-Trade Compliance (PTC)

IBKR's Pre-Trade Compliance (PTC) tool is available to institutional clients. PTC can be used to apply trade-related rules and restrictions on either a **per-user** or **per-account** basis.

Common use cases include:

* Block a user from placing trades entirely
* Restrict trading to specific IBKR platforms and/or via API

Example:
Suppose you want a new user on your IBKR account to have access to the `/iserver` market data endpoints only (i.e., a "market data" user), while blocking that user from placing orders. This can be achieved by configuring a PTC restriction via the **IBKR Client Portal**, which blocks order placement for that specific user while preserving their market data access.

More information on PTC

* [Open the Pre-Trade Compliance tool](https://www.ibkrguides.com/etpretrade/open-ptc.htm)
* [Create a Restriction](https://www.ibkrguides.com/etpretrade/restrictions.htm)
* [Apply a restriction to an account](https://www.ibkrguides.com/etpretrade/apply-a-restriction.htm)

**Availability**: Available to all IBKR customers, including CP Gateway, OAuth 1.0a, and OAuth 2.0 clients.

## IP Restrictions

IBKR clients can restrict API/platform access to specific IP addresses, adding an extra layer of security by ensuring requests are only accepted from trusted sources.

**Options for configuring IP restrictions:**

* **Option 1** — Username-specific IP restrictions (applies to all `/iserver` endpoints).
* **Option 2** — Gateway-level IP restrictions tied to an OAuth 2.0 `clientId` (applies to `/gw/api` endpoints).

### **Option 1: Username-Specific IP Restrictions (`/iserver` endpoints)**

IBKR clients can add username-specific IP restrictions that apply to all `/iserver` (trading & market data) endpoints in the Trading Web API. These settings are tied to a specific IBKR username and can be set and modified directly via the **IBKR Client Portal**.

Reference: [IP Restrictions](https://www.ibkrguides.com/orgportal/usersettings/iprestrictions.htm)

Configuration steps:

1. Log in to the [IBKR Client Portal](https://ndcdyn.interactivebrokers.com/sso/Login)
2. Navigate to **Settings → IP Restrictions**
3. Add the allowed IP(s) for the user
4. Save
5. Allow 1-2 business days for the changes to take effect

**Availability**: Option 1 is available to all IBKR customers, including CP Gateway, OAuth 1.0a, and OAuth 2.0 clients.

### **Option 2: Gateway-Level IP Restrictions (`/gw/api` endpoints)**

IBKR can configure IP restrictions manually on behalf of the user through our backend systems upon request. These restrictions are applied to and tied to your OAuth 2.0 `clientId` (client identifier). Once Gateway-level IP restrictions are configured for a `clientId`, every `/gw/api` request from that `clientId` is subject to these restrictions.

Behavior once applied:

* A request from an **allowed IP** returns `200 OK`.
* A request from an IP that is **not allowed** returns a `403` error: `"Request remote ip is not in allowed list."`

Example:
Trading Web API clients using OAuth 2.0 (with the `sso-sessions.write` scope) can add IP restrictions so that new bearer token requests (`POST /gw/api/v1/sso-sessions`) are only accepted from a single IP (or list of IPs) going forward.

**Availability**: Option 2 is available to approved OAuth 2.0 clients in production only.