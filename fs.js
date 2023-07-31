/*
解锁时长1

***************************
QuantumultX:

[rewrite_local]
http:\/\/43.248.116.190:20251\/api\/user\/register\/account2 url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/fs.js

http:\/\/43.248.116.190:*\/api\/user\/register\/account2 url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/fs.js
[mitm]
hostname = 43.248.116.190:20251,43.248.116.190:*

***************************/
let obj = JSON.parse($response.body);
obj = 
{
  "status" : 1,
  "data" : {
    "userId" : "9a2ec0482d29454e8d8f6d7a480a0719",
    "phone" : "",
    "deviceId" : "193C1DBE-B8FD-497F-9C76-3CFE2287BCBF",
    "nickname" : "漫友23077303284",
    "lastDeviceId" : "193C1DBE-B8FD-497F-9C76-3CFE2287BCBF",
    "status" : 1,
    "account" : "23077303284",
    "email" : "cefv12@qq.com",
    "isFreeze" : 0,
    "sex" : 0,
    "lastAccessTime" : 1690796183291
  },
  "errorCode" : 0,
  "statisticCache" : false,
  "time" : "2023-07-31 17:36:23",
  "elapsed" : 2
}
};

$done({body: JSON.stringify(obj)});

