---
description: This article describes how to start using your Syskit Monitor Web Application.
---

# Syskit Monitor Web App

Syskit Monitor Web UI allows you to monitor and report from wherever you are. It can be accessed from desktop computers and mobile devices. It is ideal for busy managers and chief information officers who travel a lot and do not always have access to Microsoft Remote Desktop Servers or Citrix XenApp published applications. You can access all reports from the Syskit Monitor desktop application through the web interface, and you can apply filters to reports so that you see only the data you want to see.

After you have [installed the Syskit Monitor Web Application](../../installation-configuration/configuration-wizard/configure-monitor.md), double click on the Syskit Monitor Web App shortcut on desktop or open your web browser and type in the server name where the Syskit Monitor Web Application is installed, e.g., **Server.domain.name:port/**. The Syskit Monitor Web interface will appear, and it will be ready to explore.

If this doesn’t get you started, try verifying the following:

1. Run the **Internet Information Services Manager**.
2. Find your newly created Syskit Monitor site and click on the **Browse Web Site \(http\)** link.
3. A dialog box will appear in the browser, requesting the user to **provide credentials** to access the Syskit Monitor Web Application.

The benefits of using the Syskit Monitor Web Application:

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

If you are having problems accessing the Syskit Monitor site, it may be that some other web site is using the same port number as a Syskit Monitor Web Application.  
In that case you will have to change the default port number:

1. Run the **Internet Information Services \(IIS\) Manager**.
2. Expand the Sites List, select the SyskitMonitorApp, and in the Actions pane, click **Bindings**.
3. Select the site binding you want to change the port number for and click on the **Edit** button.
4. Change the default port number to the next available number and click OK to apply the changes.

If you want give access to Syskit Monitor \(desktop and web app\) to users who haven’t connected previously to the monitored computers, check [this article](../../how-to/users/add-users-manually.md).

