---
title: Event Log Reports
description: >-
  Learn how to use SysKit Monitor to track all user activities performed on the
  file system.
author: Andrea Budisa
date: 25/5/2017
---

# event-log-reports

The Event Log Reports are used to track security-related information and events on a computer system.  
These include:

* Auditing successful and failed logon attempts.
* Tracking when and why the users restart or shutdown their computers, as well as how long a Microsoft Windows system has been powered on without a restart.
* Monitoring of operations performed on the file system.
* Preventing attackers from guessing users’ passwords, and decreasing the likelihood of successful attacks on your network.

SysKit Monitor allows you to monitor all user activities performed on the file system. The Event Log reports will show you all read, write, append and delete operations performed on selected files and folders. Administrators can select the paths they want to monitor as well as file types that will be included in these reports. This kind of reports also include Blocked IP Addresses report.

> **Please note!** In order to see the Event Log Reports data it is necessary to configure [Extract Event Log](event-log-reports.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#extract-event-log) system job. Report data will be available after the Event Log system job execution.

Currently available reports are:

## Audit Reports

* **Logon Audit** – This report will show you a complete logon history overview on all computers – track successful and failed logon events.

## System Logs

* **Restart Log** – This history report will show you a complete list of every time the Windows Servers have restarted or shutdown and the reason why, including the user account who initiated a restart or shutdown.
* **System Uptime** – This report will show you how long a Microsoft Windows system has been powered on without a restart or if a reboot has been applied to the system recently.

## File System Audit Reports

* **File Access Audit Log** – Shows file access history and actions performed on files,as well as the exact time.
* **File Access Audit** – Summarizes the number of Read, Write, and Update actions per file and user.

## Blocked IP Addresses

SysKit Monitor detects potentially malicious IP addresses – this report shows the list of blocked IP addresses via Windows Firewall rules.

In order to be able to see this report, you should necessarily have the **Extract Event Log** system job enabled and running.

1. Navigate to the **File &gt; Manage &gt; System Jobs**.
2. In the **System Jobs** dialog double click **Extract Event Log**. Check in the **Collect Event log data** and **Block malicious IP addresses** option. Set after how many failed attempts to block the malicious IP address and after how many hours to unblock the same address.

The next option that needs to be enabled for this feature’s good performance is **Public IP Fetching**.

1. Navigate to the **File &gt; Configuration &gt; Options &gt; General**.
2. Check in the **Enable public IP fetching** option and click **Save** to confirm the changes.

After every Event Log system job run, each IP address that had more than or exactly X failed attempts will be blocked for Y hours. You will be able to see the malicious IP addresses in the Block IP Addresses report. \(In this case after the 5 failed logon attempts, malicious IP address will be blocked for the next 24 hours.\)

> **Please note!** If you are having problem seeing this report check if you have properly [configured SysKit Monitor server](event-log-reports.md#internal/how-to/audit-events/configure-block-malicious-ip-addresses-feature) to support this feature.

See [How to Enable Folder Auditing](event-log-reports.md#internal/how-to/audit-events/enable-folder-auditing) to learn more.  
See [How to Configure Audit Logon Events](event-log-reports.md#internal/how-to/audit-events/configure-audit-logon-events) to learn more.  
See [How to Configure Server to support Block Malicous IP Addresses feature](event-log-reports.md#internal/how-to/audit-events/configure-block-malicious-ip-addresses-feature) to learn more.

