[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/family-codes/introduction)

# Introduction

It is possible to determine from the API whether an account exists under an account family, and find the family code using the function reqFamilyCodes.

For instance, if individual account U112233 is under a financial advisor with account number F445566, if the function reqFamilyCodes is invoked for the user of account U112233, the family code "F445566A" will be returned, indicating that it belongs within that account family.
