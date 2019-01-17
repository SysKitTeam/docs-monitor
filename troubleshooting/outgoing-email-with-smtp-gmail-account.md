---
title: Configuring outgoing email with an smtp.gmail account
author: Andrea Budisa
description: >-
  This article explains how to configure outgoing email with an smtp.gmail
  account to use with SysKit Monitor.
date: 29/06/17
---

# outgoing-email-with-smtp-gmail-account

Google blocks sign-in attempts from some apps or devices that do not follow modern security standards. Since these apps and devices are easier to break into, blocking them helps keep your account safe. Unfortunately, Google thinks SysKit Monitor is also unsafe.

Therefore, you have to enable **Less Secure Sign-In** for your Google account in order to enable sending emails in this configuration.

To enable this feature, please follow these steps:

1. Sign in to your Google account \(the Google account you use as your Username in the Email options form\).
2. Go to: [https://www.google.com/settings/security/lesssecureapps](https://www.google.com/settings/security/lesssecureapps).
3. Turn on the **“Access for less secure apps”** option.

After you enable this feature, you should be able to send e-mails without a problem.

Make sure that you have properly configured the **Outgoing email settings** in the **Send e-mails** system job within SysKit Monitor:

* The outgoing server should be **smtp.gmail.com** with port **587**.
* **Use encrypted connection \(SSL\)** option should be turned on.

