---
title: >-
  Configure SysKit Monitor for Citrix XenApp 6.x Published Application
  monitoring
author: Andrea Budisa
description: >-
  This article describes how to configure your server to monitor Citrix
  Published Applications with the SysKit Monitor.
date: 29/06/17
---

# monitor-citrix-xenapp6-published-applications

In order for monitoring to be successful, these are the steps you will have to perform on **each Citrix XenApp Server** where you run published applications.

## Enable the Remote Management

1. Run the **Server Manager** and click on the **Configure Server Manager Remote Management**.
2. In the newly opened dialog, check in the **Enable remote management of this server from other computers** option and click **OK** to finish.
3. Alternatively, you can verify with PowerShell that WinRM is configured properly. Just open the PowerShell and type in **winrm quickconfig**.

   If you received access denied error run the PowerShell as Administrator. Otherwise, you will receive the message that the WinRM is already set up and running on this machine.

4. Confirm **Yes** that you want to create a WinRM listener and enable the WinRM firewall exception.

## Add SysKit Monitor service user to the Citrix Farm Administrators group on the XenApp management server

1. Navigate to the **Start** &gt; **Administrative Tools** &gt; **Citrix** &gt; **Management Consoles** &gt; **Citrix AppCenter**.
2. Expand the **Citrix Resources** section and the **XenApp** subsection. Choose the Citrix farm and click on the **Administrators** group.
3. Right click on the Administrators group, choose **New** and select **Add Administrator**.
4. In the Add Citrix Administrator wizard, change the directory type to the **Operating System User Selector** and click on the **Add…** button.
5. Set the Object Types to **Users or Groups** and the Locations to **Entire Directory**.
6. Enter the name of the **service user** that you would like to add and click **OK**. After you added the chosen service user, click **OK** and then **Next**.
7. In the last step of the wizard, choose the **View Only** privilege level for the newly added administrator.

Your Citrix Management Server is now configured for the SysKit Monitor Published Applications monitoring.

**In case of any difficulties during the configuration feel free to** [**contact**](https://www.syskit.com/company/contact-us) **our support team**.

See [Configure SysKit Monitor for Citrix XenApp 5 Published Application monitoring](monitor-citrix-xenapp6-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-xenapp5-published-applications) to learn more.  
See [Configure SysKit Monitor for Citrix XenApp 7.x Published Application monitoring](monitor-citrix-xenapp6-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-xenapp7-published-applications) to learn more.  
See [Monitor Citrix Published Applications](monitor-citrix-xenapp6-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-published-applications) to learn more.

