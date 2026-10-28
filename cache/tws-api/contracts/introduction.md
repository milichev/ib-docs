> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

The content within this section provides insight on how to define the [Contract Object](/docs/tws-api/ref/contract) for an affiliated security type. The contents herein assume developers are readily familiar with the fields of the [Contract Object](/docs/tws-api/ref/contract) and focuses on insights for specific fields required for the given instruments.

## Contract Identifier

The standard details needed to lookup most contracts requires a minimum of: `Symbol`, `SecType`, `Exchange`, `Currency`; however, Interactive Brokers strongly advises the use of contract identifier, or `ConId`, and `Exchange`. These two values provide a complete contract definition as the contract identifier is a uniquely defined value for a given financial instrument.

These conids are static for each and every contract and will never change. For example, the contract identifier for *Apple Incorporated* as hosted on NASDAQ is and will remain as `265598` unless the contract is delisted or the company is no longer public.