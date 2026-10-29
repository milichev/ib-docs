[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/client-registration/kyc-documents)

# KYC Documents

### Identity and Address Verification

Real-time Trulioo verification is processed upon account creation for selected countries. If Trulioo verification is not successful, OR Trulioo verification is not supported or the country which the applicant resides in, Identity and Address verification is required for approval.

#### Trulioo is supported for applicants that reside in following countries

|           |         |             |                    |                |
| --------- | ------- | ----------- | ------------------ | -------------- |
| Argentina | China   | Malaysia    | Russian Federation | Turkey         |
| Australia | Denmark | Mexico      | Singapore          | United Kingdom |
| Austria   | France  | Netherlands | South Africa       | United States  |
| Belgium   | Germany | New Zealand | Spain              |                |
| Brazil    | Ireland | Norway      | Sweden             |                |
| Canada    | Italy   | Portugal    | Switzerland        |                |

#### Other countries

* Identity and Address verification will always be required for approval.

### Options for Identity and Address Verification

#### Option 1: Traditional Verification

Collect Proof of ID and Proof of Address documents from the client and submit documents to IBKR `documentSubmission`.

**Registration Tasks**

* 8001: Proof of Identity (POI)
* 8002: Proof of Address (POA)

Important to note: For IB-HK Non-Disclosed (QI and NonQI) clients, we only require Proof of Identity (8001).

**Processing Time**

IBKR has a 'follow the sun' model with operators located globally and constantly reviewing and processing supporting documents for new applications. Documents typically processed within 24 hours. Meaning, accounts are approved/opened within 24 hours of the supporting documents being accepted by IBKR.\
Causes for delays could be unsupported doc type is submitted or image received is blurry/too dark

#### Option 2: Instant Verification

Opt to allow clients to verify using Au10tix (third-party application used to verify client's identity /geo location).

* If Trulioo is NoMatch, IBKR will pass unique URL which can be used to connect user to Au10Tix to complete verification. The URL is valid for 24 hours. If more than 24 hours, a new URL will need to be generated using `/api/v1/accounts/{{accountId}}/kyc` endpoint.

**Workflow**:

* Embed Au10Tix URL or provide a QR code with Au10Tix URL within application.
* User accesses Au10Tix URL and will be prompted to complete consent message verifying they are OK for Au10Tix to capture Biometric information.
  * If user consents, they will be prompted to take photos of the front and back of their ID's and take a selfie.
  * Au10Tix will process information and complete ID verification.
  * If Au10Tix verification fails; user will be required to complete 'Traditional Verification) and Provide a Proof of Address and Proof of Identity Document.
* If user declines consent, they will be prompted to complete Traditional Verification

**Processing Time**

Real-Time verification is completed- if Au10Tix verification passes; account will be approved/opened (Real-Time).

**Registration Tasks**

* 8137: Au10Tix Identity and Address Verification
* 8437: Au10Tix Identity

**Important:** While partners may implement Traditional Verification as their primary verification method, in certain risk-based scenarios determined by IBKR compliance, Au10Tix verification may be required even if Traditional Verification was initially assigned or completed. This requirement is non-negotiable and is triggered by IBKR's internal risk assessment protocols. Failure to implement support for both verification methods may result in users being unable to complete the account opening process in certain scenarios. All partners are expected to support both verification paths either through direct API implementation or SSO fallback capability.
