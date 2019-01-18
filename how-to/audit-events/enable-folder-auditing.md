---
title: Enable Folder Auditing
description: This article explains how to enable Windows folder auditing.
author: Andrea Budisa
date: 30/6/2017
---

# enable-folder-auditing

This is required if you need to review auditing reports with SysKit Monitor.

By auditing the files and folders access you can report on user activities performed against selected files and folders.

## Configuring Group Policy

There are two methods of applying group policy. Login on to your Domain Controller and check if you have **Group Policy Management** under **Administrative Tools**.

### A\) Configuring Group Policy for a domain WITHOUT Group Policy Management feature:

1. Login to you **Domain Controller** with an account that has Domain Administrator privileges.
2. Click **Start**, point to **Programs**, point to **Administrative Tools**, and then click **Active Directory Users and Computers**.
3. On the **View** menu, click **Advanced Features**.
4. Right-click **Domain Controllers**, and then click **Properties**.
5. Click the **Group Policy** tab, click **Default Domain Policy**, and then click **Edit**.
6. Click **Computer Configuration**, double-click **Windows Settings**, double-click **Security Settings**, double-click **Local Policies**, and then double-click **Audit Policy**.
7. In the right pane, right-click **Audit Object Access**, and then click **Properties**.
8. Click **Define These Policy Settings**, and then click to select **Success**. Click **OK**.
9. The changes you made will only take effect when the policy setting is propagated or applied to your computer. Complete either of the following steps to initiate policy propagation right now:
   * Type **gpupdate /force** at the command prompt of a server and then press **ENTER**. The policy will be updated.
   * Wait for automatic policy propagation that occurs at regular intervals that you can configure. By default, policy propagation occurs every five minutes.

### B\) Configuring Group Policy for a domain WITH Group Policy Management feature:

1. Login to you **Domain Controller** with an account that has Domain Administrator privileges.
2. Click **Start**, point to **Programs**, point to **Administrative Tools**, and then click **Group policy management**.
3. Click **Default Domain Policy**, and then click **Edit** \(in case you have a special policy only for terminal servers select that policy.
4. Click **Computer Configuration**, double-click **Policies**, double-click **Windows Settings**, double-click **Security Settings**, double-click **Local Policies**, and then double-click **Audit Policy**.
5. In the right pane, right-click **Audit Object Access**, and then click **Properties**.
6. Click **Define These Policy Settings**, and then click to select **Success**. Click **OK**.
7. The changes you made will only take effect when the policy setting is propagated or applied to your computer. Complete either of the following steps to initiate policy propagation right now:
   * Type **gpupdate /force** at the command prompt of a server and then press **ENTER**. The policy will be updated.
   * Wait for automatic policy propagation that occurs at regular intervals that you can configure. By default, policy propagation occurs every five minutes.

## After group policy configuration we are going to configure certain folders for auditing:

1. Login to you server and **right click** the folder you want to enable auditing for and click **Properties**.
2. Choose the **Security** tab and for special permissions or advanced settings, click **Advanced**.
3. The **Advanced Security Settings** dialog for the selected folder will open. First choose on the **Auditing** tab and then click the **Edit...** button.
4. In the Auditing tab, click the **Add** button.
5. In the **Auditing Entry** dialog for the selected folder, click the **Select a principal** link to enter all users/groups whose operations you want to audit. If you want to audit all users in your domain type in “Domain Users”. Click **OK**.
6. Under the **Basic permissions** part, click the **Show advanced permissions** link and select the operations you want to track. We recommend that you select the minimal set of operations. Auditing is a resource consuming operation so you should select just a few operations you want to track here. We recommend to select the following:
   * List folder / read data
   * Create files / write data
   * Create folders / append data
   * Delete
7. If there is a folder structure below the selected folder, make sure you have enabled the **Replace all child object auditing entries with inheritable auditing entries from this object** option in the **Advanced Security Settings** dialog.

## Configuring SysKit Monitor

You need to enable collection of event log data under **File** &gt; **Manage** &gt; **System Jobs** and you are good to go. SysKit Monitor will start to collect audit information from the Event Log on a regular basis.

See the [Extract Event Log](enable-folder-auditing.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options#extract-event-log) article for more detailed information.

