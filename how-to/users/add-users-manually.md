---
description: This article explains how to add users manually.
---

# Add Users Manually

{% hint style="info" %}
Syskit Monitor desktop and web app permissions can only be managed through the desktop app.
{% endhint %}

1. Navigate to the **File** &gt; **Manage** &gt; **Users and Groups**.
2. Click the arrow by the **Grant Access** button on the toolbar and choose **Grant Access Manually**.
3. **The Edit User Data** dialog will open. Fill in all the required information and check the following options according to your preferences:
   * Import user information from Active Directory – when adding a user to the application, it will perform regular synchronization with the Active Directory.
   * Monitor activities for this user – enables you to select the user you wish to monitor.
   * Add security role.
4. Click **OK** to add user and automatically close the window.

## Give access to Syskit Monitor users who haven't connected previously to the monitored computers

If you want to give access to Syskit Monitor to one user, please follow these instructions:

1. In **Manage Users and Groups** dialog click the **arrow** by the Grant Access button and then click the **Grant Access Manually** button. In the Create new user dialog, enter information about the user you want to give access to Syskit Monitor.
2. Under **Security – Role** select **Viewer**. This user will now have rights to read the data and to use Syskit Monitor to view reports.
3. If you give someone the **Administrator** role, they will also be able to administer the database and will have a full permission to use the Syskit Monitor.

 If you want to give access to Syskit Monitor to a whole group, please follow these instructions: 

1.  In **Manage Users and Groups** click on the **Security and distribution groups**.
2. Select the group you want and click **Edit**.
3. In tab Members you can see all the users that are members of this specific group.
4. Change **Security – Role** to **Administrator** and click **OK**.

{% hint style="info" %}
A new security group will be added as soon as the first user from it is connected to the computer and recognized by Syskit Monitor. It is not possible to add anyone manually to the group, Syskit Monitor will do it automatically. Also, now you can give Administrator role to the whole group.
{% endhint %}

See [Add Users from Active Directory](add-users-from-active-directory.md) to learn more.  
See [Manage Users and Groups](../../get-to-know-syskit-monitor/backstage-screen/manage-data-gathering.md) to learn more.

