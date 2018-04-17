// var dns = require('dns');
// dns.resolve4('www.qq.com',function(err, address){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//     }
// })


var urls = ['www.qq.com','www.baidu.com','www.sohu.com'];

var http = require('http');

function fetchurl(url){
    var start = new Date();
    http.get({'host':url},function (res) { 
        console.log("Get res from" + url);
        console.log("request took:" + (new Date() - start) + 'ms');
     })
}

for(var i=0;i<urls.length;i++){
    fetchurl(urls[i]);
}