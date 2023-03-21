var server = require("./6-路由-server");
var router = require("./6-路由-route");

server.start(router.route);
