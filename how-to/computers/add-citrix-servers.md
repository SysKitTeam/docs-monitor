---
title: Add Citrix servers to monitoring
description: >-
  This article explains how to add Citrix servers to monitoring to properly
  collect all the data.
author: Andrea Budisa
date: 30/6/2017
---

# add-citrix-servers

If you have a **Citrix 7.x environment** and you plan to **monitor user sessions and application usage**, there are just a few easy steps that you need to follow to get started. You need to add both **Delivery Controller servers** and **Virtual Delivery Agent servers** to monitoring.

1. To **add Citrix servers** click **Add** in the Administration ribbon and then select the **Add Computers** option from the dropdown menu.
2. The first step of this wizard will open. Select the desired **Organization Units** and click **Next &gt;** to proceed with this wizard.
3. A list of computers from the **Active Directory** will be displayed.

   > **Please note!** If you have **Citrix 7.x environment**, you need to add both **Delivery Controller servers** and **Virtual Delivery Agent servers** to monitoring. If you only add the Virtual Delivery Agent servers from your Citrix infrastructure, SysKit Monitor will be **unable to collect data and the reports will be empty**.

   This wizard screen also shows the number of remaining monitoring licenses. You must have enough licenses to add the computer for monitoring, please please [contact us](https://www.syskit.com/company/contact-us) to add additional licenses. Click **Next &gt;** proceed.

4. The **License Summary** step shows the number of computers that will be added and the remaining licenses. Click **Next &gt;** to proceed.
5. In the **Adding Computers** step, a computer status check will be performed for a list of selected computers. This functionality will provide you with more information about possible misconfigurations if the load finishes with warnings or errors.

   > **Please note!** Your computers will be added regardless of the listed warnings or errors!

   The **Status** column will contain a link to our help page if warnings or errors occur. If you click on the link, you will be guided through the process on how to resolve the Offline and Unauthorized computer states. When the load is finished, you will have an option to save the warnings or errors that occurred to a log file in a .pdf or excel format. Click **Close** to exit the wizard. Afterward, a list of added computers will appear.

Read more on how to [Configure SysKit Monitor for Citrix XenApp 7.x Published Application monitoring](add-citrix-servers.md#internal/how-to/citrix-xenapp/monitor-citrix-xenapp7-published-applications).

