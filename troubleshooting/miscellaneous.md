---
title: Miscellaneous
author: Andrea Budisa
description: >-
  This article contains various miscellaneous questions and answers related to
  SysKit Monitor.
date: 29/06/17
---

# miscellaneous

## Is it possible to remove a specific user from the reports?

You can remove a user from the filters for the reports that have already been captured.

If you wish to disable a user for monitoring, select **File** &gt; **Manage** &gt; **Users and Groups**, find the user you want to disable, double click on the user, and in the new dialog box, uncheck **Monitor activities for this user**.

This will exclude the user from the monitoring process.

## Can the software report on Citrix license usage?

Yes, you can track Citrix concurrent usage in detail.

These reports are under **User Reports** &gt; **Concurrent Usage Reports**.

If you select Concurrent Users per Day, you will see the usage of the farm for every day of the month. Clicking Concurrent Usage per Hour will enable you to see the time of the day when the licenses are most heavily used. By selecting the last Concurrent Usage report - Users per Hour—Details, you will see the usernames that are consuming your licenses.

## I am having problems running the application when User Access Control \(UAC\) is enabled.

1. Locate the SysKit Monitor installation directory in Program Files and find the **SysKitMonitor.exe**.   

   \(usually: C:/Program Files/SysKit/Monitor/\)

2. Create a shortcut of that file on the desktop.
3. Execute the application by right-clicking and choosing **Run as administrator**.
4. UAC will prompt you to run as admin, and SysKit Monitor will start initializing.

> **Please Note!** You are required to create a shortcut directly from the file in the installation directory, not from the shortcut in the Start menu.

## How can I check which database SysKit Monitor is using?

In **SysKit Monitor**, select **File** &gt; **Help** &gt; **About SysKit Monitor**, and then you will get something like the following:

```text
Database type: SQL  
Integrated security: No  
Assembly version: 8.0.0.xxxxx  
Database version: 8.0.0  
Service account: DOMAIN\syskitmonitor_user  
Connection string: Server=__SQLSERVER__ or __(LocalDB)\.\SysKitMonitor__;Database=SysKit_Monitor_database;Trusted_Connection=yes; Asynchronous Processing=true;
```

This means that SysKit Monitor is using the SQL Server with the Windows integrated authentication. Please, send this data to us when we request you to do so.

## Should SysKit Monitor only be opened on the server console, or is it ok to access it through a RD session or XenApp session? Can I access the console from my workstation?

The application will work on both the console and the RDP/ICA session.  
Alternatively you can use the SysKit Monitor from your workstation if you wish to. In this case, you don’t need to open the session to the server. The workstation needs to be on the same subnet as the SQL Server, because the application will contact the SQL Server for data.

To configure the admin console on the workstation, copy the installation folder of the application \(the default is in C:/Program files/SysKit/Monitor/\). Then create a shortcut on the desktop that will point to **SysKitMonitor.exe.**

If you are using the same user account on the workstation as on the RD/XenApp server, the application will work fine. However, if the user is different, you will need to allow that user read/write privileges on the SysKit Monitor database on the SQL Server.

## I am having a problem installing the SysKit Monitor Web App on my server \(Error code 80040154\).

When installing or upgrading SysKit Monitor Web App you may encounter the following error:

```text
System.Runtime.InteropServices.COMException (0x80040154): Retrieving the COM class factory for component with CLSID {2B72133B-3F5B-4602-8952-803546CE3344} failed due to the following error: 80040154
```

This particular issue requires Internet Information Services \(IIS\) to be reinstalled. Please note that you are not advised to follow these instructions if you have other web instances installed on server besides the SysKit Monitor Web Application. In that case, we recommend you to contact our support team.

To fix the problem follow this steps:

1. In **Server Manager**, navigate to **Manage** &gt; **Remove Roles and Features**.
2. The **Remove Roles and Features Wizard** will open. Click **Server Selection** and choose the server where SysKit Monitor Web App will be installed, then click **Next**.
3. Under **Server Roles**, uncheck **Web Server \(IIS\) check box** and click **Next**.
4. Under **Features**, just click **Next**.
5. Under **Confirmation**, click **When removal is completed**, then click **Close**. Restart the server if needed.
6. After the server restart, in **Server Manager**, navigate to **Manage** &gt; **Add Roles and Features**.
7. Click **Installation Type**, select the **Role-based or feature-based installation** option and then click **Next**.
8. Under **Server Selection**, choose **Select a server from the server pool**.
9. Choose the server where you will be installing SysKit Monitor Web App and click **Next**.
10. Under **Server Roles**, select the **Web Server \(IIS\)** role and then click on the **Add Features** button. Click **Next** to proceed.
11. Under **Features**, just click **Next**.
12. Under **Web Server Role**, click **Next**.
13. Under **Role Services**, click **Next**.
14. Under **Confirmation**, click **Install** and when installation is completed click **Close**. Restart the server again if needed.

Now you can install SysKit Monitor Web App and start monitoring your servers!

