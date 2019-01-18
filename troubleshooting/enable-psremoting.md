---
title: Enable-PSRemoting for untrusted domains to work with SysKit Monitor
author: Andrea Budisa
description: >-
  This article explains how to enable PSRemoting for untrusted domains to work
  with SysKit Monitor.
date: 29/06/17
---

# enable-psremoting

WinRM \(Windows Remote Management\) PowerShell enables you to create a remote session to a computer. The functionality is similar to familiar remote administration tools such as SSH, but it utilizes industry-standard ports and protocols such as HTTP and SOAP.

SysKit Monitor uses PowerShell to perform multiple actions against each monitored server remotely, including to retrieve software inventories and to restart services periodically.

The Windows PowerShell remoting features are supported by the WS-Management technology. Computers running Windows 7 and later include WinRM 2.0 or later. On computers running earlier versions of Windows, you need to install WinRM 2.0 or later. Currently, remoting is supported on Windows Vista SP1 or later, Windows 7, Windows Server 2008 R1 and R2, Windows Server 2012 R1 and R2, and Windows Server 2016.

Although most Windows systems should have at least PowerShell 2.0 installed \(it’s the default on Windows 7 and Windows Server 2008\), PowerShell remoting was not enabled by default until Windows Server 2012.

> **Please note!** Windows Server 2012 and later have PowerShell remoting enabled by default. There’s no need to run Enable-PSRemoting unless it has been disabled for some reason.

You can verify the availability of WinRM and configure a PowerShell for remoting by following these steps:

1. Start Windows PowerShell as an administrator.
2. The WinRM service is by default configured for a manual startup. You can verify whether the WinRM service is running or not using the following command: **get-service winrm**.
3. To enable PowerShell remoting on each computer you want to monitor with SysKit Monitor, type the following command: **Enable-PSRemoting -Force**.

This command configures the computer to receive Windows PowerShell remote commands and it uses the “Force” parameter to suppress user prompts.

In many cases, SysKit Monitor will be able to work with remote computers in other domains. However, if the remote computer is not in a trusted domain, the remote computer might not be able to authenticate your credentials. To enable authentication, you need to add the remote computer to the list of trusted hosts for the local computer in WinRM. To do so, type the following command: **winrm s winrm/config/client ‘@{TrustedHosts=”RemoteComputer”}’**.

> **Please note!** “RemoteComputer” should be the name of the remote computer, such as {TrustedHosts=”CorpServer”}.

