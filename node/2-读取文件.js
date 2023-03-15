var fs = require("fs");

fs.readFile("./files/input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    } else {
        console.log(data.toString());
    }
});
