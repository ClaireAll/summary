/**
 * 获取get请求内容
 */
function getGetInfo() {
    var http = require("http");
    var url = require("url");
    var util = require("util");

    http.createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
        res.end(util.inspect(url.parse(req.url, true)));
    }).listen(3000);
}

// getGetInfo();

/**
 * 获取post请求内容
 */
function getPostInfo() {
    var http = require("http");
    var querystring = require("querystring");
    var util = require("util");

    var postHTML =
        '<html><head><meta charset="utf-8"><title>迹忆客 NodeJs 实例</title></head>' +
        "<body>" +
        '<form method="post">' +
        'webname:  <input name="name"><br>' +
        'web url:  <input name="url"><br>' +
        '<input type="submit">' +
        "</form>" +
        "</body></html>";

    http.createServer(function (req, res) {
        var post = "";

        req.on("data", function (chunk) {
            post += chunk;
        });

        req.on("end", function () {
            // 解析参数
            post = querystring.parse(post);
            // 设置响应头部信息及编码
            res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });

            if (post.name && post.url) {
                res.write("webname: " + post.name);
                res.write("<br>");
                res.write("web url: " + post.url);
            } else {
                // 输出表单
                res.write(postHTML);
            }

            res.end();
        });
    }).listen(3000);
}

getPostInfo();
