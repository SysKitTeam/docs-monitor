---
title: Monitoring User Activities and Application Usage
description: >-
  This article focuses on auditing and monitoring user activity on Windows
  Servers in your environment.
author: Andrea Budisa
date: 28/6/2017
---

# monitoring-user-activities-and-application-usage

The ability to **audit and monitor user activity on Windows Servers** is key to knowing what is going on in your Windows environment.

There are many reasons to monitor user activity. First, monitoring user sessions on Remote Desktop Services allows you to get **detailed session log** for selected users; these logs include data on a session’s start and end times and the user’s total time spent on the system in each session state \(active, idle, remote, and disconnected\). User Reports provide **access information**, giving you detailed insights on who is connected, from which computer\(s\) they connected, when they connected, how long they were connected, etc. These reports display **user activities** over the course of one day or the selected Date Range. You can also configure payroll calculations for employees using data gathered by SysKit Monitor.

Second, monitoring a **user’s application usage** provides data such as the **number of application instances** and the **total time the users spent using a particular application** on Remote Desktop Services. You can also keep track of the **number of concurrent application instances per user** during each hour over the course of one day or a selected Date Range. Application Reports provide application usage information, giving you detailed insights into which application the user used, which computer\(s\) the user used it on, the total and average time spent using an application in each session state \(Active and Idle\), etc.

### In the fourth part of the training you can learn about monitoring user activities and application usage.

* Where can I view the most active users by time spent on the system?
* Where can I view a detailed session log for a specific user?
* Where can I track the bandwidth usage for each user?
* Where can I view the most used applications?
* Where can I track which user used a specific application as well as when and for how long the user used it?
* Where can I view the number of concurrent application instances for a specific application per day?

## What's the difference between the active, idle and disconnected states?

We track four different states while a user is connected to a remote server. The user is in the active state while there is keyboard or mouse activity. After five minutes \(this can be easily changed in **File** &gt; **Configuration** &gt; **Options**\) of inactivity, the user state changes to idle.

The four states and the differences between them are listed here:

**Active** — User is active within a remote desktop session, for example, while running applications, Web browsing, or similar activities that involve using a mouse or keyboard.

**Idle** — User is considered idle after a period of mouse/keyboard inactivity in the RDP session. The user will be considered idle if there is no activity \(e.g. keyboard strokes or mouse movement\) in the configured time period. The default RDS idle timeout is one minute, and the default for SysKit Monitor is five minutes.

**Disconnected** — A state when a user is disconnected from the session but the session is still running. User could have been disconnected due to a network or other failure or did not use the proper logout procedure and just closed the Remote Desktop session window using the Close button \[x\]. This session is still running on the server and consuming resources, so the user can reconnect and resume the disconnected session.

**Remote Control** — User is in the remote control state if the user is remote controlling another user \(also known as shadowing on Citrix servers\).

See [User Reports](monitoring-user-activities-and-application-usage.md#internal/get-to-know-syskit-monitor/reports/user-reports) and [Application Reports](monitoring-user-activities-and-application-usage.md#internal/get-to-know-syskit-monitor/reports/application-reports) to learn more.

