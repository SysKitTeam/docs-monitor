---
description: This article explains how to adjust Syskit Monitor for the Citrix Published Applications monitoring.
---

# Monitor Citrix Published Applications

This feature provides **Citrix XenApp 5**, **XenApp 6**, **XenApp 6.5**, **XenApp 7** and **XenApp 7.5** Published Applications monitoring. In order for the Published Applications to appear in the Syskit Monitor reports, it is necessary to enable this feature.

1. Navigate to the **File**, select **Configuration** from the left navigation bar and click on the **Options** button.
2. Select the [General ](../../get-to-know-syskit-monitor/backstage-screen/configuration/options.md#general)tab, navigate to **Citrix Options** and the following options will be available:
   * **Resolve Published Applications Name** – enable this option to use Published Application display name instead of a FullName.
   * **Reset Gather Mode** – re-detect Published Application data gathering mode.
3. Check in the **Gather Published Applications** option. Click **Save** to finish.

## Published Applications gathering limitations

1. If you decide to gather Published Applications and configured Syskit Monitor to do so, you won’t be able to view Application Performance reports.
2. It is not possible to detect different instances of the same Published Application for one specific user on the specific computer.

See [Configure Syskit Monitor for Citrix XenApp 5 Published Application monitoring ](monitor-citrix-xenapp5-published-applications.md)article to learn more.  
See [Configure Syskit Monitor for Citrix XenApp 6.x Published Application monitoring](monitor-citrix-xenapp6-published-applications.md) article to learn more.  
See [Configure Syskit Monitor for Citrix XenApp 7.x Published Application monitoring](monitor-citrix-xenapp7-published-applications.md) article to learn more.

