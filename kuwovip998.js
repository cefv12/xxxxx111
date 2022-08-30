/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/user\/vip*   url script-response-body https://raw.githubusercontent.com/cefv12/xxxxx111/999/kuwovip998.js

[mitm]
hostname = vip1.kuwo.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/cefv12/xxxxx111/999/kuwovip998.js

[MITM]
hostname = vip1.kuwo.cn

**************************/
var body = JSON.parse($response.body);
var obj = 
{
  "data": {
    "luxAutoPayUser": "0",
    "growthValue": "8076",
    "vipExpire": "7956867709000",
    "vipTag": "VIP5",
    "vipIcon": "https://image.kuwo.cn/fe/d53f8097-f937-4716-95e5-bb7e3d05efe95.png",
    "vipmExpire": "7956867709000",
    "biedAlbum": "1",
    "vipOverSeasExpire": "7956867709000",
    "svipIcon": "https://image.kuwo.cn/fe/d53f8097-f937-4716-95e5-bb7e3d05efe95.png",
    "iconJumpUrl": "http://vip1.kuwo.cn/vip/vue/anPay/pay/index.html?pageType=avip&MBOX_WEBCLOSE=1&FULLHASARROW=1",
    "userType": "1",
    "vipLuxuryExpire": "7956867709000",
    "time": "1661145250261",
    "svipExpire": "7956867709000",
    "luxuryIcon": "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png",
    "biedSong": "0",
    "isYearUser": "2",
    "svipAutoPayUser": "1",
    "vip3Expire": "7956867709000",
    "vipmAutoPayUser": "1",
    "goSvipPage": "1",
    "experienceExpire": "7956867709000",
    "vipmIcon": "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png",
    "isNewUser": "1"
  },
  "ctime": 1661846535781,
  "meta": {
    "desc": "成功",
    "code": 200
  }
};

$done({ body: JSON.stringify(obj) });
