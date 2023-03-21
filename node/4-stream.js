/**
 * 从流中读取数据
 */
function readData() {
    var fs = require("fs");
    var data = "";

    // 创建可读流
    var readerStream = fs.createReadStream("./files/input.txt");

    // 设置编码为utf8
    readerStream.setEncoding("utf8");

    // 处理流事件->data, end, and error
    readerStream.on("data", function (chunk) {
        data += chunk;
    });

    readerStream.on("end", function () {
        console.log(data);
    });

    readerStream.on("error", function (err) {
        console.log(err.stack);
    });
}

// readData();

/**
 * 写入流
 */
function writeStream() {
    var fs = require("fs");
    var data = "claire写的新数据";

    var writeStream = fs.createWriteStream("./files/output.txt");

    // 使用utf8编码写入数据
    writeStream.write(data, "utf8");

    // 标记文件末尾
    writeStream.end();

    // 处理流事件->finish 、 error
    writeStream.on("finish", function () {
        console.log("写入完成");
    });

    writeStream.on("error", function (err) {
        console.log(err.stack);
    });
}

// writeStream();

/**
 * 管道流操作实例
 */
function moveStream() {
    var fs = require("fs");

    // 创建一个可读流
    var readerStream = fs.createReadStream("./files/input.txt");
    // 创建一个可写流
    var writeStream = fs.createWriteStream("./files/output.txt");

    // 管道读写操作，读取input.txt并写入到output.txt中
    readerStream.pipe(writeStream);

    console.log("程序执行完毕");
}

// moveStream();

/**
 * 链式流：压缩文件
 */
function compressFile() {
    var fs = require("fs");
    var zlib = require("zlib");

    // 压缩input.txt文件为input.txt.gz
    fs.createReadStream("./files/input.txt")
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream("./files/input.txt.gz"));

    console.log("文件压缩完成");
}

// compressFile();

/**
 * 链式流：解压文件
 */
function decompressFile() {
    var fs = require("fs");
    var zlib = require("zlib");

    // 解压input.txt.gz文件为input1.txt
    fs.createReadStream("./files/input.txt.gz")
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream("./files/input1.txt"));

    console.log("文件解压完成");
}

decompressFile();
