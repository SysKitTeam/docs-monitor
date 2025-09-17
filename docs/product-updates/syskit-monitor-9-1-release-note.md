---
description: This article describes all the new features, the improvements, and the bug fixes delivered in Syskit Monitor 9.1.
---
# Syskit Monitor 9.1.0 - Release Note

We have just shipped Syskit Monitor 9.1.0.  It’s a minor release that involves a couple of improvements and bug fixes. 

[Click here to download the new release.   
](https://www.syskit.com/products/monitor/download)   
Product Version: 9.1.0   
Build Number: 2194  
Database version: 9.0.0 

### Improvements

* Syskit Monitor will **automatically detect and add the Citrix Delivery Controller** when you add Citrix Virtual Delivery Agents to Syskit Monitor, if gathering of published applications is enabled. Before, it required you to manually add Delivery Controllers to the list of monitored servers to start data collection. 
* A new column „**State**“ was added to the **Client IP Addresses and Targets** report in the Gateway Reports section to distinct more easier if the user has been idle or active at the specified time frame during his session. 

### Bug fixes

* Fixed an issue with Syskit Monitor automatically enabling the „Gather Citrix Published Apps“ option when Citrix servers were detected on the list of monitored servers. 
* Fixed an issue with the error: „_The given key was not present in the dictionary_.“ sometimes appearing the first time Syskit Monitor is installed and run in the environment.  
* Fixed an issue when the user's Active Directory status is falsely reported as disabled, resulting in missing sessions and application usage data for that particular user. 
* Fixed an issue with the Session Log Summary report not showing charts properly. 
* Fixed an issue where the timeout for WMI processing couldn't be increased.  

