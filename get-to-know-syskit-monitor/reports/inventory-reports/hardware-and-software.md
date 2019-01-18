---
title: Hardware and Software
description: >-
  These reports provide an overview of all hard drives, network adapters,
  processors, programs and printers used in your environment.
author: Andrea Budisa
date: 25/5/2017
---

# hardware-and-software

Inventory Reports within SysKit Monitor are designed to make it as easy as possible for you to get an overview of everything that is deployed across your server environment and compare differences over time. SysKit periodically collects information in the form of **snapshots** on all the hardware and software installed on your Windows Servers and workstations, as well as which users are the Local Administrators on monitored computers.

**Inventory Snapshot** consists of:

* Hardware \(Hard Drives, Network Adapters, Processors, Printers\)
* Software \(Programs, Available and Installed Windows Security Updates, Services, Certificates\)
* Local Admins report.

With the Inventory Snapshots **Compare Wizard**, you can compare snapshots taken at different times, easily allowing you to detect and keep track of inventory changes.

The purpose of the Inventory Snapshots is to display the snapshots for all scans performed over a period of time on your Windows Servers and workstations and to allow the **snapshot comparison**. The Compare Wizard allows you to compare the collected inventory data, which includes CPU, RAM, available hard disk space, installed programs and Windows updates, local administrators on the servers, etc.

> **Please note!** In order to see the Inventory Reports it is necessary to configure [Inventory Snapshots](hardware-and-software.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#inventory-snapshots) system job. The report data will be available after Inventory Snapshots system job execution.

## Hardware

The reports within the **Hardware** subcategory include:

* **Hard Drives** – Shows disk space usage for every computer in your farm – identify computers low on space.
* **Network Adapters** – View all network adapters on your system – easily understand where each computer is connected, and get a central overview of all network interface controllers \(NICs\) installed on your computers.
* **Processors** – View detailed configuration of each computer – CPU, model, number of processors, and the amount of memory installed.

    Printers – View all printers in your server environment.

## Software

The reports within the **Software** subcategory include:

* **Programs** – View a full list of installed programs along with information about install date and location, help location, version and publisher.
* **Available Updates** – This report helps system administrators who want to see a full list of available updates along with information on whether an update has been downloaded or a reboot is required.
* **Installed Updates** – This report helps system administrators who want to see a full list of installed programs along with information about the installation date and location, help location, version, and publisher.
* **Services** – View all services that are running on your local and remote computers.
* **Certificates** – View a list of the certificates in the personal store on each computer along with information about the validity period, friendly name, thumbprint, intended purposes, etc.

## Local Users and Groups

The **Local Users and Groups** subcategory contains only one report at the moment:

* **Local Users and Groups** – This report helps system administrators who want to see a list of all the members of the Local Administrators group for each computer.

The Inventory Reports include two filters: **Snapshots** and **Computers**. Use the Snapshots filter to select a snapshot from a point in time and for the computer\(s\) specified in the **Computers** filter. The Snapshots filter will have the **latest snapshot** selected and it will be displayed in the reports.

Use the **Reports** part of the Inventory reports ribbon for the standard actions available for all reports, such as **exporting** to various formats, **scheduling** to email, **saving** as a view, **adding** to the dashboard, etc.

### Inventory reports Ribbon

Use the **Snapshots** part of the Inventory reports ribbon to take the following actions:

* **Take Snapshot** – Trigger the collection job for Inventory Snapshots.
* **Compare Wizard** – Compare whole snapshots or specific computers and explore the differences in hardware and software data.
* **Manage Snapshots** – View and manage all your snapshots from one dialog. This includes loading, deleting, comparing, and marking the selected configuration\(s\) as good.
* **Configure Snapshots** – Configure the collection of Inventory Snapshots. Choose when the snapshots will be created, and which data will be collected and compared.

See the article on the [Compare Wizard](hardware-and-software.md#internal/get-to-know-syskit-monitor/reports/inventory-reports/compare-wizard) to learn how to keep track of inventory changes and compare differences over time.

