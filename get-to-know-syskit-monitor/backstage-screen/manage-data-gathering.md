---
title: Manage Data Gathering
description: >-
  This article explains how you can manage data gathering in SysKit Monitor
  which includes Users and Groups, Applications, File Paths, Licenses, Subnets,
  System Jobs, Subscriptions, and Alerts.
author: Andrea Budisa
date: 29/6/2017
---

# manage-data-gathering

To manage and preview data gathered by SysKit Monitor navigate to the **File** &gt; **Manage**.

## Manage Users and Groups

This section describes how you can manage the users and groups retrieved from the Active Directory.

To preview user and group data gathered from the Active Directory use the Manage Users under **File** &gt; **Manage** &gt; **Users and Groups**. It allows you to easily preview all the Organizational Units and Security and Distribution Groups. The following options are available:

* **Manage** – Use this option to edit or change the user settings such as, profile, permissions for the SysKit Monitor application, hourly wage, etc.
* **Refresh** – Use this option to refresh the dialog items.
* **Delete** – Use this option to delete a user that’s no longer an employee.
* **Enable/Disable Users** – Use this option to manage user monitoring status. You can disable selected user\(s\) from monitoring and reports.
* **Grant Access** – Use the option **Grant Access Manually** to [give users the administrative privileges](manage-data-gathering.md#internal/how-to/users/add-users-manually) to the SysKit Monitor application. There is no need to add users for monitoring here, they will be added automatically once they logon to the servers.
* **New Custom Group** – Use this option to create a new custom group, assign users to it and use it for reporting and filtering.

### Grant access to a new user

See [Add Users from Active Directory](manage-data-gathering.md#internal/how-to/users/add-users-from-active-directory) and [Add Users Manually](manage-data-gathering.md#internal/how-to/users/add-users-manually) articles to learn more.

### Disable integration for certain users

If you want to disable AD integration for some users because you want to change their name for reporting purposes in the SysKit Monitor application, follow these steps:

1. Double-click the user for whom you want to disable integration.
2. Under Options uncheck **Import user information from the Active Directory**. By un-checking this option you will be able to modify the user’s personal data \(e.g. First name, Last name, E-mail\). In case you turn the integration on, any changes you made will be overwritten.

### Managing memberships

You can manage user and group memberships by choosing the **Member of** tab when editing users or groups. You can see which groups a user belongs to \(if you are editing a user\) and users in a selected group \(if you are editing a group\).  
You can assign a user to a certain custom group when editing a specific user. When you are editing a group, you can add users to be members of the selected group.

### Managing user roles

There are three types of user roles in SysKit Monitor: None, Viewers and Administrators. Each of them gives the user different permissions in the SysKit Monitor installation folder, SQL Server and the SysKit Monitor application.

* **None** – Users with this role do not have permission to access SysKit Monitor folder nor SQL Server nor to use the SysKit Monitor application.
* **Viewer** – Users with this role can read and modify files in the SysKit Monitor installation folder, read data from the SQL Server database and use the SysKit Monitor application to view reports.
* **Administrator** – Users with this role can read and modify files in the SysKit Monitor installation folder, read data from the SQL Server and administer database and have a full permission to use the SysKit Monitor application.

See [Managing Security Permissions](manage-data-gathering.md#internal/how-to/users/manage-security-permissions) article to learn more.

## Manage Applications

The Manage Application dialog contains the list of processes running on all monitored computers in your environment. Here you can disable the monitoring of the applications which are of no interest to you or change application names. To edit this data double click the application name in the list or click Edit on the toolbar and a new window will open.

> **Please note!** Data about processes which you have excluded from monitoring will not be saved in the database at all until you change these settings again and turn.
>
> **Please note!** Windows system processes are by default included into monitoring, to avoid “noise” in the reports, you can disable the monitoring for those system processes.

## Manage File Paths

This section describes how to manage your file paths which allows you to exclude certain paths from being audited.  
If you want to filter your file paths do the following:

1. Navigate to **File**, select **Manage** from the left navigation bar and click on the **File Paths**.
2. Now all file paths will be shown together so if you wish to filter them, on the left side click **File Paths by Computer** and select the desired file path\(s\).

### Disable/Enable File Paths

After you have selected a desired file path\(s\) you can choose to disable or enable it by clicking the **Disable** or **Enable** button.

### File Extensions

If you click on **File Extensions** on the left side of the File Paths Management window you can choose only certain file extensions to be included or excluded from auditing by clicking the **Disable/Enable** button.

> **Please note!** File paths cannot be added but can only be disabled once they appear. Once you have disabled a file path it will no longer be audited. However, if the activity on that path was recorded it will remain in the database.

## Manage Licenses

This section explains how to manage licenses on your computer or server farm.

1. Go to **File**, select **Manage** from the left navigation bar and click the **Licenses** button.
2. Select the licenses your users are using and configure them. Here you can check your application licenses \(for instance Microsoft Office or any other application you are using on the servers\), TS/RDS per user or device CALs, or Citrix concurrent licenses.

### Adding Licenses

To add a new license just click **New License** on the toolbar, choose the license you wish to add for monitoring and type in the number of licenses you have purchased.

### Adding Microsoft Office Licenses

> **Please note!** In order to be able to add the Microsoft Office license, [Inventory Snapshots](manage-data-gathering.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#inventory-snapshots) system job needs to be executed to gather information about installed Microsoft Office versions.

1. Open the license manager and click on the **New Office License**.
2. Choose the Office version you want to monitor, enter the license name, type and number of CALs. Click **OK** to add new Office license to monitor.

See [License Reports](manage-data-gathering.md#internal/get-to-know-syskit-monitor/reports/license-reports) learn more.

## Manage Subnets

Define the subnets from where your users are logging on to the RDS / Citrix XenApp server. If you have a few locations with IP like 192.168.1.x or 192.168.53.x define those subnets here. Then in the IP Address reports you will have the exact location from where your users were logging on to the server.

You can add new subnets by clicking **New Subnet** on the toolbar or edit the existing subnets. Just define the start and end IP address and the subnet mask will be calculated automatically.

### Subnet types

Define Subnet types from the dropdown menu, default values are private or public. You can create a new subnet type by clicking the **Add** button. A new dialog will open allowing you to enter a name. The newly created subnet type can subsequently be edited or deleted.

## System Jobs

This section explains how to configure System Jobs within the SysKit Monitor application.

System Jobs run periodically and you are able to configure them as you wish. You can access System Jobs by navigating to the **File** tab, selecting **Manage** from the left navigation bar and then clicking **System Jobs** and see their current status. Another way to access the System Jobs is by clicking the **Options** button in the reports ribbon.  
You can configure each system job according to your preferences and it will run periodically as configured. You can also manually run a specific job and it will be executed at next tick of service.

Here is the description of columns in the System Jobs dialog:

* **Name** – the name of the system job.
* **Status** – current status of the system job. Possible values are – Idle \(system job is enabled but it is not running\), In Queue \(system job will be run at next tick of service\), Running on computer X started on Y \(system job is currently running\), Disabled \(system job is disabled\).
* **Last Run Time** – the last time a job was executed.
* **Next Run Time** – the next time a job will be executed. It depends on the configured period.
* **Triggers** – information about the system job’s period.

**System jobs log** tracks executed SysKit Monitor system jobs. It gives you a list of all executed system jobs and their current status in detail for the past 7 days. Check exactly which system jobs were running, when they were initiated and finished, and whether it had any errors while running. You can also see when each job was created and on which computer.

## Manage Subscriptions

This section describes how to manage report subscriptions.

You can access Subscriptions by navigating to the **File** tab, selecting **Manage** from the left navigation bar and then clicking **Subscriptions**. Another way to access the Subscriptions is by choosing **Manage Subscriptions** from the ribbon.

The following options are available:

* **New Subscription** – Use this option to create a new report subscription, and assign recipients and reports to it.
* **Edit** – Use this option to edit the existing report subscriptions.
* **Delete** – Use this option to delete the report subscriptions.
* **Send Now** – Use this option to send the selected report subscriptions right now.
* **Configure** – Use this option to configure email settings, delivery options and the Send e-mails system job period.
* **Report** – Use the Report dropdown to filter all the Subscriptions by the report that they contain.

Here is the description of columns in the Manage Subscriptions dialog:

* **Name** – the name of the subscription.
* **Description** – information about Delivery Methods selected for each subscription.
* **Last Sent On** – the last time a subscription was sent.

See [Configure Send E-mails system job](manage-data-gathering.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#send-e-mails) and [Configure Report Subscriptions](manage-data-gathering.md#internal/how-to/reports/configure-report-subscriptions) to learn more.

After you have defined all the necessary data and saved the settings, Subscriptions should be delivered at the scheduled time.

## Manage Alerts

This section explains how to manage **Alerts** received for your computers.

Real-time Alerts include performance counters, service and session alerts. To preview and classify the Alerts gathered for your computers, use Manage Alerts under **File** &gt; **Manage** &gt; **Alerts**.  
This form shows all the computer alerts sent by e-mail. An alert level is assigned to each computer alert. You can set different alert levels for each alert so that in the future, similar alerts will have that alert level.

See [Real-time Alerting](manage-data-gathering.md#internal/common-tasks/real-time-alerting) to learn more about SysKit Monitor intelligent alerting.

The following options are available:

* **Set Alert Level** – Use this option to assign an alert level to each computer alert.
  * High – Use this option to set a high alert level for the selected computer alert\(s\).
  * Medium – Use this option to set a medium alert level for the selected computer alert\(s\).
  * Low – Use this option to set a low alert level for the selected computer alert\(s\).
* **Refresh** – Use this option to refresh items displayed in the dialog.
* **Delete** – Use this option to delete the selected alert\(s\).
* **Help** – Get help with issues or questions regarding managing computer alerts.

The Manage Alerts dialog contains the following elements:

### Computer Alerts

This grid-view displays a list of all computer alerts sorted by the date/time triggered.

Here is the description of columns:

* **Alert Level** — Alert prioritization determined by SysKit Monitor. SysKit Monitor can also fully adapt to your preferences when calculating the computer’s alert level.
* **Computer Name** — The computer for which the alert was sent.
* **Type** — The alert can consist of one or more performance counters that cross the thresholds. This column lists performance counters that triggered computer alerts.
* **Time** — The time elapsed since a computer alert was triggered.

### Details

This view displays:

* Time — The time at which a computer alert was triggered.
* A list of all performance counters that have crossed the critical or warning threshold for the selected threshold group and the counters’ values.

> **Please note!** When a computer alert is created, it will contain all the active performance counter alerts.

