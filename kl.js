/*
快连解锁时长

***************************
QuantumultX:

[rewrite_local]
https:\/\/firebaseinstallations.googleapis.com\/v1\/projects\/letsvpn-e3f4b\/installations\/ url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/kl.js

[mitm]
hostname = vip1.kuwo.cn

***************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const time = '/v1/projects/letsvpn-e3f4b/installations';

if (url.indexOf(time) != -1) {
	obj["expiresIn"] = 99999999s;
	body = JSON.stringify(obj);
}

$done({body});
