---
title: Configure Audit Logon Events
description: >-
  This article explains steps required to configure Audit Logon Events for
  Windows Servers.
author: Andrea Budisa
date: 30/6/2017
---

# configure-audit-logon-events

Audit logon events can be used to detect failure logons to your server,hacker attacks and former employees failure logons. The SysKit Monitor will report information about users trying to log in, source IP address and computer name being used.

Auditing is a Windows feature that is configured via Group Policy. Every audit event is stored in the event log. We use the information provided in the event log and combine it with the existing data \(user activities, applications being used…\) to create a central monitoring station for your computers.

Here is the info on how to turn on the logon failure audit events for your computer\(s\). In order to enable Audit Logs you need to:

1. Configure a Group Policy.
2. Enable the Extract Event Log system job in SysKit Monitor.

## Configuring Group Policy

### A\) Configuring Group Policy for a domain WITHOUT Group Policy Management feature:

1. Login to you **Domain Controller** with an account that has Domain Administrator privileges.
2. Click **Start**, point to **Programs**, point to **Administrative Tools**, and then click **Active Directory Users and Computers**.
3. On the **View** menu, click the **Advanced Features**.
4. Right-click **Domain Controllers**, and then click **Properties**.
5. Click the **Group Policy** tab, click **Default Domain Policy**, and then click **Edit**.
6. Click **Computer Configuration**, double-click **Windows Settings**, double-click **Security Settings**, double-click **Local Policies**, and then double-click **Audit Policy**.
7. In the right pane, right-click **Audit Logon Events** and then click **Properties**.
8. Click **Define These Policy Settings**, and then select **Failure**. Click **OK**.
9. The changes you made will only take effect when the policy setting is propagated or applied to your computer. Complete either of the following steps to initiate policy propagation right now:
   * Type **gpupdate /force** at the command prompt of a server and then press **ENTER**. The policy will be updated.
   * Wait for automatic policy propagation that occurs at regular intervals that you can configure. By default, policy propagation occurs every five minutes.

### B\) Configuring Group Policy for a domain WITH Group Policy Management feature:

1. Login to you **Domain Controller** with an account that has Domain Administrator privileges.
2. Click **Start**, point to **Programs**, point to **Administrative Tools**, and then click **Group policy management**.
3. Click **Default Domain Policy**, and then click **Edit** \(in case you have a special policy only for terminal servers select that policy.
4. Click **Computer Configuration**, double-click **Windows Settings**, double-click **Security Settings**, double-click **Local Policies**, and then double-click **Audit Policy**.
5. In the right pane, right-click **Audit Logon Events**, and then click **Properties**.
6. Click **Define These Policy Settings** and then select **Failure**. Click **OK**.
7. The changes you made will only take effect when the policy setting is propagated or applied to your computer. Complete either of the following steps to initiate policy propagation right now:
   * Type **gpupdate /force** at the command prompt of a server and then press **ENTER**. The policy will be updated.
   * Wait for automatic policy propagation that occurs at regular intervals that you can configure. By default, policy propagation occurs every five minutes.

## Enable the Extract Event Log system job in the SysKit Monitor

You need to enable collection of event log data under **File** &gt; **Manage** &gt; **System Jobs** and you are good to go. SysKit Monitor will start to collect audit information from the Event Log on a regular basis.

See the [Extract Event Log](configure-audit-logon-events.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options#extract-event-log) article for more detailed information.

