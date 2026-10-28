> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Agreements And Disclosures

Fully-Disclosed and Advisor clients are required to sign IBKR customer agreements and disclosures.

* **Full Integration**: Hosting firm will display IBKR agreements and disclosures within interface and collect electronic signature.
* **Hybrid**: End use signs IBKR agreements via the IBKR White Branded Platform

This section covers handling agreements and disclosures for clients using Full Integration.

### Download IBKR Agreements and Disclosures

Pull using the [`/gw/api/v1/forms`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/list-forms) endpoint.

## Request Parameters

| Name              | Type              | Description                                                                                                                                      |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| getDocs required  | T F               | T= True (Documents will be pulled) F= False (Documents will not be pulled)                                                                       |
| fromDate required | YYYY-MM-DD        | View forms that are updated as of fromDate                                                                                                       |
| toDate required   | YYYY-MM-DD        | View forms that are updated between fromDate and toDate                                                                                          |
| formNo            | String            | Form Number. If provided; only single formNo is supported per request. If excluded, endpoint will return all forms that meet the given criteria. |
| projection        | DOCS NONE PAYLOAD | Determine output                                                                                                                                 |

### Submit Agreements and Disclosures

The [`/gw/api/v1/accounts/documents`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/create-accounts-documents) endpoint provides mechanism to submit Agreements and Disclosures to IBKR once a day instead of with each application. We store these documents on the servers and will use them for new application requests submitted that day.

* Documents will need to be submitted once a day (before the Applications are submitted). PDFs will be displayed and submitted as is- no changes/edits will be made to the actual PDF files.
* This end-point will not process any Tax Form Documents. Tax Form document should be submitted with every application
* If submitted in the morning, you only need to include the Tax Form attachment for each applicant. Otherwise, you will need to include PDFs with each application (Create Account).

## Schema

| Name               | Type                                                                         | Description                                                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileName           | String                                                                       | File name of the PDF document submitted to IBKR. `fileName` included within the `documents` request must match the `fileName` of the PDF file that is included within the signed request.  Acceptable formats: .jpeg, .jpg, .pdf, .png Max size: 10 MB |
| fileLength         | String                                                                       | Length of the PDF form.                                                                                                                                                                                                                                |
| sha1Checksum       | String                                                                       | SHA-1 is crypto algorithm that is used to verify that a file has been unaltered. This is done by producing a checksum before the file has been transmitted, and then again once it reaches its destination.                                            |
| formNumber         | String                                                                       | Use `/gw/api/v1/accounts/{accountId}/tasks` to view a list of forms that are required for approval.                                                                                                                                                    |
| execTimestamp      | YYYYMMDDHHMMSS                                                               | Timestamp when agreement was submitted to IBKR.                                                                                                                                                                                                        |
| execLoginTimestamp | YYYYMMDDHHMMSS                                                               | Timestamp when agreement was submitted to IBKR.                                                                                                                                                                                                        |
| mimeType           | application/pdf application/pdf image/png  image/jpeg (Includes .jpeg, .jpg) | Format of the file.                                                                                                                                                                                                                                    |
| data               | String                                                                       | Includes document encoded in base64.                                                                                                                                                                                                                   |

## Example

```
{
        "processDocuments":
            {
                "documents": [
                    {
                        "attachedFile": {
                            "fileName": "Form3024.pdf",
                            "fileLength": 432177,
                            "sha1Checksum": "03D899BA757F617C907A1F021D7046AC1DAC8707"
                        },
                        "payload": {
                            "mimeType": "application/pdf",
                            "data": pm.collectionVariables.get('form3024')
                        },
                        "formNumber": 3024,
                        "execLoginTimestamp": 20210929123113,
                        "execTimestamp": 20210929123113
                    }
                ],
                "inputLanguage": "en",
                "translation": false
            }
    }
```

### Processing of IBKR Agreements and Disclosures

* Hosting firm will display IBKR agreements and disclosures within interface and collect electronic signature.
  * Collect a signature for each form OR display all forms on a single page with a single signature box at the bottom and pass that signature within the `documents` section for each form.
  * Example of IBKR's Application as a reference![](https://www.ibkrguides.com/dameca/Resources/Images/image20.png)
* The signature, which is collected will be included in the `signedBy` section of the `documents`.
* Hosting firm will provide copy of the IBKR agreements which were presented to user in the application payload that is submitted to IBKR for client registration.
  * No changes should be made to the PDF (We validate the forms using sha1checksum if alterations have been made, error will be triggered and the form will not be accepted.
* If a form is updated, hosting firm has a 7-calendar day grace period to update the form.