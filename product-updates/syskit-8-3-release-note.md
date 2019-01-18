---
title: SysKit 2016 R2 8.3.0 - Release Note
description: >-
  This article describes all new features, improvements and bug fixes delivered
  in SysKit 2016 R2 – 8.3.0.
author: Andrea Budisa
date: 12/7/2017
---

# syskit-8-3-release-note

We have shipped SysKit 2016 R2 – 8.3.0. This minor release brings new features and improvements.

Thanks to our hardworking SysKit team, you can now create **PowerShell Alerts** and have the results sent to your email. The team has also done a great deal of work in **improving** and **optimizing the overall performance** of the application! To dig out more details, read this release note.

SysKit’s **PowerShell Script Wizard** includes significant new features that extend its use, allowing you to effectively monitor critical and important jobs that run in your Windows-based environment. The major features are in the areas of **defining alert conditions** and **options** for PowerShell scripts.

Now, you can select the alert conditions based on the **column types** that the PowerShell script returns and specify when you want to be **notified** if the alert condition is met. SysKit will generate the **.csv file**, which contains all data **matching the applied conditions** and trigger an alert that allows you to control the administration of your environment and respond to issues more quickly.

SysKit comes with almost **fifty new PowerShell scripts, twenty custom reports,** and **three monitoring templates** that are ready for you to download and explore! Awesome, isn’t it?

[Click here to download the new release.](https://www.syskit.com/products/monitor/download)

Product version: 8.3.0  
Build number: 2046  
Database version: 8.3.0

Release date: Apr 12, 2017

## SysKit’s Features

### PowerShell Scripts

* Run functionality is now extended with the **Run on Selected Computers** option. This allows you to run the desired PowerShell Scripts outside their scheduled hours—**on demand** and on **different** computers or computer groups.
* Run **after another script** functionality has been improved in case an error occurs in the previous script. Execution of all following scripts will not be performed.

### Real-Time PowerShell Alerts

* PowerShell Script Alerts are crucial for effective monitoring of any critical and important jobs that run in a server environment. SysKit will let you know when critical errors occur if you’ve configured the alert conditions for important PowerShell Scripts.
* The built-in PowerShell Script Wizard comes with **two new steps**:
  * **Configure Conditions** – In this step, you can enable and configure conditions for alerts sent after the script finishes. SysKit will detect PowerShell script column types and allow real-time alerts configuration based on the defined conditions.
  * **Alert Options** – In this step, you can choose if the alert condition is met, whether you want to be notified immediately, or if the state remains unchanged after the specified time interval has passed.
* PowerShell Script rows that match applied conditions and have triggered an alert will be painted light yellow after the script execution. These rows will be exported to .csv format and included in the email attachment of the alert.

### Download Scripts

* This dialog enables you to browse through and download the available **predefined PowerShell scripts** from Acceleratio’s **repository**. There, you can find around **fifty** PowerShell scripts categorized by their purpose.
* Most of the available PowerShell scripts can run on all types of servers while others are tied to a specific server role— such as **Domain Controller, IIS,** or **Hyper-V**—or have to be executed on the local machine. It is very important to read the script description on the right side.

### Scripts Execution Status Bar

* SysKit’s status bar now has a new PowerShell Scripts section. You can use this progress bar to check for PowerShell scripts **execution statuses** and determine whether the script is still **in queue** or if it’s currently **being executed** or was recently **executed**.

### PowerShell Wizard

* SysKit’s PS Wizard now supports the **CredSSP authentication**. In some cases, a PowerShell script may need to access resources outside of the remote server machine. This requires that the credentials be delegated to the target machine.

### Monitoring Templates

* **Import Wizard / Export Wizard** – This dialog provides options for importing and configuring Monitoring Templates in SYSmt format as well as exporting functionality.
* **Download Templates** – This dialog enables you to download and import the **predefined Monitoring Templates** from Acceleratio’s **repository**. There, you can find three monitoring templates that are tied to a specific server role, such as **SharePoint, Citrix,** or **Hyper-V**.

### Download Custom Reports

This dialog enables you to download and import the **predefined custom reports** from Acceleratio’s **repository**. There, you can find around **twenty** custom reports created for various purposes and categorized by the data type they display.

## Improvements

* Improved the **Add Computers** wizard with an additional step in which the computer **status check** is performed for a list of selected computers. This functionality provides the user with more information about possible misconfigurations if the load finishes with warning or errors.
* New and improved **export** of the **snapshot differences** and **all data**. With the **Export to XLSX** option in the Compare Result dialog, you can easily export the differences or all data to excel.
* **Threshold lines with color ranges** were added to the **Detailed Analysis** report in the Performance Reports. The specified warning and critical thresholds are now visualized.
* All export formats are now implemented in **only one button**! Just select the desired file format when saving.
* Real-time alerts now contain an additional information – the **computer group membership**.
* SysKit’s splash screen now has a new and exciting **animation**!
* SysKit’s start screen is now improved with a new icon and some basic tips.
* A new **info bar** now appears on the reports when the Aggregation system job is enabled. The data were sometimes confusing for users who enabled the job with no real necessity.
* Added a **new icon** in the AD Integration dialog if custom credentials are used for a domain.
* The **Add Services** step in the Template Wizard has been improved and now includes an additional column – Service Name. The wildcard option for ‘non-listed services’ now has a proper name and tooltip with an explanation.
* The **Enter PowerShell** step in the PowerShell Wizard now has the script modules count displayed on the right, if there are any.
* Increased the **timeout** option for PowerShell scripts execution to five minutes.
* Optimization of the SysKit application’s **initialization**. Feel a great difference in the startup of the application.
* Load time has been **optimized** for the following performance reports: **System Overview, Dashboard,** and **Computer Overview**.
* Completely **refactored** and **optimized Performance Counters** collection. Now, it’s even better and faster! Event logging for this system job is also improved.

## Bug Fixes

* Handled the SQL exception when the execute permission was denied on the SysKit database for a user.
* Monitored computers count in the left navigation wasn’t refreshing correctly upon changes on the Administration tab.
* Deletion of old User Session data was not working due to reference constraint conflicts.
* Gateway Sessions were not collected properly due to incorrect property retrieval from WMI.
* The Installation Wizard could not replace old .dll files and finish the configuration process while upgrading to a newer version in some cases.
* Adding computers from untrusted domains was not working properly due to issues with SQL connectivity and data access technologies.
* Improved logic for server deletion and cases which caused timeouts and deadlocks.
* WMI repository consistency check was failing due to incorrect handling of returned value.
* Fixed the issues with access granting to the SysKit application for the same usernames but in different domains.

