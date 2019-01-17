---
title: Performance Dashboard
description: >-
  Performance Dashboard provides a quick view of real-time performance values
  for all monitored servers.
author: Andrea Budisa
date: 25/5/2017
---

# performance-dashboard

The **Performance Dashboard** displays data about the status of core system resources, such as CPU, Memory usage, Disk performance \(Disk Queue, Disk Read, Disk Write, and Disk Transfers\), and Network utilization \(Sent and Received\). It also displays real-time User and Process counts for all computers. The values shown on the Dashboard are updated **every 60 seconds**.

## Computer status representation

**Computer status indicators** – provide important information about performance counter values for the selected computers\(s\). The status column has a small pop-up window that concisely describes the computer status being pointed to.

* Red – The computer is in a critical state.
* Yellow – The computer is in a warning state.
* Green – The computer is functioning normally.
* Light Green – The computer state is being determined. How long it takes to determine the state depends on the longest threshold period.
* Light Grey – The computer is offline or not accessible.
* Dark Grey – The computer is not being monitored.

**Performance counter columns** also have a small pop-up window that concisely describes the performance counter being pointed to. Common Performance Counters, such as CPU, Memory usage, Disk Free Space, Network Sent and Received, do not include the additional explanation.

**Performance counter values** on the dashboard **change colors** depending on the defined thresholds, and the time period spent above these thresholds, which are configured through the [Monitoring Templates](performance-dashboard.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) category on the Administration tab. When a cell is painted red \(or yellow\), it means that a threshold has been crossed for the associated performance counter. Red indicates a critical threshold, while yellow indicates a warning threshold.

> **Please note!** Values for Disk and Network performance counters are displayed for the **most critical** Disk and Network Adapter on each computer.

## Dashboard columns explanation

* User Count – Total number of users who are logged on to this computer.
* Process Count – Total number of running processes \(including system processes\) on this computer.
* Disk Queue \(count\) – Average number of both read and write requests that were queued for the disk, value should be between 0 and 2 most of the time, but if you have SAN or RAID controller this can spike above 2.
* Disk Read – Current disk read bytes per second \(throughput\), maximum mechanical disk rate is 50-200 MB/s, SSD up to 550 MB/s, modern SAN more than 1000 MB/s, this transfer speed also depends on the RAID level, caching mechanism etc.
* Disk Write – Average disk write bytes per second \(throughput\), maximum mechanical disk rate is 40-180 MB/s, SSD up to 500 MB/s, modern SAN more than 1000 MB/s, this transfer speed also depends on the RAID level, caching mechanism etc.
* Disk Transfer – Number of read and write IOPS \(Input/output Operations per Second\),mechanical disk IOPS are from 100-400, SSD from few thousands up to 100 000, modern  SAN from few thousands up to million IOPS.
* Last Updated – Time passed from when the performance counter values were last collected for this computer.

## Dashboard Ribbon

Use the dashboard ribbon to change the current layout or take the following actions:

* **Save As View** – Dashboard can have a different Computer filter applied, if you click on the Save As View button on the ribbon, enter the view name, choose the view type and visibility, and click on Save. Afterwards, you can adjust the Computer filter on the newly created view and save the changes by clicking the **Save View Changes** button on the ribbon. When you find an arrangement that you like, you can further customize it with other options, such as sorting and changing your view.
* **Drill To Overview** – Easily drill down from the Dashboard to the Overview report by double-clicking the specified computer or by selecting the computer and clicking the Drill To Overview button on the ribbon.
* **Refresh** – Refresh items in the left navigation panel, filters, and the main view.
* **Default Layout** – Reset the current layout of the main view to default.
* **Remote Desktop** – Open a Remote Desktop connection to the selected computer.
* **Options** – Allows configuration of options for Report and Dashboard data, Alerts, Export and System Jobs.

