### Node.js 应用场景

1. 初衷，server端，不想成了前端开发的基础设施
2. 命令行辅助工具，甚至可以是运维
3. 移动端：cordova，pc端：nw.js和electron
4. 组件化，构建，代理
5. 架构，前后端分离、api proxy
6. 性能优化、反爬虫与爬虫

### node核心：异步流程控制
Node.js是为异步而生的，它自己把复杂的事儿做了（高并发，低延时），交给用户的只是有点难用的Callback写法。
NodeJS使用CMD模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。

### node工具框架
npm、gulp 这样的前端工具类
使用 node 做前后端分离
express、koa 这类框架
jade、ejs 等模板引擎
nginx

### node应当掌握的
+ 基本的Node.js几个特性，比如事件驱动、非阻塞I/O、Stream等
+ 异步流程控制相关，Promise是必问的
+ 掌握1种以上Web框架，比如Express、Koa、Thinkjs、Restfy、Hapi等，会问遇到过哪些问题、以及前端优化等常识
+ 数据库相关，尤其是SQL、缓存、Mongodb等
+ 对于常见Node.js模块、工具的使用，观察一个人是否爱学习、折腾
+ 是否熟悉linux，是否独立部署过服务器，有+分
+ js语法和es6、es7，延伸CoffeeScript、TypeScript等，看看你是否关注新技术，有+分
+ 对前端是否了解，有+分
+ 是否参与过或写过开源项目，技术博客、有+分

### 创建服务器
```javascript
    var http = require("http");

    // 创建服务器
    http.createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/plain" });

        // 发送响应数据 "Hello World"
        response.end('Hello World\n');
    }).listen(8888);
```

### REPL：交互式解释器
NodeJs REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
Node 自带了交互式解释器，可以执行以下任务：

+ 读取 - 读取用户输入，解析输入的 Javascript 数据结构并存储在内存中。
+ 执行 - 执行输入的数据结构
+ 打印 - 输出结果
+ 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

使用下划线(_)获取上一个表达式的运算结果
```javascript
    var x = 10;
    var y = 20;
    x + y
    var sum = _
```

### REPL命令
+ ctrl + c - 退出当前终端。
+ ctrl + c 按下两次 - 退出 Node REPL。
+ ctrl + d - 退出 Node REPL.
+ 向上/向下 键 - 查看输入的历史命令
+ tab 键 - 列出当前命令
+ .help - 列出使用命令
+ .break - 退出多行表达式
+ .clear - 退出多行表达式
+ .save filename - 保存当前的 Node REPL 会话到指定文件
+ .load filename - 载入当前 Node REPL 会话的文件内容。

### nodejs包管理器：npm
npm： 跟随nodeJs一起安装的包管理工具

+ 查看所有全局安装的模块： ``` npm list -g ```

### 事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

NodeJs 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

EventEmitter 的核心就是事件触发与事件监听器功能的封装。
```javascript
    // 引入events模块
    var events = require('events');
    // 创建eventEmitter对象
    var eventEmitter = new events.EventEmitter();

    // 绑定事件处理程序
    eventEmitter.on('eventName', eventHandler);

    // 触发事件
    eventEmitter.emit();
```
|方法|描述|
|:-:|:-|
|addListener(event, listener)|为指定事件添加一个监听器到监听器数组的尾部。|
|on(event, listener)	|为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
|once(event, listener)	|为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
|removeListener(event, listener) |移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。
|removeAllListeners([event])	|移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
|setMaxListeners(n)	|默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于改变监听器的默认限制的数量。
|listeners(event)	|返回指定事件的监听器数组。
|emit(event, [arg1], [arg2], [...])	|按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

### 学习node
+ 了解JavaScript 尽量熟悉 JavaScript 的语法和特性，包括ES6。
+ 学习Node.js的基础知识 学习 Node.js 的 API，掌握模块 require 方法；了解事件驱动和非阻塞 I/O 模型概念等基础知识。
+ 熟悉常用模块 学会使用常见的核心模块、第三方模块和自制模块等。
+ 学习框架的使用 学习 Express、Koa、Meteor 等服务器端框架的使用。
+ 数据库操作 掌握 Mongoose、Sequelize 等数据库 ORM 工具的使用；了解 SQL 和 NoSQL 数据库。
+ 单元测试 掌握 Mocha、Chai 等单元测试工具。
+ 视频网站开发实战 练习视频网站开发中 Node.js 所需的各种知识点。
+ 发布部署 学习 Linux 系统、Nginx 服务器和 PM2 等相关知识；了解 Node 应用的发布和部署方法。
+ 社区和学习资源 参与 Node.js 社区，看别人的源码和文档；找一些好的博客和书籍，不断地学习和提高自己。

### node buffer
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
BUffer库为NodeJs带来了一种存储原始数据的方法，可以让Nodejs处理二进制数据，每当需要在NodeJs中处理I/O操作中移动的数据时，就有可能使用Buffer类。
```javascript
    const buf = Buffer.from('runoob', 'ascii');
    console.log(buf.toString('hex'));

    console.log(buf.toString('base64'));
```

nodejs目前支持的字符编码包括：
+ ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
+ utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
+ utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
+ ucs2 - utf16le 的别名。
+ base64 - Base64 编码。
+ latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
+ binary - latin1 的别名。
+ hex - 将每个字节编码为两个十六进制字符。

#### 创建Buffer类
```javascript
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```


#### 写入缓冲区
```buf.write(string[, offset[, length]][, encoding])```
+ string - 写入缓冲区的字符串。
+ offset - 缓冲区开始写入的索引值，默认为 0 。
+ length - 写入的字节数，默认为 buffer.length
+ encoding - 使用的编码。默认为 'utf8' 。

#### 从缓冲区读取数据
```buf.toString([encoding[, start[, end]]])```
+ encoding - 使用的编码。默认为 'utf8' 。
+ start - 指定开始读取的索引位置，默认为 0。
+ end - 结束位置，默认为缓冲区的末尾。


### NodeJs Stream(流)
Stream有四种类型
+ Readable
+ Writable
+ Duplex 可读可写
+ Transform 操作被写入数据，然后读出结果

所有的Stream对象都是EventEmitter的实例，常用的事件有：
+ data 当有数据可读时触发
+ end 没有更多的数据可读时触发
+ error 在接收和写入过程中发生错误时触发
+ finish 所有数据已被写入到底层系统时触发


+ 管道流： 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
+ 链式流： 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。


### Nodejs模块系统
作用：让nodejs的文件可以相互调用
nodejs中存在4类模块（原生模块和3种文件模块）

### Nodejs路由

### 全局对象
+ __filename: 当前正在执行的脚本的文件名，输出文件所在位置的绝对路径
+ __dirname: 当前执行脚本所在的目录。

#### console方法
|方法	|描述|
|:-|:-|
|console.log([data][, ...])	|向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
|console.info([data][, ...])	|该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。
|console.error([data][, ...])	|输出错误消息的。控制台在出现错误时会显示是红色的叉子。
|console.warn([data][, ...])	|输出警告消息。控制台出现有黄色的惊叹号。
|console.dir(obj[, options])	|用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
|console.time(label)	|输出时间，表示计时开始。
|console.timeEnd(label)	|结束时间，表示计时结束。
|console.trace(message[, ...])	|当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
|console.assert(value[, message][, ...])	|用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

#### progress
progress是一个全局变量，即global对象的属性。
|事件	|描述
|:-|:-|
|exit	|当进程准备退出时触发。
|beforeExit	|当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
|uncaughtException	|当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
|Signal 事件	|当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。


### 常用工具
util是一个Nodejs核心模块，提供常用函数的集合。
+ util.callbackify: 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。
+ util.inherits: 实现对象间原型继承的函数。
+ util.inspect: 将任意对象转换为字符串，通常用于调试和错误输出
+ util.isArray
+ util.isRegExp: 判断是否是正则
+ util.isDate


### Nodejs文件系统 fs
fs模块中的方法均有异步和同步，如读取文件：异步fs.readFile()，同步fs.readFileSync()
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
+ 打开文件 fs.open(path, flags[, mode], callback)
    + path - 文件的路径。
    + flags - 文件打开的行为。(r、r+、rs、rs+、w、wx、w+、wx+、a、ax、a+、ax)
    + mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
    + callback - 回调函数，带有两个参数如：callback(err, fd)。
+ 获取文件信息 fs.stat(path, callback)
+ 写入文件 fs.writeFile(file, data[, options], callback)
    + file - 文件名或文件描述符。
    + data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
    + options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
    + callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
+ 读取文件  fs.read(fd, buffer, offset, length, position, callback)
    + fd - 通过 fs.open() 方法返回的文件描述符。
    + buffer - 数据写入的缓冲区。
    + offset - 缓冲区写入的写入偏移量。
    + length - 要从文件中读取的字节数。
    + position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
    + callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
+ 关闭文件 fs.close(fd, callback)
+ 截取文件 fs.ftruncate(fd, len, callback)
+ 删除文件 fs.unlink(path, callback)
+ 创建目录 fs.mkdir(path[, options], callback)
+ 读取目录 fs.readdir(path, callback)
+ 删除目录 fs.rmdir(path, callback)


### 工具模块
|模块名	|描述
|:-|:-
|OS 模块	|提供基本的系统操作函数。
|Path 模块	|提供了处理和转换文件路径的工具。
|Net 模块	|用于底层的网络通信。提供了服务端和客户端的的操作。
|DNS 模块	|用于解析域名。
|Domain 模块	|简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。

### 零散知识
+ process是一个全局变量，可通过process.argv获得命令行参数。由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。
+ 官方文档API： https://nodejs.org/api/buffer.html

### express框架
思考:不使用Express 能否创建Web服务器?
答案;能，使用Node.js提供的原生http模块即可。


思考:既生瑜何生亮(有了http内置模块，为什么还有用Express) ?
答案: http 内置模块用起来很复杂，开发效率低;Express是基于内置的 http模块进一步封装出来的，能够快速创建web服务器


思考: http内置模块与Express是什么关系?
答案:类似于浏览器中 Web API和jQuery的关系。后者是基于前者进一步封装出来的。

对于前端程序员来说，最常见的两种服务器，分别是:
Web网站服务器:专门对外提供 Web 网页资源的服务器。

API接口服务器:专门对外提供API接口的服务器。
使用Express，我们可以方便、快速的创建Web 网站的服务器或API接口的服务器。