> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Frequently Asked Questions

Why does nothing happen when I make a request in Excel?

The most common reason for this behavior is that the DDE socket bridge is not running at the time of the request. Please refer to the [Socket Bridge](/docs/excel/dde/dde-socket-bridge/configuring-the-socket-bridge/introduction) section to learn more on operating the socket bridge connection.

I launch the socket bridge and I see a window flash, then nothing happens?

This is typical where Java is not installed properly on the machine. This is explained further in our [Notes & Limitations](/docs/excel/dde/notes-limitations/introduction) section.

Do I need to keep the command prompt open after running the "runDdeSocketBridge.bat" file?

Yes. Both the black command prompt and white java window must remain open at all times while using DDE. Please refer to the [Socket Bridge](/docs/excel/dde/dde-socket-bridge/configuring-the-socket-bridge/introduction) section to learn more on operating the socket bridge connection.