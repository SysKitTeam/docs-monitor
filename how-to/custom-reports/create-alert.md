---
title: Create an Alert
description: This article explains how to set Custom Reports e-mail alerts.
author: Andrea Budisa
date: 29/6/2017
---

# create-alert

This article explains how to set Custom Reports e-mail alerts.

This feature provides a possibility of receiving an email alert if a new entry is inserted into the previously created custom report - **Idle-Activities-Today**.

## Create Alert

1. Click the **Create Alert** button in the Custom Reports ribbon.
2. Specify which e-mail addresses should receive the alerts. Here you can also:

   * enable appending new report entries in the e-mail body. If this option is enabled, you can create an entry template using variables such as User, Time Spent etc.
   * select whether to attach report in the e-mail or not.

   Depending on the custom report's purpose, the following example templates can be entered to the New entry template textbox:

   * {User} has been Idle for {Time Spent}
   * {User} has started {Application}

3. Click **OK** to finish creating an alert.

## Alert Options

* **Create Alert** – create an email alert to inform you about new entries in the custom report.
* **Modify Alert** – change the alert settings.
* **Remove Alert** – deleting this alert will stop new entries email notifications.
* **Alert Last Sent** – provides an information about time last alert was sent at.

See [Configure Send e-mails system job](create-alert.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options#send-e-mails) to enable receiving email alerts.

