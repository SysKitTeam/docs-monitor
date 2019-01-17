---
title: Monitoring and Restarting Stopped Windows Services
description: >-
  This article describes how to use Syskit Monitor to track important services
  that are running on the servers and restart them automatically if they stop or
  crash.
author: Andrea Budisa
date: 28/6/2017
---

# monitoring-and-restarting-stopped-windows-services

Any Windows Server usually has dozens of services running in the background right from the moment that the operating system starts up. Depending on your server role, there can be a lot of important services on your servers that you’d need to keep running at all times.

Some of these are: **SharePoint**, **SQL**, **IIS**, **Microsoft Dynamics CRM**, **Exchange**, **Hyper-V**, **Remote Desktop Services**, **VPN**, and **Citrix XenApp/XenDesktop**.

It can be very frustrating if the service crashes or hangs after you leave it unattended because it will then have to stay that way until you come back to solve the problem. What could be even more annoying is not knowing that the service in question is not running. This is where the SysKit Monitor comes in useful because you can configure to **monitor the important services** – for all servers – that are required to stay running or to **restart automatically** if they are stopped or crashed.

This tutorial will provide everything you need to know about these great features and how to use them. It will walk you through the basic concepts and challenges you may encounter.

## In the second part of the training you can learn about monitoring important Windows Services.

* How can I monitor the status of my Windows Services?
* How can I identify the Windows Services that are stopped or crashed?
* How can I receive Real-time Alerts for stopped services?
* How can I configure the SysKit Monitor to automatically restart the important services?

The **Services report** is available in the [Inventory Reports – Software](monitoring-and-restarting-stopped-windows-services.md#internal/get-to-know-syskit-monitor/reports/inventory-reports/hardware-and-software) category. This report will help you easily monitor all services that are installed and running on your local and remote computers. It gives you detailed information about services, such as **Display Name**, **Status**, **Startup Type**, **Logon Account** that is used to start the service and **Description**. The values shown on the Services report are updated every **30 seconds**.

When a computer is added to the monitoring, SysKit Monitor collects a full list of services installed on it. You can configure the important services through the [Monitoring Templates](monitoring-and-restarting-stopped-windows-services.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) category. Afterwards, assign the newly created Monitoring Template to designated computers or computer groups.

Services that are selected as important, for a designated computer, and configured to be monitored, are displayed in the [Overview report](monitoring-and-restarting-stopped-windows-services.md#internal/get-to-know-syskit-monitor/reports/performance-reports/computer-performance) under **Monitoring Templates &gt; Monitored Services**.

Depending on the options you configure in the **Monitoring Template** which is assigned to a computer, SysKit Monitor can send you **e-mail notifications** when one or more important services are `stopped` and can perform **automatic service restarts**. It will also tell you whether it has been successful or not.

See [Real-time Alerting](monitoring-and-restarting-stopped-windows-services.md#internal/common-tasks/real-time-alerting) to learn more about SysKit Monitor real-time alerts.  
See the [Monitoring Templates](monitoring-and-restarting-stopped-windows-services.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) article to learn more about managing important services.

