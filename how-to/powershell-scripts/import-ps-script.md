---
title: Import / Export PowerShell Script
description: >-
  This article describes how to import, configure and export PowerShell scripts
  for the successful reporting and management of your Windows environments.
author: Andrea Budisa
date: 23/6/2017
---

# import-ps-script

This dialog provides options for importing and configuring PowerShell scripts in SYSpr format, as well as exporting functionality. PowerShell scripts are generated in this format when our development team creates them upon our customers’ requests.

When importing previously created PowerShell scripts in **SYSpr** format, simply select the PowerShell report definitions you want from your local or network drive, assign the script\(s\) to desired categories, specify the computers on which the scripts should be executed, and change the conditions that will trigger the scripts. The category option will help you categorize your scripts so you can manage large amounts of different scripts more easily.

When specifying the computers on which to run the imported PowerShell script\(s\), the following options are available:

* All computers;
* Specific computers;
* Specific computer groups.

When specifying the conditions that will trigger the imported PowerShell script\(s\), the following schedule options are available:

* **Manual only** – the script will be executed manually when the Run button is clicked.
* **Automatic** – the script will be executed automatically on a **defined schedule**, which has two types: **Recurrence** or **After another script**.

If the **Recurrence** option is selected, you will be offered **several recurrence types**: one time, minutely, hourly, daily, weekly, monthly, and quarterly. Here, you can select the start date and time for the selected recurrence type.

If the **After another script** option is selected, you will be offered a dropdown menu that contains all PowerShell scripts available in SysKit Monitor. The script for which you configure the trigger will be executed after the script selected from the dropdown.

All imported PowerShell report definitions, depending on the scripts’ type, will be added to the Administration tab &gt; PowerShell Scripts &gt; Reports or Management Tasks group.

> **Tip!** When you are importing or exporting a PowerShell report definition, all its script modules, if any, will be imported / exported as well. All imported script modules can be managed through the Manage modules dialog in the Enter PowerShell step of the PowerShell Script Wizard.

