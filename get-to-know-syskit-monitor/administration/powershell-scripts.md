---
title: PowerShell Scripts
description: >-
  This article discusses the options for creating PowerShell reports and
  management tasks through SysKit Monitor.
author: Andrea Budisa
date: 23/6/2017
---

# powershell-scripts

**PowerShell Scripts** on the **Administration** tab are designed to make it as easy as possible for you to take control and simplify reporting and administration of your Windows environments.  
If you navigate to Administration &gt; PowerShell Scripts, you will find endless possibilities for the creation of new report and management scripts.  
This section is completely different from the one on Inventory Reports &gt; PowerShell Reports. It consists of **Reports** and **Management Tasks** subsections within which you can **categorize the scripts** you want to create.

## Reports

This subsection contains all PowerShell scripts that always return results in the form of **multiple columns / rows** and are meant for reporting purposes. Saved and executed report scripts can return varying amounts of data, but these report scripts can also return `Error` results for some computers.  
Reports subsection comes with **two report categories** and **three predefined PowerShell scripts** for you to explore:

* **Computers by OUs** – The script is located in the AD category. Note that it can only be executed on the Domain Controller\(s\) in a server environment.  

  This report displays a list of all computers in a domain and their corresponding Organizational Units.

* **Installed Features** – The script is located in the Roles and Features category. It can be executed on any monitored computer.  

  This report displays information about Windows Server features that are available for installation and installed on the target computer\(s\).

* **Installed Roles** – The script is located in the Roles and Features category. It can be executed on any monitored computer.  

  This report displays information about Windows Server roles and role services that are available for installation and installed on the target computer\(s\).

PowerShell scripts saved as Reports, depending on the scripts’ purpose, will have multiple columns displayed, but some of the default columns are: **Computer** on which the script was executed, **Date/Time** at which the script was triggered, and **Status** in which the script returned from target computers.

## Management Tasks

This subsection contains all PowerShell scripts that perform some kind of management task and only return details on whether the specified task was successfully completed or an error occurred. PowerShell scripts saved as Management Tasks will only have three columns displayed: **Computer** on which the script was executed, **Date/Time** at which the script was triggered, and **Status** in which the script returned from target computers.

Error results are returned from the target computers in the following cases:

* If executing PowerShell script\(s\) on target computers with lower Operating System versions, which have a certain number of cmdlets available and do not support the usage of cmdlets available in the newer OS versions.
* If PowerShell is not installed on target computers for some reason.
* If PSRemoting is disabled on target computers for some reason.
* If PowerShell command timed out on target computers for some reason.
* If user has insufficient rights on target computers.
* If other errors are thrown by Windows PowerShell.

> **Tip!** If an executed report or management script has the Status marked `Error`, you will be able to see the error message returned from the destination computer by **hovering over the column** marked ‘Error.’ This applies to all PowerShell Scripts.
>
> **Tip!** If run **after another script** functionality is enabled and an error occurs in the previous script, execution of all following scripts will not be performed.

All PowerShell Scripts available on the Administration tab have the **filter panel** available to the right. It contains three filter types—**Date Range, Computer Groups,** and **Computer**—so you can filter your data more easily. Use the **Date Range** filter to select any day, week, month, or custom date range.

> **Please note!** You will not be able to see any PowerShell script data outside 30 days, unless you change the [PowerShell Scripts Data Retention](powershell-scripts.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#data-retention) settings. The default is set to delete PowerShell script data older than 30 days.

PowerShell is known as an excellent tool for automating repetitive tasks, so you can start building your **report** and **management** scripts using the **PowerShell Script editor** within SysKit Monitor. You can import PowerShell scripts into the wizard \(with **.ps1** extension only\), write your own PowerShell code, and create some amazing reports and management tasks.

With the built-in PowerShell Script Wizard, you can also import and edit [PowerShell Script Modules](powershell-scripts.md#internal/how-to/powershell-scripts/import-and-use-ps-script-modules) with **.ps1** and **.psm1** extensions. A script module allows you to use a number of rules and cmdlets in your scripts. In simple terms, a script module is just a grouping of functions and code that can be applied to a specific group of scripts. **PowerShell modules** are actually highly recommended when writing PowerShell scripts, because they are created for applications such as Microsoft Exchange, Active Directory, VMware, etc., to manage all aspects of various applications. The PowerShell module feature within the **PowerShell Script Wizard** allows the combining of multiple scripts to simplify code management, accessibility, and sharing.

The PowerShell Wizard also comes with **PowerShell Script Alerts**, which are crucial for effective monitoring of any critical and important jobs that run in a server environment. SysKit Monitor will let you know when critical errors occur if you’ve configured the **alert conditions** for important PowerShell Scripts. PowerShell Script rows that **match the applied conditions** and have **triggered an alert** will be painted light yellow after the script executes. These rows will be exported to **.csv format** and included in the **email attachment** of the alert.

Read this article to learn more on how to:

## [Enhance your reporting using PowerShell Script Wizard](powershell-scripts.md#internal/how-to/powershell-scripts/powershell-wizard)

### PowerShell Scripts Ribbon

Ribbon provides a set of basic functions for managing the **created or imported** report and management scripts.

* **Create** – Create a new PowerShell report or management task.
* **Edit** – Edit the selected PowerShell report or management task.
* **Delete** – Delete the selected PowerShell report or management task.
* **Edit Trigger** – Edit the conditions that will trigger the PowerShell script.
* **Download Scripts** – Download and import the predefined PowerShell scripts from SysKit’s repository.
* **Refresh** – Refresh items in the left navigation panel, filters, and main view.
* **Default Layout** – Reset the current layout of the main view to the default layout.
* **Run** – Run the selected PowerShell script on target computers.
* **Run on Selected Computers** – Run the selected PowerShell script outside its scheduled hours — on demand and on different computers or computer groups.
* **Enable** – Enable the selected PowerShell script for execution.
* **Disable** – Disable the selected PowerShell script for execution.
* **Export** – Export the script results and retrieved information to PDF, Excel, HTML, or CSV files.

### Execution Status Bar

If you click the **Status bar** at the lower left side of the screen, information about currently running system jobs and PowerShell scripts will be shown. You can use this progress bar to check for the PowerShell scripts’ **execution statuses** and determine whether each script is still in the **queue**, it’s **being executed** or it was recently **executed**.

> **Please note!** The PowerShell status bar will always show execution history for the last five minutes.

Read these articles to learn more on how to:

## [Manage Scripts](powershell-scripts.md#internal/how-to/powershell-scripts/manage-scripts)

## [Import / Export PowerShell Script](powershell-scripts.md#internal/how-to/powershell-scripts/import-ps-script)

## [Import and use PowerShell script modules](powershell-scripts.md#internal/how-to/powershell-scripts/import-and-use-ps-script-modules)

## [Download Scripts](powershell-scripts.md#internal/how-to/powershell-scripts/download-scripts)

