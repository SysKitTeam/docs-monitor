---
sidebar_position: 2
description: This article explains how to troubleshoot issues caused by LocalDB while attempting to access an existing instance using a different username or account.
---

# SQL Server Express 2012 LocalDB

Sometimes LocalDB issues can be caused while attempting to access an existing instance using a different username or account.

Generally, this should not be an issue but if you get a permission error or an error that states a database attached with the same name already exists, it means the name was reserved for another LocalDB instance. In case you have been running Syskit Monitor with a different account before, or there was some previous failed installation, a local database might have remained and is now preventing the creation of a new instance.

In such a case, you need to follow these steps to **fix this issue**:

First, check for any SQL Server instances that might have been created by different users on that machine. In order to do this, open Command Prompt as an administrator and type: **sqllocaldb i**. This command will list all LocalDB instances. Look for a **SysKitMonitorPrivate** instance and note the user (owner) of this particular instance.

Alternatively, sometimes the instance is created as **.\SysKitMonitorPrivate** and is not listed by the sqllocaldb command mentioned above. 

In such cases, you will need to turn to more advanced troubleshooting. To delete such an instance you will need to have access to **both user accounts** (the one that originally created the instance and the one that is now trying to access it).

1. Log in with the **original** user account and open Command Prompt as an administrator.

2. Type: **sqllocaldb i** to see all instances available under that user account. If you see the **SysKitMonitorPrivate** instance, use this command to delete it: **sqllocaldb d SysKitMonitorPrivate**.

If the steps listed above do not work or you do not have access to the original user account, you can try the **alternative method** listed below:

To delete completely the LocalDB instance that is owned by the old user, open **Regedit.exe** and search for "**SysKitMonitorPrivate**". You will get two results in total:

1. `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server Local DB\Shared Instances\SysKit Monitor`
2. `Computer\HKEY_USERS … \SOFTWARE\Microsoft\Microsoft SQL Server\UserInstances\{GUID}`

Next, right-click the selected entry and click **Delete**. Then select F3 to find the last entry and **delete** it like the previous one.

Afterwards, start the Command Prompt as an administrator and perform the following steps to create and manage a **new LocalDB instance**:

1. **sqllocaldb create "SysKitMonitorPrivate"** – creates a new of instance of SQL Server Express LocalDB.
2. **sqllocaldb start "SysKitMonitorPrivate"** – starts the specific instance of LocalDB.
3. **sqllocaldb info "SysKitMonitorPrivate"** – returns the information of the specific LocalDB instance.

If you still need some troubleshooting help, check the **"c:\\Users\\[user account]\\AppData\\Local\\Microsoft\\Microsoft SQL Server Local DB\\Instances\\SysKitMonitorPrivate\\"** folder for **error log files**.

When the LocalDB instance is completely deleted, restart the **SysKit Monitor Configuration Wizard** and try to create a new database again.
