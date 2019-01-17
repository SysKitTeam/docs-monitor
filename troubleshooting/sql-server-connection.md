---
title: SQL Server Connection
description: >-
  This article explains how to troubleshoot some of the most common SQL Server
  Connection problems to get the SysKit Monitor up and running.
author: Andrea Budisa
date: 7/7/2017
---

# sql-server-connection

## How to configure the SQL Server to listen on a specific port

### Problem:

How to configure the SQL Server to listen on a specific port?

### Solution:

Due to security issues it is often not recommended to use the default port number 1433 for communicating with the SQL Server. This article helps set up the SQL Server to use a non-standard port number.

1. Run the **SQL Server Configuration Manager**.
2. Select the **SQL Server Network Configuration**.
3. Select from the list the instance you want to configure to listen to on a specific port.
4. To change the port assignment right-click on the **TCP/IP** protocol and select **Properties**.
5. Click on the IP Addresses tab.

   > **Please note!** Both IP5 and IP6 are disabled and the TCP Dynamic Ports setting is set to “0”, which means that the database engine is listening on dynamic ports. This instance currently uses the port number **1433**.

6. Specify the **TCP Port** number you want to use instead of 1433, by entering the preferred port number. In this case the new port number is going to be **8181**. Also, turn off the dynamical port number setting by removing the “0” mark in the **TCP Dynamic Ports** field for both IP5 and IP6.
7. In order to finish the adjustment, select **SQL Server Services**, right-click the SQL Server and restart it.

## Error: Configuration Wizard won’t connect to a provided server and database

### Problem:

The SQL Server Browser service is not running. When this service is not running you cannot connect on named instances.

### Solution:

The SQL Server Browser service needs to be up and running.

1. Open the **SQL Server Configuration Manager** on your SQL server.
2. Click on the **SQL Server Services**. Find the **SQL Server Browser** service, right-click on it and press **Start**.
3. Do not forget to allow **inbound traffic on TCP Port 1434**. Refer to the last paragraf for more detailed information.

## Error: Check if your SQL Server is configured to use a named instance

### Problem:

The wrong database server name has been entered while trying to connect to the database server through the SysKit Monitor Configuration Wizard.

### Solution:

Check if your SQL server is configured to use a named instance, e.g. **Server/InstanceName**.

1. Run the Microsoft SQL Server Management Studio and connect to the desired SQL Server instance.
2. Right-click on the SQL Server instance and select **Properties**.
3. Check the full server **Name**, i.e. both server and instance name.
4. Change the server name in the SysKit Monitor Configuration Wizard according to the name written in the Microsoft SQL Server Management Studio.
5. The SQL connection should now be available.

## Error: TCP/IP network traffic is not enabled on the SQL Server

### Problem:

TCP/IP is not enabled on the SQL Server.

### Solution:

TCP/IP network traffic needs to be enabled on the SQL Server, so that remote connections can be allowed on the SQL Server.

1. Run the **SQL Server Configuration Manager**.
2. Click on the **SQL Server Network Configuration**.
3. Select **Protocols for SQLEXPRESS** and check if the **TCP/IP Protocol** is enabled.
4. If the TCP/IP is disabled, double-click on it and change the Enabled row status to **Yes**.
5. In order to finish the adjustment, select the **SQL Server Services**, right-click on the SQL Server and restart it.
6. The SQL connection should now be available.

## Error: Inbound traffic on TCP Port 1433 needs to be allowed on the SQL Server

### Problem:

Port 1433 is closed on the SQL Server.

### Solution:

Inbound traffic on the TCP Port 1433 needs to be allowed on the SQL Server.

1. Connect to your **SQL Server**.
2. Open the Windows Firewall, click on **Inbound Rules** and select **New Rule**.
3. In the Rule Type step, select the **Port** rule type.
4. In the Protocol and Ports step, select the **TCP** port and specify the **local ports** which this rule applies to. In this case, 1433 stands for the SQL Server, and 1434 for the SQL Server Browser. Enter the ports in the following format: `1433,1434`.
5. In the Action step, leave the default selection: **Allow the connection**.
6. In the Profile step, select the profiles which this rule applies to.

   > **Please note!** If the SQL server is in the same domain with other servers and you wish to open this port only for the domain traffic, it is enough to select **Domain**. For other scenarios use the Private or Public profile option.

7. In the Name step, specify the name and the description of this rule, e.g. Name: SQL, and the Description: Allows SQL to connect to the SQL Server and SQL Server Browser.
8. The inbound traffic on the SQL Server is now allowed and the SQL connection should be available.

