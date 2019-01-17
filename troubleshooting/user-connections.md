---
title: User Connections
author: Andrea Budisa
description: >-
  This article will help you to understand the user connections in SysKit
  Monitor.
date: 29/06/17
---

# user-connections

## When users connect through a Web interface on XenApp \(presentation server\), I get a strange client name, something like WI\_s9wV-5sHAM7mCoWhF, but I want to display a real client name.

This is related to the Citrix XenApp web interface configuration. To get a real client name, please follow these steps:

1. Add the ClientName tag in the default.ica file to return the client name or machine name: /Inetpub/wwwroot/Citrix/Metaframe\(or XenApp\)/conf/default.ica \[WFClient\] Version=2 **ClientName=**
2. Save the file and reconnect your client.

## I would like to resolve the public IP of the client to geo location.

Export the IP addresses and client names report to XLS format. Public IP names will be listed in the C column. Insert behind C a new empty column, and in D2, enter the following formula:

```text
=HYPERLINK("http://www.maxmind.com/app/locate_ip?ips="&C2; "Resolve IP") or   
=HYPERLINK("http://www.geoiptool.com/en/?IP="&C2; "Resolve IP")
```

This formula will create an automatic hyperlink to the Web page where you will be able to see the IP state and city. This method will allow you to determine the exact location of every user that is logging on to your server.

