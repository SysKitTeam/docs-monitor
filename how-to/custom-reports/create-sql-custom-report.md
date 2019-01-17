---
title: Create SQL Custom Report
description: This article explains how to create a Custom SQL Report.
author: Andrea Budisa
date: 29/6/2017
---

# create-sql-custom-report

This article explains how to create a **Custom SQL Report**.

Open the **Custom Report Wizard** by selecting Custom Reports in the left navigation bar and then clicking the **Create** button from the ribbon.

1. In Step 1, enter the report name and select a preferred category for your report. To create a SQL report, select the **SQL** from the **Report Type**. Once you do so, you will see a modified version of the Custom Report Wizard. Click **Next &gt;** to proceed.
2. In Step 2, enter the preferred SQL **SELECT** statement. SQL statement you enter will serve as base for your report and will give you the same result as SQL Server Management Studio would.  
   You can write a simple plain SQL statement using common keywords, with or without parameters. Parameters are words prefixed with special character ‘@‘ \(ex. @param1, @param2\) and will be used as filters which you can modify outside of the SQL editor in the same way as filters used in standard reports. If you use clean SQL statement, your SQL report will not have any applicable filters.

   > **Please note!** If you are not familiar with SQL or with SysKit Monitor database schema, please [contact us](https://www.syskit.com/company/contact-us) and we will create an SQL report for your needs.

3. In Step 3, depending on whether you have used the parameters in the previous step, you will be able to initialize them here. If you have used clean SQL statement, you can skip this step.

   There are two main options to initialize parameter: as a **Specific Value** or **Select from filter**.

   **Specific Value parameter**

   If you decide to define specific value, you need to do following:

   * Select a preferred parameter from the list of **Detected Parameters**.
   * In **Details** group select **Specific Value**.
   * Enter **Display Name** if you wish to change the default name.
   * In **Data Type** select the type of data for the parameter: **Integer**, **Decimal**, **String** or **Datetime**. 
   * Edit **Default Value** to fit your filter criteria.

   **Select from filter parameter**

   On the other hand, if you choose to select your parameter from a filter, you can do so following these steps:

   * Select a preferred parameter from the list of **Detected Parameters**.
   * In **Details** group select **Specific from filter**.
   * Select a preferred **Filter**.
   * Edit **Values** for the selected filter to fit your selection criteria.

   There is one more specific option related to parameters, you can use predefined parameters **@StartedOn** and **@EndedOn** to populate the **Date Range** filter. They are used in the same way as custom defined parameters. Only difference is that in third step you can choose to populate them from the Date Range filter. If you do not wish to do so, you can use them as your own custom parameters.

   Perform steps described above for each detected parameter and proceed to the next step.

4. Close the Custom Report Wizard by clicking the **Finish** button.

## Get to know your Custom Report

Once your Custom SQL Report has been generated you can edit it using **Edit** button in the ribbon or, if you used parameters, by changing filter values. Alterations in a report layout or filter values can be saved by using **Save Layout Changes** and **Save Filters** option in the ribbon.

If you edit the report layout or filters without saving changes, the next time you access the report it will have initial layout and filter values as if the change didn’t happen.

## Example: SQL statement that filters selected group of servers if servers are logged and updated after a specific date

As explained in the text above, you can write the SQL statement with or without parameters. We will describe both ways in detail.

In this example we will choose servers with ID = 1, 2, 3 as the target group of servers with LastUpdated date greater or equal to February 1st 2013. You can modify this part of SQL to fit your servers and your data.

Create a new custom report, fill in data and proceed to **Step 2: Enter your SQL**.

### a\) Clean SQL statement:

**SELECT** \[TerminalServers\]. _**FROM** \[TerminalServers\] **where** \[TerminalServers\].TerminalServerID in \(1, 2, 3\) and LoggingEnabled = 1 and LastUpdated &gt;= ‘2015-04-04’.  
Skip the next step and click \*Finish_ to exit the Custom Report Wizard.

Newly created report doesn’t contain filters and if you choose to change target group of servers you will have to do so in the SQL Editor of the selected report.

### b\) SQL statement with parameters

**SELECT** \[TerminalServers\]. _**FROM** \[TerminalServers\] **where** TerminalServerID in @TerminalServerIDs and LoggingEnabled = @LoggingEnabled and LastUpdated &gt;= @LastUpdated.  
Click \*Next &gt;_ to proceed.

Set values to configure the detected parameters for the SQL query. In the previous step we have defined three parameters. In this step we will define their types and values.

For parameters **@LastUpdated** and **@LoggingEnabled** set specific value as defined:

* **@LastUpdated** set data type to DateTime and set default value to April 1st 2015.
* **@LoggingEnabled** set data type to String and set default value to True.

Parameter **@TerminalServerIDs** is somewhat different as it should represent collection of target server IDs. As such it will be populated from the filter.

1. Select the **@TerminalServerIDs** entry from the **Detected Parameters** part.
2. Choose the option **Select from filter** from the Details part.
3. Since we want filter by specific servers, select the **Servers** entry from the **Filter**.
4. Select names of target servers in **Values** and proceed to the next step.  
5. Close the Custom Report Wizard by clicking the **Finish** button.

See the [Custom Reports](create-sql-custom-report.md#internal/get-to-know-syskit-monitor/reports/custom-reports) article to learn how to download and import the predefined Custom Reports from SysKit’s repository.

