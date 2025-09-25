---
sidebar_position: 4
description: These reports provide information regarding the Gateway connections.
---

# Gateway Reports

Gateway Reports provide an overview of all connections made via RD Gateways.

:::info
Remote Desktop Gateway **\(RD Gateway\)** is a role service that enables authorized remote users to connect to resources on an internal corporate or private network, from any Internet-connected device that can run the Remote Desktop Connection \(RDC\) client.
:::


Currently available reports are:

* **Current Connections** – displays the current user connections to the computers made via RD Gateway.

:::warning
**Please note!**  
The Current Connections report is a real time report.
:::


* **Connection Log** – displays a detailed connection log for a selected user – shows start, end and total times for the connections made via RD Gateway in a specific session state.
* **Connection Log Summary** – displays users’ activities over the course of one day: first logon and last logoff time, total time connected via RD Gateway and time spent in different session states.  
* **Client IP Addresses and Targets** – shows the source IP address for each user that connected via RD Gateway. When combined with a computer filter, you can pinpoint the exact computer a user had connected to.

:::warning
**Please note!**  
In order to see the Gateway Reports it is necessary to have at least one RD Gateway server added to monitoring.
:::


