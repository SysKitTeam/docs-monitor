---
title: PowerShell Reports
description: >-
  PowerShell Reports are designed to make it as easy as possible for you to take
  control and simplify the management of your Windows environments.
author: Andrea Budisa
date: 25/5/2017
---

# powershell-reports

PowerShell Reports within SysKit are designed to make it as easy as possible for you to take control and simplify the management of your Windows environments, whether you are writing scripts or administering software. SysKit will periodically execute all the defined PowerShell scripts on designated computers and display the results in the form of **snapshots**.

Data is gathered through the **Inventory Snapshots** system job, which is scheduled to run every 7 days by default.

If you navigate to Inventory Reports &gt; PowerShell Reports, you will find endless possibilities for the creation of new reports.

SysKit provides you with a **built-in PowerShell editor** for writing, testing, and debugging scripts. SysKit’s PowerShell editor supports enhanced usage of PowerShell for beginners and experts alike. It covers most of what you’ll need to get useful scripting done, such as variables, arrays and hash tables, the pipeline, objects, conditions, loops, functions, scripts, error handling, scope, text, and regular expressions.

Its features include:

* Syntax highlighting and colors;
* Error handling \(which is the same as in Windows PowerShell\);
* Importing of the Windows PowerShell scripts with .ps1 extension;
* **Scheduled execution** of scripts on selected computers and computer groups.

You can use PowerShell scripts to retrieve valuable information about a server’s configuration, usage, or performance. With SysKit, you can easily export the results and retrieved information to a PDF or.xlsx file, so that you can view it again later.

> **Please note!** In order to see the PowerShell Reports it is necessary to configure [Inventory Snapshots](powershell-reports.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#inventory-snapshots) system job. The report data will be available after Inventory Snapshots system job execution.

## Enhance your reporting using PowerShell Wizard

It is known that PowerShell is an excellent tool for automating repetitive tasks, so you can start building your scripts using SysKit’s PowerShell editor.

You can import PowerShell scripts into the wizard \(with .ps1 extension only\) and write your own PowerShell code and create some amazing reports.

In your day-to-day activities working with PowerShell, it is likely that you have been asked to generate a report of some kind and provide that to your boss. The common approach to this might be to send the output to a file, such as a text or CSV file. While there is nothing necessarily wrong with this, sometimes it is nice to provide a richer report to make the information more presentable for the viewer, and this is where SysKit comes in.

We’ll break down how you can create custom information reports in SysKit using PowerShell Wizard.

1. In Step 1, simply enter the PowerShell script or report name and select the desired report category. The report category option will help you categorize your reports so you can manage large amounts of different scripts more easily.
2. In Step 2, you will need to enter the PowerShell script you want to use to generate reports. To avoid incorrectly generated reports, the script first needs to be tested on a selected computer. SysKit will run it against the computer that you specify. After entering script, click Next&gt; to see the results.

   > **Please note!** If you have troubles with writing script, or you want to know more about PowerShell rules and limitations, please read [this article](https://technet.microsoft.com/en-us/library/bb978526.aspx).

3. In Step 3, if the script syntax is valid, it will return the results in a grid view. Data that is shown is collected by executing a specified query on the selected computer. You will be able to examine and refine properties in the next step. Please verify whether the query returned the desired data and continue to the next step.

   > **Please note!** The approximate size of the query result can wary depending on the entered script purpose. Take into consideration that large query results can significantly increase server resource utilization.
   >
   > **Please note!** If an entered PowerShell query is returned without results after validation in PowerShell wizard, it cannot be saved.

4. In Step 4, you will need to select columns that you want to include in your report and specify unique columns to be used in Snapshots Compare. You can use drag and drop to arrange the rows in the order in which you would like them to appear as columns in the report. You can also use the search box to find and include the desired column\(s\).

   > **Please note!** Identity columns must **unambiguously** define each row of data. If that’s not the case, your data will still be collected, but the report won’t be **comparable** in [Compare Wizard](powershell-reports.md#internal/get-to-know-syskit-monitor/reports/inventory-reports/compare-wizard).

5. In Step 5, you will need to select computers on which you want to run the PowerShell script.  
   Created PowerShell script can be scheduled to run on:

   * All computers;
   * Specific computers;
   * Specific computer groups.

   > **Please note!** Query results may vary depending on the PowerShell version used on a specific computer.

Reports will be added to the **Inventory Reports &gt; PowerShell Reports** group and all of their data can be compared in [Compare Wizard](powershell-reports.md#internal/get-to-know-syskit-monitor/reports/inventory-reports/compare-wizard).

### PowerShell Reports Ribbon

* **Create** – enables creating and saving PowerShell reports through the built-in PS wizard.
* **Edit** – enables editing and saving PowerShell reports through the built-in PS wizard.
* **Delete** – enables deletion of the selected PowerShell report.
* **Import Definition** – import a previously created PowerShell report in SYSpr format.
* **Export Definition** – export PowerShell report settings previously defined through the PS wizard.

### Import PowerShell Report dialog

This dialog provides options for importing and configuring PowerShell scripts in SYSpr format. PowerShell scripts are generated in this format when our development team creates them upon our customers’ requests.

When importing previously created PowerShell scripts in **SYSpr** format, simply select the PowerShell report definitions you want from your local or network drive, assign the script\(s\) to desired categories, and specify the computers on which the scripts should be executed. The report category option will help you categorize your reports so you can manage large amounts of different scripts more easily.

When specifying the computers on which to run the imported PowerShell script\(s\), the following options are available:

* All computers;
* Specific computers;
* Specific computer groups.

All imported PowerShell report definitions will be added to the **Inventory Reports &gt; PowerShell Reports** group.

