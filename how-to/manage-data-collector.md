---
title: Manage SysKit Monitor Data Collector
author: Andrea Budisa
description: This article describes how to manage SysKit Monitor Data Collectors.
date: 29/06/17
---

# manage-data-collector

> **Please note!** If you have more than 100 servers, or geographically distributed servers, it is recommended that you use SysKit Monitor Data Collector. Please contact our support team, which will provide you with detailed instructions and a setup file.

After you [install Data Collectors](manage-data-collector.md#internal/installation-configuration/install-wizard/install-agent) on the desired computers and configure them to the same database as the SysKit Monitor application on the central computer, the **Manage Data Collectors** dialog will appear on the Administration tab. Another way to access Data Collectors is by navigating to the **File** tab, selecting **Manage** from the left navigation bar, and then clicking **Data Collectors**.

The Manage Data Collectors dialog contains the list of data collectors installed and running on the servers in your environment. Use this dialog to configure each Data Collector according to your preferences and they will gather data as configured.  
Here you can see the Data Collector name, its status, when it was last seen online, and the Data Collector service version.

> **Please note!** The Data Collector marked as **default** cannot be disabled nor deleted, as it is the main collecting service.

The following options are available:

* **Enable** – Enable the selected Data Collector.
* **Disable** – Disable the selected Data Collector.
* **Delete** – Delete the selected Data Collector. Note: If you delete a Data Collector that is monitoring computers in automatic or manual mode, it will be automatically re-added with the next status update. Only uninstalled Data Collectors can be permanently deleted from this list.

## Data Collection Modes

Data Collectors can be configured to Automatic or Manual mode. By default, the Data Collection Mode is set to Automatic. The Data Collection Mode can be switched to Manual, which can be performed by Computers or Organizational Units.

### Automatic mode

In automatic mode, load balancing improves the distribution of data collection and optimization of resource usage across multiple Data Collectors. This way, you don’t need to worry about configuration settings, as the system is configured automatically.  
If any of Data Collectors are **offline or disabled**, the system will automatically transfer and distribute the data collection to other online and available Data Collectors.

### Automatic mode with Override option

You are advised to have this option enabled and configured if you have geographically distributed servers. The Override option enables you to configure the selected Data Collector in manual mode. Data Collectors that have this option enabled need to be assigned with the computers. In this mode, each Data Collector will only collect data for the assigned computers.  
If any of Data Collectors with the Override option is **offline** in this mode, data collection will **not be performed** for the assigned computers.

### Manual mode

In manual mode, each Data Collector will only collect data for the assigned Computers / OUs.  
If the mode is changed from automatic to manual, every Data Collector, depending on the selected option, needs to be assigned with the computers or organizational units.  
In Manual – Computers mode, you will have the Computers filter available for each Data Collector.  
In Manual – Organizational Units mode, you will have the OU filter available for each Data Collector.

> **Please note!** Data Collectors cannot gather data for the same computers or OUs! A computer or OU can be covered by one Data Collector only. Duplicate selection of computers or OUs on multiple Data Collectors will be ignored and assigned to the last selected Data Collector.

Currently, if any of Data Collectors are **offline** in this mode, data collection will **not be performed** for the assigned computers or organizational units.  
While configuring Data Collectors, if there are any unassigned Computers or OUs, you will have the option of assigning them to the default Data Collector or to reconfigure Data Collectors to cover these Computers or OUs. The same applies to a scenario where one or more Data Collectors are disabled.

