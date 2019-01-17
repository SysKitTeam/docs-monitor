---
title: >-
  Configure SysKit Monitor for Citrix XenApp 7.x Published Application
  monitoring
author: Andrea Budisa
description: >-
  This article describes how to configure your server to monitor Citrix
  Published Applications with the SysKit Monitor.
date: 17/12/18
---

# monitor-citrix-xenapp7-published-applications

In order for Citrix XenApp 7.x Published Application monitoring to be successful, here are the steps you need to perform on **each Delivery Controller server**, which is responsible for brokering and optimizing user connections and access.

## Enable the Remote Management

1. Run the **Server Manager** and click on the **Configure Server Manager Remote Management**.
2. In the newly opened dialog, check in the **Enable remote management of this server from other computers** option and click **OK** to finish.
3. Alternatively, you can verify with PowerShell that WinRM is configured properly. Just open the PowerShell and type in **winrm quickconfig**.

   If you received access denied error run the PowerShell as Administrator. Otherwise, you will receive the message that the WinRM is already set up and running on this machine.

4. Confirm **Yes** that you want to create a WinRM listener and enable the WinRM firewall exception.

## Add SysKit Monitor service user to the Citrix Farm Administrators group on the Delivery Controller server

1. Navigate to the **Start** &gt; **Citrix** &gt; **Citrix Studio** and choose the Citrix farm.
2. Expand the **Configuration** section and right click the **Administrators** subsection.
3. Select the **Create Administrator** option from the right menu and the wizard will open.
4. In the **Add Citrix Administrator** wizard, select **Browse...** and set the Object Type to **Users or Groups** and the Location to **Entire Directory**.
5. Enter the name of the **service user** that you would like to add and click **OK**. After you added the service user, click **OK** and then **Next**.
6. In the next step of the wizard, choose the **Read Only Administrator** privilege level for the newly added administrator.

   > **Please note!** You need to perform this on **all the Delivery Controller servers** in your environment.

After you adjust the privileges on all the Delivery Controller servers, your Citrix environment will be configured for the SysKit Monitor Published Applications monitoring.

**In case of any difficulties during the configuration feel free to** [**contact**](https://www.syskit.com/company/contact-us) **our support team**.

Read more on how to [add Citrix servers to monitoring](monitor-citrix-xenapp7-published-applications.md#internal/how-to/computers/add-citrix-servers) to properly collect all the data.

