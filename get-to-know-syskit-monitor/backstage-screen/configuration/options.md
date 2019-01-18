---
title: Options
description: >-
  This article explains how to you configure the available options for SysKit
  Monitor. Options include General, Alerts, Export and System Jobs
  configuration.
author: Andrea Budisa
date: 29/6/2017
---

# options

Options include: General, Alerts, Export, and System Jobs configuration. To edit and configure the available options click on the **File** tab, select **Configuration** from the left navigation bar and click the **Options** button. Another way to access the Options dialog is by clicking the Options button in the reports ribbon.

## General

This section describes general options for configuring report and dashboard data.

### Report Options

* **Monitor information** about applications will monitor the applications users are running on the Remote Desktop Services / Citrix Xenapp server.
* **Enable public IP fetching** enables you to get the IP address of the client if he is connecting directly to the server via WAN. If server is sitting on the public IP and your clients are connecting from home or from remote locations, you can monitor the public IP addresses of all the clients that are connecting to your environment.

  > **Please note!** Enabling public IP fetching may decrease the network performance. Please consult with our support team for additional information.

* **Anonymous activity tracking** means that activities will still be tracked but you will not be able to see the real usernames and profiles. Data already stored will also be converted.

  > **Please note!** Use this option wisely, in case you proceed with anonymization you will not be able to revert this process!

* **Use Username instead Full Name** changes all full names in the reports to the corresponding usernames.
* **Enable Role-based security** allows you to adjust for the each viewer individually which OU’s he can see in the reports.
* **Report user’s state as Idle after X minutes of inactivity** will report idle time after this time. This means that if a user is idle for 4 minutes, SysKit Monitor will not mark him as Idle. If the user is idle for 5 minutes or more SysKit Monitor will start calculating that user as Idle.
* **Use only top values** option if your charts contain a big number of values and you are only interested in top values. After selecting this, you will have the ability to set the top N values in the charts.

### Dashboard Options

* **Automatic refresh dashboard after X seconds** allows you to change how often to refresh dashboard data or to disable the automatic refreshing at all.

### Working Hours

* Use the **Working hours** option to define the working time of users connecting to the computers. After choosing this, you will have the ability to filter reports according to your working hours. This means it will be possible for you to get reports only for the time of the day you have defined as working time. Default working hours are from 9-17 o’clock \(9 AM – 5 PM\).

### Citrix Options

* Use this option to **enable gathering Published Applications** information. Here you can:
  * **Resolve Published Applications Name** – enable this option to use Published Application display name instead of a Full Name.
  * **Reset Gather Mode** – re-detect Published Application data gathering mode.

## Alerts

This section describes the **alert types** and configuration of the recipients.

### Application Alerts

Select which alerts you want to receive and enter the **e-mail addresses** of the recipients.

* Send **Real-time Alerts** – enable this option to receive e-mail notifications for Performance Counters and Services. After selecting this, you will have the ability to exclude Low level alerts from sending.
* Send **Session Alerts** – enable this option to receive e-mail notifications if a monitored computer crosses a warning and/or critical session threshold.
* Send alert if monitored computer goes **offline** – enable this option to receive e-mail notifications if a monitored computer is offline more than X minutes.
* Send alert in case of **SQL service failure** – enable this option to receive e-mail notifications if the SysKit Monitor Service cannot establish a connection to SQL Server.
* Send alert if database size reaches **critical limit** – enable this option to receive e-mail notifications if your SQL Express LocalDB database becomes too large.
* Send alert when **inventory changes are detected** – enable this option to receive e-mail notifications if differences are detected after taking automatic inventory snapshot.

## Export

This section describes appearance modification of the exported reports and save locations for the Subscriptions.

### Printing Options

* These settings allow you to configure the wanted header and footer for your PDF reports. You can also upload an image which represents the company logo and easily brand all the reports that SysKit Monitor generates for you.

### Network and SharePoint Save Locations

* To be able to save various SysKit Monitor reports to **File Share** and **SharePoint**, it is necessary to configure the Location settings.

## System Jobs configuration

This section describes how to configure System Jobs in SysKit Monitor. System Jobs run periodically and you are able to configure them as you wish. You can access System Jobs by navigating to the **File** tab, selecting **Manage** from the left navigation bar, clicking **System Jobs** to see their current status. Another way to access the System Jobs is by clicking the **Options** button in the reports ribbon. You can configure each system job according to your preferences and it will run periodically as configured.

The following System Jobs are available:

## Send e-mails

This section describes **Send E-mails** system job and how to configure all of the settings.

### Outgoing email settings

* To be able to deliver various SysKit Monitor reports by e-mail, it is necessary to configure the outgoing SMTP server and the sender e-mail address. To specify these settings double click Send e-mail in the System Jobs dialog. The specified sender will be visible in the e-mails sent to any receiver of the reports.
* Before saving these settings, it is possible to test the specified configuration by clicking the **Test email settings** button \(a test e-mail will be sent to the e-mail address of the sender specified on this screen\).

### Period

* Set the **Period** for how often this job will be executed.

### Email presentation options

* Customize reports footer and add text that will be sent when there is no report data.

### Delivery options

* Configure delivery options from the drop-down menus. Available intervals are **Daily**, **Weekly**, **Monthly**, and **Quarterly**. Every delivery interval has its own options. Delivery options for all intervals will be saved by clicking on the Save button.

See [How to configure Report Subscriptions](options.md#internal/how-to/reports/configure-report-subscriptions) article to learn more.

## AD integration

This section describes **AD Integration** system job and how to configure all of the settings. Information is periodically retrieved from the Active Directory, as set in the period options \(the recommended interval is once a day\). The Active Directory Integration gathers the following data for each user:

1. Membership in Organizational units \(name and description\)
2. Memberships in Security and distribution groups \(name and description\)
3. User personal data, such as e-mail, first name, last name, etc.

Integration only gathers data about groups and OUs that have members in the server farm. To improve the performance, it will not gather data about users that are not logged in as RDS users.

### AD Integration Settings

After installing SysKit Monitor, all available domains are **automatically discovered** and ready to be monitored. However, in some environments, you will need to perform additional steps to configure the Active Directory \(AD\) integration. Here are some things you might need to check:

* If you do not want to monitor computers from **auto-discovered domains** or if SysKit Monitor did not automatically detect some **trusted domains**, you can add the desired domain by specifying a valid domain name, domain controller name, or IP address of the domain controller. This can happen when you create a trust relationship with an existing or new domain after installing SysKit Monitor.
* You can **manually add an untrusted domain** by entering the domain name, domain controller, or IP address of the remote AD domain controller.
* Make sure your account has the **necessary privileges** to query the AD. It is common in multiple domain environments for each domain to have its own set of specified domain admins and for users from other domains to be restricted from accessing its servers. With that use case in mind, we added a dialog that lets you **specify credentials for each of the domains** in your environment.

In the **Add/Edit Domain** dialog, you can **manage** and **configure** the following settings:

* Enter a valid domain name, domain controller name, or IP address of the domain controller;
* Enable or disable the selected domain; and
* Modify the credentials for the selected domain.

  > **Please note!** If the trust relationship was established with newly created or existing domains, they will be discovered and shown in the AD integration dialog after the AD integration system job execution.

See the [Monitoring multiple domains](https://www.syskit.com/blog/multi-tenant-server-monitoring-with-syskit/) article to learn more on how to use SysKit Monitor to collect data for more than one AD domain.

### Period

* Set the **Period** for importing data from the Active Directory. AD Integration will run periodically depending on period options.

## Extract Event Log

This section describes how to configure the **Extract Event Log** system job and **Block malicious IP addresses** feature.  
Turn this system job on if you want to collect auditing of the files and folders, who is accessing which files and when exactly, and if users have deleted/written/appended any data to the existing or new files.

### Configure Event Log Extraction

* You can enable the **Block malicious IP addresses** feature. After selecting this, you will have the ability to configure the following:
  * After how many failed attempts to block certain IPs.
  * After how many hours to unblock these IP addresses.
  * If you want to perform unblocking of the computers with blocked IPs immediately, click the **Unblock blocked IP Addresses** button.

### Period

* Set the **Period** for how often this job will be executed.

See [How to Enable Folder Auditing](options.md#internal/how-to/audit-events/enable-folder-auditing) to learn more.  
See [How to Configure Audit Logon Events](options.md#internal/how-to/audit-events/configure-audit-logon-events) to learn more.  
See [How to Configure Server to support Block Malicous IP Addresses feature](options.md#internal/how-to/audit-events/configure-block-malicious-ip-addresses-feature) to learn more.

## Concurrent Usage

This section describes how to configure the **Concurrent Usage** system job.

If you notice that your concurrent usage reports are incomplete, or you have just updated the product to the latest release from a release that did not have concurrent usage reports, use this option to reset aggregation and let the product recalculate data.

### Concurrent Usage Settings

* Here you can view the date when the last data recalculation was completed.
* You can enable the application concurrent usage summarization.

## Aggregation

This section describes how to configure the **Aggregation** system job.

This feature is used for loading balanced Citrix farm environments. If you are not using the farm environment, do not enable this option. If you have issues with farm reports please use the Reset button to reset states in the SysKit Monitor. Please note that this will not erase your data, your data will be recalculated from the beginning. Idle states shorter than X minutes will not be included.

### Aggregation Settings

* Here you set the length of Idle states which will be disregarded.

## Data Retention

This section describes how to configure **Data Retention** in order to save space on the SQL Server.

### Data Retention Settings

Here you can modify the length options for the period after which the product will automatically delete data from the product database.  
By default, all retention options are set as follows:

* Delete log entries older than 5 years;
* Delete performance counter data older than 30 days;
* Delete PowerShell script data older than 30 days.

### Period

* Set the **Period** for how often this job will be executed.

## Inventory Snapshots

This section describes how to configure the **Inventory Snapshots** system job.

### Snapshots Settings

Here you can choose which Inventory data SysKit Monitor will collect **when taking a snapshot**:

* Enable the collection of hardware and software inventory components, such as CPU, RAM, available hard disk space, installed programs, Windows updates, and local administrators on the servers.
* Enable the execution of PowerShell scripts on the defined computers or computer groups. This means the created PowerShell scripts will be **scheduled to run** on every Inventory Snapshots system job triggered.

> **Please note!** When Printers option is enabled, user printer information will be collected on every service triggering along with the other user options. This can slow down data gathering and application performance. We strongly recommend not to enable this feature unless it is necessarily needed.
>
> **Please note!** When Available and Installed Updates options are enabled, the software information will be collected on every service triggering. This can slow down data gathering and application performance.

By default, all options for taking snapshots and for report visibility in the Compare Wizard are set to **Enabled**.

### Period

* Set the **Period** for how often this job will be executed.

### Compare

* Use these options to configure which reports you want compared. Unchecked options will not be displayed in the Compare Result dialog.

Refer to the **Alerts** section within this article if you want to enable the option to receive e-mail notifications if differences are detected after taking an **automatic** inventory snapshot.

## Service

This section describes the **SysKit Monitor Service**.

### Collect Interval

* Set the SysKit Monitor collect interval. In this interval, the product will collect data from the monitored computers. The default and recommended interval is 90 seconds. The lower the interval, the more accurate the data will be, but the recommended scenario is never to hold this value under 60 seconds.   

  However, we have calculated that the best value and accuracy rate is the default 90 seconds.

* You can choose whether to show warning when service is not running or not.
* **Verbose logging** – You can choose to enable these options to help our developer and support teams solve potential problems before they occur. Before enabling these options, please consult our support team. Select the check boxes to enable verbose logging for the following sources:

  * Verbose event logging – The Windows Event Viewer will list in detail every event that usually cannot be viewed.
  * Database service log sources SysKit Monitor Service will write entries for the specified sources into the product database. The drop-down menu contains the following sources: Analyzer, Performance Counters, System Jobs, and PowerShell.

  The verbose event logging warning will show if any of the available options have been enabled, because a lot of entries could be written into the Windows Event Viewer and product database.

