---
description: This article describes all improvements and bug fixes delivered in Syskit 2016 R2 – 8.0.1.
---

# Syskit 2016 R2 8.0.1 - Release Note

We have shipped Syskit 2016 R2 – 8.0.1. It’s one of the minor releases, with a couple of bug fixes.

[Click here to download the new release.](https://www.syskit.com/products/monitor/download)

Product version: 8.0.1  
Build number: 34186  
Database version: 8.0.0

Release date: Oct 6, 2016

## Bug Fixes

* Syskit was not working properly while gathering published applications in Citrix XenDesktop 7.x environment.
* Quick Start Guide panel, shown on the right upon starting Syskit, has been updated with new screenshots.
* Data retrieval while opening the **Manage Users** dialog has been enhanced and optimized.
* Unused **domains** couldn’t be deleted in the **Data Retention** system job. Missing reference for Computer Groups has been added upon deletion of a domain from the product database.
* Memory leak during retrieval of Citrix virtualized applications has been fixed.
* **WMI diagnostics** option on the Administration was not working when a large amount of data was retrieved.
* Improved deletion of large numbers of servers, which caused timeouts and deadlocks.
* In some cases, the **Configuration Wizard** was throwing exceptions while assigning a default schema to a Syskit’s service user on a SQL Server.

