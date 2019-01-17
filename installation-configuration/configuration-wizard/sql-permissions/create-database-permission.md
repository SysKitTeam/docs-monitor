---
title: Create a SQL Server Database
desription: >-
  This article will guide you through the steps you need to perform to allow the
  user running the Configuration Wizard to configure the database and the
  service account.
author: Andrea Budisa
date: 30/5/2017
---

# create-database-permission

This article covers the following scenario: **User running Configuration Wizard does not have permission to create a database on the SQL server.**

Error message which occurs in the Configuration Wizard: Domain\username running Configuration Wizard does not have permission to create a database on the SQL server.

SOLUTION:

To allow the user running the Configuration Wizard to configure the database and the service account, please perform the following steps:

1. Connect to the SQL Server using Microsoft SQL Server Management Studio.
2. Expand the **Security** folder and then expand the **Logins** folder.
3. Right-click on the **user running the Configuration Wizard** and click **Properties**.
4. Select **Server Roles** page on the left side and make sure the user has `dbcreator` and `securityadmin` roles.
5. Click **OK** and return to the Configuration Wizard.
6. Click **Retry**.
7. You will see that the database was successfully created. Click **Finish** to complete the SysKit Monitor configuration.

> **Please note!** If you are using the **SQL authentication** to access the database, make sure to allow this user to login on the specified SQL server, and depending on your scenario, you need to assign the following permissions:
>
> * **Create a new database** – To allow the user using SQL authentication to create a new database, make sure the `dbcreator` role is selected.
> * **Configure an existing database** – To allow the user using SQL authentication to configure the existing database, make sure the `db_owner` membership is assigned.

