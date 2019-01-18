---
title: SysKit 2016 R2 8.2.0 - Release Note
description: >-
  This article describes all new features, improvements and bug fixes delivered
  in SysKit 2016 R2 – 8.2.0.
author: Andrea Budisa
date: 12/7/2017
---

# syskit-8-2-release-note

We have shipped SysKit 2016 R2 – 8.2.0. This minor release brings new features and improvements.

The SysKit team stepped up the capabilities of the **PowerShell Script Wizard** with **PowerShell script modules**, and the team has continued to add features and improve other functionality in SysKit 2016 R2 – 8.2.0. We’ll highlight the features and some of the key improvements. To dig out more details, read this release note.

SysKit’s **PowerShell Script Wizard** includes significant new features that extend its use, improve its usability, and allow you to control and manage Windows-based environments more easily and comprehensively. The major improvements are in the areas of **importing** and **referencing** PowerShell script **modules** and script **scheduling**. Now you can specify the PowerShell **script type** you wish to create and categorize the **report** and **management** scripts so you can more easily manage large amounts of different scripts.

[Click here to download the new release.](https://www.syskit.com/products/monitor/download)

Product version: 8.2.0  
Build number: 1060  
Database version: 8.2.0

Release date: Dec 6, 2016

## SysKit’s Features

### PowerShell Scripts

* PowerShell Scripts on the **Administration** tab are designed to make it as easy as possible for you to take control and simplify **reporting** and **administration** of your Windows environments.
* This category includes **two script subcategories** and **three predefined report scripts**:
  * **Reports** \(Computers by OUs, Installed Features, Installed Roles\)  

    **Computers by OUs**: This report displays a list of all computers in a domain and their corresponding Organizational Units. Note: this script needs to be executed on a Domain Controller to return valid results;  

    **Installed Features**: This report displays information about Windows Server features that are available for installation and installed on the target computer\(s\);   

    **Installed Roles**: This report displays information about Windows Server roles and role services that are available for installation and installed on the target computer\(s\).

  * The **Management Tasks** category contains all PowerShell scripts that perform some kind of management task and only return details on whether the specified task was successfully completed or an error occurred.

### PowerShell Wizard

* The built-in **PowerShell Script Wizard** comes with PowerShell **Module Manager**. You can import and edit a script module, which allows you to use a number of rules and cmdlets on your scripts.
* The **PowerShell module** feature within SysKit’s PowerShell Script Wizard allows combining of multiple scripts to simplify code management, accessibility, and sharing.
* Entered script and all referenced modules are validated before the wizard returns and displays the results of the script and modules you have run.
* Our built-in PowerShell Wizard supports **import** of:
  * Windows PowerShell scripts with a **.ps1** extension,
  * PowerShell Script modules with a **.ps1** and **.psm1** extensions.
* Created PowerShell scripts can be **scheduled for execution**. The following schedule options are available:
  * **Manual only** – the script will be executed manually when the Run button is clicked;
  * **Automatic** – the script will be executed automatically on a **defined schedule**, which has two types: **Recurrence** or **After another script**.

### Manage Scripts

* This dialog enables easier **management** of all created or imported PowerShell scripts.
* It also shows all the information about the scripts’ **execution schedule**, such as: triggers, the last and next run times, and on which computers the scripts are configured to run.

### Import Wizard

* This dialog provides options for **importing** and **configuring** PowerShell scripts in **SYSpr** format.
* It also detects and includes all **referenced PowerShell modules**, if there are any, while importing / exporting a report definition in SYSpr format.

### Download Scripts

* You can download and import the predefined PowerShell scripts from Acceleratio’s **repository**.
* Most of the available PowerShell scripts can run on all types of servers, while others are tied to a specific server role, such as **Domain Controller, IIS,** or **Hyper-V**.

## Improvements

* New and improved **design of emails and alerts** sent by SysKit.
* With the **Duplicate Monitoring Template** option, now you can easily create a copy of any Monitoring Template and adjust it according to your preferences.
* Completely refactored and optimized **AD Integration** system job. Now it’s even better and faster! Event logging for this system job is also improved.
* Reorganized and improved **verbose event logging** and **database log** options that reveal detailed event entries for troubleshooting. The verbose event logging **warning** now shows if any of the available options has been enabled.
* Better SysKit Service account validation in the Configuration Wizard.
* Search has been optimized through the loaded Performance Counters list in Template Wizard.
* Loading dialogs, indicating that the application is processing user input, have been added where necessary.
* The unnecessary condition for SQL permissions in the Configuration Wizard has been removed.
* The **auto-growth setting** for the SysKit database was set to a fixed number of megabytes because it can get quite large over time.

## Bug Fixes

* Users who weren’t members of the Local Administrators security group on SysKit’s app server couldn’t start the application.
* Deletion of old Performance Counter Alerts was not performed during the upgrade.
* Application Concurrent Usage summarization was not working in automatic mode because of incorrect UTC time zone handling.
* Users’ multiple simultaneous remote connections using Remote Desktop Services were not registered correctly by SysKit in some cases.
* Citrix Gather Mode was incorrectly set for monitored Citrix servers in some cases.

