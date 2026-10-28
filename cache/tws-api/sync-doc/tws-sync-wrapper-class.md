> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# TWSSyncWrapper Class

The `TWSSyncWrapper` class is produced from the `ibapi/sync_wrapper` file. Clients looking to utilize the class may seek to replace their typical imports for `ibapi/client` and `ibapi/wrapper` with an import for `from ibapi.sync_wrapper import TWSSyncWrapper`.

## Constructor Arguments

**`timeout`** `int32`

Default timeout in seconds applied to all connected functions. If not specified, a default value of 30 seconds is used.

---

```python
from ibapi.sync_wrapper import TWSSyncWrapper

app = TWSSyncWrapper(timeout=30)
```