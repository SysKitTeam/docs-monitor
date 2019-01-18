---
title: Create a SQL Server Login
desription: >-
  This article will guide you through the steps you need to perform to allow the
  user running the Configuration Wizard to login and create the database.
author: Andrea Budisa
date: 30/5/2017
---

# create-sql-login

This article covers the following scenario: **User running the Configuration Wizard is not allowed to login on the specified SQL server.**

Error message which occurs in the Configuration Wizard: Login failed for user DOMAIN\username.

SOLUTION:

User running the Configuration Wizard is not allowed to login on the specified SQL server.

To allow this user to login and create the database please perform the following steps:

1. Connect to the SQL Server using Microsoft SQL Server Management Studio.
2. Right-click on the **Security** folder, point to **New** and select **Login**.
3. In the new dialog box, select **Windows authentication** and in **Login name** field type the user’s username in **DOMAIN\username** format.
4. Select **Server Roles** page on the left side and make sure the user has `dbcreator` and `securityadmin` roles.
5. Click **OK** and return to the Configuration Wizard – Database Configuration step. 
6. Click **Test Connection** button. The connection will now be successful. Please continue with the SysKit Monitor configuration.

> **Please note!** If you are using the **SQL authentication** to access the database, make sure to allow this user to login on the specified SQL Server, and depending on your scenario, you need to assign the following permissions:
>
> * **Create a new database** – To allow the user using SQL authentication to create a new database, make sure the `dbcreator` role is selected.
> * **Configure an existing database** – To allow the user using SQL authentication to configure the existing database, make sure the `db_owner` membership is assigned.

