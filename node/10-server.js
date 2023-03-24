var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", function (req, res) {
    fs.readFile(__dirname + "/files/users.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
        res.end(data);
    });
});

app.get("/addUser", function (req, res) {
    var user = {
        user4: {
            name: "Tom",
            password: "789",
            profession: "cat",
            id: 4,
        },
    };
    fs.readFile(__dirname + "/files/users.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }

        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get("/:id", function (req, res) {
    fs.readFile(__dirname + "/files/users.json", "utf8", function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为http://%s:%s", host, port);
});

// var express = require("express");
// var app = express();
// var fs = require("fs");

// var id = 2;

// app.get("/deleteUser", function (req, res) {
//     // First read existing users.
//     fs.readFile(__dirname + "/files/" + "users.json", "utf8", function (err, data) {
//         data = JSON.parse(data);
//         delete data["user" + id];

//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// });

// var server = app.listen(8081, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s", host, port);
// });
