var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "remainders\":9999",
      "matchValue" : "remainders\":\\d+",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "modify-header",
      "matchField" : "Cookie",
      "field" : "",
      "value" : "xxx_api_auth=6131333537653261363463323331666265663763396239663835636662373930",
      "matchValue" : "",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "adrowss\":",
      "matchValue" : "adrows\":",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "adgroupss\":",
      "matchValue" : "adgroups\":",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : false,
  "isReadOnly" : false,
  "name" : "小小影视 解锁限制 A+",
  "locations" : [
    {
      "method" : "",
      "scheme" : "",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "*.xiaoxiaoapps*.com",
      "path" : ""
    }
  ],
  "description" : "登号。下载地址，http:\/\/xiao1.app\/"
}


// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
