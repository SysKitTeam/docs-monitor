---
description: This article gives you an overview of the steps you will need to perform in order to prepare your server environment for the Syskit Monitor installation.
---

# Pre Installation Requirements

The installation process consists of a few easy steps that you need to perform in order to get the Syskit Monitor up and running.

## Configure Active Directory

Syskit Monitor requires a service account in order to run. We recommend creating a dedicated Windows account for this purpose.

* This account needs to have administrative privileges on each server you plan to monitor. You can configure this [manually](../how-to/service-accounts/add-service-user-manually.md) or via [Group Policy](../how-to/service-accounts/add-service-user-group-policy.md).
* This account needs to have the [Logon as a service](../how-to/service-accounts/add-service-user-group-policy.md) privileges.

{% hint style="warning" %}
**Please note!**  
As a best practice, we recommend setting a service user that is in the Adminstrators or Domain Admins group.
{% endhint %}

## Configure SQL Server

The Installation wizard will create a database automatically. The user running the setup wizard needs to have the proper privileges to create new databases on the SQL Server \(dbcreator or sysadmin\).

During configuration you will be prompted to select the authentication type for SQL Server. You can choose between **Windows integrated** authentication and **SQL Server** authentication.

If you are running the Syskit in a domain environment, we strongly recommend using Windows authentication. SQL Server authentication should only be used in workgroup environments or in case of security restrictions in your domain.

### Windows-integrated authentication

If you plan to use Windows authentication, we recommend using our Configuration Wizard to create and configure the Syskit database. The Active Directory \(Windows service\) user running the configuration wizard needs to have **dbcreator** and **securityadmin** privileges on the SQL Server to create and configure the database.

See [SQL Permissions](../installation-configuration/configuration-wizard/sql-permissions/create-sql-login.md) to learn more about Syskit Monitor SQL server database requirements.  
If you cannot obtain such privileges, install the Syskit Monitor database **manually** \(or your DBA will create a DB\).

You need to create an empty database that will be used to store the Syskit Monitor data:

1. Open the **SQL Management Studio**.
2. Select **SQL Server name &gt; Databases**.
3. Right click **Databases** and select **New Database**.
4. Type a name in the **Database name** field, e.g. Syskit\_Monitor.
5. On the **Options** page, choose **Simple** as the **Recovery Model**.
6. Click **OK** to create a new database.

{% hint style="warning" %}
**Please note!**  
The service user that will be used for running the Syskit Monitor Service needs to have **db\_owner** membership assigned on the newly created database. See [SQL Permissions](../installation-configuration/configuration-wizard/sql-permissions/connect-existing-db-privileges.md) to learn more.
{% endhint %}

Proceed to: [Installation Guide](../installation-configuration/install-wizard/install-monitor.md).

### SQL Server authentication

SQL Server authentication is used in environments without the Active Directory domain or if the SQL Server is outside the domain. Before installing the Syskit Monitor with SQL Server authentication, you need to perform additional steps to create a SQL user, which will be used to connect to the database.

#### How to create a SQL Server login

To use SQL Server authentication instead of Windows authentication please do the following: 1. Connect to the SQL Server using SQL Server Management Studio. 2. Right-click on the **Security** folder, point to **New** and select **Login**. 3. In the new dialog box, select **SQL Server authentication** and in Login name field type a new SQL Server login. 4. Fill in the Password and Confirm password fields.

{% hint style="warning" %}
**Please note!**  
You need to remember the login name and password as you will use them to connect to the SQL Server using SQL Server authentication.
{% endhint %}

1. Select **Server Roles** page on the left side and make sure the user has **dbcreator** role.
2. Click **OK** and return to the Configuration Wizard &gt; Database Configuration step.
3. If you are using the existing database, expand **Databases** folder and then expand the database which you are trying to configure.
4. Expand the **Security folder** and then the Users folder.
5. If the Login name you created in step 3. is not in the **Users** list, right-click the **Users** folder and click **New user**. In the **Username** and **Login** name enter the same Login name from step 3.
6. Select **Membership** page, give user **db\_owner** role and click **OK**.

## Install Syskit Monitor

If you have created a service account and prepared the SQL Server, you can proceed with the Syskit Monitor [Installation Wizard](../installation-configuration/install-wizard/install-monitor.md).  
If you need help with the installation, please [contact us](https://www.syskit.com/company/contact-us).

