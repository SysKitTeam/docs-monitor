---
title: Network Ports
author: Andrea Budisa
description: This articles outlines the network ports required for gathering the data.
date: 29/06/17
---

# network-ports

If you have a firewall between the server hosting the application and the servers that are being monitored, you will need the following info.

The firewall inbound rules on Windows Server 2008, 2008 R2, 2012 and 2012 R2 are \(this is inside the windows firewall\):

* File and printer sharing \(NB-Session-In\)
* Network Discovery \(NB-Name-In\)
* Network Discovery \(NB-Datagram-In\)
* COM+ Remote Administration \(DCOM-In\)

In case you have the third party firewall the ports are:

* RPC TCP 135
* NetBIOS Datagram Service UDP 138
* NetBIOS Name Resolution UDP 137
* NetBIOS Session Service TCP 139

Only for performance counters:

* TCP Any, the special rule in Windows Firewall \[performance logs and alerts \(DCOM-IN\)\]
* RPC TCP 135 \[performance logs and alerts \(TCP-IN\)\]

