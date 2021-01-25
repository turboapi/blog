---
title: Using Bash to Check Your Docker App is Running
date: "2021-01-25"
description: ""
tags: ["docker", "bash", "ubuntu", "uptime", "resiliency", "scripting"]
---

Checking if you application is up is always a worry. I recently had a problem where I realized I only had the TurboAPI status page (https://status.turboapi.dev) to monitor the uptime of the app.

So what could I do? Unfortunately, I can't use TurboAPI to monitor TurboAPI. But, like [levelsio](https://twitter.com/levelsio) I love a quick and dirty script. So, I decided to write one that would do the following:
1. Check Docker was running
2. Check at least 1 instance of the app was running
3. Notify me via slack if there are any issues

The script below assumes on you running Docker on a single server. To use it you need to simply generate some Slack webhook URL's and replace the "hooks.slack.com" link with them.

Hope you enjoy!

```bash
#!/bin/bash
result=$( docker ps -q -f name=turboapi_app )
echo "Checking container's exist"

systemctl show --property ActiveState docker | grep 'ActiveState=active' &> /dev/null
if [ $? != 0 ]; then
   message="🐳 Docker is Not Running!"
   echo $message
   curl -X POST --data-urlencode "payload={\"text\":\"${message}\"}" https://hooks.slack.com/services/XXX
fi

if [[ -n "$result" ]]; then
  echo "Container exists"
else
  message="🔴 TurboAPI Container does not exist"
  curl -X POST --data-urlencode "payload={\"text\":\"${message}\"}" https://hooks.slack.com/services/XXXX
fi
```
