[home](../../../index.md) | [excel](../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/notes-limitations/outgoing-message-rate-limitation)

# Outgoing Message Rate Limitation

It is important to keep in mind the 50 message/second API limit applies to RTD Server in the same way as other socket-based API technologies. So the Excel spreadsheet can send no more than 50 messages/second to TWS. Each subscription or cancellation request counts as 1 message (messages in the opposite direction are not included). So a spreadsheet can have hundreds of streaming tickers, but the subscriptions must be spread out over time so that no more than 50 new subscriptions are made per second, or the spreadsheet can become disconnected.
