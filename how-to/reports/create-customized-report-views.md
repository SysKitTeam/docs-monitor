---
title: Create customized report views
description: This article explains how to create customized report views in SysKit Monitor.
author: Andrea Budisa
date: 29/6/2017
---

# create-customized-report-views

This article explains how to create customized report views.

In SysKit Monitor, you can create multiple views for a specific report that you can click through in the left navigation. All the views within one report are based on the same columns. You can edit, delete and modify the created views. You can also change the layout of the selected view; this includes options like picking which columns to show, applying different grouping and sorting etc.

Views can be saved with two different visibility types: **Public \(for all users\)** or **Private \(only for me\)**. Public views are visible to all SysKit Monitor users, and private views are visible only to you. Use the **Edit View** button on the top ribbon to change the visibility mode. If you do not want other SysKit Monitor users to view your customized report view, select the Private option.

You can also select whether to **save the report view for this report only** or for **all reports \(global\)**.

> **Tip!** If you want the customized view to be the default view for all reports, set the Type to **Global**. You can use views as logical groups for **different server farms** or **monitored domains**.

## Which customizations are saved?

SysKit Monitor saves the following customizations you make to a report view:

* Columns that you removed
* Filters that you applied
* Sorting and grouping that you applied

## Save, rename or remove a custom view

You can customize a report in SysKit Monitor. For example, you can remove columns, add filters or apply a grouping. You can also change a report’s date range, which will be preserved in the saved views.

* Right-click the report column and the column chooser will be displayed. Drag and drop the desired columns into your report view.
* Right-click the report toolbar and you will be able to choose standard functions from the drop-down list to help you make quick calculations on the data in your report views, such as sums and averages. You can also calculate the total count, and the minimum and maximum values for a selected column.
* Click the **Save View Changes** button in the upper ribbon.
* If you remove a saved view, the view will be removed for all users with access to SysKit Monitor.

## Filters on views

Each view can have its own filters, but the state of the Filters Area is constant: if the Filters Area is expanded on one view, it will be expanded on all views. As you move from view to view, the state of the filter on each page persists: for example, if you have the Computers filter applied for one view for all the computers from one domain, the filter will still filter the computers from that domain when you leave the view and return to it.  
Saving the report also saves the state of each filter.

