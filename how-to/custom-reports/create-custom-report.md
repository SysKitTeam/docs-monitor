---
description: This article explains how to create a custom report that meets your needs.
---

# Create Custom Report

This article explains how to create a custom report that meets your needs better than the built-in reports.

Creating a new custom report is very simple everything is done throught the wizard. For example, this will be a report that shows users’ **idle time on the servers** for the current day.

1. In Step 1, simply enter the Custom Report name and select the desired report category. The Report Type you wish to create here is **Normal**. The wizard also offers two different grid types: Grid and Pivot Grid.
2. In Step 2, you must select the type of data you wish to report on. Your report can display data about activities, applications, logon audit, and file access audit.
3. In Step 3, you can select fields to be included in your report. Depending on the data type selected in the previous step, you will have different columns displayed.
4. In Step 4, using arrows on the right side you can order the report fields, which have been selected in the previous step, the way you wish to view them. You can also select default sorting for each field.
5. In Step 5, you can specify the conditions you want to check for each field. Each field contains different types of data \(numbers, dates, …\), so you can select specific conditions which depend on the data type. For example, for date fields you can select Today, Yesterday, Next Week and more, and for activity state you can select Active, Idle, Disconnected, Remote Control, Other.
6. In Step 6, you can select fields by which you wish to group the resulting data.
7. The Step 7 will be shown only if it is possible to calculate the summary for one of the selected fields \(this is when one of the fields is a numeric type\). The following **aggregation types** are available: None, Avg, Count, Max, Min, and Sum.
8. The Step 8 is optional, if you select the **Add a chart to this report** option, the chart visual options will be enabled. You can choose the chart type, color pallete and whether to show legend and labels.
9. The Step 9 will be shown only if the chart component is added in the previous step. It will allow you to define various chart axis properties.
10. The Step 10 allows column binding to series and arguments.
11. In Step 11, you will be informed that the custom report has been successfully created. Click **Finish** to exit the wizard.

## Download the custom report definition

Download the definition of this custom report: [Idle-Activities-Today](https://github.com/SyskitTeam/docs-monitor/tree/638b3861bfa1518ebf7fe8a1f1706752bcf7bb98/_assets/Idle-Activities-Today.zip)

See the [Custom Reports](../../get-to-know-syskit-monitor/reports/custom-reports.md) article to learn how to download and import the predefined Custom Reports from Syskit’s repository.

