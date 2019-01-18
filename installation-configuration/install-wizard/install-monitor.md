---
title: Install SysKit Monitor
desription: >-
  Read this article for detailed step-by-step instructions on how to install the
  SysKit Monitor and all its prerequisites.
author: Andrea Budisa
date: 30/5/2017
---

# install-monitor

Before you begin with the SysKit Monitor installation, we recommend that you carefully perform all preparation steps by reading the [Pre-Installation Requirements](install-monitor.md#internal/requirements/pre-installation-requirements) article.

## Installing SysKit Monitor

Our application just needs to be installed on a single server, which will then be used for monitoring other servers in the farm.

To install the SysKit Monitor, proceed with the following steps:

1. [Download](https://www.syskit.com/products/monitor/download) the newest release.
2. Unpack and run the **SysKitMonitorSetup.exe**. The wizard will guide you through the installation steps; click **Next &gt;** to proceed.
3. Click **I Accept the terms of the license agreement** to accept the license and then click **Next &gt;** to proceed.
4. This step allows you to choose the program features that you want to install and change how a feature is installed. The default option is set to install the **SysKit Monitor desktop application** only, but you can choose to install **both** the **desktop** and the **web** feature. Before proceeding, please read the [System Requirements](install-monitor.md#internal/requirements/system-requirements). Click **Next &gt;** to proceed.
5. Select the destination folder for the application installation files, e.g., C:\Program Files\SysKit\Monitor. Click **Next &gt;** to proceed.
6. You can change the folder name where the application shortcuts will be created and modify the availability option to install the SysKit Monitor for **All users** or **Only for the current user**. Click **Next &gt;** to proceed.
7. The following step about the installation method will appear if you don’t have a Microsoft SQL Server instance on this particular machine.  

   The **Quick Install** option is recommended in cases where you have from 10 to a maximum of 20 servers. It is the quickest option. We take care of the configuration.  

   If you have more than 20 servers and a dedicated SQL server, we advise you to select **Advanced Install**.

   You can choose to connect SysKit Monitor with a SQL Server instance you have or you can let the SysKit Monitor Setup install a new instance of **SQL Server Express 2012 LocalDB** \(free of charge\).

8. The installation wizard will unpack your files and you will be able to run the application from: **Start &gt; All Programs &gt; SysKit Monitor**.

Once the installation is completed, the Configuration Wizard will start. If the wizard does not start automatically after installation, you can run it manually from: **Start &gt; All Programs &gt; SysKit Monitor &gt; Configuration Wizard**.

> **Please note!** The SysKit Monitor web application can be installed on the same server as the desktop application or on a separate server. If you choose to install the web application separately, please read [this article](install-monitor.md#internal/installation-configuration/configuration-wizard/configure-monitor).

Proceed to: [Configuration Wizard](install-monitor.md#internal/installation-configuration/configuration-wizard/configure-monitor).

