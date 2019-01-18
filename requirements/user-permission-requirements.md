---
title: User Permission Requirements
desription: >-
  This article discusses the necessary Service Account you need in order to run
  the SysKit Monitor in various environments and describes deployment scenarios
  that affect account requirements.
author: Andrea Budisa
date: 26/5/2017
---

# user-permission-requirements

Please read this article before choosing your service account.

You can configure SysKit Monitor to run under designated domain account or local user on a particular computer. When prompted for the Service Account under **SysKit Monitor Service credentials**, enter a dedicated **service user**. It must have the proper permission to collect the required activity data and proper privileges to store data to your database.

> **Please note!** As a best practice, we recommend setting a service user that is in the Adminstrators or Domain Admins group.

We recommend using the **domain account** as the service account. In order for the account to be eligible for running the SysKit Monitor service, it must have administrative privileges and must have the [**Logon as a service**](user-permission-requirements.md#internal/how-to/service-accounts/add-service-user-group-policy) permission.

## Account setup

* **Service Account:** Domain account
* **Setup User Account:**
  * This account must be a member of the **Local Administrators** security group on each server you plan to monitor.
  * It must have the **Logon as a service** permissions defined on a domain level.

This is the **recommended** method for most scenarios.

There are two ways to add a service user to the Local Administrators security group. You can configure this [manually](user-permission-requirements.md#internal/how-to/service-accounts/add-service-user-manually) or via [Group Policy](user-permission-requirements.md#internal/how-to/service-accounts/add-service-user-group-policy).

> **Please note!** If the software is installed on a non-domain joined machine, the service account name should be entered in the following form: **machine\_name\username**.

## SQL Server setup

* You can use the Windows Authentication to access the database – the service user will be used for authentication on the SQL Server \(recommended\).
* SQL Server Authentication should be used only when Windows Authentication is not possible. This scenario is supported through the SysKit Monitor Configuration Wizard.

If you plan to use Windows authentication, we recommend using our Configuration Wizard to create and configure the SysKit Monitor database. The Active Directory \(Windows service\) user running the configuration wizard needs to have **dbcreator** and **securityadmin** privileges on the SQL Server to create and configure the database.

See [SQL Permissions](user-permission-requirements.md#internal/installation-configuration/configuration-wizard/sql-permissions/create-sql-login) to learn more about SysKit SQL server database requirements.  
See [Configure](user-permission-requirements.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/configure) article to learn more on how to change the Service Account or SysKit Monitor database.

Proceed to: [Pre-Installation Requirements](user-permission-requirements.md#internal/requirements/pre-installation-requirements).

