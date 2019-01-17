---
title: PowerShell Wizard
description: >-
  This article outlines all necessary steps for creating report or management
  scripts and the successful administration of your Windows environments.
author: Andrea Budisa
date: 23/6/2017
---

# powershell-wizard

We’ll break down how you can create report and management scripts in SysKit Monitor using PowerShell Script Wizard.

1. In Step 1, specify the PowerShell script type you wish to create. The wizard offers two different script types: **PowerShell Report** and **PowerShell Management Task**.

   > **Tip!** The first option can be useful for retrieving a wealth of information about a server’s configuration, usage, or performance. The second option is useful for performing various administration and maintenance jobs.

2. In Step 2, simply enter the PowerShell script name and select the desired category. Note that based on the script type you have selected in the previous step, your script will be added to the corresponding category. The report category option will help you categorize your reports and management tasks so you can manage large amounts of scripts more easily.  
   For more advanced scripts, you can also enable the **CredSSP authentication** to avoid double-hop problems. In cases where a PowerShell script may need to access resources outside the remote server machine, the credentials must be delegated to the target machine.  
   _How to enable the CredSSP authentication_  
   If the entered PS script requires the credentials to be delegated and you have enabled the **CredSSP** option, the error dialog will be shown upon validation of the script. It will guide you on how to switch to **custom credentials**. Just click the **Configure** button in this dialog, and the **Edit domain** dialog will be shown. Select the **Specify credentials** option and re-enter the service credentials.

   > **Tip!** It is recommended that you enable the **Use credentials only for PowerShell** option as the custom credentials are meant for authentication when monitoring computers from untrusted domains.

   See the [Configuring CredSSP for use with PowerShell](powershell-wizard.md#internal/troubleshooting/credssp-for-use-with-powershell) article to learn more on how to delegate the user’s credentials through SysKit Monitor.

3. In Step 3, you will need to enter the PowerShell script you want to use to create reports or management tasks. Here you can also **import the script modules** whose members can contain functions, variables, and more. To avoid incorrectly generated reports, the report script first needs to be tested on a selected computer. SysKit Monitor will run it against the computer that you specify.  
   If you have selected the **management task** script type in the first step, the management script will **only be validated for syntax errors**.  
   **All referenced modules will also be validated in both cases** before the wizard returns and displays the results of the script and modules you have run.  
   After entering script, click Next&gt; to see the results.

   > **Please note!** If you have troubles with writing script, or you want to know more about PowerShell rules and limitations, please read [this article](https://technet.microsoft.com/en-us/library/bb978526.aspx).

   See the article on the [PowerShell script modules](powershell-wizard.md#internal/how-to/powershell-scripts/import-and-use-ps-script-modules) to learn more how and when to import and use script modules.

4. In Step 4, if the script and module syntax are valid, the results of the **report script** will be returned in a grid view. Please verify whether the script returned the desired results, then continue to the next step. As mentioned previously, if you are creating a **management script**, your script will only be validated; you will not have this step.

   > **Please note!** The approximate size of the query result can wary depending on the entered script purpose. Take into consideration that large query results can significantly increase server resource utilization.
   >
   > **Please note!** If an entered PowerShell query is returned without results after validation in PowerShell wizard, it cannot be saved.

5. In Step 5, you will need to select the computers you want to run the PowerShell script on.  
   Created PowerShell script can be scheduled to run on:

   * All computers;
   * Specific computers; or
   * Specific computer groups.

   > **Please note!** Query results may vary depending on the PowerShell version used on a specific computer.

6. In Step 6, you will need to specify the **conditions** that will trigger the PowerShell script.  
   The following **schedule options** are available:

   * **Manual only**—the script will be executed only when the **Run** button is clicked.
   * **Automatic**—the script will be executed automatically on a **defined schedule**, which has two types: **Recurrence** or **After another script**.

   > **Tip!** If the **Recurrence** option is selected, you will be offered **several recurrence types**: one time, minutely, hourly, daily, weekly, monthly, and quarterly. Here, you can select the start date and time for the selected recurrence type.
   >
   > **Tip!** If the **After another script** option is selected, you will be offered a drop-down menu that contains all PowerShell scripts available in SysKit Monitor. The script for which you configure the trigger will be executed after the script selected from the drop-down.

7. In Step 7, you can **enable** and **configure conditions** for alerts sent after the script finishes. SysKit Monitor will **detect and set** the PowerShell script **column types** and allow configuration of real-time alerts based on the **desired conditions**. A PowerShell script can return different column types. The ones that are **discoverable** by SysKit Monitor are String, DateTime, UInt64, UInt32, Int64, Int32, Double, Boolean, and Decimal.
8. In Step 8, if the alert condition is met you can choose whether you want to be notified immediately. Alternatively, you can be notified if the state remains unchanged after the specified time interval has passed. Note: in both cases, you will receive an alert when the condition is met and you will also receive an email after everything returns to the normal state. SysKit Monitor will generate a **.csv file**, which contains all the data **matching the applied conditions** and include it in the email attachment of the alert. Here you can also select whether to send alerts to email addresses defined in the **Options** dialog or you can specify different ones.

All created and saved PowerShell scripts, depending on the script’s type, will be added to the Administration tab &gt; PowerShell Scripts &gt; Reports or Management Tasks group.

