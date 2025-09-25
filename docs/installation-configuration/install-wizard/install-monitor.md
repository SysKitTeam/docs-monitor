---
sidebar_position: 1
description: Read this article for detailed step-by-step instructions on how to install the Syskit Monitor and all its prerequisites.
---

# Install Syskit Monitor

Before you begin with the Syskit Monitor installation, we recommend that you carefully perform all preparation steps by reading the [Pre-Installation Requirements](../../requirements/pre-installation-requirements.md) article.

## Installing Syskit Monitor

Our application just needs to be installed on a single server, which will then be used for monitoring other servers in the farm.

To install the Syskit Monitor, proceed with the following steps:

1. [Download](https://www.syskit.com/products/monitor/download) the newest release.
2. Unpack and run the **SysKitMonitorSetup.exe**. The wizard will guide you through the installation steps; click **Next &gt;** to proceed.
3. Click **I Accept the terms of the license agreement** to accept the license and then click **Next &gt;** to proceed.
4. This step allows you to choose the program features that you want to install and change how a feature is installed. The default option is set to install the **Syskit Monitor desktop application** only, but you can choose to install **both** the **desktop** and the **web** feature. Before proceeding, please read the [System Requirements](../../requirements/system-requirements.md). Click **Next &gt;** to proceed.
5. Select the destination folder for the application installation files, e.g., C:\Program Files\SysKit\Monitor. Click **Next &gt;** to proceed.
6. You can change the folder name where the application shortcuts will be created and modify the availability option to install the Syskit Monitor for **All users** or **Only for the current user**. Click **Next &gt;** to proceed.
7. The following step about the installation method will appear if you don’t have a Microsoft SQL Server instance on this particular machine.

   The **Quick Install** option is recommended in cases where you have from 10 to a maximum of 20 servers. It is the quickest option. We take care of the configuration.

   If you have more than 20 servers and a dedicated SQL server, we advise you to select **Advanced Install**.

   You can choose to connect Syskit Monitor with a SQL Server instance you have or you can let the Syskit Monitor Setup install a new instance of **SQL Server Express 2012 LocalDB** \(free of charge\).

8. The installation wizard will unpack your files and you will be able to run the application from: **Start &gt; All Programs &gt; Syskit Monitor**.

Once the installation is completed, the Configuration Wizard will start. If the wizard does not start automatically after installation, you can run it manually from: **Start &gt; All Programs &gt; Syskit Monitor &gt; Configuration Wizard**.

:::warning
**Please note!**  
The Syskit Monitor web application can be installed on the same server as the desktop application or on a separate server. If you choose to install the web application separately, please read [this article](../configuration-wizard/configure-monitor.md).
:::


Proceed to: [Configuration Wizard](../configuration-wizard/configure-monitor.md).

