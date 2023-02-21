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
   ```javascript
    <!-- 在执行将大数据推送到数组的循环之前和之后拍摄两个堆快照，然后，比较这两个快照以识别在循环期间创建的对象。 接着，我们可以分析差异以查看哪些对象使用了最多的内存，这可以帮助我们识别由大数据引起的内存泄漏。 -->
    let snapshot1 = performance.heapSnapshot();
    // Do some actions that might cause memory leaks
    for (let i = 0; i < 100000; i++) {
      myArray.push({
        largeData: new Array(1000000).fill("some data"),
        id: i
      });
    }

    let snapshot2 = performance.heapSnapshot();
    let diff = snapshot2.compare(snapshot1);
    diff.forEach(function(item) {
      if (item.size > 1000000) {
        console.log(item.name);
      }
    });

    <!-- 使用 JavaScript 分析器来开始和停止跟踪我们应用程序的性能。该报告将显示有关已调用函数的信息以及每个函数的内存使用情况。 -->
    let profiler = new Profiler();
    profiler.start();
    // do some actions that might cause memory leaks
    for (let i = 0; i < 100000; i++) {
      myArray.push({
        largeData: new Array(1000000).fill("some data"),
        id: i,
      });
    }
    profiler.end();
    let report = profiler.report();
    // analyze the report to identify areas where memory usage is high
    for (let func of report) {
      if (func.memory > 1000000) {
        console.log(func.name);
      }
    }
   ```