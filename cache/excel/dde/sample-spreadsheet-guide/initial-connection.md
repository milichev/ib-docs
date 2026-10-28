> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Initial Connection

To build a connection between Excel and the TWS for DDE, users must first launch the DdeSocketBridge. This can be found in the C: drive by default, inside `{TWS API}\samples\DdeSocketBridge`. Double clicking the file, runDdeSocketBridge.bat, will launch the socket bridge and allow communication between the Trader Workstation and Excel.

If you have any issues connecting with the socket bridge, please see the section, [DDE Socket Bridge](/docs/excel/dde/dde-socket-bridge/introduction)

After launching the socket bridge and all the necessary API settings are set on TWS, as show in [Configure Trader Workstation for DDE](/docs/excel/dde/best-practice-configure-tws-ib-gateway-for-dde/introduction) and having TWS running, we can then locate our sample sheet. Navigate to C:/TWS API/samples/Excel and select "TwsDde.xls".

![Launched DDE Socket Bridge.](/docs/_fern-files/interactive-brokers-585439.docs.buildwithfern.com/5e85fb5424cac4f2437f2ec6b6a0b3f2dd86b5ec834a8f9d8c3f9fc2efd69918/docs/assets/media/socketBridge-700x348.png)