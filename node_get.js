// GET
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    // 获取GET参数
    var paramstr = url.parse(req.url).query;
    // 将参数转化为对象
    var paramobj = querystring.parse(paramstr);
    console.log(paramobj);
}).listen(3000);
console.log('server start port 3000');