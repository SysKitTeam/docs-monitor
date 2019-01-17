---
title: >-
  Configure SysKit Monitor server to support the Block Malicious IP Addresses
  feature
description: >-
  This article explains how to configure the SysKit server for the Block
  Malicious IP Addresses feature to work.
author: Andrea Budisa
date: 30/6/2017
---

# configure-block-malicious-ip-addresses-feature

In case you notice that IP addresses are not being reported in the SysKit Monitor application, check if these options on the SysKit Monitor application server are correctly set:

1. Go to the **Start** &gt; **Administrative Tools** &gt; **Remote Desktop Services** &gt; **Remote Desktop Session Host Configuration**.
2. Double click on the **RDP-Tcp** connection.
3. In the **RDP-Tcp Properties** dialog, choose the General tab and change the **Security Layer** setting to the **RDP Security Layer**.

   > **Please note!** In case this security setting is configured to **Negotiate**, Windows server will always use the SSL \(TLS 1.0\) security layer and IP addresses will not be fetched.

4. Change the Encryption level to **High** in the same screen.
5. Click **Apply** and **OK** to finish.

   > **Please note!** Next two steps should be performed on every monitored server!

6. Now open the **Server Manager** and select the **Configure Server Manager Remote Management**.
7. In this dialog, enable the **Enable remote management of this server from other computers** option.

The server configuration is finished and now you should be able to use the Block Malicious IP Addresses feature within the SysKit Monitor.

See [Event Log System Job](configure-block-malicious-ip-addresses-feature.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options#extract-event-log) to learn more.  
See [Configure Audit Logon Events](configure-block-malicious-ip-addresses-feature.md#internal/how-to/audit-events/configure-audit-logon-events) to learn more.

