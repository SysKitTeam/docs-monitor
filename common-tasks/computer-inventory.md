---
description: This article describes how you can use the Computer Inventory reports to gather a detailed overview of everything that is deployed accross your server environment.
---

# Computer Inventory

Syskit Monitor provides hardware and software asset inventories that give a **detailed overview of everything that is deployed across your server environment**. The tool collects information on all the **software and hardware** installed on your Windows Servers and workstations, making it easy to keep track of your server inventory.

Server inventory is gathered periodically in the form of **snapshots**. Once the snapshots are created, they can be browsed, examined and compared. For more details, check out the [Inventory Snapshots](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#inventory-snapshots) and [Compare Wizard](../get-to-know-syskit-monitor/reports/inventory-reports/compare-wizard.md).

Inventory Reports within Syskit Monitor help you to:

* Manage your hardware and software inventory more efficiently.
* Estimate PC readiness for technology implementations, upgrades, and migrations.
* Detect the presence of malicious or unnecessary applications.
* Keep track of installed and available Windows updates on your servers for more efficient patch management.

## Hardware inventory

Syskit Monitor hardware inventory is a collection of **summary** and **detailed reports of your servers’ configurations and components**. The hardware inventory data give you an overview of your monitored computers, providing you with transparent information about the **hard drives**, **available disk space**, **network adapters**, **network card address**, **CPU type and speed**, and **manufacturers**. You can use it to **discover printers and other hardware components** in your environment.

With these reports you can easily check disk space usage to identify computers low on space or you can get the configuration of each computer in your environment. From one centralized location, you can browse the CPU characteristics, the number of processors and cores, memory installed and other relevant hardware specifications.

## Software Inventory

The software inventory reports provide information about all the software installed across your server environment. The reports contain various pieces of information about installed programs, all available updates, as well as already installed updates.  
Also, you can view all the services running on local and remote computers and a list of certificates in the personal store. This may be particularly useful when you’re interested in the validity period, friendly name, thumbprint or an intended purpose of a piece of software.

{% hint style="warning" %}
**Please note!**  
The values shown on the Services report are, by default, collected weekly within the Inventory Snapshots. However, they are real time in the Windows Services report in the Custom Reports section.
{% endhint %}

All of the above reports offer better management and optimization of your software inventory.

## How hardware and software details are retrieved

All of these details are collected and retrieved when Syskit Monitor runs the System Jobs. These jobs run periodically and you can configure each job per your liking. For example, you can set the interval for Syskit Monitor to collect data for the monitored computers.

To see how to configure the Syskit Monitor System Jobs, check out the [Options ](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#system-jobs-configuration)section. Syskit Monitor runs these jobs by itself, so no administrator intervention is needed once you configure the jobs properly.

Inventory Snapshots is one of the System Jobs that Syskit Monitor runs. This is how Syskit Monitor collects data about the inventory in your server environment. Note that you can omit certain data from being collected if you don’t have the need for them, as well as manage them, mark certain configurations as good and take snapshots manually. You can change this in the [Inventory ](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#inventory-snapshots)options section.

## Compare Inventory Snapshots and computers

Use the [Compare Wizard](../get-to-know-syskit-monitor/reports/inventory-reports/compare-wizard.md) to compare two Inventory Snapshots or two different system environments to find any differences over time or to check whether selected computers have the same configuration. For example, you can compare the development and production environment to make sure they are configured properly.

## Alert notifications

Under Options, you can set up [alert notifications](../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#alerts). These are sent to you via email if and when differences are detected after Syskit has finished running the automatic Inventory Snapshot.

See [Inventory Reports](../get-to-know-syskit-monitor/reports/inventory-reports/hardware-and-software.md) article to learn more.

