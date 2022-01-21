var obj = JSON.parse($response.body); 
// 可以合并一句带过




obj = {"code":200,"type":"","title":"","part":"","player":"","url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/*(KHTML, like Gecko) *"},"spare":[{"code":200,"success":"","time":"","type":"","mark":"","title":" ","part":"","url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/* (KHTML, like Gecko) *"}},{"code":200,"url":"","type":"","mark":"","title":"","time":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/*(KHTML, like Gecko) *"}},{"code":200,"success":"","time":"","type":"","title":"","part":,"url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/*(KHTML, like Gecko) *"}}]}

$done({body:JSON.stringify(obj)});
// 也一句带过
