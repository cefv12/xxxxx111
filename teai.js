/*
Teai
解锁会员，解锁查看微信

***************************
QuantumultX:

[rewrite_local]
https:\/\/api.zhiyue2021.com\/v1\/projects\/letsvpn-e3f4b\/installations\/ url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/teai.js

[mitm]
hostname = api.zhiyue2021.com

***************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/apa/user/myUserInfo';

if (url.indexOf(vip) != -1) {
	obj["is_vip"] = 1;
	obj["authentication"] = 1;
	obj["vip_end_time"] = 1937129600;
	obj["coin"] = 991;
	obj["viewMeCount"] = 91;
	obj["haveReadFireCount"] = 81;
	body = JSON.stringify(obj);
}

$done({body});
