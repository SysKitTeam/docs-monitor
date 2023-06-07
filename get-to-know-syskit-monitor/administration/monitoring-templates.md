---
description: Monitoring Templates are designed to make it as easy as possible for you to analyze system performance and simplify the performance monitoring of your Windows environments.
---

# Monitoring Templates

From a single console, you can monitor application and hardware performance in real time, customize the data you want to collect with Syskit, define thresholds for computer state and alerts, generate reports, and view performance data history through various Syskit Monitor reports.

Performance Counters are the numeric data values that Syskit Monitor collects by monitoring computers. They can be included in the operating system or can be part of individual applications. A unique set of Windows performance counters provides statistical information for components such as processor, memory, processes, hard disk, and cache. Syskit can also monitor performance counters for external components such as databases, applications, and printers.

Syskit Monitor provides a **Template Wizard** for customization of performance counters collection. With the Template Wizard, you can discover and load the same performance counters that are accessible through Microsoft Performance Monitor.

The Monitoring Template within Syskit Monitor is a collection of performance counters to be monitored, and it includes the associated rules and suggested threshold values to detect out-of-bounds conditions.  
Syskit comes with a [predefined set of Monitoring Templates](../../how-to/monitoring-templates/predefined-templates.md) for some of the most common server roles—including **SQL, IIS,** and **SharePoint**—to quickly get you up and running with performance monitoring.

Syskit Monitor can request the current value of performance counters at a specified interval. The default performance counters **collection interval** is set to 60 seconds.

Every Monitoring Template needs to contain at least **one monitoring element** of two that are currently available: **Performance Counters** and **Windows Services**. You can create separate Monitoring Templates for Windows Services and assign them to designated computers or computer groups.

Once Syskit Monitor is up and running on your server, all counters that exist on a **representative computer** can be **discovered** and **loaded** during the Monitoring Template creation process. Afterwards, when a Monitoring Template is assigned to designated computers or computer groups, Syskit Monitor will discover and bind all available counters and their instances on the computers you have specified for monitoring.

Monitoring the health of a computer system is incredibly important. That’s why Microsoft built performance monitoring into the very first version of Windows NT. Now you can start monitoring custom performance counters using the Template Wizard within Syskit Monitor.

You can create Monitoring Templates to monitor various performance metrics on specific computers or computer groups. Each monitoring template should **reflect the specific computer role** \(SharePoint, SQL, IIS, etc.\).

Read this article to learn more on how to:

## [Enhance your monitoring using Template Wizard](../../how-to/monitoring-templates/template-wizard.md)

All Monitoring Template\(s\) that are **assigned to the monitored computer\(s\)** can be viewed and explored in the [Overview ](../reports/performance-reports/computer-performance.md)and [Detailed Analysis](../reports/performance-reports/computer-performance.md#detailed-analysis) reports.

{% hint style="info" %}
**Tip!** In cases where an SQL template has been applied to a server with **named SQL Server instances installed**, no data will be collected for those instances. You need to create a new template by adding performance counters for each instance you wish to monitor, while following the naming convention.
{% endhint %}

### Monitoring Templates Ribbon

Ribbon provides a set of basic functions for managing the **created** monitoring templates.

* **Add** – Add a new monitoring template.
* **Modify** – Modify the selected monitoring template.
* **Duplicate** – Create a copy of the currently selected monitoring template.
* **Delete** – Delete the selected monitoring template.
* **Assign to Computers** – Assign the selected monitoring template to computer\(s\).
* **Assign to Computer Groups** – Assign the selected monitoring template to computer group\(s\).

Read these articles to learn more on how to:

## [Import / Export Monitoring Template](../../how-to/monitoring-templates/import-export-template.md)

## [Download Templates](../../how-to/monitoring-templates/download-templates.md)

