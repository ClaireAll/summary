/**
 * 读写文件
 */
function readWriteFile() {
    var fs = require("fs");
    // 异步打开文件
    fs.open("./files/input.txt", "r+", function (err, fd) {
        if (err) {
            return console.error(err);
        }

        console.log("打开成功");
    });
}

// readWriteFile();

/**
 * 获取文件信息
 */
function getFileInfo() {
    var fs = require("fs");
    fs.stat("./files/input.txt", function (err, stats) {
        console.log(stats);
        var text =
            "是否是文件： " +
            stats.isFile() +
            "\n是否是目录： " +
            stats.isDirectory() +
            "\n是否是块设备： " +
            stats.isBlockDevice() +
            "\n是否是字符设备： " +
            stats.isCharacterDevice() +
            "\n是否是软链接： " +
            stats.isSymbolicLink() +
            "\n是否是FIFO： " +
            stats.isFIFO() +
            "\n是否是Socket： " +
            stats.isSocket();
        console.log(text);
    });
}

getFileInfo();
