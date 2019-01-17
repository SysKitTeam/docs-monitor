---
title: Servers and Groups
description: >-
  This article outlines all the options for the successful administration of
  servers that are being monitored with SysKit Monitor.
author: Andrea Budisa
date: 25/5/2017
---

# servers-and-groups

If you click on the **Administration** tab in the left navigation, the Administration – Computers section will be displayed.

## Administration – Computers

This category contains the following elements:

Displays all monitored computers in your domain and their characteristics, such as **Status, Type,** assigned **Computer Groups** and **Performance Counters** collection status. After clicking on a computer in the grid view, its details will be shown.

Monitored computers can have **one of five statuses** in the Administration tab:

* **Online** – The computer is active and is currently being monitored by SysKit Monitor.
* **Offline** – The computer is offline and is being monitored, but SysKit Monitor is not collecting the data because the computer is unreachable.
* **Unauthorized** – The computer is active and being monitored, but SysKit Monitor is not collecting the data because the appropriate permissions are missing.
* **Unknown** – SysKit Monitor is determining the computer status.
* **Disabled** – The computer is not active and is not being monitored by SysKit Monitor.

The **Type** column displays the computer type, which is automatically assigned to computers during the adding process. The type can be **Server, Gateway,** or **Workstation**.

The **Computer Group** column displays the name of the group to which the computer is assigned. A computer can be assigned to one or more Computer Groups. The main purpose and concept of the Computer Groups will be explained later in this article.

The **Performance Counters** column displays the performance counters collection status for the computers in your domain. A system job can have **one of four statuses**: Started, Offline or Not Accessible, Unknown, and Disabled. See the [Performance Counters Management](servers-and-groups.md#internal/how-to/performance-counters-management) article to learn more.

The **details panel** below the grid view displays additional information for the **selected computer**.

* The **Identification** section displays various status monitoring elements, such as the monitoring status within SysKit, the current computer status, the last time the computer was seen online, the last time Event log data was retrieved, the Total System Uptime, and the IP Address.
* The **Details** section displays more detailed information on the computer’s specifications, such as the physical memory, the operating system and its version, installed service packs, whether the computer is enabled in Active Directory, and the Organizational Unit to which it belongs.
* The **Settings** section displays various configuration options that have been applied, such as session thresholds information, which are used to display the warning and critical session counts on the Sessions Dashboard. It also displays the last time Performance Counters data was collected and information on all Monitoring Templates that have been applied.

## Administration – Computer Groups

This category is very similar to the previously described Computers category since it contains the same ribbon options and grid view columns. It contains more options for managing Computer Groups.

* **Assign Computer\(s\) to Group** – Quickly assign selected computers to the desired Computer Group.
* **New Group** – Create a new computer group.
* **Edit Group** – Edit the selected computer group and computers’ membership, e.g., add/remove selected computers.
* **Delete Group** – Delete the selected computer group.

The **Computer Groups** category enables the **logical grouping of monitored computers** so you can more easily manage a large number of computers. This category will help you assign options, such as **Monitoring Templates**, for an **entire group of computers** instead of an individual computer.

See the [Monitoring Templates](servers-and-groups.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) article to learn how to simplify performance monitoring for your Windows environments.

### Administration Ribbon

Use the Administration ribbon page to change computer settings or take actions:

* **Add** – allows you to add new computers to monitoring.
* **Edit** – enables you to update the operating system and computer type and define session thresholds for the selected computer\(s\).  
  You can **define warning and critical session thresholds**, which will then be displayed on the [Sessions Dashboard](servers-and-groups.md#internal/get-to-know-syskit-monitor/dashboards/sessions-dashboard). Session thresholds help you visualize the current statuses of your computers.  
  There are **2 visual color indicators** for computers’ sessions:

  * **Yellow** – online computer that has reached an alarming number of users \(e.g. 51 users online, the warning threshold is 50\)
  * **Red** – online computer that has reached a critical number of users \(e.g. 101 users online, the warning threshold is 100\)

  Adjust the values for warning and critical thresholds to match the capacity or other constraints on your computers. You can define the length of time before the **alert notification is to be repeated** for the session alerts.  
  See [Alerts section](servers-and-groups.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#alerts) if you want to enable the option to receive **e-mail notifications** if monitored computer crosses a warning and/or critical session threshold.

* **Use In Reports** – enables using information gathered from the currently not monitored computers in the reports. If the computer is currently disabled, by enabling this option all of the previously gathered data from this computer will be shown in the reports.
* **Diagnostics** – enables you to perfrom various diagnostics and to identify issues with your product data. These options will also help our developer and support teams to troubleshoot potential problems more efficiently.
* **Remote Desktop** – starts remote desktop session with the selected computer.
* **Options** – allows configuration of options for Report and Dashboard data, Alerts, Export and System Jobs.

The **Administration – Computers** ribbon page also contains options for managing **Computer Groups**, which are listed in the navigation tree view on the left side.

* **Assign Computer\(s\) to Group** – Quickly assign selected computers to the desired Computer Group.
* **New Group** – Create a new computer group.

See the [Performance Counters Management](servers-and-groups.md#internal/how-to/performance-counters-management) article to learn more about managing performance counters.

> **Please note!** In the trial version the maximum number of monitored computers is **limited to 20**.

