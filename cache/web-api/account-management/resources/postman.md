> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Postman

To effectively explore and understand our API endpoints, we recommend using Postman. This industry-standard tool will help you visualize requests and responses, making your development process more efficient.

Download our prepared resources to get started quickly:

* IBKR Postman Collection

* IBKR Production Environment Settings

* IBKR QA Environment Settings

### Setup Instructions

#### 1. Install Postman

Download and install the latest version of [Postman](https://www.postman.com/downloads/) for your operating system.

#### 2. Import Resources

Import our collection and environment files into your Postman workspace:

* Open Postman
* Click "Import" in the upper left corner
* Upload the downloaded collection and environment files

#### 3. Configure Environment Variables

For the API to function properly, update the following essential variables in your selected environment:

| Variable           | Description          | Your Value            |
| ------------------ | -------------------- | --------------------- |
| `clientPrivateKey` | Your Private RSA Key | *\[Your private key]* |
| `clientPublicKey`  | Your Public RSA Key  | *\[Your public key]*  |
| `clientId`         | Your Client ID       | *\[Your client ID]*   |

### Important Note

**API Credentials Required**: The collection and environment will only work with valid API credentials. If you don't have credentials yet, please contact our support team at [am-api@interactivebrokers.com](mailto:am-api@interactivebrokers.com).

### Next Steps

Once configured, you can explore all available endpoints, test requests, and examine responses to better understand our API functionality.