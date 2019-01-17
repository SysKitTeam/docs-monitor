---
title: SQL Server Express 2012 LocalDB
author: Andrea Budisa
description: >-
  This article explains how to troubleshoot issues caused by LocalDB while
  attempting to access an existing instance using a different username or
  account.
date: 29/06/17
---

# sql-server-express-2012-localdb

This article is intended for advanced users, administrators, and IT professionals.

If you are using **Microsoft SQL Server 2012 Express LocalDB** as a database backend with SysKit Monitor, there can be permission issues while attempting to access an existing LocalDB instance using a different username or account. These configuration issues can arise when upgrading the application to a new version and using a different user account.

By default, access to the instance of LocalDB is **limited to its owner**. The data contained in the LocalDB is protected by file system access to the database files. Ownership of the LocalDB instance **cannot be changed**. It is owned by the user that was used for the configuration.

If you are having connection problems and getting errors while accessing the LocalDB instance, we recommend that you **delete the instance** owned by the other user and create a new instance under a different user.

> **Please note**! If you want to use a different user account, the existing database cannot be used!

To delete completely the LocalDB instance that is owned by the old user, open **Regedit.exe** and search for “**SysKitMonitorPrivate**”. You will get two results in total:

1. ‘Computer\HKEY\_LOCAL\_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server Local DB\Shared Instances\SysKit Monitor’
2. ‘Computer\HKEY\_USERS … \SOFTWARE\Microsoft\Microsoft SQL Server\UserInstances{ … }’

Next, right-click the selected entry and click **Delete**. Then select F3 to find the last entry and **delete** it like the previous one.

Afterwards, start the Command Prompt as an administrator and perform the following steps to create and manage a **new LocalDB instance**:

1. **sqllocaldb create “SysKitMonitorPrivate”** – creates a new of instance of SQL Server Express LocalDB.
2. **sqllocaldb share “SysKitMonitorPrivate” “.\SysKitMonitor”** – shares the specified private instance of LocalDB using the specified shared name.
3. **sqllocaldb start “SysKitMonitorPrivate”** – starts the specified instance of SQL Server Express LocalDB.

The newly created LocalDB instance should be up and running now and ready for use in the **SysKit Monitor Configuration Wizard**. If you are having trouble accessing the instance, check its status by entering the following command: sqllocaldb info “SysKitMonitorPrivate”.

If you want to use the **existing database**, you can export and create a database backup from the **backstage screen** in SysKit Monitor, to a desired location and restore it to the designated **SQL Server instance**.

