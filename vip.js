var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
  "retcode" : 0,
  "errmsg" : "",
  "data" : {
    "signed" : 0,
    "groups" : [
      {
        "minup" : "0",
        "gicon" : "V0",
        "gname" : "游客",
        "play_daynum" : 15,
        "down_daynum" : 0,
        "comment_daynum" : 0
      },
      {
        "minup" : "0",
        "gicon" : "V1",
        "gname" : "VIP1",
        "play_daynum" : 25,
        "down_daynum" : 4,
        "comment_daynum" : 5
      },
      {
        "minup" : "2",
        "gicon" : "V2",
        "gname" : "VIP2",
        "play_daynum" : 50,
        "down_daynum" : 10,
        "comment_daynum" : 10
      },
      {
        "minup" : "5",
        "gicon" : "V3",
        "gname" : "VIP3",
        "play_daynum" : 100,
        "down_daynum" : 20,
        "comment_daynum" : 15
      },
      {
        "minup" : "10",
        "gicon" : "V4",
        "gname" : "VIP4",
        "play_daynum" : 200,
        "down_daynum" : 40,
        "comment_daynum" : 20
      },
      {
        "minup" : "20",
        "gicon" : "V5",
        "gname" : "尊贵VIP",
        "play_daynum" : 999,
        "down_daynum" : 100,
        "comment_daynum" : 30
      }
    ],
    "uinfo" : {
      "curr_group" : {
        "minup" : "20",
        "gicon" : "V5",
        "gid" : "5",
        "gname" : "尊贵VIP"
      },
      "next_group" : {
        "minup" : "65535",
        "gicon" : "",
        "gid" : "6",
        "gname" : "禁止发言"
      },
      "next_upgrade_need" : 65535,
      "down_daily_remainders" : 100,
      "play_daily_remainders" : 984,
      "goldcoin" : "1"
    },
    "reqplay_addnum" : "0",
    "reqdown_addnum" : "0",
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
  }
}

    // 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
