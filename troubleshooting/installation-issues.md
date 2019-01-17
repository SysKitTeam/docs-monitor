---
title: Installation Issues
author: Andrea Budisa
description: This article outlines some of the common installation issues.
date: 29/06/17
---

# installation-issues

## Error: SysKit Monitor Service won't start or times out while starting

### Problem:

I’m trying to install SysKit Monitor on Windows Server 2008, or Windows Server 2008 R2, and the SysKit Monitor service does not start. The following error events appear in the Windows Application log:

```text
Timeout (30000 milliseconds) waiting for a transaction response from the ServiceName service.
```

or

```text
A timeout was reached (30000 milliseconds) while waiting for the ServiceName service to connect.
```

or

```text
The SysKit Monitor Service failed to start due to the following error:  
‘The service did not respond to the start or control request in a timely fashion.’
```

### Solution:

1. Click **Start**, click **Run**, type **regedit**, and then click **OK**.
2. Locate and then click the following registry subkey: HKEY\_LOCAL\_MACHINE/SYSTEM/CurrentControlSet/Control
3. In the right pane, locate the **ServicesPipeTimeout** entry.  

   **Note**: If a ServicesPipeTimeout entry does not exist, you must create it. To do this, follow these steps:

   * On the **Edit menu**, point to **New**, and then click **DWORD Value**.
   * Type **ServicesPipeTimeout** and then press ENTER.

4. Right-click **ServicesPipeTimeout** and then click **Modify**.
5. Click **Decimal**, type **360000**, and then click **OK**.  

   This value represents the time in milliseconds before a service times out.

6. Restart the computer.

Read more on this issue in the next paragraf of this article.

## I am getting: "The service did not respond to the start or control request in timely fashion."

This is an issue on servers that don’t have access to the Internet. Windows Server will try to check the code signing certificate that was used to sign application executables. Allow access to the Internet for the server once and then start the service to solve the issue.  
Please note that it is required to do this only once; the first time, Windows will check SysKit's code signing certificate, and then it will work fine.

If this is not possible, [contact us](https://www.syskit.com/company/contact-us) and we will provide you with a certificate and the instructions on how to import the certificate to your problematic server.

## Installing SQL Server on a domain controller

### Problem:

I’m trying to install the SQL Server trial in our Navision server. However, I got a warning message while installing.

```text
Warning: Rule “Computer domain controller” generated a warning! Installing SQL Server on a domain is not recommended.
```

Should I proceed?

### Solution:

You have a few options here:

1. Install [SysKit Monitor with a SQL Server Express LocalDB database](installation-issues.md#internal/installation-configuration/install-wizard/install-monitor). This does not require SQL Server to be installed, and you can proceed with such an installation on a domain controller.
2. You can install SQL Server on another box in your domain and then connect the installation to an existing SQL server. Learn more in our [installation guide](installation-issues.md#internal/installation-configuration/install-wizard/install-monitor).
3. Microsoft does not recommend installing SQL Server on a domain controller. However, if you only have a single server in your organization, you can choose to install it on top of your domain controller. Before proceeding with this operation, you should check out the [following article](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server#DC_support).

## I am getting: "Cannot start SysKitMonitorService."

### Solution:

1. Try to return to the previous page using the Back button.
2. Click Next again.
3. The installation will be restarted, and the service will start.

If the service fails to start again, access the SysKitMonitorService manually from **Administrative tools** &gt; **Services**. If there are any further issues, [contact us](https://www.syskit.com/company/contact-us).

