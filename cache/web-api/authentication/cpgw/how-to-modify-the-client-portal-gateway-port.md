> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# How To Modify The Client Portal Gateway Port

In some cases, a user may need to modify the port for their Client Portal Gateway. This most often arises because another process is already occupying Localhost port 5000.

To modify your port:

1. (Optional) Close the Client Portal Gateway if it is already running
2. Navigate to your Client Portal Gateway directory, such as `C:\Users\{user}\Downloads\clientportal.gw\`
3. Change to the Client Portal Gateway's `root` directory
4. Open the conf.yaml file through any text editor.
5. Modify "listenPort" on line 4 from "5000" to the value of your choice.

* Port `5001` is a standard alternative that is not typically in use.

6. Save the content of the file and launch the Client Portal Gateway