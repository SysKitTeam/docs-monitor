---
title: Create a Service User Login
desription: >-
  This article will guide you through the steps you need to perform to allow the
  user running the Configuration Wizard to create a new database and configure
  the service account.
author: Andrea Budisa
date: 30/5/2017
---

# create-service-user-login-permission

This article covers the following scenario: **User running Configuration Wizard does not have permission to create a service user login on the SQL server – new database.**

Error message which occurs in the Configuration Wizard: Domain\username running Configuration Wizard does not have permission to create a service user login on the SQL Server.

SOLUTION:

To allow the user running the Configuration Wizard to configure the database and the service account, please perform the following steps:

1. Connect to the SQL server using Microsoft SQL Server Management Studio.
2. Expand the **Security** folder and then expand the **Logins** folder.
3. Right-click on the **user running the Configuration Wizard** and click **Properties**.
4. Select **Server Roles** page on the left side and make sure the user has `dbcreator` and `securityadmin` roles.
5. Click **OK** and return to the Configuration Wizard.
6. Click **Retry**.
7. Click **Finish** to complete the SysKit Monitor configuration.

