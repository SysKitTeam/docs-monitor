---
title: File System Auditing
description: >-
  This article describes how to track file access activities, which include who
  accessed, modified, or deleted certain files.
author: Andrea Budisa
date: 28/6/2017
---

# file-system-auditing

All organizations store their crucial business-specific data on their file servers. A large number of files are being created, edited, shared, or deleted every day, but 95% of file access activities are not monitored by system administrators.

It is crucial to identify your sensitive data and determine who has the right to access it. File access auditing allows you to see who **accessed**, **modified**, or **deleted files**. It is the key to knowing what is happening with your data; if any unauthorized user tried to open, modify, or delete any files, you will know. If you have configured file system auditing, SysKit Monitor provides you with a **clear view of file access history**.

There are two **File System Audit** Reports in SysKit Monitor: **File Access Audit Log** and **File Access Audit**. File Access Audit Log report shows file access history, which includes the exact time of the access, type of operation performed on the file \(**ReadData**, **WriteData**, **AppendData**, **DeleteData**\), and the user who performed the operations.

File Access Audit report summarizes the total number of read, write, append, and delete operations by file for each user.

Both reports have filters to customize the view. You can select **Date Range**, **Computers**, **Users**, **Security Groups**, **Organizational Units**, and **Custom Groups** — and your view will accordingly be reduced or expanded to the selected range.

See [Event Log Reports](file-system-auditing.md#internal/get-to-know-syskit-monitor/reports/event-log-reports) to learn more.

