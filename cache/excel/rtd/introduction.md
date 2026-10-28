> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

The Interactive Brokers Excel RTD offering is a .NET offering for IBKR Pro customers. This is a unique API implementation designed to efficiently retrieve live market data through Excel. This is optimized for ease of use and efficiency without overwhelming Excel. As such, this is the optimal choice for customers who wish to collect large quantities of data without prior coding experience, or interest in algorithmically-placed orders.

By design, Microsoft Excel gives precedence to the user interface over the data connection to other applications. For that reason, Excel only receives updates when it is in a 'ready' state, and may ignore data sent for instance when a modal dialogue box is displayed to the user, a cell is being edited, or Excel is busy doing other things. The Excel Real Time Data server (RTD) API has been introduced to help address some of these limitations, but they are inherent to Excel as a trading application and not specific to an API technology.