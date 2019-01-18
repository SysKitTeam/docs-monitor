---
title: SysKit 2016 R2 – Monitor and script all the things!
description: >-
  This article describes all new features, improvements and bug fixes delivered
  in SysKit 2016 R2.
author: Andrea Budisa
date: 12/7/2017
---

# syskit-8-release-note

We are proud to present the newest version of SysKit! It’s a major release, and our development team definitely made a conscious effort to keep getting big things done and adding another set of powerful features. Read this release note to discover all the new features and improvements.

Thanks to our hardworking SysKit team, you can now make **PowerShell reports** and import and execute any **script** you can think of! How does it work?

SysKit provides you with a **built-in PowerShell editor** for writing and saving scripts. With this feature, all defined PowerShell scripts will be automatically executed with the Inventory Snapshots system job! These scripts can be assigned to a number of servers through the **Computer Groups**.

The other great new feature in SysKit is the ability to **monitor custom performance counters in real time**. With this capability, you can now **load and monitor** every available custom performance counter from your servers. These performance counters can be assigned to a number of servers through the **Monitoring Templates**.

SysKit comes with **predefined** Monitoring Templates for some of the most common server roles, including **SQL, IIS,** and **SharePoint**, to get you up and running quickly with performance monitoring!

SysKit has become the ultimate tool for real-time performance monitoring and remote administration of Windows environments. Awesome, isn’t it?

We’d also like to thank all of our customers for their continued patience. We’re working hard all the time to improve things. 🙂

We’re always eager to hear your feedback and suggestions!

[Click here to download the new release.](https://www.syskit.com/products/monitor/download)

Product version: 8.0.0  
Build number: 33871  
Database version: 8.0.0

Release date: Sept 15, 2016

## SysKit’s Features

### PowerShell Reports

* The reports within the Inventory Reports category now include a **new report subcategory** and **endless possibilities for creating new reports**.
* PowerShell Reports within SysKit are designed to make it as easy as possible for you to take control of and simplify the management of your Windows environments whether you are writing scripts or administering software.
* The **built-in PowerShell wizard** brings syntax highlighting and colors to the editor and displays the results of the commands and scripts you have run. One of the key parts of the wizard is PowerShell script error handling, which is the same as in Windows PowerShell.
* Our built-in PowerShell wizard supports **importing** Windows PowerShell scripts with a **.ps1 extension**.
* Created PowerShell scripts can be tied to a **specific server role** and can be **scheduled to run** for specific Computer Groups.

### Performance Reports

* The reports within the Performance Reports category now include one **new dashboard** and **two new reports**:
  * **System Overview**: This dashboard provides a complete overview of the server environment’s health. It consists of six tiles that display interesting graphics and information, allowing you to gain insights into workloads and alerts from multiple systems in a single view.
  * **Detailed Analysis**: This report displays the history data for monitored custom performance counters, which are assigned to computers through the Monitoring Templates. It consists of charts that display detailed statistics for the selected custom performance metrics, Date Range, and Computers.
  * **Alert Overview**: This report displays all critical and warning alerts generated within the selected Date Range. It will help you get a clear overview of all the alerts raised in your environment.

### Administration

* The **Administration** part of the application now includes **two new categories** for adding and managing:
  * **Computer Groups**: This section enables the **logical grouping** of monitored computers, so you can manage a large number of computers more easily. The computer groups will help you assign options, like monitoring templates, for an entire group of computers instead of an individual computer.
  * **Monitoring Templates**: This section provides several **predefined** Monitoring Templates, which are basically collections of counters to be monitored, and they include the associated rules and suggested threshold values to detect out-of-bounds conditions.
  * The **Template wizard** enables you to create your own Monitoring Templates within which you can add and configure performance counters and the Windows Services to be monitored.

### LocalDB

* If you do not have a SQL Server instance installed in your server environment, the SysKit installation will offer to **install SQL Server Express 2012 LocalDB** \(free license\) automatically.
* It provides the necessary SQL Server infrastructure, enabling the application to use the database without any complex configuration.

## Improvements

* We have optimized our code to work better with different types of timeouts that can affect our WMI queries. We’ve also added an option for detailed WMI timeout error logging.
* The **Administration** part of the application has been completely redesigned. Now it includes **three** separate categories for adding and managing the monitored **Computers, Computer Groups** and **Monitoring Templates**.
* The **Performance Counters Aggregation** system job aggregates the metrics data collected by hour and by day to enhance query performance and help minimize the size of the product database.
* Use the **Counter Settings** dialog to configure the Performance Counters system job’s collection interval and to set after how long old counter data will be aggregated, as well as deleted from the product database.
* To help identify issues with your product data, we’re excited to introduce the **Diagnostics** section in SysKit. It includes the following **troubleshooting options** for monitored computers: pinging, computer status check, WMI testing, WMI repository verification, PowerShell Remoting check, SysKit Event Log exporting.

### UX

* The **Save to FileShare** and **SharePoint** options now have proper tooltips with an explanation and a direct configuration link.
* The **Take Snapshot** ribbon button, which triggers the Inventory Snapshots collection job, now also enables the job if it is disabled for some reason.

## Retired Features

* **Local System Account**: This predefined option for the SysKit service account is **no longer available**. Only the Custom User account can be used to run the SysKit service.

## What is the SysKit Licensing model and how does it affect existing SysKit customers?

* SysKit is now available in three editions \(**Standard, Professional,** and **Enterprise**\), and it can be bought in **license packs**. Choose the SysKit edition that’s right for you [here](https://www.syskit.com/products/monitor/pricing/features-by-edition).
* We are introducing a **new type of SysKit license: Subscription**. This will allow customers to have usage rights to all releases while their subscriptions are active. This license can be purchased monthly, and it is renewable.
* Existing SysKit customers who have valid Software Assurance can upgrade to SysKit’s **full-featured Enterprise version** at no cost.

