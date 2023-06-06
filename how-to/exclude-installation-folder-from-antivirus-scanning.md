---
description: This article explains how to exclude installation folder from antivirus scanning on Windows Server 2008 or later.
---

# Exclude installation folder from antivirus scanning

This folder may have to be excluded from antivirus scanning when you use file-level antivirus software. If this folder is not excluded, you may see unexpected behavior. For example, you may receive “access denied” error messages.

Please configure your antivirus software to exclude the following folder from antivirus scanning:

## 32-bit and 64-bit version

* Drive:\Program Files\Syskit\Monitor

If you are using Syskit Monitor Data Collector, please exclude the following folder:

* Drive:\Program Files\Syskit\Monitor Data Collector

{% hint style="info" %}
The placeholder 'Drive' represents the letter of the drive on which you have the application installed. Typically, this drive letter is C.
{% endhint %}

In case you have a policy that you mustn’t exclude the whole folder, please configure your antivirus software to exclude the following file from antivirus scanning:

`SyskitMonitorService.exe`

