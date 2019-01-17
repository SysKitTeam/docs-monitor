---
title: Export Report to Excel
description: This article explains how to export SysKit Monitor reports to Excel.
author: Andrea Budisa
date: 29/6/2017
---

# export-report-to-excel

This article explains how to export SysKit Monitor reports to Excel.

Data from the SysKit Monitor can be exported to **Excel** using the Export button from the **Report** ribbon. You will be prompted to select the export format.

There are three types of worksheets to export:

* **Static Worksheet** – retrieves static data from grid. Cannot refresh data.
* **Dynamic PivotTable** – data will be retrieved directly from the database to Excel as Pivot, data refresh is available, and you can re-arrange data in Excel.
* **Dynamic Worksheet** – same as the Dynamic PivotTable but it outputs data as an Excel DataTable object.

If data is exported to one of the dynamic processes, users can use the Excel Refresh All button to retrieve new data that matches the given criteria. For example, if you have exported the Daily Activity report with the date filter set to Today, every time you click the Excel Refresh All button, the system will retrieve data for the current day.

The following reports do not support dynamic exports \(data can be exported to a static worksheet\):

* User Activity Timeline
* User Activity by State
* Individual Gantt Charts

