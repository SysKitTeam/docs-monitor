---
description: This article explains how to resolve the offline and unauthorized computer states shown in Syskit Monitor.
---

# How to resolve the Offline and Unauthorized computer states

## How to resolve the Unauthorized state?

If the computer is in **Unauthorized** state on the [Administration – Computer](../get-to-know-syskit-monitor/administration/servers-and-groups.md) category, that means the **Service User** is not a member of the **Local Administrators Security Group** on the remote computer where you see the message.

In order to get the data remotely, the service user needs to be a **member of the Local Administrators Security Group** on the remote computer.

You can add the service user to the local Administrators Security Group [manually](../how-to/service-accounts/add-service-user-manually.md) or through the [Group Policy](../how-to/service-accounts/add-service-user-group-policy.md).

## How to resolve the Offline state for workstations?

Our software requires to **Allow Remote RPC traffic** in order to get the data from the client workstations. After you enable this you will be able to connect and capture data from the **workstations**.

{% hint style="warning" %}
**Please note!**  
This is required only in case you need to monitor workstations.
{% endhint %}

The easiest way to perform this is via the group policy. We will create either new policy or update existing and the change will propagate to clients. In this example we will create a new policy called **AllowRemoteRPC**.

1. We will assume all the workstations are within the same organization unit, so let’s right click on the desired OU and then select **Create a GPO in this domain, and Link it here…**
2. Name the policy somehow descriptive, e.g. AllowRemoteRPC-forWorkstations.
3. Right click on the newly created policy and click **Edit**.
4. Group policy management editor will open – navigate to Computer Configuration &gt; Preferences &gt; Windows Settings &gt; Registry.
5. Now right click on the Registry &gt; New &gt; Registry Item.
6. In the key path, navigate to **HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server**, select **AllowRemoteRPC** key, and set **Value data** to **1** and the **Base** to **Decimal**.
7. Confirm everything and that’s it, now Syskit Monitor is able to get the data from workstations as well.

What you need to do now is to go back to the Syskit Monitor and add extra workstations you want to monitor.

See [Network Ports](network-ports.md) article to learn more on how to configure firewall settings for data collection.

