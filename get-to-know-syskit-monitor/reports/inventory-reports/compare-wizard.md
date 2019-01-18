---
title: Compare Wizard
description: >-
  Use Inventory Compare Wizard to compare inventory snapshots taken at different
  times and keep track of inventory changes.
author: Andrea Budisa
date: 25/5/2017
---

# compare-wizard

With the Inventory Snapshots **Compare Wizard**, you can compare **snapshots** taken at different times, easily allowing you to detect and keep track of inventory changes.  
The purpose of the Inventory Snapshots is to display the snapshots for all scans performed over a period of time on your Windows Servers and workstations and to allow the **snapshot comparison**.

Read the section below to learn how to **manage snapshots** created for your server farm\(s\).

## Manage Snapshots

You can access the Manage Snapshots dialog by navigating to the **Inventory Reports**, selecting **Snapshots** from the ribbon, then choosing **Manage Snapshots**.

This form shows all available snapshots or if you haven’t yet deleted a snapshot – **all snapshots ever created**. You can set the **Mark as Good** option for some of your snapshots so that later you can differentiate good configurations from others.

The following options are available:

* **Load** – Load the selected snapshot into the Inventory reports.
* **Refresh** – Use this option to refresh items displayed in the dialog.
* **Delete** – Use this option to delete the selected snapshot\(s\).
* **Compare With Previous** – Use this option to start the Compare Wizard and compare the selected snapshot with the one taken before it.
* **Compare Selected** – Use this option to start the Compare Wizard and compare the two selected snapshots.
* **Mark As Good** – Use this option to configure the selected snapshot\(s\) as good, for future use.

The grid-view in Manage Snapshots displays the following elements:

* **Created On** – The date and time at which a snapshot was taken.
* **Mode** – The snapshot can be created in two different modes; Automatic, which is performed by the SysKit Service according to the Period options set for this system job, while Manual is performed when this action is triggered by the user.
* **Differences Detected** – This option indicates whether differences were detected in the current snapshot when compared to the one taken before it.
* **Good Configuration** – Indicates whether the selected snapshot is well configured or not.

See the [Alerts](compare-wizard.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#alerts) section if you want to receive e-mail notifications when inventory changes are detected.

## Compare Wizard

The **Compare Wizard** offers two different compare types: **Inventory Snapshots** and **Computers**.

The **first** option enables you to select two inventory snapshots and explore differences between hardware and software data.

> **Tip!** This option can be useful when you want to compare differences over time.

The **second** option enables you to compare inventory data on different computers or two selected system environments that are defined through report views. You can define mappings between computers from different environments and determine which inventory items are different.

> **Tip!** This option can be useful when you want to determine whether different computers have the same configurations or when you want to check if test and production environment are configured correctly.

### Inventory Snapshots

1. In Step 1, simply select the compare type, which in this case is the **Inventory Snapshots**, as you want to compare two different inventory snapshots and detect any inventory changes.
2. In Step 2, you will need to select **two different snapshots** you wish to compare. Depending on the **Compare options** selected on the Inventory Snapshots system job, the Compare Result dialog will display differences in compared data.
3. The Step 3, **automatically starts the Compare Result** dialog which will display all inventory changes between the two selected snapshots.

The **Compare Results** dialog contains the following elements:

* Details about two compared snapshots – the date and time at which snapshots were created.
* Reports which the comparison is performed for.
* Detailed grid view with equal, different and missing entries.
* Show/Hide equal, different or missing nodes and entries – use these buttons to filter data and to make data analysis easier.
* Save differences between the two selected snapshots to a PDF. With the Export to XLSX option, you can easily export the differences or all data to excel.
* Compare Options – use these options to configure which reports you want compared. Unchecked options will not be displayed in the Compare Result dialog.

There are **two different levels** on which data can be compared. Differences can be detected as follows:

**Report \(node\) level**

* Different – this is on the report level \(nodes\).
* Difference in children – indicates differences in any of the child nodes.

**Report data \(entry\) level**

* Missing in source/target – indicates missing entries in source or target snapshot.
* Different row/cell – indicates differences in any of the rows and cells.

### Computers

1. In Step 1, simply select the compare type, which in this case is the **Computers** option, as you want to compare the differences between two computers and detect inventory changes.
2. In Step 2, you will need to choose what kind of computer compare you wish to use. There are two subtype options at your disposal:

   * Compare two computers
   * Compare computers within selected views

   We will proceed with the first option – **Compare two computers**.

3. The Step 3, enables you to select **one or two different snapshots** to compare inventory data on different computers. Depending on the Compare options selected in the **Inventory Snapshots** system job, the Compare Result dialog will display differences in compared data.
4. The Step 4, **automatically starts the Compare Result** dialog which will display all inventory changes, and depending on what is selected at the Snapshot Selection step, it will show one or two different snapshots.

   The **Compare Results** dialog will contain all the elements previously described in the Inventory Snapshots section, as well as two new panels:

   * **Source Computer** – Use the left panel to select the Source computer from the snapshot and compare it to the Target computer selected on the same or a different snapshot.
   * **Target Computer** – Use the right panel to select the Target computer from the snapshot and compare it to the Source computer selected on the same or a different snapshot.

Now we will go back to the **Computer Compare Subtype** step and proceed with the second option – **Compare computers within selected views**.  
In this step you need to choose the **Source** and **Target Views** to compare differences between these two selected system environments.

* The Step 3, enables you to select **one or two different snapshots** to compare inventory data on different system environments.
* In Step 4, you will need to **define mappings** for different computers within the **views**.  
  For example, if you know that server A, from farm A and server B from farm B must be similar, you can map the FQDN names so every difference related to the name of the server won’t be displayed on the report.

  > **Please note!** The current version of SysKit supports only **one-to-one** server mapping!

* The Step 5, **automatically starts the Compare Result** dialog which will display all inventory changes according to previously defined mappings, and depending on what is selected at the Snapshot Selection step, it will show one or two different snapshots.

