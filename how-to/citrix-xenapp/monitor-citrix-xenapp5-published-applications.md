---
title: Configure SysKit Monitor for Citrix XenApp 5 Published Application monitoring
author: Andrea Budisa
description: >-
  This article describes how to configure your server to monitor Citrix
  Published Applications with the SysKit Monitor.
date: 29/06/17
---

# monitor-citrix-xenapp5-published-applications

In order for monitoring to be successful these are the steps you will have to perform on your **Citrix Management Server**.

## Install Citrix XenApp 5.0 SDK

1. [Download the SDK](http://www.citrix.com/static/cdn/archivedsdks/mfcom/5.0/mpssdk.msi) from Citrix web site.

   > **Please note!** Turn off your User Account Control in order for installation to be successful.

2. Follow the **Installation Wizard** steps.
3. Make sure that the **Register remote MFCOM server** option is checked in.
4. Enter the **Citrix Management Server** name and click **Next** to proceed and finish the installation.

## Add SysKit Monitor service user to the Citrix Farm Administrators group

1. Navigate to the **Start** &gt; **Citrix** &gt; **Management Consoles** &gt; **Access Management Console**.
2. Expand the **Citrix Resources** section and the **XenApp** subsection. Choose the Citrix farm and click on the **Administrators** group.
3. Right click on Administrators group, choose **New** and select **Add Administrator**.
4. In the Add Citrix Administrator wizard, change the directory type to the **Operating System User Selector** and click on the **Add…** button.
5. Set the Object Types to **Users or Groups** and the Locations to **Entire Directory**.
6. Enter the name of the **service user** that you would like to add and click **OK**. After you added the chosen service user, click **OK** and then **Next**.
7. In the last step of the wizard, choose the **View Only** privilege level for the newly added administrator.

## Add SysKit Monitor service user to the Component Services Administrators

1. Start the **Component Services** by typing in the **dcomcnfg** in the Run window and pressing enter.
2. Expand the **Component Services** section and **Computers** subsection. Right click on the **My Computer** and select **Properties**.
3. Select the **COM Security** tab and click the **Edit Limits...** button.
4. In the **Launch and Activation Permission** dialog, click the **Add** button and type in the name of the service user you want add the permissions to. Click **OK** to proceed.
5. Select the newly added service user and grant him the **Local Launch** and **Remote Launch** permissions. Click **OK** to finish.
6. Navigate to the **Default Properties** tab and change the Default Impersonation Level to **Impersonate**. Click **OK** to finish.

Your Citrix Management Server is now configured for the SysKit Monitor Published Applications monitoring.

**In case of any difficulties during the configuration feel free to** [**contact**](https://www.syskit.com/company/contact-us) **our support team**.

See [Configure SysKit Monitor for Citrix XenApp 6.x Published Application monitoring](monitor-citrix-xenapp5-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-xenapp6-published-applications) to learn more.  
See [Configure SysKit Monitor for Citrix XenApp 7.x Published Application monitoring](monitor-citrix-xenapp5-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-xenapp7-published-applications) to learn more.  
See [Monitor Citrix Published Applications](monitor-citrix-xenapp5-published-applications.md#internal/how-to/citrix-xenapp/monitor-citrix-published-applications) to learn more.

