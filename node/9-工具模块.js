/**
 * OS模块
 */
function os() {
    var os = require("os");
    console.log("操作系统的默认临时文件夹：" + os.tmpdir());
    console.log("CPU的字节序：" + os.endianness(0));
    console.log("操作系统的主机名：" + os.hostname());
    console.log("操作系统名：" + os.type());
    console.log("操作系统 CPU 架构：" + os.arch());
    console.log("操作系统的发行版本：" + os.release());
    console.log("操作系统运行的时间：" + os.uptime());
    console.log("一个包含 1、5、15 分钟平均负载的数组：" + os.loadavg());
    console.log("系统内存总量，单位为字节：" + os.totalmem());
    console.log("操作系统空闲内存量，单位是字节：" + os.freemem());
    console.log("所安装的每个 CPU/内核的信息：" + os.cpus());
    console.log("网络接口列表：" + os.networkInterfaces());
}

// os();

