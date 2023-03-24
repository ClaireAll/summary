var fs = require("fs");

/**
 * 小文件拷贝
 */
function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

/**
 * 大文件拷贝
 */
function bigCopy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
