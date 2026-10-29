[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/account-management-introduction/system-availability)

# System Availability

<table>
  <thead>
    <tr>
      <th>
        Service Type
      </th>

      <th>
        Downtime
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Client Registration and Account Maintenance**\

        /gw/api/v1/accounts\*\

        /gw/api/v1/statements\*\

        /gw/api/v1/tax-documents\*\

        /gw/api/v1/enumerations\*
      </td>

      <td>
        Daily between 6pm ET–6:01pm ET.\

        Sundays and Tuesdays between 6pm ET to 6:30pm ET
      </td>
    </tr>

    <tr>
      <td>
        **Funds and Banking**\

        /gw/api/v1/bank-instructions\*\

        /gw/api/v1/client-instructions\*\

        /gw/api/v1/instruction\*\

        /gw/api/v1/external-asset-transfers\*\

        /gw/api/v1/external-cash-transfers\*\

        /gw/api/v1/internal\*
      </td>

      <td>
        Daily between 11:45pm ET-12:30am ET\

        Saturdays (any time), Sundays before 3PM ET
      </td>
    </tr>
  </tbody>
</table>

System Status: [https://www.interactivebrokers.com/en/software/systemStatus.php](https://www.interactivebrokers.com/en/software/systemStatus.php)

### Rate Limiting

Interactive Brokers enforces a global request rate limit for the Account Management Web API:

* **10 requests per second** per endpoint
* **600 requests per minute** per master account (10 requests × 60 seconds)

##### Authentication Scope

Authentication for the Account Management API operates at the master account level, distinguishing it from the trading API's user-level authentication structure.

##### Exceeding Rate Limits

If your application exceeds these established rate limits, the API will respond with a **429 HTTP status code** (Too Many Requests).
