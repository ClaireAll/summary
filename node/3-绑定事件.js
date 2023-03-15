var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("connect success");

    eventEmitter.emit("data_received");
};

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", function () {
    console.log("数据连接成功");
});
eventEmitter.emit("connection");
console.log("end");
