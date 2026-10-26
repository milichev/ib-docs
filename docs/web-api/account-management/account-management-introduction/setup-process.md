[source](https://www.interactivebrokers.com/docs/web-api/account-management/account-management-introduction/setup-process)

# Setup Process

*IBKR's account registration system and client portal are carefully engineered to meet our requirements; any request to outsource application workflow requires additional approval. We have summarized steps involved to use API for registration and funding in sequential order.*

### Preliminary

1. Send an email to **[api-solutions@interactivebrokers.com](mailto:api-solutions@interactivebrokers.com)** with the following:
   * Firm Name
   * Firm Role (ie. Introducing Broker, Financial Advisor OR Third Party Service Provider)
   * API Services which you are interested in using (ie. Registration, Funding, Single Sign On, View Portfolio Data, Trading, Reporting)
   * Describe intended usage (1-2 sentences)
2. A rep from our API team will provide link to complete an integration questionnaire (electronically).
3. Upon completing the questionnaire, a representative from our API solutions team will reach out to schedule an introductory call to assess needs and determine services required for a successful integration.

### Build and Test

Access to QA environment will be granted upon agreement of the integration requirements.

1. To setup the QA (sandbox) environment for Registration and Funding API, provide the following to **am-api@**interactivebrokers**.com**:
   * RSA key
     * Size: 3072 or 4096
     * Format: PEM
     * IP Addresses (CIDR Format)
   * Signed Services [Agreement](https://www.interactivebrokers.com/campus/wp-content/uploads/sites/2/2024/09/Web-API-Account-Management-Services-Agreement-3.pdf)
2. IBKR will provide QA credential which can be used to access QA.
3. Build interface and test IBKR's APIS.
   * [Developers tool kit](../resources/developer-tool-kit.md) includes quick start guide
   * Suggested [test cases](../resources/test-cases.md)

### Go Live

1. If all development work is complete and your team is ready to go live with the API integration, complete following:
   * Provide IBKR with RSA Key for production using the [IBKR message center.](https://ibkrguides.com/brokerportal/messagecenter/messagecenter.htm#)
     * RSA key for production cannot be same as key that is used for QA
   * Contact your API integration manager with the following:
     * Web ticket number associated with RSA Key
     * Summary of services which will be offered within platform
       * Example: Hybrid registration, account deposits, single sign on for client portal, add trading permissions
     * Instructions to access application interface in QA
     * Screenshots of registration journey in sequential order (PDF)
     * Signed Services [Agreement](https://www.interactivebrokers.com/campus/wp-content/uploads/sites/2/2024/09/Web-API-Account-Management-Services-Agreement.pdf) (if this was not done during preliminary steps).
2. IBKR will review and test interface.
3. IBKR will send email with approval status of interface. If approved, IBKR will provide production credentials (Client ID) to your team using the [IBKR message center.](https://ibkrguides.com/brokerportal/messagecenter/messagecenter.htm#)
4. Test connectivity with the production credentials. If successful, provide following to your IBKR API integration manager:
   * URL address to the application in the Production Environment.
   * Contacts for Production (operations and maintenance).
5. Launch to Production
