var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
    "user" : {
      "duetime" : "9999-01-22 13:43:38",
      "sysgid" : "5",
      "uid" : "10357243",
      "uniqkey" : "LL1JOV",
      "gids" : null,
      "avatar_url" : "https://img.yuanmifang.com/sysavatar/noavatar.png",
      "newmsg" : "1",
      "gicon" : "V5",
      "gid" : "1",
      "avatar" : "",
      "dueday" : "",
      "mobi" : "86.18805067091",
      "username" : "~小小影迷-LL1JOV",
      "goldcoin" : 1,
      "regtime" : "2022-01-19 13:43:38",
      "nickname" : "",
      "email" : "~1305133807",
      "isvip" : 1,
      "gender" : "0"
    }
    // 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
