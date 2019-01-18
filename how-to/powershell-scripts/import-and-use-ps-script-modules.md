---
title: Import and Use PowerShell Script Modules
description: >-
  This article explains how and when to import and use PowerShell script modules
  through the PowerShell Script Wizard within SysKit Monitor.
author: Andrea Budisa
date: 4/7/2017
---

# import-and-use-ps-script-modules

If you navigate to **Administration &gt; PowerShell Scripts**, you will find endless possibilities for the creation of new report and management scripts.  
With the built-in PowerShell Script Wizard, you can import and edit **PowerShell Script Modules** with .ps1 and .psm1 extensions. A script module allows you to use a number of rules and cmdlets in your scripts. In simple terms, a script module is just a grouping of functions and code that can be applied to a specific group of scripts.

PowerShell modules are actually highly recommended when writing PowerShell scripts, because they are created for applications such as Microsoft Exchange, Active Directory, VMware, etc., to manage all aspects of various applications.  
The **PowerShell Module Manager** within the PowerShell Script Wizard allows the combining of multiple scripts to simplify code management, accessibility, and sharing.

In **Step 3** of the [PowerShell Script Wizard](import-and-use-ps-script-modules.md#internal/how-to/powershell-scripts/powershell-wizard), you will have the option to import PowerShell modules on the right. To expand the view, click the **Imported modules** button, and options for managing modules will appear.  
If there are no modules referenced to the current script, click the **Manage modules** button to open the PowerShell Module Manager, where you can **reference an existing** PowerShell module or **import a new** one.

If there are no imported modules, the list will be empty and you will have the option to **Import** modules from your local or network drive.  
After you select and import the desired modules with .ps1 and .psm1 extensions, they will appear in the modules list.

> **Please note!** All PowerShell modules selected for import will be validated for syntax errors before they can be used and referenced to scripts.

The following options are available:

* **Included** – Use this checkbox to reference the selected module to your PowerShell script.
* **Edit** – Use this option to edit your PowerShell module and, after editing, to discard or save changes.
* **Delete** – Use this option to delete unnecessary or old PowerShell modules.

PowerShell modules should be used when creating solutions, rather than scripts. In that case, the script-making process needs to be organized to support script reuse. If your scripts tend to be small, you probably do not need modules.

You can easily decide whether to create and import a PowerShell module by reviewing the following questions while writing a script:

* Will this PowerShell code be used more than once?
* Does this code manage a single object or entity?
* Is this code too complex to be in a single script?
* Will this PowerShell code be shared with others?

If the answer to these questions is “yes,” you should probably write a **module** instead of a script, and separate all the functions for future reuse.

