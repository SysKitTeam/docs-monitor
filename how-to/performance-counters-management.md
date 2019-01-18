---
title: Performance Counters Management
description: This article explains how to manage Performance Counters in SysKit Monitor.
author: Andrea Budisa
date: 30/6/2017
---

# performance-counters-management

Performance counters are used to measure the performance of Windows OS. When the Performance Counters collection is enabled, the SysKit Monitor Service gathers performance data by querying WMI classes on Windows Servers. Performance counter values are stored in the SysKit Monitor database. The SysKit Monitor Service collects performance counters every 60 seconds and stores them in the database.

You can manage performance counters by navigating to **Administration** tab and selecting the **Performance Counters** ribbon page.

If you want to enable or disable the Performance Counters Extraction, click the **Counter Settings** button on the **Performance Counters** ribbon page.

The **Performance Counters** column in the computers grid view displays the performance counters collection status for the computers in your domain. A system job can have **one of four statuses**:

* **Started** – SysKit Monitor is collecting the performance counters.
* **Offline or Not Accessible** – SysKit Monitor is not collecting the performance counters. There can be several reasons for this status, e.g., the monitored computer can be offline or the WMI can be corrupted or disabled on the computer.
* **Unknown** – SysKit Monitor has not yet collected the performance counters for the computer.
* **Disabled** – SysKit Monitor is not collecting the performance counters.

> **Please note!** Performance Counters are being collected only for the enabled computers.
>
> **Please note!** The Performance Counters Extraction is automatically enabled. If you disable the Performance Counters Extraction, you will not be able to view any data on the Performance Reports.

The **details panel** below the grid view, under the **Settings** section, displays additional information about the last time Performance Counters data was collected on a selected computer.

## Performance Counters Ribbon

The Performance Counters ribbon page offers the options for managing Performance Counters:

* **Counter Settings** – use this dialog to configure Performance Counters system job settings to optimize SysKit Monitor's performance and resource consumption.

  Here you can:

  * **Enable** or **disable** the collection job for performance counters. If you uncheck this option, you will not be able to view any data on the Performance Reports.
  * **Configure** the Performance Counters system job’s collection interval.
  * Set after how long old counter data will be **aggregated**. The Performance Counters Aggregation system job aggregates the metrics data collected by hour and by day to enhance query performance and help minimize the size of the product database.
  * Set after how long old counter data will be **deleted** from the product database.

* **Enable / Disable** – Enable or disable the collection of performance counters on selected computer\(s\).
* **Help** – Get help with issues or questions you might have about using SysKit Monitor.

## Monitoring Templates

The Monitoring Template within SysKit Monitor is a collection of performance counters to be monitored, and it includes the associated rules and suggested threshold values to detect out-of-bounds conditions. Every Monitoring Template can contain at least one **monitoring element** of two that are currently available: **Performance Counters** and **Windows Services**.

See [Monitoring Templates](performance-counters-management.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) for more detailed information.

