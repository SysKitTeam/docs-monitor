---
description: This article discusses intelligent alerting and how you can set up different notifications with Syskit Monitor about the activities and issues in your environment.
---

# Real Time Alerting

As server environments become larger and more complex, the number of alerts generated increases and system administrators are spammed with too many notifications about the activities and issues in their environment. An intelligent alerting mechanism can help them to troubleshoot important issues faster.

Syskit Monitor provides **intelligent alerting**, which avoids unnecessary notifications, so system administrators can focus on the more important ones.

Detecting problems when they happen is not a challenge, but identifying the symptoms that lead to problems is. Now you can take steps to identify and stop possible problems at an **early stage**.

For example, when the **resource usage level** for a server is nearing its limit, when the **number of sessions** on a server has reached the warning or critical limit, or when **critical services** on servers have stopped or crashed, Syskit Monitor will trigger an **alert** to notify you as well as taking action to **automatically fix** the problems and it will tell you whether it has been successful or not.

**PowerShell Script Alerts** are crucial for effective monitoring of any critical and important jobs that run in a server environment. Syskit Monitor will let you know when critical errors occur if you’ve configured the **alert conditions** for important PowerShell Scripts. Syskit Monitor will generate the .csv file, which contains all data matching the applied conditions and trigger an alert that allows you to control the administration of your environment and respond to issues more quickly.

Intelligent alerting is crucial for effective performance monitoring of your server environment. This is where Syskit Monitor is useful, because it can send you alerts for key **Performance Counters**, **Sessions and Services**, as well as to **classify the importance** of these alerts.

Real-time alerts can contain an additional piece of information – the **computer group membership**. If the monitored computer is not a member of any computer group in Syskit Monitor, this information will not be displayed.

## Computer alerts classification

A computer alert is created when a computer crosses the performance counter thresholds. It consists of one or more performance counters for that computer. Syskit Monitor analyzes the performance counter values for each computer and compares them with defined warning and critical thresholds. **Advanced machine-learning algorithms**, such as an **artificial neural network** and a **decision tree**, are used to calculate a computer’s alert level automatically, which can be High, Medium, or Low.

Automatically determining the computer alert level can help you filter out low-priority alerts, thus allowing you to concentrate on the most important alerts. At times, Syskit Monitor might get the prioritization wrong, but you can change the alert level for the alerts Syskit Monitor incorrectly classifies. It may take Syskit Monitor a few days to adapt fully to your preferences, as it records your changes and uses the **k-nearest neighbors’ algorithm**, which is a machine-learning algorithm, to determine the levels for similar alerts in the future. However, the more you use it, the better it gets.

This tutorial will provide everything you need to know about these great features and how to use them. It will walk you through the basic concepts and challenges you may encounter.

### In the third part of the training you can learn about Syskit Monitor real-time alert feature.

* How can I configure Syskit Monitor to send Real-Time Alerts?
* How can I classify the importance of the Real-Time Alerts?
* How can I disable Low-level alerts from sending?
* What happens if I delete some alerts from the Manage Alerts dialog?
* How can I disable/enable sending alerts when computers cross warning or critical thresholds?

## Performance Alerts

Syskit Monitor Performance Counter Alerts can be configured through the [Monitoring Templates](../get-to-know-syskit-monitor/administration/monitoring-templates.md) category and [Options ](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#alerts)dialog. Performance Alerts list computers with performance counters that have crossed the warning and/or critical thresholds and their values.

## Session Alerts

Syskit Monitor Session Alerts can be configured through the [Edit Computer](../get-to-know-syskit-monitor/administration/servers-and-groups.md) dialog on the **Administration** tab and [Options ](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#alerts)dialog. Session Alerts list computers with sessions that have crossed the warning and/or critical thresholds and their counts.

## Service Alerts

Syskit Monitor Service Alerts can be configured through the [Monitoring Templates](../get-to-know-syskit-monitor/administration/monitoring-templates.md) category and [Options](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#alerts) dialog. Service Alerts list computers with important services that have stopped or crashed. Depending on the configured options, it can also display whether Syskit Monitor successfully restarted these services.

See the [Manage Alerts](../get-to-know-syskit-monitor/backstage-screen/manage-data-gathering.md#manage-alerts) article to learn more about Syskit Monitor alert classification.  
See the [Monitoring Templates](../get-to-know-syskit-monitor/administration/monitoring-templates.md) article to learn more about monitoring of the custom performance counters and important services.

## PowerShell Alerts

Syskit Monitor PowerShell Alerts can be configured through the [PowerShell Wizard](../how-to/powershell-scripts/powershell-wizard.md) on the **Administration** &gt; **PowerShell Scripts**. PowerShell Alerts include the **Script Name**, **Alert Status**, **Alert Conditions**, and **exported .csv file**, which contains the rows matching the applied conditions for the executed script.  
You will receive an alert when the condition is met and you will also receive an email after everything returns to the normal state.

