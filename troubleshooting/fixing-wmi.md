---
title: Fixing WMI to work with SysKit Monitor
author: Andrea Budisa
description: >-
  This article explains how to resolve WMI failure by rebuilding the WMI
  repository.
date: 29/06/17
---

# fixing-wmi

Windows Management Instrumentation \(WMI\) is the infrastructure for management data and operations on Windows-based operating systems. WMI uses the Common Information Model \(CIM\) industry standard to represent systems, applications, networks, devices, and other managed components. Our application uses WMI to capture some of the data from remote servers such as total memory, disk size etc.

SysKit Monitor is using WMI in order to discover and retrieve data from remote computers. If you encounter difficulties, and missing data while trying to view server information such as RAM memory, programs list, hard disks, domain controllers etc., using SysKit Monitor, this can indicate **WMI failure**.

WMI failure can be caused by the **repository corruption** or by the **large WMI repository size**. If you are experiencing this issue, please follow these steps to **rebuild** the WMI repository.

Large WMI repositories can create problems and can be interpreted as corrupted, which is not always the case. Rebuilding is currently the only method available for resolving the corruption issue due to large repository.

To resolve the issue, the following actions should be performed on the **destination server**:

1. Check the repository for **consistencies**: For Windows Server 2008, Windows Server 2008 R2, and Windows Server 2012 run: **winmgmt /verifyrepository** from the command prompt. For older OS like Windows Server 2003 run: **WmiDiag tool** with the **checkconsistency** option. You can download it from [here](https://www.microsoft.com/en-us/download/details.aspx?id=7684).
2. If repository is found to be **inconsistent**: For Windows Server 2008 and newer, run the Command Prompt as an administrator and enter: **Winmgmt /salvagerepository**.

> **Please note!** This command will take the content of the inconsistent repository and merge it into the rebuilt repository if it is readable.

If the above procedure does not work, then run: **Winmgmt /resetrepository**.

> **Please note!** This will reset repository to the initial state when the OS was first installed.

For older OS like Windows Server 2003, there are no built in switches to rebuild the Repository, so you must do it manually.

