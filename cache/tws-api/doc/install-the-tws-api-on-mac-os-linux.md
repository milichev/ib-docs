> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Install the TWS API on MacOs / Linux

1. Download the IB API for Mac/Unix zip file to your local machine from [https://download2.interactivebrokers.com/installers/tws-api/index.html](https://download2.interactivebrokers.com/installers/tws-api/index.html)
2. Once you have clicked "I Agree", select the download option under the Mac/Unix section to download the API Software.
3. This will download `twsapi_macunix.<Major Version>.<Minor Version>.zip` to your computer (where \<Major Version> and \<Minor Version> are the major and minor version numbers respectively).
   * By default, this will be in your user's Downloads folder.
4. Open MacOS Terminal
   1. Press the `Command+Space` keyboard commands to launch Spotlight.
   2. Type `terminal` and press **Return**
5. Navigate to your Downloads directory to find the zip file by entering `cd ~/Downloads` then press **Return**.
6. Unzip the API folder with `sudo unzip twsapi_macunix.<Major Version>.<Minor Version>.zip -d $HOME/` and press **Return**.
7. Verify the API contents are successfully unzipped to your `$HOME` directory.
   1. `cd ~/IBJts`
   2. `ll -la`
   3. This will display a list of files in the directory, including `samples`, `source`, and `API_VersionNum.txt`

**Notes:**

* On MacOS, if you directly open the `twsapi_macunix.<Major Version>.<Minor Version>.zip` file through Finder, you will receive error: "Unable to expand…… It is an unsupported format". It is **required** for users to unzip the zipped TWS API file using the above MacOS Terminal command.
* **PYTHON** While [Updating the Python Interpreter](/docs/tws-api/doc/unique-configurations/updating-the-python-interpreter), running `python3 setup.py install` may display "`ModuleNotFoundError: No Module named 'setuptools'`:. As `setuptools` is deprecated, this may be fixed by:
  1. Navigate to the installation folder. By default, this is done in the terminal with `cd ~/IBJts/source/pythonclient`
  2. Grant write permission on the target folder (e.g. ) using `sudo chmod -R 777` in order to avoid "`error: could not create 'ibapi.egg-info': Permission denied`".
  3. Run `python3 -m pip install .`"