> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Exercise Options

## Exercise Options

Exercising an option via websocket is a multi-step flow requiring a series of handshake and confirmation requests. Developers should also maintain [Live Order Updates](/docs/web-api/ws/order-updates) during the exercise process to confirm final results.

### Step 1: Initiate Exercise

Send the `shs` topic with the `exercise` argument and pass the option's contract identifier in the `CEX` field.

```
shs+exercise+{"CEX":"Your_Option_Conid"}
```

### Step 2: Receive Available Actions

The server responds with an acknowledgement followed by a message containing available user actions (such as `"Submit"` or `"Cancel"`), contract details, position information, and a tracking `id`. An in-the-money warning notification may also be received and should be noted but does not require a response.

```json wordWrap
{"topic":"shs+exercise"}

{"data":{"user_action":[{"id":"submit","text":"Submit"},{"id":"cancel","text":"Cancel"}],"underlying_price":"$211.35","contract":"**AAPL** JUN 28 '24 192.5 Call","underlying_symbol":"AAPL","exercise":{"confirm":false,"confirm_final":false,"enabled":true},"revocable":false,"loading":true,"hold":{"confirm":false,"enabled":true},"qty_lapse":0,"submitted":0,"qty_hold":0,"sec_type":"OPT","qty_exercise":0,"underlying_conid":"265598","morning_expiration":false,"id":5,"position":50,"deadline":"16:25"},"action":"content","MID":"14","topic":"shs+exercise"}

{"data":{"submitted":0,"qty_hold":0,"qty_exercise":0,"warning":"Currently the option is in-the-money by the amount of 18.85 (more than 5 ticks)","exercise":{"confirm":false,"enabled":true},"revocable":false,"loading":false,"qty_lapse":0},"action":"content","MID":"17","topic":"shs+exercise"}
```

### Step 3: Submit the Exercise Request

After receiving the `id` from the prior response, send an `inp` topic with the `exercise` argument. Pass the `id`, set `user_action` to `"submit"`, specify whether the exercise should be final with `make_final`, and provide the quantity to exercise via `value`.

```
inp+exercise+{"action":"user_input","data":{"id":"5","user_action":"submit","exercise":{"allowed":"not_shown","make_final":true,"value":5}}}
```

### Step 4: Handle Confirmation Warnings

If additional confirmation or warnings are required, a new message is delivered with a new `id`. Respond with the `inp+exercise` topic, passing the new `id` and `"continue"` as the `user_action`.

```json wordWrap
{"data":{"user_actions":[{"id":"continue","text":"Continue"},{"id":"cancel","text":"Cancel"}],"id":7,"text":"This exercise request will be final and irreversible. Once submitted, the option position and the stock position will update immediately.","title":"Warning"},"MID":"19","action":"prompt","topic":"inp+exercise"}
```

```
inp+exercise+{"action":"user_input","data":{"id":"7","user_action":"continue"}}
```

### Step 5: Confirm Order via Live Order Updates

Once the exercise is confirmed, an order update is delivered via the `sor` websocket topic.

```json wordWrap
{"topic":"sor","args":[{"acct":"DU1234567","conidex":"708764406","conid":708764406,"account":"DU1234567","orderId":827785484,"cashCcy":"USD","sizeAndFills":"0/5","orderDesc":"EXERCISE 5, Day","description1":"AAPL","description2":"JUN 28 '24 192.5 Call","ticker":"AAPL","secType":"OPT","remainingQuantity":5.0,"filledQuantity":0.0,"totalSize":5.0,"companyName":"APPLE INC","status":"Inactive","order_ccp_status":"Pending Submit","supportsTaxOpt":"1","lastExecutionTime":"240624150344","bgColor":"#000000","fgColor":"#AFAFAF","isEventTrading":"0","lastExecutionTime_r":1719241424000,"side":"EXER"}]}
```