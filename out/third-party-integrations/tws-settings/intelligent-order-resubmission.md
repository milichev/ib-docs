[source](https://www.interactivebrokers.com/docs/third-party-integrations/tws-settings/intelligent-order-resubmission)

# Intelligent Order Resubmission

The TWS Setting listed in the Global Configuration under API -> Setting for **Maintain and resubmit orders when connection is restored**, is enabled by default. When this setting is checked, all orders received while connectivity is lost will be saved and automatically resubmitted when connectivity is restored. Please note, if the Trader Workstation is closed during this time, the orders are deleted regardless of the setting.

The Global Configuration -> API -> Settings will provide a new setting for "Maintain and resubmit orders when connection is restored." This setting will automatically maintain or submit any orders on the platform after a network disconnect or the [auto-restart behavior](../../tws-api/doc/tws-settings/daily-weekly-reauthentication.md).
