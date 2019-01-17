---
title: Connect an Existing Database
desription: >-
  This article will guide you through the steps you need to perform to allow the
  user running the Configuration Wizard to configure the existing database and
  the service account.
author: Andrea Budisa
date: 30/5/2017
---

# connect-existing-db-privileges

This article covers the following scenario: **The database does not exist or User running the Configuration Wizard does not have the correct privileges to connect to it.**

Error message which occurs in the Configuration Wizard: The database you have entered does not exist or DOMAIN\username running the Configuration Wizard does not have the correct priviledges to connect to it.

SOLUTION:

If the database does exist, you need to assign `db_owner` role on the database to the user running the Configuration Wizard. To do so, please perform the following steps:

1. Connect to the SQL server using Microsoft SQL Server Management Studio.
2. Expand **Databases** folder and then **expand the database** which you are trying to configure.
3. Expand the **Security** folder and then the **Users** folder.
4. If the user running the Configuration Wizard is **not on the list**, right-click the Users folder, click New user and **add a new user**.
5. Right-click on the **user running the Configuration Wizard** and select **Properties**.
6. Select **Membership** page, give user `db_owner` role and click **OK**.
7. Return to the Configuration Wizard and continue with the SysKit Monitor configuration.

> Please note! If you are using the **SQL authentication** to access the database, make sure to allow this user to login on the specified SQL Server, and depending on your scenario, you need to assign the following permissions:
>
> * **Create a new database** – To allow the user using SQL authentication to create a new database, make sure the `dbcreator` role is selected.
> * **Configure an existing database** – To allow the user using SQL authentication to configure the existing database, make sure the `db_owner` membership is assigned.

