> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Architecture

To elaborate further on the Excel DDE API, it is worth elaborating upon the underlying architecture of the system given its complexity. As stated prior, the Excel DDE is implemented using the open source Java – DDE interoperability library, JDDE because DDE is built around 32-bit systems natively. This is implemented utilizing two key parts.

First and foremost, there is the creation of the socket bridge itself. If you explore further in the DdeSocketBridge directory, you will find the full path towards  `C:\TWS API\samples\DdeSocketBridge\src\main` where the source code of the socket bridge is housed. The socket bridge is used as a translation tool between the DDE implemented by Visual Basic and the Trader Workstation. Listed within  `C:\TWS API\samples\DdeSocketBridge\src\main\java\com\ib\api\impl\EWrapperImpl.java` users will be able to find the full Java implementation structure of the TWS API. This particular file is used to receive and transmit data from Trader Workstation to Excel.

Meanwhile, the `C:\TWS API\samples\DdeSocketBridge\src\main\java\com\ib\api\dde\dde2socket\requests` directory encapsulates all of the various outbound requests sent from Excel to Trader Workstation. These files could be modified such that all outbound requests will then better modify values such as defaults or other passed information so as to not require they be implemented in each Excel request directly.

It is important to note that whenever modifications are made under  `C:\TWS API\samples\DdeSocketBridge\src\main` then the socket bridge will need to be recompiled

The socket bridge is only half of the greater DDE API. As the socket bridge handles the transmission of data from Excel to the socket bridge, then the socket bridge to TWS and back again. However, once the data has reached Excel from the socket bridge, Visual Basic must now carry the translations into the designated cells for which the data will be displayed. The content of the visual basic which impacts the default sample sheet is hosted in `C:\TWS API\samples\Excel\TwsDde`. Users who wish to modify how data behaves within Excel itself, such as how or where data is set, would need to make modifications here. Files such as BasicOrders.cls will handle how orders are placed or from which sheets and cells the data can be handled. These functions and can be copied to new files or resaved as needed by developers so long as they are appropriately modified to match their new environment.