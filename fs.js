/*
解锁时长

***************************
QuantumultX:

[rewrite_local]
http:\/\/43.248.116.190:20251\/api\/user\/register\/account2 url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/fs.js

[mitm]
hostname = 43.248.116.190

***************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const elapsed = '1';

if (url.indexOf(elapsed) != -1) {
	obj["date.elapsed"] = 99999999;
	body = JSON.stringify(obj);
}

$done({body});
