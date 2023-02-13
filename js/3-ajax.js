// get请求

// 1.创建XMLHttpRequest对象
var xmlHttp = new XMLHttpRequest();

// 2.设置请求的参数。包括：请求的方法、请求的url
xmlHttp.open("get", "../php/1-for3.php");

// 3.发送请求
xmlHttp.send();

// 4.注册事件。onreadystatechange
xmlHttp.onreadystatechange = function () {
  // 为了保证数据完整返回，一般会判断两个值
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    // 服务端响应：如果能进入这个判断，说明数据请求成功了
    console.log("数据返回成功" + JSON.stringify(xmlHttp.responseText));
  }
};

// post请求
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("post", "../php/1-for3.php");
xmlHttp.setRequestHeader("Context-type", "application/x-www-form-urlencoded");
xmlHttp.send("name=fox&age=18");
xmlHttp.onreadystatechange = function () {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    alert(xmlHttp.responseText);
  }
};

// 封装ajax
function myAjax(url, success, fail) {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        // 兼容IE5、6
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.open('GET', url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var obj = JSON.parse(xmlHttp.responseText);
            success && success(xmlHttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    }
}
