[home](../../index.md) | [excel](../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/refresh-rate)

# Refresh Rate

Microsoft RTD interface has a [ThrottleInterval](https://msdn.microsoft.com/en-us/library/microsoft.office.interop.excel.rtd.throttleinterval.aspx) property that determines the interval between data refreshes. By default, the value is set to 2000 milliseconds, which means Excel waits at least 2000 milliseconds between checks for updates. You are able to manually change the Throttle Interval to a smaller value\* so as to increase the refresh rate of real time data.

The easiest way to change the ThrottleInterval property is through VBA:

1. In Excel, go to the Visual Basic Editor window by pressing **Alt_F11**.
2. On the Visual Basic Editor window, click on **View -> Immediate Window** or hold **Ctrl_G** to open the **Immediate Window**.
3. On the **Immediate Window**, type in the following code and then click **Enter**:\
   `Application.RTD.ThrottleInterval=250`
4. To verify that it is set correctly, type this line of code on the **Immediate Window** and click **Enter**:`? Application.RTD.ThrottleInterval`
5. Verify the next line should display 250. If this value is changed, the new value will persist when Microsoft Excel is restarted.

**\*Warning:** As the ThrottleInterval is lowered, updates can come in so frequently that Excel is continuously updating values and doing calculations, Excel might end up in a state where it never gives the user a chance to do anything, effectively getting in a hung state. If this happens, set the Excel throttle interval higher.

![rtd\_throttle\_interval.png](/docs/_fern-files/_img/8563bd028ea016bf6debcedd77f273ea43c8ba4b94109b5688abf3fc128569d2.webp)

*Source: Microsoft Real-Time Data: Frequently Asked Questions [How Do I Configure the RTD Throttle Interval in Excel?](https://msdn.microsoft.com/en-us/library/aa140060\(office.10\).aspx#odc_xlrtdfaq_howconfigrtdthrottle).*
