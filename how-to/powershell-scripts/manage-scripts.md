---
title: Manage Scripts
description: >-
  This article describes how to manage all available PowerShell scripts that are
  created or imported through SysKit Monitor.
author: Andrea Budisa
date: 23/6/2017
---

# manage-scripts

This dialog shows all available PowerShell scripts created or imported through SysKit Monitor. Scripts are grouped by type to two folders, like in reports’ left navigation: Reports and Management Tasks. The script execution is performed periodically, and you are able to configure the triggers as you wish. When you configure each script according to your preferences, it will run periodically as configured. You can also manually run **specific or multiple scripts**, which will be executed at the next tick of service.

The following options are available:

* **Run, Enable, Disable, Edit Trigger** – previously described in the upper part.
* **Select Computers** – Use this option to configure the computers on which to execute the script\(s\).
* **Remove** – Use this option to delete the selected script\(s\).
* **Add, Edit,** and **Remove Category** – Use these options to manage the created categories and subcategories for your scripts. Note that the Remove Category button will delete the whole category with all its containing scripts.
* **Refresh** – Use this option to refresh the dialog items and script status.

All of the available options for script configuration and execution can be managed easily with the multi-select option supported in grid-view.

The grid-view in Manage Scripts displays the following elements:

* **Name** – the name of the script.
* **Triggers** – information about the script’s execution schedule.
* **Last Run Time** – the last time a script was executed.
* **Next Run Time** – the next time a script will be executed. It depends on the configured trigger conditions.
* **Run On** – Indicates whether the script is configured to run on **all or specific** computers or computer groups.

The Script icon on this dialog will change its appearance, depending on the script’s state, which can be **disabled or executing**. A green arrow will be shown while the script is executing.

