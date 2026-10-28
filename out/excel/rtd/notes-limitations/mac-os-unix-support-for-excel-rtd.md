[source](https://www.interactivebrokers.com/docs/excel/rtd/notes-limitations/mac-os-unix-support-for-excel-rtd)

# macOS / Unix Support For Excel RTD

The TWS API Excel RTD Implementation is built around the [Component Object Model (COM)](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal) architecture. The COM object and it's derivatives like ActiveX and [OLE (Compound Documents)](https://learn.microsoft.com/en-us/windows/win32/com/compound-documents) are built exclusively into Microsoft Windows and are reliant on the Operating System's Registry structure.

Given the underlying technology of RTD requires Windows-specific architecture regarding it's registry, the TWSAPI Excel RTD functionality is not available in the Mac and Unix distribution of the TWSAPI offering.
