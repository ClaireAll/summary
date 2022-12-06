

### C/S架构和B/S架构

**C/S架构  Client/Server  客户端 服务器**

·优点：
    ·性能较高：可以将一部分的计算工作放在客户端上，这样服务器只需要处理数据即可。
    ·界面炫酷：客户端可以使用更多系统提供的效果，做出更为炫目的效果。

·缺点：
    ·更新软件：如果有新的功能，就要推出新的版本。
    ·不同设备访问：如果使用其他的电脑，没有安装客户端的话就无法访问。


### B/S架构 Browser/Server  浏览器  服务器  web兴起之后的一种架构
现在所有的网站都是B/S架构，比如百度、知乎，只需要通过浏览器即可。

优点：
    ·更新简洁：如果内容更新了，对开发人员而言需要更改服务器的内容，对用户而言只需要刷新浏览器即可。
    ·多设备同步：所有数据都在网上，只要能够使用浏览器即可登录使用。
缺点：
    ·性能较低：相比于客户端应用性能较低，但是随着硬件性能的提升，这个差距在缩小。
    ·浏览器兼容：兼容性需要考虑。

### 服务器分类

Development开发环境  Test测试环境  Production生产环境

类型分：文件服务器  数据库服务器  邮件服务器  Web服务器
软件分：Apache服务器  Nginx服务器  IIS服务器  Tomcat服务器  Node服务器
操作系统分：Linux服务器  Windows服务器

服务器软件
·文件服务器：Server-U、FileZilla、VSFTP等
·数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等
·邮件服务器：Postfix、Sendmail
·HTTP服务器：Apache（开源、免费）、Nginx、IIS（微软的.net服务器）、Tomcat服务器（java编程的服务器）、NodeJS等


### PHP支持的数据类型
字符串
整数
浮点数
布尔
数组
对象
null

echo 输出字符串
print_r() 输出复杂的数据类型（如数组、对象）
var_dump  输出详细信息

php中的header()函数
作用：
①用来向客户端（浏览器）发送报头。

直接写在第一行：
```php
header('content-type:text/html;charset=utf-8');
```

②设置页面跳转
```php
header('location:www.baidu.com')
```

### 常见的请求头
+ User-Agent:浏览器的具体类型  如Mozilla/5.0
+ Accept:浏览器支持哪些数据类型  如Accept: text/html

