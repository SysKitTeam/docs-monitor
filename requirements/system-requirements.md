---
title: System Requirements
desription: >-
  This article discusses the hardware and software requirements that are
  necessary in order to install the SysKit Monitor.
author: Andrea Budisa
date: 26/5/2017
---

# system-requirements

## Hardware requirements

**1. SysKit Monitor application server**

These are minimum hardware requirements for deploying the **SysKit Monitor**, including the deployment of the **Microsoft SQL Server 2012 Express LocalDB**, for a single-server installation or farm installation.

* **Processor:** 2.5 GHz; for more than 100 servers, we recommend a processor with at least 4 cores
* **RAM:** 2 GB
* **Disk:** NTFS file system-formatted partition with a minimum of 200 MB of free space
* **Display:** 1366 × 768

> **Please note!** If you are using the SysKit Monitor Web application, it is necessary to have at least 4 GB of RAM.

**2. SQL database server**

These are minimum hardware requirements for deploying the **SQL Database** for the SysKit Monitor:

* **Processor:** 2.5 GHz; for more than 100 servers, we recommend a processor with at least 4 cores
* **RAM:** 2 GB; for more than 100 servers, we recommend at least 8 GB
* **Disk:** NTFS file system-formatted partition with a minimum of 40 GB of free space
* **Display:** 1366 × 768

> **Please note!** Under normal conditions, the application will take around 40MB of data per server each month for a server that hosts approximately 50 users.

## Prerequisites

Before installing the SysKit Monitor, you need to install **.NET Framework 4.5.2** or later. We recommend that you install the latest version of .NET from the [Microsoft .NET website](https://www.microsoft.com/NET/). If you do not have .NET Framework 4.5.2 installed on your server, the SysKit Monitor installation will offer to perform the installation automatically.

## Operating System

The SysKit Monitor runs on Windows Server 2008 SP2 or later. We recommend that you apply all critical updates. You can use the following **Windows Server** editions: **Windows Server 2008 – 2016**, all editions. The SysKit Monitor is a 64-bit application that runs on all versions of the above listed operating systems.

## Database System

In order to run the SysKit Monitor, you need a database. The SysKit Monitor supports **SQL Server databases only**. You can use the following **SQL Server** editions: **SQL Server 2008 – 2016**, all editions. We advise you to use the latest available SQL Server version and apply all the available Service Packs before installing our application. If you are moving your existing SQL server database to a new SQL server, please follow the instructions in [this article](system-requirements.md#internal/how-to/move-database-to-new-server).

See [SQL Permissions](system-requirements.md#internal/installation-configuration/configuration-wizard/sql-permissions/create-sql-login) to learn more about SysKit Monitor SQL Server database requirements.

If you **do not have an SQL Server instance** installed in your server environment, the SysKit Monitor installation will offer to install the **SQL Server Express 2012 LocalDB** \(free license\) automatically.

> **Learn more about the LocalDB**  
> **LocalDB** is an instance of SQL Server Express that can create and open SQL Server databases. Once LocalDB is installed, the necessary SQL Server infrastructure is automatically created and started, enabling the application to use the database without complex configuration tasks.  
> The system database files for the database are stored in the users’ local AppData path which is normally hidden.  
> For example **C:\Users\user\AppData\Local\SysKit Monitor\SysKit\_database**.  
> User database files are stored where the user designates, typically somewhere in the **C:\Users\user\Documents** folder.

Proceed to: [User Permission Requirements](system-requirements.md#internal/requirements/user-permission-requirements).

## Supported technologies and platforms

SysKit Monitor supports monitoring of the technologies and platforms listed below.

* **Remote Desktop Services**
* **Windows Server** editions: Windows Server 2008 – 2016, all editions
* **SQL Server** editions: SQL Server 2008 – 2016, all editions
* **SharePoint** editions: SharePoint 2007 – 2016, all editions
* **Microsoft Exchange Server** editions: Exchange Server 2007 – 2016
* **Remote Desktop Gateway \(RD Gateway\) Server**
* Other **Windows Server roles** like **File Server, AD, WSUS, Hyper-V**, etc.
* **Citrix** editions:
  * MetaframeXP
  * Presentation Server 4.0 and better
  * XenApp 5.0, 6.0, 6.5, 7.5 – 7.11
  * XenDesktop 7.11 App Edition

