/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/cefv12/xxxxx111/999/kuwovip999.js

[mitm]
hostname = vip1.kuwo.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/cefv12/xxxxx111/999/kuwovip999.js

[MITM]
hostname = vip1.kuwo.cn

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "5";
	obj.data["vipLuxuryExpire"] = "4165516800000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "5";
	obj.data["vipmExpire"] = "4165516800000";
	obj.data["vipOverSeasExpire"] = "4165516800000";
	obj.data["vipExpire"] = "4165516800000";
	obj.data["vip3Expire"] = "4165516800000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 5;
	obj["isVIPLuxAutoPay"] = 5;
	body = JSON.stringify(obj);
}

$done({body});
