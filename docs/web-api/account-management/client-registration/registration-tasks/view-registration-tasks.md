[source](https://www.interactivebrokers.com/docs/web-api/account-management/client-registration/registration-tasks/view-registration-tasks)

# View Registration Tasks

IBKR will include the status of registration tasks in response file that is returned when creating an account via the API.

`documents:` Represents tasks that were included and processed when creating account via the API.

`pendingTasks`: Represents tasks that are required for account approval. Hosting firm is responsible for communicating pending tasks required for approval to the end user.

The `gw/api/v1/accounts/{accountId}/tasks` can be used to view registration tasks which are associated with an account after an account has been created.

IBKR segregates tasks into **two types**:

**`type=pending:`** View pending (incomplete) registration tasks which are **required** for account approval.

* If a registration task is assigned to a pending account and the task is not required for account approval, the task will not be returned in response.
* If registration task is assigned to an opened account and the task is required for an account upgrade, the task will not be returned in response.

**`type=registration`** :View all tasks associated with an account irrespective of the account status or state of the registration task.

* View date/time which user completed specific registration task.
* View registration tasks which the client needs to complete in order to trade or maintain account with IBKR.
