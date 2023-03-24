var mysql = require("mysql");

var db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mysql",
});

function getAllData() {
    db.query("select * from help_topic", function (err, result) {
        if (err) {
            return console.log(err.message);
        }

        console.log(result);
    });
}

function searchData() {
    db.query(
        'SELECT * FROM help_topic WHERE help_topic_id = "1"',
        function (err, result) {
            if (err) {
                return console.log(err.message);
            }

            console.log(result);
        }
    );
}

function insertData() {
    var user = { name: "claire", dl: "112" };
    db.query("insert into plugin set ?", user, function (err, result) {
        if (err) {
            return console.log(err.message);
        }

        if (result.affectedRows === 1) {
            console.log("插入成功");
        }
    });
}

/**
 * 更新
 */
function updateData() {
    var user = { name: "claire", dl: "234" };
    db.query(
        "update plugin set name=?,dl=? where name=?",
        [user.name, user.dl, user.name],
        function (err, result) {
            if (err) {
                return console.log(err.message);
            }

            if (result.affectedRows === 1) {
                console.log("更新成功");
            }
        }
    );
}

// searchData();
// insertData();
updateData();
