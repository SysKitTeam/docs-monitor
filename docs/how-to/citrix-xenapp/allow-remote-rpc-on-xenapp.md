---
description: This article describes how to monitor XenDesktop machines with Syskit Monitor.
---

# Allow Remote RPC on Xenapp

In order to monitor **XenDesktop** machines without any agents installed, our software requires to Allow Remote RPC traffic in order to get the data from the client machine. After you enable this you will be able to connect and capture data from the XenDesktop machines completely offloading processing to the Syskit box.

:::info
This is required only in case you need to monitor XenDesktop machines.
:::


The easiest way to perform this is via the group policy. We will create either new policy or update existing and the change will propagate to clients. In this example we will create a new policy called **AllowRemoteRPC**.

1. We will assume all the XenDesktop Machines are within the same organization unit, so let’s right click on the XenDesktop OU and then select **Create a GPO in this domain, and Link it here**.
2. Name the policy somehow descriptive like AllowRemoteRPC-forXenDesktop. Leave the Source Starter GPO option set to \(none\).
3. Right click on the newly created policy and click **Edit**.
4. The Group Policy Management Editor will open. Navigate to Computer Configuration &gt; Preferences &gt; Windows Settings &gt; Registry.
5. Next, right click on the Registry &gt; New &gt; Registry Item.
6. In the Key Path navigate to **SYSTEM\CurrentControlSet\Control\Terminal Server** and set **Value data** to **1**, with **Base** set to **Decimal**.
7. Confirm everything and that’s it, now Syskit Monitor is able to get the data from XenDesktop machines as well.

What you need to do now is to go back to the Syskit Monitor and add extra machines you want to monitor.

