---
description: This article discusses the necessary Service Account you need in order to run the Syskit Monitor in various environments and describes deployment scenarios that affect account requirements.
---

# User Permission Requirements

Please read this article before choosing your service account.

You can configure Syskit Monitor to run under designated domain account or local user on a particular computer. When prompted for the Service Account under **Syskit Monitor Service credentials**, enter a dedicated **service user**. It must have the proper permission to collect the required activity data and proper privileges to store data to your database.

{% hint style="warning" %}
**Please note!**  
As a best practice, we recommend setting a service user that is in the Adminstrators or Domain Admins group.
{% endhint %}

We recommend using the **domain account** as the service account. In order for the account to be eligible for running the Syskit Monitor service, it must have administrative privileges and must have the [**Logon as a service**](../how-to/service-accounts/add-service-user-group-policy.md) permission.

## Account setup

* **Service Account:** Domain account
* **Setup User Account:**
  * This account must be a member of the **Local Administrators** security group on each server you plan to monitor.
  * It must have the **Logon as a service** permissions defined on a domain level.

This is the **recommended** method for most scenarios.

There are two ways to add a service user to the Local Administrators security group. You can configure this [manually](../how-to/service-accounts/add-service-user-manually.md) or via [Group Policy](../how-to/service-accounts/add-service-user-group-policy.md).

{% hint style="warning" %}
**Please note!**  
If the software is installed on a non-domain joined machine, the service account name should be entered in the following form: **machine\_name\username**.
{% endhint %}

## SQL Server setup

* You can use the Windows Authentication to access the database – the service user will be used for authentication on the SQL Server \(recommended\).
* SQL Server Authentication should be used only when Windows Authentication is not possible. This scenario is supported through the Syskit Monitor Configuration Wizard.

If you plan to use Windows authentication, we recommend using our Configuration Wizard to create and configure the Syskit Monitor database. The Active Directory \(Windows service\) user running the configuration wizard needs to have **dbcreator** and **securityadmin** privileges on the SQL Server to create and configure the database.

See [SQL Permissions](../installation-configuration/configuration-wizard/sql-permissions/create-sql-login.md) to learn more about Syskit SQL server database requirements.  
See [Configure](../get-to-know-syskit-monitor/backstage-screen/configuration/configure.md) article to learn more on how to change the Service Account or Syskit Monitor database.

Proceed to: [Pre-Installation Requirements](pre-installation-requirements.md).

