------

description: This article explains how to troubleshoot issues caused by LocalDB while attempting to access an existing instance using a different username or account.description: This 2. 'Computer\HKEY\_USERS … \SOFTWARE\Microsoft\Microsoft SQL Server\UserInstances`{ … `}'. 'Computer\HKEY\_USERS … \SOFTWARE\Microsoft\Microsoft SQL Server\UserInstances\{ … \}'rticle explains how to troubleshoot issues caused by LocalDB while attempting to access an existing instance using a different username or account.

------



# SQL Server Express 2012 LocalDB# SQL Server Express 2012 LocalDB



Sometimes LocalDB issues can be caused while attempting to access an existing instance using a different username or account.This article is intended for advanced users, administrators, and IT professionals.



Generally, this should not be an issue but if you get a permission error or an error that states a database attached with the same name already exists, it means the name was reserved for another LocalDB instance. In case you have been running Syskit Monitor with a different account before, or there was some previous failed installation, a local database might have remained and is now preventing the creation of a new instance.If you are using **Microsoft SQL Server 2012 Express LocalDB** as a database backend with Syskit Monitor, there can be permission issues while attempting to access an existing LocalDB instance using a different username or account. These configuration issues can arise when upgrading the application to a new version and using a different user account.



In such a case, you need to follow these steps to **fix this issue**:By default, access to the instance of LocalDB is **limited to its owner**. The data contained in the LocalDB is protected by file system access to the database files. Ownership of the LocalDB instance **cannot be changed**. It is owned by the user that was used for the configuration.



First, check for any SQL Server instances that might have been created by different users on that machine. In order to do this, open Command Prompt as an administrator and type: **sqllocaldb i**. This command will list all LocalDB instances. Look for a **SysKitMonitorPrivate** instance and note the user (owner) of this particular instance.If you are having connection problems and getting errors while accessing the LocalDB instance, we recommend that you **delete the instance** owned by the other user and create a new instance under a different user.



Alternatively, sometimes the instance is created as **.\SysKitMonitorPrivate** and is not listed by the sqllocaldb command mentioned above. :::warning

**Please note!**  

In such cases, you will need to turn to more advanced troubleshooting. To delete such an instance you will need to have access to **both user accounts** (the one that originally created the instance and the one that is now trying to access it).If you want to use a different user account, the existing database cannot be used!

:::

1. Log in with the **original** user account and open Command Prompt as an administrator.



2. Type: **sqllocaldb i** to see all instances available under that user account. If you see the **SysKitMonitorPrivate** instance, use this command to delete it: **sqllocaldb d SysKitMonitorPrivate**.To delete completely the LocalDB instance that is owned by the old user, open **Regedit.exe** and search for “**SysKitMonitorPrivate**”. You will get two results in total:



If the steps listed above do not work or you do not have access to the original user account, you can try the **alternative method** listed below:1. ‘Computer\HKEY\_LOCAL\_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server Local DB\Shared Instances\SysKit Monitor’

2. ‘Computer\HKEY\_USERS … \SOFTWARE\Microsoft\Microsoft SQL Server\UserInstances{ … }’

To delete completely the LocalDB instance that is owned by the old user, open **Regedit.exe** and search for "**SysKitMonitorPrivate**". You will get two results in total:

Next, right-click the selected entry and click **Delete**. Then select F3 to find the last entry and **delete** it like the previous one.

1. 'Computer\\HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Microsoft SQL Server Local DB\\Shared Instances\\SysKit Monitor'

2. 'Computer\\HKEY\_USERS … \\SOFTWARE\\Microsoft\\Microsoft SQL Server\\UserInstances\\{GUID}'Afterwards, start the Command Prompt as an administrator and perform the following steps to create and manage a **new LocalDB instance**:



Next, right-click the selected entry and click **Delete**. Then select F3 to find the last entry and **delete** it like the previous one.1. **sqllocaldb create “SysKitMonitorPrivate”** – creates a new of instance of SQL Server Express LocalDB.

2. **sqllocaldb share “SysKitMonitorPrivate” “.\SysKitMonitor”** – shares the specified private instance of LocalDB using the specified shared name.

Afterwards, start the Command Prompt as an administrator and perform the following steps to create and manage a **new LocalDB instance**:3. **sqllocaldb start “SysKitMonitorPrivate”** – starts the specified instance of SQL Server Express LocalDB.



1. **sqllocaldb create "SysKitMonitorPrivate"** – creates a new of instance of SQL Server Express LocalDB.The newly created LocalDB instance should be up and running now and ready for use in the **Syskit Monitor Configuration Wizard**. If you are having trouble accessing the instance, check its status by entering the following command: sqllocaldb info “SysKitMonitorPrivate”.

2. **sqllocaldb start "SysKitMonitorPrivate"** – starts the specific instance of LocalDB.

3. **sqllocaldb info "SysKitMonitorPrivate"** – returns the information of the specific LocalDB instance.If you want to use the **existing database**, you can export and create a database backup from the **backstage screen** in Syskit Monitor, to a desired location and restore it to the designated **SQL Server instance**.



If you still need some troubleshooting help, check the **"c:\\Users\\[user account]\\AppData\\Local\\Microsoft\\Microsoft SQL Server Local DB\\Instances\\SysKitMonitorPrivate\\"** folder for **error log files**.

When the LocalDB instance is completely deleted, restart the **SysKit Monitor Configuration Wizard** and try to create a new database again.