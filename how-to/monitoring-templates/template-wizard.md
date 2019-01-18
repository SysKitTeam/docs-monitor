---
title: Template Wizard
description: >-
  This article outlines all necessary steps for loading custom performance
  counters and the successful performance monitoring of your Windows
  environments.
author: Andrea Budisa
date: 21/6/2017
---

# template-wizard

We’ll break down how you can load custom performance counters into SysKit Monitor using Template Wizard.

1. In the **General** step, simply enter the Monitoring Template name and description. You can also choose whether you want to include Performance Counters or Windows Services, or both, in this Template.
2. In the **Add Counters** step, you will need to select the computer from which you wish to load representative Performance Counters. When a representative list of performance counters is loaded from a computer, you must select the performance counters and instances for which you want to collect data. Move the desired performance counters from Available to Selected Performance Counters.

   > **Please note!** The representative performance counters that are loaded from a computer may vary based on the features of the selected computer that are enabled on that system.

3. In the **Configure Counters** step, you will need to configure the Threshold, Notification, and Counter settings for the selected performance counter\(s\) in the previous step.
   * Under **Threshold Settings**, you can define the **warning** and **critical** thresholds and the threshold **state change interval**.
   * Under **Notification Settings**, you can select the checkbox in order to **receive an email notification** when the computer crosses a warning and/or critical threshold. You can also define the length of time before the **alert notification is to be repeated** for that counter.
   * Under **Counter Settings**, you can define the **Collecting Tolerance**, which means that not every collected value will be saved into the product database. Only new counter values that cross the specified tolerance, when compared to the last saved values, will be registered and saved.
4. In the **Add Services** step, you can select the services you wish to add to the template. SysKit Monitor collects all the Windows Services that are running on your monitored computers in real time, so you can always choose the important services—from the **list of all available services**—according to your preferences. In this step you can also **add** Windows Services that are **not currently listed**, by typing the **Service Name** of the designated Windows Service into the **lower textbox**. **Asterisk \* wildcard** is used to represent a number of characters or an empty string, **e.g. MSSQL\***. After you **select and move** the desired services from Available Services to Selected Services, you can proceed with the next step.
5. In the **Configure Services** step, you can define actions for the selected services in the previous step. Here you can configure the following options:
   * select the checkbox so that SysKit Monitor will try to **restart** a critical service after it has **stopped**;
   * select the checkbox to **receive an email notification** when a selected service is stopped;
   * define the length of time before the **alert notification is to be repeated** for that service.

In the last step, after your Monitoring Template has been configured successfully, please click the **Finish** button. You can then use the created template and assign it to the appropriate **computers or computer groups**.

