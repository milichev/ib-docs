[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/activex/downloads/install-the-api-on-windows)

# Install the TWS API on Windows

## Download the TWSAPI

The TWS is available for download from [https://download2.interactivebrokers.com/installers/tws-api/index.html](https://download2.interactivebrokers.com/installers/tws-api/index.html).
Windows users should select the "Windows 64-bit" button for *Stable* or *Latest*. In this example, we are downloading the *Latest* release.
Clicking the affiliated button will begin downloading the software.
You will receive a notification from your browser once it is finished, typically in the top-right corner.

![TWSAPI download page](/docs/_fern-files/_img/6470d9d573d9a440b1d5f730f78c58246c4b166fd07bd798f93854817e61a65f.webp)

> **Tip**
>
> Make note of the `Version`, as version numbers showcased here will update over time and may not match exactly as shown here.

## Launch the Installer

After the download has completed, click the downloaded executable file.
Because we selected the *Latest* release, the file is listed as `tws-api-latest-windows-x64.exe`.
Clicking the file from your browser, or double clicking it in the Windows Explorer will launch the Setup Wizard.
Click Next in the setup wizard when you are ready to proceed.

![Setup wizard Launch](/docs/_fern-files/_img/74559b7cdad5859ed8bda06c209ea61ea2e1d7288e002be44529f1541c057d27.webp)

## Accept the License Agreement

The first step in the setup wizard is to accept the license agreement.
Be sure to thoroughly read the contents until the end prior to acceptance.
After reading the content, select "I accept the agreement", click "Next".

![Setup wizard agreement](/docs/_fern-files/interactive-brokers-585439.docs.buildwithfern.com/76e61ea0d1e8ab8b4b4c1843936a8aed9303f0c76538c688218f23b1e6e64919/docs/assets/media/twsapi_install_2.png)

## Select Destination Directory

Enter your destination directory.
C# or Excel users should use the default install location on the C: drive.
After defining your destination, click "Next".

![Setup wizard destination](/docs/_fern-files/_img/ed34f61d8531a5f99c42c09eef817bc62845afc957ca947a8683f931bd07be4e.webp)

## Select Install Components

The TWS API allows users to select the specific languages and components to install.
Users planning to install DDE/Excel API must also install the Java API. Upon unchecking the Excel option, Java will be available to uncheck.
After deciding which components to install, click "Next".

> **Info**
>
> Feel free to uncheck any components you are not using.

![Setup wizard compnent selection](/docs/_fern-files/_img/c184f13cd6c7e142e766e6b9300918d422bee200cd011f28bb4e16a232efcc8a.webp)

## Completed

After the software has had time to install, the TWS API is now available for use.
Click "Finish".

> **Warning**
>
> Python users must [Update the Python Interpreter](../../../tws-api/doc/unique-configurations/updating-the-python-interpreter.md) to interact with the API.

![Setup wizard completed](/docs/_fern-files/_img/a2b818bd5fc400883157c2a0d8e91d6190cdb3370edb527795a75a21540585ba.webp)
