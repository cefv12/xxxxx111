/*
酷我音乐 解锁会员试听及部分功能
***************************
QuantumultX:
[rewrite_local]
^https:\/\/tqrbq\.mpckv\.com url script-response-body https://raw.githubusercontent.com/cefv12/xxxxx111/999/yums.js
[mitm]
hostname = tqrbq.mpckv.com
**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/app/user/info';
const time = '/api/app/card/list';

if (url.indexOf(vip) != -1) {
	obj.data["vipType"] = "12";
	obj.data["vipExpire"] = "2301-01-01T00:00:00Z";
	obj.data["vipExpireTime"] = "4165516800000";
	obj.data["leftWatchTimes"] = "99";

	body = JSON.stringify(obj);
}

$done({body});
