 ### 响应式图片
 使用两个新的属性——srcset 和 sizes——来提供更多额外的资源图像和提示

 ### 重设所有属性
 CSS 的简写属性 all 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。

 ### 伪元素
 + ::after
 + ::before
 + ::first-letter
 + ::first-line
 + ::grammar-error
 + ::selection 只能定义元素被选中时的 color、background、cursor、outline 以及 text-shadow
 + ::spelling-error

### 背景
+ background-repeat: no-repeat/repeat-x/repeat-y/repeat
+ background-size: cover/contain
+ background-position: x y
+ background-attachment: scroll/fixed/local

### 书写模式
+ writing-mode: horizontal-tb/vertical-rl/vertical-lr

### 相对长度单位
|单位|相对于
|:-|:-:|
|em|在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width
|ex|字符“x”的高度
|ch|数字“0”的宽度
|rem|根元素的字体大小
|1h|元素的line-height
|vw|视窗宽度的1%
|vh|视窗高度的1%
|vmin|视窗较小尺寸的1%
|vmax|视图大尺寸的1%

### flex
**容器的属性**
+ flex-direction: row/row-reverse/column/column-reverse
+ flex-wrap: 如果一条轴线排不下，如何换行 nowrap | wrap | wrap-reverse
+ flex-flow: row nowrap
+ justify-content: 项目在主轴上的对齐方式 flex-start | flex-end | center | space-between | space-around
+ align-items: 在交叉轴上如何对齐 flex-start | flex-end | center | baseline | stretch
+ align-content: 多根轴线的对齐方式 flex-start | flex-end | center | space-between | space-around | stretch

**项目的属性**
+ order 数值越小，排列越靠前，默认为0
+ flex-grow 放大比例，默认为0，即如果存在剩余空间，也不放大
+ flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
+ flex-basis 在分配多余空间之前，项目占据的主轴空间（main size）
+ flex
+ align-self 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

### canvas
+ ``` javascript
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(0, 0, width, height)
  ```
+ beginPath()：在钢笔当前所在位置开始绘制一条路径。在新的画布中，钢笔起始位置为 (0, 0)。
+ moveTo()：将钢笔移动至另一个坐标点，不记录、不留痕迹，只将钢笔“跳”至新位置。
+ fill()：通过为当前所绘制路径的区域填充颜色来绘制一个新的填充形状。
+ stroke()：通过为当前绘制路径的区域描边，来绘制一个只有边框的形状。
+ arc(圆心x, 圆心y, 半径, 圆弧start角度, 圆弧end角度, 方向(false 顺时针 true 逆时针)) 0°设定为水平向右
+ fillText(text, x, y): 绘制有填充色的文本
+ strokeText(): 绘制文本外边框(描边)

### pointer-events
+ pointer-events: auto;  该元素的行为与没有指定指针-事件属性时一样
+ pointer-events: none;  除去该元素的指针事件
+ pointer-events: visiblePainted; /* SVG only */
+ pointer-events: visibleFill; /* SVG only */
+ pointer-events: visibleStroke; /* SVG only */
+ pointer-events: visible; /* SVG only */
+ pointer-events: painted; /* SVG only */
+ pointer-events: fill; /* SVG only */
+ pointer-events: stroke; /* SVG only */
+ pointer-events: all; /* SVG only */

### clip-path
创建了一个剪裁区域，设定了一个元素的哪一部分应该被显示。在该区域内的部分被显示出来，而在区域外的部分则被隐藏。
+ url():一个引用SVG <clipPath>元素的URL()。

一些形状
+ inset() 内嵌矩形
+ circle(80px at 50% 50%)
+ ellipse(closest-side farther-side at 30%) 椭圆
+ polygon(50% 0, 100% 50%, 50% 100%, 0 50%) 多边形
+ path()

### caret-color
定义**插入光标**的颜色

### animation
+ **animation-name**
+ **animation-duration**  持续时间
+ **animation-timing-function**  曲线
  + linear 匀速
  + ease（默认） 低速开始->加速->结束前减速
  + ease-in  低速开始
  + ease-out 低速结束
  + ease-in-out 以低速开始和结束
  + cubic-bezier(n,n,n,n) 在cubic-bezier函数中自己的值 贝塞尔曲线
+ **animation-delay** 5s  等待5s后动画开始
+ **animation-iteration-count** 1  播放次数
  + xx
  + infinite
+ **animation-direction**: alternate  设置动画为反向播放
  + normal  执行完一次后回到起点执行下一次
  + alternate  往返动画
  + reverse 反向执行
+ **animation-fill-mode**  动画结束最后一帧
  + none
  + forwards 元素结束状态保持动画最后一帧的样式
  + backwards 让元素等待状态的时候显示动画第一帧的样式
  + both 等待状态显示第一帧，结束状态保持最后一帧
+ **animation-play-state** 动画是否暂停
  + running  执行动画
  + paused  暂停动画


### transform
+ rotate 旋转
  + rotate(xx deg) 2d 顺时针旋转  为负数表述逆时针
  + rotateX() 3d 以中心为基点
  + rotateY() 3d
+ skew 扭曲
  + skew(x, y) 以中心为基点，第一个参数是水平方向的扭曲角度，第二个参数是垂直方向的扭曲角度
  + skewX(x)
  + skewY(y)
+ scale 缩放
  + scale(x, y)
  + scaleX(x, 1)
  + scaleY(1, y)
+ translate 移动
  + translate(x, y)
  + translateX(x)
  + translateY(y)
+ matrix 矩阵变形