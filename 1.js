var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
  "sdkrows_iOS" : [
      {
        "title" : "启动页",
        "pic" : "",
        "pos" : "",
        "sdkid" : "0"
      },
      {
        "title" : "播放前贴片",
        "pic" : "",
        "pos" : "",
        "sdkid" : "0"
      },
      {
        "title" : "详情页下方",
        "pic" : "",
        "pos" : "",
        "sdkid" : "0"
      }
}
// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
