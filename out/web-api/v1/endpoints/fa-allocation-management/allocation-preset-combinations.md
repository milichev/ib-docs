[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fa-allocation-management/allocation-preset-combinations)

# Allocation Preset Combinations

In order to attain specific allocation behaviors, a combination of various settings must be specified. The tables below detail what settings must be used.Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified.

The preset settings are based on the Advisor Presets setting built in TWS.\
Every time a user logs in to TWS, the presets established in the CPAPI will update to reflect the settings in TWS.\
Presets adjusted in the Web API will not adjust the settings in TWS.

#### IB-computed allocation methods

| Intended Behavior                                                                                | Proportional Allocation             | Closing Behavior                 |
| ------------------------------------------------------------------------------------------------ | ----------------------------------- | -------------------------------- |
| Make positions be proportional based on method                                                   | group_proportional_allocation=false | group_auto_close_positions=true  |
| Distribute shares based on method selected                                                       | group_proportional_allocation=true  | group_auto_close_positions=true  |
| Distribute shares based on method selected, do not prioritize accounts that are closing position | group_proportional_allocation=true  | group_auto_close_positions=false |

#### User-specified allocation methods

###### Formerly known as Allocation Profiles

| Intended Behavior                                                                                | Closing Behavior                   |
| ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| Distribute shares based on method selected                                                       | profile_auto_close_positions=true  |
| Distribute shares based on method selected, do not prioritize accounts that are closing position | profile_auto_close_positions=false |
