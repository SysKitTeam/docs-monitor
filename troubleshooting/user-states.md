---
title: User States
author: Andrea Budisa
description: This article explains how the SysKit Monitor reports on user states.
date: 29/06/17
---

# user-states

## How long does a person have to be inactive on a computer before the idle time starts to accumulate?

The system is set by default to report the user’s state as idle after **five minutes** of inactivity. It is possible to change that default period by navigating to the **File** tab, selecting **Configuration** from the left navigation bar, and then clicking on the **Options** button.  
On the [General](user-states.md#internal/get-to-know-syskit-monitor/backstage-screen/configuration/options) tab, you can change the period after which user’s state will be reported as **Idle**.

## Is SysKit Monitor logging a session even if the user is inactive or disconnected?

### Problem:

A particular user has not used the SysKit Monitor due to being on a vacation for two weeks, but the user is listed as working around the clock. Do you think that SysKit Monitor keeps logging a session even if the user is inactive or disconnected?

### Solution:

Yes, that is the disconnected state. If the user is disconnected from the server, the session is still alive, so SysKit Monitor will log the user. If the user cleaned the log off, there is no session, so SysKit Monitor will not see the user anymore. A possible scenario is to configure cleaning of the log off after x hours of inactivity and release the resources on the server for other users.

