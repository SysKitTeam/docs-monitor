---
title: SysKit Monitor Web Application
description: This article describes how to start using your SysKit Monitor Web Application.
author: Andrea Budisa
date: 30/6/2017
---

# syskit-monitor-web-app

SysKit Monitor Web UI allows you to monitor and report from wherever you are. It can be accessed from desktop computers and mobile devices. It is ideal for busy managers and chief information officers who travel a lot and do not always have access to Microsoft Remote Desktop Servers or Citrix XenApp published applications. You can access all reports from the SysKit Monitor desktop application through the web interface, and you can apply filters to reports so that you see only the data you want to see.

After you have [installed the SysKit Monitor Web Application](syskit-monitor-web-app.md#internal/installation-configuration/configuration-wizard/configure-monitor), double click on the SysKit Monitor Web App shortcut on desktop or open your web browser and type in the server name where the SysKit Monitor Web Application is installed, e.g., **Server.domain.name:port/**. The SysKit Monitor Web interface will appear, and it will be ready to explore.

If this doesn’t get you started, try verifying the following:

1. Run the **Internet Information Services Manager**.
2. Find your newly created SysKit Monitor site and click on the **Browse Web Site \(http\)** link.
3. A dialog box will appear in the browser, requesting the user to **provide credentials** to access the SysKit Monitor Web Application.

The benefits of using the SysKit Monitor Web Application:

* Simple and easy-to-use reporting interface
* Gives you deep insight into employees’ activities
* Helps you meet regulatory requirements
* Helps you easily manage and monitor the performance and health of your server environment in real time
* Saves money on license reports
* Simplifies organization-wide access to user activity reports.

Use the Reports toolbar to perform the following actions:

* **Send Mail** – Send the current report to email
* **Export** – Export the current report to a PDF or Excel file
* **Refresh** – Refresh items in the main view
* **Expand / Collapse** – Expand collapsed groups in the current report, or collapse expanded groups in the current report.

## Change the application site port number

If you are having problems accessing the SysKit Monitor site, it may be that some other web site is using the same port number as a SysKit Monitor Web Application.  
In that case you will have to change the default port number:

1. Run the **Internet Information Services \(IIS\) Manager**.
2. Expand the Sites List, select the SysKitMonitorApp, and in the Actions pane, click **Bindings**.
3. Select the site binding you want to change the port number for and click on the **Edit** button.
4. Change the default port number to the next available number and click OK to apply the changes.

If you want give access to SysKit Monitor \(desktop and web app\) to users who haven’t connected previously to the monitored computers, check [this article](syskit-monitor-web-app.md#internal/how-to/users/add-users-manually).

