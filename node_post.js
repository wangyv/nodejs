// post 
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var dns = require('dns');

var Index = require('./index1.js');//导入控制器

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    if('/favicon.ico' == pathname){
        return;
    }
    switch(pathname){
        case '/':
            Index.resIndex(req,res);
            break;
        case '/parse':
            resAdd(req,res);
            break;
        default:
            resError(res);
            break;
    }

}).listen(3000);
function resError(res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end("don't find the page");
}
// function resIndex(req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
//     var filename = __dirname + '/' + url.parse('form.html').pathname;
//     var indexPage = fs.readFileSync(filename,'utf-8');
//     res.end(indexPage);
// }

function resAdd(req,res){
    var postData = "";
    req.setEncoding('utf8');
    req.addListener('data',function(postDataChunk){
        postData += postDataChunk;
    });
    req.addListener('end',function(){
        var param = querystring.parse(postData);
        // console.log(param.search_dns);
        dns.resolve4(param.search_dns,function(err,address){
            if(err){
                conosle.log(err);
            }else{
                res.writeHead(200,{'Content-type':'text/plain'});
                // res.end(address[0]);
                res.end(querystring.stringify(address));
            }
        })
    });
}
console.log('server start port 3000');