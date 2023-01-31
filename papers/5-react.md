- [搭建开发环境](#搭建开发环境)
- [一些注意点](#一些注意点)
- [不可变性](#不可变性)
- [MVC模式](#mvc模式)
- [JSX](#jsx)
- [为什么要使用React？](#为什么要使用react)
- [虚拟DOM（Virtual Dom）](#虚拟domvirtual-dom)
- [diff算法](#diff算法)
- [react创建组件](#react创建组件)
- [生命周期（Component Lifecycle）](#生命周期component-lifecycle)
  - [组件生命周期 - 创建阶段(Mounting)](#组件生命周期---创建阶段mounting)
  - [组件生命周期 - 运行阶段（Updating）](#组件生命周期---运行阶段updating)
  - [组件生命周期 - 卸载阶段（Unmounting）](#组件生命周期---卸载阶段unmounting)
- [redux](#redux)
- [路由Router6.0](#路由router60)
- [Router获取当前页路径](#router获取当前页路径)
- [Router设置默认页路径(如 404 页)](#router设置默认页路径如-404-页)


### 搭建开发环境
```
    npx create-react-app react-claire
```

### 一些注意点
+ 在JavaScript class中，每次定义其子类的构造函数时，都需要调用```super```方法。因此，在所有含有构造函数的React组件中，构造函数必须以```super(props)```开头。
+ 为了提高可读性，把返回的React元素分成多行，且在最外层加了小括号，这样JavaScript解析的时候就不会在```return```的后面自动插入一个分号而破坏代码结构了。
+ 在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。
+ **key** 是 React 中一个特殊的保留属性（还有一个是 **ref**，拥有更高级的特性）

### 不可变性
+ 简化复杂的功能
+ 跟踪数据的改变
+ 确定react中何时重新渲染

### MVC模式
M是指模型，V是视图，C则是控制器，使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。

### JSX
+ React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

### 为什么要使用React？
+ 使用组件化开发方式，符合现代Web开发的趋势
+ 技术成熟，社区完善，配件齐全，适用于大型Web项目（生态系统健全）
+ 由Facebook专门的团队维护，技术支持可靠
+ 使用方式简单，性能高，支持服务端渲染

### 虚拟DOM（Virtual Dom）
React将DOM抽象为虚拟DOM，虚拟DOM其实就是用一个对象来描述DOM，通过对比前后两个对象的差异，最终只把变化的部分重新渲染，提高渲染的效率
（https://github.com/livoras/blog/issues/13）
构建步骤：（Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。）
1. 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
2. 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
3. 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了

### diff算法
当你使用React的时候，在某个时间点 render() 函数创建了一棵React元素树，
在下一个state或者props更新的时候，render() 函数将创建一棵新的React元素树，
React将对比这两棵树的不同之处，计算出如何高效的更新UI（只更新变化的地方）

+ 如果两棵树的根元素类型不同，React会销毁旧树，创建新树
+ 对于类型相同的React DOM 元素，React会对比两者的属性是否相同，只更新不同的属性
+ 当处理完这个DOM节点，React就会递归处理子节点。
+ 当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。

React中有两种假设：
1. 两个不同类型的元素会产生不同的树（根元素不同结构树一定不同）
2. 开发者可以用过key属性指定不同树种没有发生改变的子元素

### react创建组件
https://blog.csdn.net/TwoBE9876/article/details/121339272
+ 通过js创建（无状态组件）
+ 通过jsx创建（有状态组件）

### 生命周期（Component Lifecycle）
+ 创建阶段（Mounting）
    >constructor()

    >componentWillMount()

    >render()

    >componentDidMount()
+ 运行和交互阶段（Updating）
    >componentWillReceiveProps()

    >shouldComponentUpdate()

    >componentWillUpdate()

    >render()

    >componentDidUpdate()
+ 卸载阶段（Unmounting）
    >componentWillUnmount()

#### 组件生命周期 - 创建阶段(Mounting)
+ 特点：该阶段的函数只执行一次

**constructor()**
+ 作用：1 获取props 2 初始化state
+ 说明：通过 constructor() 的参数props获取
+ 设置state和props

**componentWillMount()**
+ 说明：组件被挂载到页面之前调用，其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染
+ 注意：无法获取页面中的DOM对象
+ 注意：可以调用 setState() 方法来改变状态值
+ 用途：发送ajax请求获取数据

**render()**
+ 作用：渲染组件到页面中，无法获取页面中的DOM对象
+ 注意：不要在render方法中调用 setState() 方法，否则会递归渲染

**componentDidMount()**
+ 组件已经挂载到页面中
+ 可以进行DOM操作，比如：获取到组件内部的DOM对象
+ 可以发送请求获取数据
+ 可以通过 setState() 修改状态的值
注意：在这里修改状态会重新渲染

#### 组件生命周期 - 运行阶段（Updating）
+ 特点：该阶段的函数执行多次
+ 说明：每当组件的props或者state改变的时候，都会触发运行阶段的函数

**componentWillReceiveProps()**
+ 说明：组件接受到新的props前触发这个方法
+ 参数：当前组件props值
+ 可以通过 this.props 获取到上一次的值
+ 使用：若你需要响应属性的改变，可以通过对比this.props和nextProps并在该方法中使用this.setState()处理状态改变
+ 注意：修改state不会触发该方法

**shouldComponentUpdate()**
+ 作用：根据这个方法的返回值决定是否重新渲染组件，返回true重新渲染，否则不渲染
+ 优势：通过某个条件渲染组件，降低组件渲染频率，提升组件性能
+ 说明：如果返回值为false，那么，后续render()方法不会被调用
+ 注意：这个方法必须返回布尔值！！！
+ 场景：根据随机数决定是否渲染组件

**componentWillUpdate()**
+ 作用：组件将要更新
+ 参数：最新的属性和状态对象
+ 注意：不能修改状态 否则会循环渲染
```
componentWillUpdate(nextProps, nextState) {
  console.warn('componentWillUpdate', nextProps, nextState)
}
```

**render() 渲染**
+ 作用：重新渲染组件，与Mounting阶段的render是同一个函数
+ 注意：这个函数能够执行多次，只要组件的属性或状态改变了，这个方法就会重新执行

**componentDidUpdate()**
+ 作用：组件已经被更新
+ 参数：旧的属性和状态对象

#### 组件生命周期 - 卸载阶段（Unmounting）
+ 组件销毁阶段：组件卸载期间，函数比较单一，只有一个函数，这个函数也有一个显著的特点：组件一辈子只能执行依次！
+ 使用说明：只要组件不再被渲染到页面中，那么这个方法就会被调用（ 渲染到页面中 -> 不再渲染到页面中 ）

作用：在卸载组件的时候，执行清理工作，比如
1. 清除定时器
2. 清除componentDidMount创建的DOM对象

### redux
状态管理工具，用来管理应用中的数据

+ Action：行为的抽象，视图中的每个用户交互都是一个action

    比如：点击按钮
+ Reducer：行为响应的抽象，也就是：根据action行为，执行相应的逻辑操作，更新state

    比如：点击按钮后，添加任务，那么，添加任务这个逻辑放到 Reducer 中
    创建State
+ Store：
    1. Redux应用只能有一个store
    2. getState()：获取state
    3. dispatch(action)：更新state

### 路由Router6.0
（https://kalacloud.com/blog/react-router-tutorial/）
1. 安装
```npm install react-router-dom```

2. react-router相关标签(常用标签)
BrowserRouter
Link
Routes
Route
Outlet

3. Navigate
替代Redirect,通过to指定要默认打开的页面
```html
    <Route path={'/'} element={<Navigate to={'/about'} />} />
```

### Router获取当前页路径
使用```useLocation```这个hook
``` javascript
    import { useLocation } from 'react-router-dom'

    const About = () => {
    // 使用 hook
    const location = useLocation();
    const { from, pathname } = location

    return <div>你当前在 {pathname}，你是从 {from} 跳转过来的</div>
    }
```

### Router设置默认页路径(如 404 页)
在最后加入 path 为 * 的一个路径，意为匹配所有路径
```javascript
    function App() {

        return <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    }
```
