---
title: Monitoring Templates
description: >-
  Monitoring Templates are designed to make it as easy as possible for you to
  analyze system performance and simplify the performance monitoring of your
  Windows environments.
author: Andrea Budisa
date: 21/6/2017
---

# monitoring-templates

From a single console, you can monitor application and hardware performance in real time, customize the data you want to collect with SysKit, define thresholds for computer state and alerts, generate reports, and view performance data history through various SysKit Monitor reports.

Performance Counters are the numeric data values that SysKit Monitor collects by monitoring computers. They can be included in the operating system or can be part of individual applications. A unique set of Windows performance counters provides statistical information for components such as processor, memory, processes, hard disk, and cache. SysKit can also monitor performance counters for external components such as databases, applications, and printers.

SysKit Monitor provides a **Template Wizard** for customization of performance counters collection. With the Template Wizard, you can discover and load the same performance counters that are accessible through Microsoft Performance Monitor.

The Monitoring Template within SysKit Monitor is a collection of performance counters to be monitored, and it includes the associated rules and suggested threshold values to detect out-of-bounds conditions.  
SysKit comes with a [predefined set of Monitoring Templates](monitoring-templates.md#internal/how-to/monitoring-templates/predefined-templates) for some of the most common server roles—including **SQL, IIS,** and **SharePoint**—to quickly get you up and running with performance monitoring.

SysKit Monitor can request the current value of performance counters at a specified interval. The default performance counters **collection interval** is set to 60 seconds.

Every Monitoring Template needs to contain at least **one monitoring element** of two that are currently available: **Performance Counters** and **Windows Services**. You can create separate Monitoring Templates for Windows Services and assign them to designated computers or computer groups.

Once SysKit Monitor is up and running on your server, all counters that exist on a **representative computer** can be **discovered** and **loaded** during the Monitoring Template creation process. Afterwards, when a Monitoring Template is assigned to designated computers or computer groups, SysKit Monitor will discover and bind all available counters and their instances on the computers you have specified for monitoring.

Monitoring the health of a computer system is incredibly important. That’s why Microsoft built performance monitoring into the very first version of Windows NT. Now you can start monitoring custom performance counters using the Template Wizard within SysKit Monitor.

You can create Monitoring Templates to monitor various performance metrics on specific computers or computer groups. Each monitoring template should **reflect the specific computer role** \(SharePoint, SQL, IIS, etc.\).

Read this article to learn more on how to:

## [Enhance your monitoring using Template Wizard](monitoring-templates.md#internal/how-to/monitoring-templates/template-wizard)

All Monitoring Template\(s\) that are **assigned to the monitored computer\(s\)** can be viewed and explored in the [Overview](monitoring-templates.md#internal/get-to-know-syskit-monitor/reports/performance-reports/computer-performance) and [Detailed Analysis](monitoring-templates.md#internal/get-to-know-syskit-monitor/reports/performance-reports/computer-performance/#detailed-analysis) reports.

> **Tip!** In cases where an SQL template has been applied to a server with **named SQL Server instances installed**, no data will be collected for those instances. You need to create a new template by adding performance counters for each instance you wish to monitor, while following the naming convention.

### Monitoring Templates Ribbon

Ribbon provides a set of basic functions for managing the **created** monitoring templates.

* **Add** – Add a new monitoring template.
* **Modify** – Modify the selected monitoring template.
* **Duplicate** – Create a copy of the currently selected monitoring template.
* **Delete** – Delete the selected monitoring template.
* **Assign to Computers** – Assign the selected monitoring template to computer\(s\).
* **Assign to Computer Groups** – Assign the selected monitoring template to computer group\(s\).

Read these articles to learn more on how to:

## [Import / Export Monitoring Template](monitoring-templates.md#internal/how-to/monitoring-templates/import-export-template)

## [Download Templates](monitoring-templates.md#internal/how-to/monitoring-templates/download-templates)

