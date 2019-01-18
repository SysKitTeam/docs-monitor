---
title: Add / remove or delete a computer from monitoring
description: >-
  This article explains how to add, remove or delete one or more computers from
  monitoring.
author: Andrea Budisa
date: 30/6/2017
---

# add-remove-or-delete-computer

If you want to **remove** one or more computers from monitoring, please follow these steps:

1. Navigate to **Administration – Computers** category.
2. Select the computer you want to remove and in the **Administration** ribbon, click **Disable**.
3. The computer status will be changed to **Disabled**.
4. If you decide to add it back to monitoring, just select it and click **Enable** in the Monitoring group in the Administration ribbon.

If you want to **delete** one or more computers from SysKit Monitor, please follow these steps:

1. Navigate to **Administration – Computers** category.
2. Select the computer you want to delete and in the **Administration** ribbon, click **Disable**.
3. The computer status will be changed to **Disabled**. Select it again and click **Delete**.

If you have sufficient number of licenses, you can add another computer to monitoring. To learn how, please follow these steps:

## Adding new computers

1. To add new computers click **Add** in the Administration ribbon and then select the **Add Computers** option from the dropdown menu.
2. The first step of this wizard will open. Select at least one **Organization Unit** and click **Next &gt;** to proceed with this wizard.
3. A list of all computers from the **Active Directory** will be displayed. Select at least one computer to proceed to the next step. This wizard screen also shows the number of remaining monitoring licenses. You must have enough licenses to add the computer for monitoring, please [contact us](https://www.syskit.com/company/contact-us) to add additional licenses. Click **Next &gt;** proceed.
4. The **License Summary** step shows the number of computers that will be added and the remaining licenses. Click **Next &gt;** to proceed.
5. In the **Adding Computers** step, a computer status check will be performed for a list of selected computers. This functionality will provide you with more information about possible misconfigurations if the load finishes with warnings or errors.

   > **Please note!** Your computers will be added regardless of the listed warnings or errors!

   The **Status** column will contain a link to our help page if warnings or errors occur. If you click on the link, you will be guided through the process on how to **resolve** the Offline and Unauthorized computer states.  
   When the load is finished, you will have an option to save the warnings or errors that occurred to a **log file** in a .pdf or excel format.  
   Click **Close** to exit the wizard. Afterward, a list of added computers will appear.

## Adding new computers manually

1. To add new computers click **Add** in the Administration ribbon and then select the **Add Computers Manually** option from the dropdown menu.
2. Type in the computer names and select installed operating systems. Click **Save** to finish.

> **Please note!** If you want to monitor the servers that are part of a workgroup or Windows domain but not AD-integrated, select the **Not in domain** entry from the Select Domain dropdown.

