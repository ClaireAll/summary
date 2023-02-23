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
