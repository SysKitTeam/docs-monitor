---
title: Configure Report Subscriptions
description: This article explains how to configure report subscriptions in SysKit Monitor.
author: Andrea Budisa
date: 29/6/2017
---

# configure-report-subscriptions

This article explains how to configure report subscriptions.

In order to be able to schedule a report first you need to [configure E-mail settings](configure-report-subscriptions.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#send-e-mails).

1. Open the report you want to subscribe to and click on the **Schedule This Report** button from the **Reports** ribbon.
2. In the **New Subscription** dialog, enter the following information:
   * Subscription Name
   * Select Delivery Methods you want to apply to your subscription. Available options are: **Email, File Share,** and **SharePoint**.
   * Email delivery settings which include: the e-mail addresses of the recipients, the email subject and body text.
   * Delivery period:
     * **Daily** – report will be sent on Every X day\(s\) or Every Workday.
     * **Weekly** – report will be sent on the preferred day of each week.
     * **Monthly** – report will be sent on the preferred day of each month.
     * **Quarterly** – report will be sent on the preferred day of each quarter.
3. Click on the **Reports** tab in the New Subscription dialog. Here you can:
   * see the list of reports added to this subscription
   * add another **Report** to this subscription
   * add **Custom Report** to this subscription
   * add **PowerShell Report** to this subscription
   * edit previously added report
   * delete added report
   * combine reports into a single PDF file – if there is more than one scheduled report
   * compress report\(s\) into a single .zip file.
4. Double click on the listed report to change its settings. Here you can:
   * set missing values because all filters must be properly defined
   * readjust the report filters
   * change the report name
   * choose the subscription format – PDF, XLS, XLSX
   * change the report layout
5. Click **Save & Close** to finish creating this subscription.

See [Configure Send E-mails system job](configure-report-subscriptions.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options/#send-e-mails) and [Manage Subscriptions](configure-report-subscriptions.md#internal/get-to-know-syskit-monitor/backstage-screen/manage-data-gathering/#manage-subscriptions) to learn more.

