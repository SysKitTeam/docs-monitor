---
title: Monitoring Windows Server and Application Performance
description: >-
  This article describes how to use Syskit Monitor to collect the performance
  data from your servers in real time.
author: Andrea Budisa
date: 24/5/2017
---

# monitoring-windows-server-and-application-performance

Server performance audits and periodic health checks are crucial, but during technical difficulties, it becomes necessary to analyze real-time and history data. Most network administrators check the current performance of their servers by running various commands via the Command Line or the PowerShell interface.

Wouldn’t it be nice if there was a way to find out what has gone wrong with the servers and why, whether it’s CPU usage, memory usage, a program behaving badly, or something else? It would definitely be nice to know all these things and more. That’s why SysKit Monitor exists.

SysKit Monitor, with its **real-time monitoring** functionality, enables you to instantly report on server performance in **real time** without having to use another tool to remotely access the problematic server. The **Real-Time** and **History reports** give you all the information you need about the performance and health of your server environment remotely.

This tutorial will provide everything you need to know about these great features and how to use them. It will walk you through the basic concepts and challenges you may encounter.

## In the first part of the training you can learn about Server Performance monitoring.

* How can I verify the status of my Windows Servers and is the resource usage optimal?
* How can I identify the Windows Servers with performance issues?
* How can I monitor resource utilization to achieve more efficient resource provisioning in my server environment?
* How can I adjust the values for warning and critical thresholds to match the capacity or other constraints on my servers?
* How can I create a separate view for different servers?
* How can I receive Real-time Alerts for performance counters?
* Why are my Windows Servers painted light green on the Performance Dashboard?
* Where can I find more detailed history reports for my servers?

The [Performance Dashboard](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/dashboards/performance-dashboard) displays data about the status of core system resources, such as **CPU**, **Memory usage**, **Disk performance** \(Disk Queue, Disk Read, Disk Write, and Disk Transfers\), and **Network utilization** \(Sent and Received\). You can also view real-time User and Process counts for all computers.

If you want to access more detailed information about a particular computer, the [Overview report](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/reports/performance-reports/computer-performance), with its out-of-the-box charts and threshold colors, is a great way to monitor the overall computer performance over the last 15 minutes. This report will also show you which processes are consuming the most CPU time on the selected computer.

The CPU, Memory, Disk and Network reports in the [Computer Performance](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/reports/performance-reports/computer-performance) category display detailed performance statistics for the selected Date Range, Computer\(s\) and Performance Counters – each of these history reports has its own set of filters.

The [Application Performance](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/reports/performance-reports/application-performance) reports help you easily track the performance values of the processes running on all the servers in your environment, such as **CPU**, **Memory**, **IO Reads**, and **IO Writes**. With these out-of-the-box Real-Time and History reports, graphical views and thresholds, administrators can maximize application uptime and ensure that applications run at peak performance.

The [User Performance](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/reports/performance-reports/user-performance) reports help you easily track the performance values of the user processes running on the servers in your environment. That way you can easily detect the applications that are slowing down the servers. The Real-Time report has an option for the current running processes – it provides the ability to **end** multiple processes at once.

See the [Monitoring Templates](monitoring-windows-server-and-application-performance.md#internal/get-to-know-syskit-monitor/administration/monitoring-templates) article to learn more about monitoring and managing custom performance counters.

