[source](https://www.interactivebrokers.com/docs/excel/activex/notes-limitations/mac-os-unix-support-for-excel-active-x)

# macOS / UNIX Support For Excel ActiveX

The TWS API Excel ActiveX Implementation is built around the [Component Object Model (COM)](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal) architecture. The COM object and it's derivatives like ActiveX and [OLE (Compound Documents)](https://learn.microsoft.com/en-us/windows/win32/com/compound-documents) are built exclusively into Microsoft Windows and are reliant on the Operating System's Registry structure.

Given the underlying technology of ActiveX requires Windows-specific architecture regarding it's registry, the TWSAPI Excel ActiveX functionality is not available in the Mac and Unix distribution of the TWSAPI offering.
