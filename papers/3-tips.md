### filter(滤镜)

+ none: 默认值。
+ blur(): 给图像设置高斯模糊。  blur(5px)
+ brightness(): 给图片应用一种线性乘法，使其看起来更亮或更暗。
+ contrast(): 调整图像的对比度。
+ drop-shadow(): 给图像设置一个阴影效果
+ grayscale(): 将图像转换为灰度图像。
+ hue-rotate(): 给图像应用色相旋转。
+ invert(): 反转输入图像。
+ opacity(): 转化图像的透明程度。
+ saturate(): 转换图像饱和度。
+ sepia(): 将图像转换为深褐色。
+ url(): URL函数接受一个XML文件，该文件设置了一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。


### git撤回已经提交的push
+ ``` git reset --hard commitId ```
+ ``` git push origin 分支 --force ```

### 16进制转rgb颜色
``` javascript
        hexToRgb: function (val) {   //HEX十六进制颜色值转换为RGB(A)颜色值
                // 16进制颜色值的正则
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 把颜色值变成小写
            var color = val.toLowerCase();
            var result = '';
            if (reg.test(color)) {
                // 如果只有三位的值，需变成六位，如：#fff => #ffffff
                if (color.length === 4) {
                    var colorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
                    }
                    color = colorNew;
                }
                // 处理六位的颜色值，转为RGB
                var colorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
                }
                result = "rgb(" + colorChange.join(",") + ")";
                return { rgb: result, r: colorChange[0], g: colorChange[1], b: colorChange[2] };
            } else {
                result = '无效';
                return { rgb: result };
            }
        }
```

### js内存泄漏
1. 循环引用
  ```javascript
    let obj1 = {};
    let obj2 = {};
    obj1.next = obj2;
    obj2.prev = obj1;

    obj1 = null;
    obj2 = null;

    <!-- 将 obj1 和 obj2 设置为 null 以打破循环引用，但由于垃圾收集器无法打破循环引用，因此对象将在不再需要后很长时间内保留在内存中，从而导致内存泄漏。为了避免这种类型的内存泄漏，我们可以使用一种称为“手动内存管理”的技术，通过使用 JavaScript 的 delete 关键字来删除创建循环引用的属性。 -->

    delete obj1.next;
    delete obj2.prev;

  ```
2. 事件监听器
  ```javascript
    let button = document.getElementById("my-button");
    button.addEventListener("click", function() {
        console.log("Button was clicked!");
    });

    <!-- 方法一： -->
    button.removeEventListener("click", function() {
        console.log("Button was clicked!");
    });
    <!-- 方法二： -->
    button.removeAllListeners();
  ```
3. 全局变量
   使用let const，在一定区域内使用

### 手动内存管理的最佳实践
1. 使用弱引用
   weakMap、weakSet
   ```let weakMap = new WeakMap(); weakMap.set(object1, "some data");```
2. 使用垃圾收集器 API
   ```gc()```
3. 使用堆快照和分析器