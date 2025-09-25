---
sidebar_position: 3
description: This article explains how to upgrade the Syskit Monitor to the latest major version.
---

# Upgrade to the Latest Version

Syskit Monitor database, application settings and data will be conserved in the upgrade process.

:::warning
**Please note!**  
We recommend you to perform the database backup before proceeding with the upgrade process.
:::


1. Download the latest Syskit Monitor version and run the **SysKitMonitorSetup.exe**.
2. **Install Wizard** will inform you that previous version of product, if detected, will be **uninstalled automatically**.
3. Once the installation is completed, the Syskit Monitor **Configuration Wizard** will appear.

   By default, the **Yes, use the same settings and upgrade** check box is selected. Click **Next &gt;** to skip the following steps and finish the Configuration Wizard. Previously stored database and service account information will be used.

   If you decide to unselect this check box, you will have to go through all the steps in the [Configuration Wizard](configuration-wizard/configure-monitor.md), including entering the database server name and service account information.

:::warning
**Please note!**  
Syskit Monitor requires configuration with a dedicated [Service Account](../requirements/user-permission-requirements.md), so you will be prompted to enter the password for such an account.
:::


