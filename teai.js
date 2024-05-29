/*
苹果商店搜:Teai
或点链接下载:https://apps.apple.com/cn/app/teai/id6464170247
功能:解锁会员，查看微信号
免责声明
本公众号所发布的一切破解补丁注册机和注册信息及软件的解密分析文章仅限用于学习和研究目的；不得将上述内容用于商业或者非法用途，否则，一切后果请用户自负。信息来自网络，版权争议与本站无关。您必须在下载后的24个小时之内，从您的电脑和手机中彻底删除上述内容。如果您喜欢该程序，请支持正版软件，购买使用，得到更好的正版服务。如有侵权请邮件与我们联系处理。
不保证资源兼容所有手机，发布的资源小编亲测正常使用，
如果您不能使用，请理性对待！

                                By:不轻然诺
***************************
QuantumultX:

[rewrite_local]
https:\/\/api.zhiyue2021.com\/apa\/user\/myUserInfo url script-response-body  https://raw.githubusercontent.com/cefv12/xxxxx111/999/teai.js


[mitm]
hostname = api.zhiyue2021.com

***************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/apa/user/myUserInfo';

if (url.indexOf(vip) != -1) {
	obj.data.userInfo["is_vip"] = 1;
	obj.data.userInfo["authentication"] = 1;
	obj.data.userInfo["vip_end_time"] = 1937129600;
	obj.data.userInfo["coin"] = 991;
	obj.data.userInfo["viewMeCount"] = 91;
	obj.data.userInfo["haveReadFireCount"] = 81;
	body = JSON.stringify(obj);
}

$done({body});
