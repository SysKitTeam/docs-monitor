---
title: Configure SysKit Monitor
desription: >-
  This article will guide you through the steps you need to perform in order to
  configure SysKit Monitor to work properly.
author: Andrea Budisa
date: 30/5/2017
---

# configure-monitor

Once the installation is completed, the Configuration Wizard will start. If the wizard does not start automatically after installation, you can run it manually from: **Start &gt; All Programs &gt; SysKit Monitor &gt; Configuration Wizard**.

1. In Step 1, you need to choose whether to **create a new** or to **use an existing** database. Click **Next &gt;** to proceed.

   > **Please note!** In case you already have a SysKit Monitor database, choose the **Use existing database** option.

2. In Step 2, you need to specify the **Database server**, **Database name** and **authentication** that will be used. If you have more than one instance of SQL Server, type **SERVER\_NAME\INSTANCE\_NAME**.  
   You can also browse for existing local and network SQL Servers by clicking on the **Browse** button next to the server field. For Database name, type in the name of the database you would like to use.

   > **Please note!** If you chose **Create new database** and checked the **Overwrite existing database** option in the previous step, if there is already a database with the same name, data in the original database will be overwritten.  
   > If you chose **Use existing database** in the previous step, the installation will try to connect to the existing database.

   Next, you need to define the authentication that is going to be used to connect to your database. There are two options available:

   * Windows Authentication \(make sure that the service account used for configuration has the proper privileges on the SQL Server\).
   * SQL Authentication \(make sure that SQL authentication is enabled on the SQL Server and the account has the proper privileges on the SQL Server\).

   See [SQL Permissions](configure-monitor.md#internal/installation-configuration/configuration-wizard/sql-permissions/create-sql-login) to learn more about SysKit Monitor SQL Server database requirements.

   If you plan to use the SysKit Monitor in a domain environment with an in-house SQL Server, we strongly **recommend** choosing Windows authentication. Once you have entered the correct database information, click **Test Connection** for verification. Click **Next &gt;** to proceed.

3. In Step 3, you need to enter information about the Service Account that will be used for running the SysKit Monitor Service. This account will be used to gather data from your server\(s\). Enter the custom user account in the following format: **DOMAIN\USERNAME** \(or **MACHINE\_NAME\USERNAME** for workgroup scenarios\).

   > **Please note!** The service user must be in the local admin group to proceed with this step. For more information about the service account configuration, read the [Add Service User to a Local Administrators Group via Group Policy](configure-monitor.md#internal/how-to/service-accounts/add-service-user-group-policy) article.
   >
   > **Please note!** If the software is installed on a non-domain joined machine, the service account name should be entered in the following form: **machine\_name\username**.

   Click **Validate Account** to check the credentials. To finish the Configuration Wizard, click **Next &gt;**.

4. If you have previously chosen to install the SysKit Monitor Web application as well, you will have the **Web settings** step enabled. Enter the details for your new IIS website and virtual folder. Also, provide the **Service Account credentials** to configure the application pool to run under a specific user identity. Once you have entered the correct information, click **Validate Account** for verification. Click **Next &gt;** to proceed.
5. In Step 5, you can view the configuration settings that will be applied.
6. In Step 6, you can view which actions the application is performing while configuring all settings.
7. In Step 7, once the SysKit Monitor is installed, you can run the application and choose whether you want to participate in the Customer Experience Improvement Program.

## Installation of SysKit Monitor Web App on a Separate Server

The SysKit Monitor Web application can be installed on the same server as the desktop application or on a **separate server**. If you choose to install the SysKit Monitor Web application **separately**, please follow the steps below.

### Installation Wizard

In the Install Wizard, on the step which allows you to choose the program features that you want to install, select to install the **web feature only**. Once the installation is completed, the Configuration Wizard will start.

### Configuration Wizard

1. You need to enter the **Database server** and the **Database name** that the web application will connect to. This should be the database you are using for the desktop application. Once you have entered the correct database information, click **Test Connection** for verification. Click **Next &gt;** to proceed.
2. Enter the details for your new IIS website and virtual folder, and provide the **Service Account** credentials to configure the application pool to run under a specific user identity. Once you have entered the correct information, click the **Validate Account** button for verification. Click **Next &gt;** to proceed.
3. The next step summarizes the configuration settings that will be applied.
4. Once the SysKit Monitor Web app is installed and configured, you can run the application and choose whether you want to participate in the Customer Experience Improvement Program.

See the [SysKit Monitor Web App](configure-monitor.md#internal/get-to-know-syskit-monitor/syskit-monitor-web-app) article to learn more.

### Problems with Installation and Configuration

Most problems are related to SQL Security and SysKit Monitor Service authentication against the Active Directory or Microsoft SQL Server. If you are experiencing problems with installation, please [contact us](https://www.syskit.com/company/contact-us). Our team will schedule a support call and help you install the SysKit Monitor remotely.

