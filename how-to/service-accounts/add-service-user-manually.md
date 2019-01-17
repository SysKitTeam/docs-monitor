---
title: Add Service User to Local Administrators Group Manually
description: >-
  This article explains how to manually add the SysKit Monitor service user to
  the Local Administrators security group.
author: Andrea Budisa
date: 30/6/2017
---

# add-service-user-manually

1. Log on to the server\(s\) you plan to monitor.
2. Open **Computer Management** under Administrative tools on each server.
3. Select **Local Users and Groups** in the left navigation and then **Groups**.
4. Double-click the **Administrators** security group.
5. Add the SysKit Monitor service user simply by clicking **Add** and typing the name of your SysKit Monitor **service user** \(usually\).  

   After adding the service user, the Administrators security group will have the members listed similarly to the following: Administrator, domain\Domain Admins.

> **Please note!** You need to repeat this procedure for every server you plan to monitor with the SysKit Monitor. If you plan to monitor multiple servers, we recommend adding the SysKit Monitor service user via [Group Policy](add-service-user-manually.md#internal/how-to/service-accounts/add-service-user-group-policy).

