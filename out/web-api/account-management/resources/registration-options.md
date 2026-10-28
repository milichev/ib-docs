[source](https://www.interactivebrokers.com/docs/web-api/account-management/resources/registration-options)

# Registration Options

The IBKR systems including Registration, Client Portal, and Emails can be customized (free of cost) to reflect your company branding including logo, company name, and theme file.

Instructions to configure White Branding :

* [Custom Theme File](https://ibkrguides.com/brokerportal/whitebranding/custom-theme.htm)
* [Registration and Portal](https://ibkrguides.com/brokerportal/whitebranding/whitereg.htm)
* [Emails](https://ibkrguides.com/brokerportal/whitebranding/whiteemail.htm)

### Embed IBKR Hosted Application to Website

Embed the [Fully Electronic](https://guides.interactivebrokers.com/bp/Default.htm#inviteclientstartelectronicapp.htm?TocPath=Dashboard%257CClient%2520Applications%257C_____2) application on your website, when the client clicks on the application link, they will be redirected to the IBKR hosted Application that is White Branded. Client will complete the application (in full) through the IBKR application and submit to\
IBKR for processing.

* Display own agreements /pre-qualification questions (if needed)
* Available to Registered Advisors and Introducing Brokers free of cost
* Minimal development work involved
* Registration process 100% Electronic
* Application hosted by IBKR

## Workflow

Configure White Branding for [Emails](https://www.ibkrguides.com/brokerportal/whitebranding/whiteemail.htm) AND [Client Portal, The Registration System, Statements, and PortfolioAnalyst](https://guides.interactivebrokers.com/bp/Content/whitebrandingportal.htm)

1. The IBKR Portal can be customized (free of cost) to reflect your company branding including logo, company name, and [theme file](https://ibkrguides.com/brokerportal/whitebranding/custom-theme.htm). Generate URL to the Application
2. From IBKR Portal, select Settings > Client [Account Template](https://guides.interactivebrokers.com/bp/Default.htm#clientaccounttemplatesnew.htm).
3. Select 'Chain' icon
4. Copy Hyperlink
5. Embed Hyperlink to website
6. You can ask pre-qualification questions/display your own forms then drive the client to a specific Client Account Template based on the answers.![](https://www.ibkrguides.com/dameca/Resources/Images/image22.png)

### Send Fully-Electronic Application to your Client

Initiate an email invitation to your potential client, who is then required to complete the application online electrically using the [Fully-Electronic](https://www.ibkrguides.com/brokerportal/homemenu/inviteclient.htm?Highlight=Fully-Electronic) application.

* Available to Registered Advisors and Introducing Brokers free of cost
* No development work involved
* Registration process 100% Electronic
* Application hosted by IBKR

## Workflow

Tools available to help simplify the Fully-Electronic Application:

* **Account Templates**: Client account template is used to simplify application. Use [Account Template](https://www.ibkrguides.com/advisorportal/clientaccttemplates.htm?Highlight=template) to specify Account Type, Base Currency, Trading Capabilities, Trade Permissions, Financial Information, and Fee Configuration.
* **CRM**: Use the CRM Tool to Pre-Populate the Fully-Electronic Application. The client will receive an email with the prefilled application. The CRM tool and the use of a client account template would populate 90% of the application. Once completed, the client can submit the application back to Interactive Brokers electronically.
  * Add Contacts to IBKR's [CRM](https://www.ibkrguides.com/advisorportal/homemenu/addcontact.htm) manually OR in bulk using import feature.
  * Initiate Invite from CRM Contact
  * Select 'Contacts' > Select Individual Contact > Select ![](https://www.ibkrguides.com/dameca/Resources/Images/image1.png)icon to send Application Invite > Specify Application Method (Fully-Electronic)
  * Use Template?
  * If Yes, select Template
  * Prospect will receive an email invitation to start the IBKR application.
  * When prospect clicks on hyperlink to start the application, the application will be pre-filled with data that was entered in the CRM/Template. The client can modify information if needed.
  * The user will be required to enter the following information:
    * Create username and password
    * Specify 3 security questions and answers
    * Answer regulatory information
    * Specify funding
    * Specify information for second holder (For Joint Accounts Only)
* Once completed, the client can submit the application back to Interactive Brokers electronically.

### Complete Semi-Electronic Application for your Client

With the [Semi-Electronic,](https://www.ibkrguides.com/brokerportal/homemenu/startsemielectronic.htm?Highlight=Semi-Electronic) you will complete an electronic application online for your potential client. At the end of the process, you will generate a PDF application. Provide the PDF application to prospect client for review and signing (physical signature is required).

* Available to Registered Advisors and Introducing Brokers free of cost
* No development work involved
* Signed Government Issued ID + Physical Signature required for the application
* Application hosted by IBKR

IBKR's [CRM](https://www.ibkrguides.com/advisorportal/homemenu/addcontact.htm) can be used to pre-fill the Semi-Electronic Application.

### Mass Upload

Mass upload is designed for advisors/brokers that are seeking an efficient way to move 20+ clients over to IBKR in a seamless manner. Rather than completing individual applications for each account, accounts can be opened in bulk by providing application data in Excel Workbook.

* Available to Registered Advisors and Introducing Brokers free of cost
* Registration process 100% Electronic
* Application hosted by IBKR
* Bulk Upload for existing client base

## Workflow

1. IBKR will provide FA/Broker with spreadsheets by account type.
2. FA/BRoker will complete the spreadsheets with client information and submit to IBKR for Processing.
3. IBKR will upload the accounts and provide the FA/Broker with the account credentials.
4. Advisor/Broker will provide their clients with the credentials.
5. Client will need to log into the IBKR White Branded Portal to review application information and electronically sign the IBKR agreements /disclosures.

### Link existing account to Advisor/Broker

An existing IB account can link under the Advisor/Broker directly through Client Portal.

* Available to Registered Advisors and Introducing Brokers free of cost
* Registration process 100% Electronic

## Workflow

1. **Initiate Linkage Request**
   * Option 1: Embed URL on your site where user can submit request to link to your master.
     * `https://ndcdyn.interactivebrokers.com/sso/Login?forwardTo=AA\_LINKAGE&masterAccountId=<InsertMasterAccountIDHere>`
   * Option 2: Mutual client will initiate request to link to the advisor/broker within Client Portal > Settings > Account Settings > [Create, Move, Link or Partition an Account.](https://www.ibkrguides.com/clientportal/createlinkedaccountunderadvisorbroker.htm?Highlight=link%20account)
2. Confirm Linkage Request
   * An email will be sent to the Advisor/Broker to inform them of the request. The Advisor/Broker must accept the linkage request (in Pending Items) before the account is linked.

### Full Integration- Client Registration with Web API

Available for Advisors/Brokers that would like to customize the Registration System, Portal, and Funds and Banking System. Account Management web API is used as an alternative to the IB hosted Portal.

* Intended for advisors/brokers who have working knowledge of OAuth 2.0 and JSON.
* Control look, feel, flow of the application
* Registration process 100% Electronic
* Application hosted by Counterparty
* Management approval is required- requests are reviewed on a case by case basis.
* Generally advisors/brokers that plan on bringing over 100 + accounts within the first quarter OR 50M USD are eligible for this service.
* Hosting advisors and brokers are subject to both an upfront and ongoing fee intended to offset the costs incurred by IBKR for vetting the initial request and to conduct an annual review of the hosted application. This annual review is intended to ensure that the hosted application has been updated to reflect changes IBKR has implemented to its own application and that no other changes which would cause IBKR to reject the hosted arrangement have been introduced by the advisor or broker.

## Workflow

1. The Advisor/IBroker builds an interface on their website to collect all required IBKR application fields + collect signature for the IBKR agreements /Disclosures
2. The Advisor/IBroker sends all data and signed agreements and disclosures to IBKR (in JSON format) using Web API.
3. IBKR retrieves the files and provides a response file. Response will have a status of Success or Error. Any errors will be corrected by the Advisor/IBroker and then resubmitted.
4. Successful response files will include the IB account #, username, temporary password, and confirmation of the agreements/disclosures that were successfully processed + pending registration tasks (if any) that are required for approval.
   * If no registration tasks are included in the response file, the account will be submitted for approval.
   * If registration tasks are included, the [registration tasks](../client-registration/registration-tasks/complete-registration-tasks.md) will need to be completed in order for the account to proceed with the approval process.
5. The Advisor/IBroker is responsible for providing the account numbers, usernames and temporary passwords to their clients.
6. The client will be prompted to reset his or her password and enter three security questions the first time they login to IBKR Portal after the account has been approved and opened.

### Hybrid

Provide IBKR with partial account data via Web API. Client will complete the remaining applications steps via the IBKR hosted application (white branded).

* Advisor/Broker can direct the client to IBKR's login page (white branded) or create [single sign on](../single-sign-on.md) session to complete remaining application steps.

* Intended for advisors/brokers who have working knowledge of JSON and OAuth 2.0.

* Registration process 100% Electronic

* Application hosted by IBKR

* Moderate development work involved

## Workflow

Workflow for Advisor and Fully-Disclosed clients

1. **Create Account with IBKR**
   * Submit partial application data to IBKR using [accounts](../../api-reference/account-management/account-management-accounts/create-accounts.md) endpoint.
     * Minimally, we will require Name, Email, Country of Residence to create an account.
     * [Required Fields](../client-registration/data-for-client-registration.md)
   * IBKR will return a real-time [response](sample-responses/sample-responses.md) with the account credentials and pending tasks.
2. **Direct user to IBKR Portal to complete remaining application steps.**
   * Create [s](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Authorization-SSO-Sessions/paths/~1gw~1api~1v1~1sso-sessions/post)[ingle sign on](https://www.ibkrguides.com/dameca/Endpoint/ssoCreate.htm) session to seamlessly connect user to the IBKR Portal.
   * The IBKR Portal can be customized (free of cost) to reflect your company branding including [logo, company name](https://ibkrguides.com/brokerportal/whitebranding/whitereg.htm), and [theme file](https://ibkrguides.com/brokerportal/whitebranding/custom-theme.htm). This can be configured directly within IBKR Portal.
3. **Set Password and Complete Email Verification (Optional)**
   * IBKR authentication with username and password is required IF setting / changing banking instructions OR facilitating withdrawals within the IBKR Hosted Portal.
   * API supports creation of ACH instructions for U.S. Based Clients. For all other clients, banking instructions for withdrawals will need to be added within the IBKR Portal; which means password will need to be set on the account.
   * IBKR provides 2 options for setting password (if option 2, post approval, skip to step 4).
   * **Option 1: Set Password During Registration (Suggested)**
     * Upon accessing IBKR Portal, user will be prompted to enter temporary password (that was included in the response file) + set new password.\
       ![](https://www.ibkrguides.com/dameca/Resources/Images/image13.png)\
       IBKR will send email confirmation toke to verify the identity. Email will be branded with your company logo and return email address.\
       ![](https://www.ibkrguides.com/dameca/Resources/Images/image15.png)\
       Sample email\
       ![](https://www.ibkrguides.com/dameca/Resources/Images/image16.png)\
       Password change has been processed.\
       ![](https://www.ibkrguides.com/dameca/Resources/Images/image18.png)
   * **Option 2: Set Password Post Approval**
     * Counterparty will direct user to IBKR's Password Reset Tool to set password.
     * User enters IBKR username and date of birth.
     * IBKR will send SMS token to verify identity.
     * User will set password and complete email verification.
4. User completes remaining application steps.
   * Application will be pre-filled with information that was included in the XML file to create the account.
   * Screen 1: About You
   * ![](https://www.ibkrguides.com/dameca/Resources/Images/image5.png)
   * Screen 2: Configure Your Trading Account
   * ![](https://www.ibkrguides.com/dameca/Resources/Images/image6.png)
   * Screen 3: Agreements and Disclosures
   * ![](https://www.ibkrguides.com/dameca/Resources/Images/image7.png)
   * ![](https://www.ibkrguides.com/dameca/Resources/Images/image8.png)
   * Screen 4: Application Status
   * ![](https://www.ibkrguides.com/dameca/Resources/Images/image10.png)
