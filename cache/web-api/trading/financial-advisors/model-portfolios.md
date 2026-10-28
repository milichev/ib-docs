> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## Model Portfolio Invest / Divest / Rebalance API - Integration Guide

**Audience:** Client developers (Financial Advisor tooling) integrating with IBKR's Model Portfolio Web API.

**Scope:** This guide explains *how the endpoints work together* to create a model, invest client accounts into it, execute the resulting trades, and verify the result. It does not repeat field-level schemas - those live in the OpenAPI reference. Where useful, it calls out quirks, sequencing rules, and known issues that are not obvious from the schema alone.

**Base URL:** `https://api.ibkr.com/v1/api/...`

**Common headers (all FA microservice calls):**

```
Accept: application/json
Content-Type: application/json
```

Two distinct API surfaces are involved in a full Invest/Divest/Rebalance flow:

| Surface               | Path prefix           | Responsibility                                                                                                                           |
| --------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| FA Model microservice | `/v1/api/fa/...`      | Model CRUD, target math, presets, computing which shares need to move (as transfers and/or orders)                                       |
| IServer trading API   | `/v1/api/iserver/...` | Actually authenticating a trading session and submitting the resulting **orders** for the "allocation" leg of an invest/divest/rebalance |

Everything the FA microservice returns (transfers, allocations) is a *plan*. Nothing trades or moves cash until you explicitly (a) submit the cached transfers via `/model/submit-transfers`, and/or (b) submit orders via the IServer order endpoint.

### 1. Key Concepts

Before wiring the endpoints together, it helps to understand the domain model:

* **Independent / "Core"** - the portion of an account's portfolio that is *not* allocated to any model. Every account effectively has `account.Core` plus `account.<ModelName>` for each model it participates in.
* **Model** - a named target allocation (`positionTargets` + `cashTargets`, expressed as fractions of NLV, summing to `1.0`). Models can be:
  * **Dynamic** (`isStatic:false`) - targets are percentages, driftable.
  * **Static** (`isStatic:true`) - must be bootstrapped to be recognized as static.
* **Bootstrapped** - a model only has a real Model %/NLV once at least one account has invested. Before that, `summary`/`positions` return zeros and `bootstrapped:false`. `invest-divest` will silently bootstrap a dynamic model as part of handling the request if it isn't already.
* **Target % vs. Actual % (Model %)** - Target % is what you *want*; Actual % (a.k.a. Model %, MI %) is what the model currently holds. `instrumentImbalance` is the (weighted) delta between them. See §8 for the imbalance formulas.
* **NLV** - Net Liquidation Value, always expressed in the *base currency* of the entity in question (master, account, or model).
* **Full vs. Partial Master** - some model actions (Invest/Divest/Rebalance) may be blocked for a partial master. Check with `/is-full-master` if unsure.
* **Single-currency constraint** - a model's `positionTargets` + `cashTargets` must all trade/settle in one currency. Mixed-currency target sets are rejected.
* **transfersInstructionId** - a server-side cache key. Any endpoint that computes a set of moves (`invest-divest`, `tws-invest-divest`, `rebalance/*`) returns this ID. It is *not* itself an execution - you must follow up with `/model/submit-transfers` (for the transfer leg) and/or an IServer order (for the allocation/order leg) to actually make it happen. Re-submitting the same `transfersInstructionId` is an error.

---

### 2. FA Presets - They Change What "Invest" Actually Does

`GET/POST /fa-preset/get` and `/fa-preset/save` control *how* the planning endpoints (`invest-divest`, `tws-invest-divest`, `rebalance/*`) decide to satisfy a target: buy new shares, transfer existing Independent shares into the model, cross trades, etc. **Always fetch presets before planning an investment**, and set them explicitly if the default behavior isn't what you want.

| Preset                                      | Effect when `true`                                                                                                                                                                                                                                                                 |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preferTransferFromIndependent`             | If the account already holds the instrument in its Independent (Core) bucket, transfer those shares into the model instead of generating a BUY order. This is the difference between getting a `positionTransfers` entry vs. an `allocations` entry in the invest-divest response. |
| `closeDivestIndependentPosition`            | On divest, fully close out any matching Independent position rather than leaving a residual.                                                                                                                                                                                       |
| `preferCrossWithIndependent`                | Prefer internal crossing against the account's Independent side over external orders.                                                                                                                                                                                              |
| `fullyInvestExistingLongPositions`          | Treat existing long Independent positions as fully investable toward the target.                                                                                                                                                                                                   |
| `avoidNegativeCashInIndependent`            | Avoid actions that would push Independent cash negative.                                                                                                                                                                                                                           |
| `useToleranceRange`                         | Skip generating an allocation for an instrument whose imbalance is within tolerance (≈ target%/100 of target), rather than rebalancing every last share.                                                                                                                           |
| `useNonBaseCcy`                             | Allow use of non-base-currency cash balances when funding an investment.                                                                                                                                                                                                           |
| `keepModelOpen`                             | UI/session hint - keep model in an "open" editing state.                                                                                                                                                                                                                           |
| `roundAllocationQuantityToExchangeBoardLot` | Round share allocations to the exchange's board lot size.                                                                                                                                                                                                                          |

**Workflow implication:** In Case 1A, the first `invest-divest` call (with `preferTransferFromIndependent:false`) produced a **BUY order allocation** for CSCO. After flipping the preset to `true` and re-running the identical `invest-divest` request, the plan changed to a **position transfer** for CSCO from Independent into the model. Nothing about the `invest-divest` request itself changed - only the preset. Always treat presets as sticky, account-level configuration that silently reshapes the output of every subsequent planning call.

---

### 3. Endpoint Catalog (grouped by role)

| Category             | Endpoint                                             | Purpose                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Model definition** | `POST /fa/model/save`                                | Create or update a model's name/description/targets. If the model name exists, it's updated; otherwise created.                                                              |
|                      | `POST /fa/model/delete`                              | Delete a model and its targets.                                                                                                                                              |
|                      | `POST /fa/model/save-ccy`                            | Change a model's base currency.                                                                                                                                              |
| **Model discovery**  | `POST /fa/model/list`                                | List all models for the master, with lightweight status (bootstrapped, NLV, mismatch, etc.).                                                                                 |
|                      | `POST /fa/model/summary`                             | Same lightweight status for a single named model.                                                                                                                            |
| **Model insight**    | `POST /fa/model/positions`                           | Per-instrument Target % / Actual % / imbalance / NLV for a model (model-level, not per-account).                                                                             |
|                      | `POST /fa/model/accounts-details`                    | Per-account breakdown (cost basis, NLV, imbalance, unrealized PnL) for accounts invested in a model. 50-account limit; see §9.                                               |
|                      | `POST /fa/model/invest-divest-positions`             | Per-account view used to *drive* an Invest/Divest screen - shows how much of each account's NLV sits in Independent (position vs. cash), in this model, and in other models. |
|                      | `POST /fa/model/imbalance`                           | Aggregate Model Imbalance % per model (computationally expensive; separate call from `/model/list`). Not supported if `numAccounts > 50`.                                    |
| **Preferences**      | `POST /fa/fa-preset/get` / `POST /fa/fa-preset/save` | Read/write the FA presets described in §2.                                                                                                                                   |
| **Plan an action**   | `POST /fa/model/invest-divest`                       | Compute the transfers/allocations needed to move an account to a target amount/% in one model (CP-style, single model per account per call).                                 |
|                      | `POST /fa/model/tws-invest-divest`                   | Same idea, but TWS-style: one account/group/list can target **multiple models** in a single call, and returns `batchNumber` to sequence execution.                           |
|                      | `POST /fa/model/rebalance/to-existing-targets`       | Recompute allocations to bring a model back to its **currently saved** targets.                                                                                              |
|                      | `POST /fa/model/rebalance/to-new-targets`            | Recompute allocations against a **brand-new full target set** (targets must sum to 1.0); also persists the new targets to the model, same as `/model/save`.                  |
|                      | `POST /fa/model/rebalance/to-specific-targets`       | Same shape as `to-new-targets`, but scoped to only the contracts you list - no "sum to 1.0" validation. Use this for "rebalance just these 1-2 rows."                        |
|                      | `POST /fa/model/cash-analyzer`                       | Detect/plan cleanup of non-model-currency cash sitting in multi-currency models.                                                                                             |
| **Execute a plan**   | `POST /fa/model/submit-transfers`                    | Transmit the cash/position transfers cached under a `transfersInstructionId` to the back office. Does **not** submit orders.                                                 |
|                      | `POST /iserver/account/{modelCode}/orders`           | Submit the actual **order(s)** for the allocation leg of a plan (see §5).                                                                                                    |
| **Utilities**        | `POST /fa/is-full-master`                            | Determine whether the calling master account is a full or partial master (some actions are blocked for partial masters).                                                     |

---

### 4. End-to-End Workflow: Invest a Single Account (Long-Only)

This is the reference flow from Case 1A. It composes the endpoints above into six logical phases.

```
1. Define the model -> 2. Verify creation -> 3. Presets check -> 4. Plan & execute the investment -> 5. Verify result
```

#### Phase 1 - Define the model

`POST /fa/model/save` with `positionTargets` (by `conid`) and `cashTargets` (by `ccy`), all fractions summing to `1.0`. Example: 45% CSCO / 45% INTC / 10% USD cash reserve.

* If `success:false`, inspect `error` - common causes: mixed currencies among targets, targets not summing to 1.0, or model name reused the same day it was deleted.

#### Phase 2 - Verify creation

Use `/fa/model/summary` (single model) and/or `/fa/model/list` (all models) to confirm the model exists. Immediately after creation the model is **not bootstrapped** (`bootstrapped:false`, `nlv:"0"`, `numAccounts:0`) - this is expected; bootstrapping happens automatically the first time money is invested.

Cross-check the targets landed correctly with `/fa/model/positions` (`sortField:""`, `limit:-1` to get the full, unsorted list). Before any account has invested, `actual` will be `0` for every row and `target` will echo what you saved.

#### Phase 3 - Check/set FA Presets

Call `/fa-preset/get` and decide whether the defaults suit this investment. In the reference case, the default `preferTransferFromIndependent:false` would have generated a **BUY order** for CSCO even though the account's Independent bucket already held CSCO shares. To transfer those shares into the model instead of buying more, call `/fa-preset/save` with `preferTransferFromIndependent:true`.

You may also want `/fa/model/invest-divest-positions` here - it shows, per account, how much NLV currently sits in Independent positions vs. Independent cash vs. this model vs. other models. This is informational context for deciding how much to invest and whether a transfer-from-Independent makes sense.

#### Phase 4 - Plan and execute the investment

1. `POST /fa/model/invest-divest` with `accountList: [{account, amtToInvest}]`.

   * This is a **polling** endpoint - see §5. The *final* response (once `subscriptionStatus:1`) contains:
     * `transfersInstructionId` - the cache key for phase 4b/4c.
     * `cashTransfers[]` - cash moves from `Core` into the model.
     * `positionTransfers[]` - share transfers from Independent into the model (only populated when the relevant preset, e.g. `preferTransferFromIndependent`, causes a transfer instead of a trade).
     * `allocations[]` - instruments that instead require a **new order** to be placed (because no preset directed a transfer, or the account didn't hold the shares).
   * It is entirely normal for the *same* invest call to return one instrument as a `positionTransfer` and a different instrument as an `allocation` - the decision is made per instrument based on whether the account's Independent bucket already holds it and what the presets say.

2. **4a - Submit the transfers.** `POST /fa/model/submit-transfers` with the `transfersInstructionId` from step 1. This commits the cash + position transfers that don't require new market orders. It's a fire-and-forget commit - success means the base cash transfer succeeded (other transfers may still be checked individually via `error`).

3. **4b - Submit the orders.** For every entry in `allocations[]`, an order must be placed through the **IServer trading API**, not the FA microservice. See Section #5 for the detailed sub-sequence (auth, suppress precautions, fetch model allocation codes, submit order). Wait for the order to fill before treating the investment as complete - partial fills will show up as imbalance in later verification calls.

#### Phase 5 - Verify the investment

* `/fa/model/accounts-details` (with `calcPnls:true`) - per-account cost basis, NLV, unrealized PnL, and count of instruments outside target range.
* `/fa/model/summary` - model is now `bootstrapped:true`, has a real NLV and `numAccounts:1`.
* `/fa/model/positions` - per-instrument actual vs. target, now populated.
* `/fa/model/invest-divest-positions` - confirms `accountModelNlv` reflects the new investment.

---

### 5. Order Submission via IServer (the "allocation" leg)

The FA microservice never talks to the exchange directly - for any `allocations[]` entries returned by `invest-divest` / `tws-invest-divest` / `rebalance/*`, you must submit real orders through the trading gateway. This is a separate authentication context (OAuth 2.0-based IServer session), and is the same order-submission surface used for all IBKR trading, with two additions specific to models:

1. **Authenticate the trading session:** `POST /iserver/auth/ssodh/init`

2. **Suppress order precaution dialogs** (required for unattended/API submission): `POST /iserver/questions/suppress` with the standard list of message IDs.

3. **Fetch the model→account allocation codes** (prerequisite before any model order): `GET /iserver/account/allocation/models` Returns a map of model name → an internal allocation code string. You need this step once per session before placing model orders - it's how the trading gateway resolves `isModel:true` orders to the correct FA account groupings.

4. **Submit the order**, targeting the *model* as the account context: `POST /iserver/account/{modelCode}/orders` Key fields that make this a "model order":
   * `"acctId": "<model name>"`, `"isModel": true`
   * `conidex` = the instrument's conid to allocate
   * `jsonPayload.allocation_profile` - `alloc_type: "SHARE"` with a list of `{account, amount}` pairs (the quantity to allocate to each underlying account). The `quantity` you allocate here should match the `quantity` reported in the corresponding `allocations[]` entry from the planning call.

The response gives you an `order_id` / `local_order_id` and initial `order_status` (e.g. `PreSubmitted`). **Wait for the fill** before treating the invest/divest/rebalance as complete - subsequent verification calls (`/model/positions`, `/model/accounts-details`) reflect *actual* positions, not pending orders.

---

### 6. Polling Pattern (`subscriptionKey` / `subscriptionStatus`)

Several planning endpoints (`invest-divest`, `rebalance/*`, `tws-invest-divest`) can take longer than a single request/response round trip because they may need to bootstrap a model, fetch CCP snapshots, or compute large allocation sets. These use a simple polling contract:

1. **First call:** either omit `subscriptionKey` entirely, or send it as an empty string `""`, to *start* the async computation.
2. **Immediate response** may come back "not ready": `subscriptionStatus: 0`, with a `subscriptionKey` (e.g. `"1"`) that identifies the in-flight job.
3. **Poll:** re-send the *identical request payload*, but now with `subscriptionKey` set to the value you were given. Repeat until `subscriptionStatus: 1`, at which point the response body contains the full result (transfers, allocations, etc.).

Other endpoints not involved in heavy computation (`/model/save`, `/model/summary`, `/fa-preset/get`, `/is-full-master`, etc.) always return `subscriptionStatus:1` immediately - there's nothing to poll.

---

### 7. Rebalancing - Three Flavors, One Response Shape

All three rebalance endpoints return the same response shape (`allocations`, `allocationTotals`, `positionTransfers`, `miPositionTransfers`, `contractsAllocEnabled`, `contractsCashQtyEnabled`, `contractsFracEligible`, `accountsCanTradeFractions`, `errors`, `warnings`) and a `transfersInstructionId` you feed to `/model/submit-transfers` / IServer order submission exactly like an invest-divest plan. They differ only in what targets they rebalance against:

| Endpoint                               | Targets used                                                                                                          | Validation                                                                                  |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `/model/rebalance/to-existing-targets` | Whatever is currently saved on the model                                                                              | Model must already be bootstrapped                                                          |
| `/model/rebalance/to-new-targets`      | A brand-new full target set you supply in the request (and which gets **persisted** to the model, like `/model/save`) | Targets must sum to `1.0`; at least one position target and one cash target required        |
| `/model/rebalance/to-specific-targets` | A **partial** target set - only the conids you list are touched                                                       | No "sum to 1.0" or completeness validation - this is the "rebalance just these rows" option |

Use `to-specific-targets` when a user selects one or two rows in a UI and wants to correct only those, without disturbing the rest of the model's allocation.

---

### 8. Multi-Model / Batch Invest (`tws-invest-divest`)

`/model/tws-invest-divest` exists for flows where a single account (or group/list of accounts) needs to invest into **multiple models in one call** - e.g., "put $10K into Model A and $20K into Model B for this account." Each entry in `modelList[]` can independently specify `targetAmt`, `targetPercent` (use `0.00` for full divest), or `amtToInvest` (negative to divest).

#### Who to invest - account, list, or group

`tws-invest-divest` accepts the invest target in one of three mutually exclusive shapes at the top level of the request:

| Shape                         | Field         | Example                                                | Semantics                                                                                                                                                                          |
| ----------------------------- | ------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Single U-account              | `account`     | `"account": "DUXXXX123"`                               | Invest just this one account.                                                                                                                                                      |
| Explicit list of U-accounts   | `accountList` | `"accountList": ["DUXXXX123","DUXXXX124","DUXXXX125"]` | Invest each account in the list. The investment amount for each model is **split equally** across the listed accounts.                                                             |
| FA pre-trade allocation group | `group`       | `"group": "Group1"` or `"group": "All"`                | Invest every account in the named FA allocation group. `"All"` targets every account under the master. The amount for each model is **split equally** across the group's accounts. |

Whether you pass `accountList` or `group`, the invest amount for a given model is divided equally between the resolved set of accounts - you cannot specify per-account amounts on `tws-invest-divest`. If you need per-account amounts, use `/invest-divest` (see the comparison below).

#### `tws-invest-divest` vs. `invest-divest`

| Dimension                      | `/fa/model/tws-invest-divest`                                                                                | `/fa/model/invest-divest`                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Models per request             | **Multiple** - `modelList[]` may target several models in one call                                           | **One** - a single model per call                                 |
| Per-model amount specification | One of `targetAmt` / `targetPercent` / `amtToInvest` per entry in `modelList[]`                              | One amount per account in `accountList[{account, amtToInvest}]`   |
| Model currency                 | Instruments may span **multiple currencies** within a single model                                           | **Single-currency** models only                                   |
| Per-account amount control     | No - one amount per model is split equally across the account set (single account / `accountList` / `group`) | Yes - each account in `accountList` carries its own `amtToInvest` |
| Group / "All" support          | Yes - named FA allocation group or `"All"`                                                                   | No - accounts must be listed individually                         |

**Choosing between them:**

* Reach for `tws-invest-divest` when you need multi-currency instruments in a model, when you want a single account/list/group to invest into several models at once, or when you're already thinking in terms of FA allocation groups.
* Reach for `invest-divest` when each account needs a *different* investment amount, since `tws-invest-divest` splits one amount equally across all target accounts when a list or group is used.

#### Batch ordering on the response

The response mirrors `invest-divest` but tags every `cashTransfers` / `positionTransfers` / `allocations` entry with a `batchNumber`. **Respect batch ordering when submitting** - batches are sequenced so that closing/freeing orders run before conversions, which run before opening/spending orders, matching how Multi Currency Model conversions must be sequenced to avoid transient negative cash.

---

### 9. Supporting / Maintenance Endpoints

* **`/model/delete`** - deletes both the model and its targets. Note: a model **cannot be re-created with the same name the same day it was deleted** - you must wait at least one day.
* **`/is-full-master`** - call this defensively before attempting Invest/Divest/Rebalance if you're unsure of the master account type; partial masters may have these actions blocked outright.
* **`/model/cash-analyzer`** - for multi-currency models, detects undesired non-model-currency cash balances sitting in `account.Model` buckets and returns the cash transfers / FX-conversion orders needed to clean them up. Also surfaces `marginWarning:true` if a margined account has gone negative in a non-base currency. If `accountList` is omitted, it scans the master's entire book.

---

### 10. Limits & Constraints to Design Around

| Constraint                                | Detail                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Query allocation codes first              | Ensure `GET /iserver/account/allocation/models` is queried **first**, prior to interacting with model portfolios via the Web API. This should help reduce HTTP 400 errors from `POST /iserver/account/{modelCode}/orders` etc.                                                                                                                                                  |
| 50-account cap                            | `/model/imbalance` and `/model/accounts-details` return reduced/blank data once `numAccounts > 50` for the model (imbalance becomes unsupported; accounts-details drops Cost Basis/UnrPnL and just returns Code/Alias/NLV/Ind Cash). `/model/positions` does **not** have this restriction - it aggregates without holding per-account snapshots in memory.                     |
| Single currency per model                 | All `positionTargets` + `cashTargets` on a model must share one trading currency. Violations are rejected both on `/model/save` and on rebalance actions.                                                                                                                                                                                                                       |
| Targets must sum to 1.0                   | Enforced on `/model/save` and `/model/rebalance/to-new-targets`; **not** enforced on `/model/rebalance/to-specific-targets`.                                                                                                                                                                                                                                                    |
| One-time transfersInstructionId           | Re-submitting the same `transfersInstructionId` to `/model/submit-transfers` is treated as an error (duplicate).                                                                                                                                                                                                                                                                |
| Corporate-action / mismatched instruments | If a model's holdings have drifted from its saved target conids due to a corporate action, `mismatch:true` is surfaced on `/model/list`, `/model/summary`, and `/model/positions` (`mismatchType`: `1` = in Targets but not MI, `2` = in MI but not Targets). Plan/invest calls reject with a "Corporate Actions have changed instruments..." error until targets are reviewed. |