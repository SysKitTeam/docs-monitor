---
description: This article explains how to manually add the Syskit Monitor service user to the Local Administrators security group.
---

# Add Service User to Local Administrators Group Manually

1. Log on to the server\(s\) you plan to monitor.
2. Open **Computer Management** under Administrative tools on each server.
3. Select **Local Users and Groups** in the left navigation and then **Groups**.
4. Double-click the **Administrators** security group.
5. Add the Syskit Monitor service user simply by clicking **Add** and typing the name of your Syskit Monitor **service user** \(usually\).

   After adding the service user, the Administrators security group will have the members listed similarly to the following: Administrator, domain\Domain Admins.

:::warning
**Please note!**  
You need to repeat this procedure for every server you plan to monitor with the Syskit Monitor. If you plan to monitor multiple servers, we recommend adding the Syskit Monitor service user via Group Policy.
:::


