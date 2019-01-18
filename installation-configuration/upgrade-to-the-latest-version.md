---
title: Upgrade to the Latest Version
description: >-
  This article explains how to upgrade the SysKit Monitor to the latest major
  version.
author: Andrea Budisa
date: 23/5/207
---

# upgrade-to-the-latest-version

SysKit Monitor database, application settings and data will be conserved in the upgrade process.

> **Please note!** We recommend you to perform the database backup before proceeding with the upgrade process.

1. Download the latest SysKit Monitor version and run the **SysKitMonitorSetup.exe**.
2. **Install Wizard** will inform you that previous version of product, if detected, will be **uninstalled automatically**.
3. Once the installation is completed, the SysKit Monitor **Configuration Wizard** will appear.  

   By default, the **Yes, use the same settings and upgrade** check box is selected. Click **Next &gt;** to skip the following steps and finish the Configuration Wizard. Previously stored database and service account information will be used.  

   If you decide to unselect this check box, you will have to go through all the steps in the [Configuration Wizard](upgrade-to-the-latest-version.md#internal/installation-configuration/configuration-wizard/configure-monitor), including entering the database server name and service account information.

> **Please note!** SysKit Monitor requires configuration with a dedicated [Service Account](upgrade-to-the-latest-version.md#internal/requirements/user-permission-requirements), so you will be prompted to enter the password for such an account.

