> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Solicited and Unsolicited Messages

There are two types of messages sent to clients via the websocket:

* **Solicited messages:** Messages delivered to the client in response to an explicit, client-initiated subscription to a topic.
* **Unsolicited messages:** Messages delivered automatically to the client by the server. These messages are not associated with a topic subscription that can be canceled, and they typically contain session or other administrative information.