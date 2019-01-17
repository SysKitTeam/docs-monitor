---
title: Malicious IP Blocking
description: >-
  This article focuses on the Blocked IP Addresses feature that creates a list
  of blocked IP addresses via Windows Firewall rules.
author: Andrea Budisa
date: 28/6/2017
---

# malicious-ip-blocking

Protecting the company’s servers from potential attackers is very important. If attackers get into the internal company network, they can access sensitive company data. One of the common types of attack is guessing the administrator’s password by various methods. If there is no defense policy, attackers can keep guessing for as long as they want.

Blocking the IP address instead of the URL or domain name is more powerful, because it can **protect your servers from multiple malicious users or websites** that share the same IP address. SysKit Monitor **detects potentially malicious addresses** and **blocks** them. After a **certain number of failed logon attempts** in the period of one hour, SysKit Monitor will **block the source IP address** of the user for one day.

If you want to change these values, you can do so in **Options dialog**, in the **Extract Event Log** tab. When the block time expires, the IP address will be **unblocked automatically**. It is also possible to unblock the IP address manually.

The **Blocked IP Addresses** report shows the list of blocked IP addresses via Windows Firewall rules. In order to see this report, you must enable and run [Extract Event Log](malicious-ip-blocking.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#extract-event-log) system job and [Public IP Fetching](malicious-ip-blocking.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#general).

The report shows you the blocked IP address, date and exact time of the block, and date and exact time of the automatic unblock.

If you want to customize your view, you can do so using the filter. You can select **Date Range** and **Computers** — and your view will accordingly be reduced or expanded to the selected range.

See [Event Log Reports](malicious-ip-blocking.md#internal/get-to-know-syskit-monitor/reports/event-log-reports) to learn more.

