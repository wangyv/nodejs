var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    //index.html路径
    // res.writeHead(200,{'Content-type':'text/html'});
    // var readPath = __dirname +'/' + url.parse('index.html').pathname;//url.parse('indel.html')返回一个对象
    // var indexPage = fs.readFileSync(readPath,'utf-8');
    // res.end(indexPage);
    
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    
    var pathname = url.parse(req.url).pathname;
    if('/favicon.ico' == pathname){
        return;
    }
    // console.log(pathname);
    switch(pathname){
        case "/":
            resIndex(req,res);
            break;
        case "/img":
            resImage(req,res);
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

function resIndex(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    var readPath = __dirname +'/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath,'utf-8');
    res.end(indexPage);
}

function resImage(req,res){
    res.writeHead(200,{'Content-type':'image/jpeg'});
    var readPath = __dirname +'/' + url.parse('11.jpg').pathname;
    var image = fs.readFileSync(readPath);
    res.end(image);
}
console.log('server start port 3000');
