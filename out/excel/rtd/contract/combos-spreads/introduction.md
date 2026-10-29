[home](../../../../index.md) | [excel](../../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/contract/combos-spreads/introduction)

# Introduction

Spread contracts, also known as combos or combinations, combine two or more instruments. To define a combination contract it is required to know the Contract ID of the combo legs. The ConId can be easily found in the Contract Description page in TWS. The spread contract's symbol can be either the symbol of one of the contract legs or, for two-legged combinations the symbols of both legs separated by a comma as shown in the examples below.

Simple Syntax is not sufficient to define spread contracts. You need to use either [Complex Syntax](../../ticker/complex-syntax.md) . As a reminder, here is the string formula for defining the Combo Legs:

"cmb=\<conid1>#\<ratio1>#\<action1>#\<exchange1>;\<conid2>#\<ratio2>#\<action2>#\<exchange2>;"
