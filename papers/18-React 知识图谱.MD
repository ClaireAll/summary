- [基础概念](#基础概念)
  - [特性](#特性)
  - [JSX](#jsx)
  - [State](#state)
  - [Props](#props)
  - [组件化](#组件化)
  - [生命周期](#生命周期)



https://juejin.cn/post/7244505316234985528
### 基础概念
#### 特性
+ 数据驱动->单项数据流
+ 函数式编程 = 组件化 + JSX
+ 虚拟DOm -> 跨平台

在React中不要轻易操作DOM节点

#### JSX
本质上来说，JSX 只是为 React.createElement(component, props, ...children) 提供的一种语法糖。

由于 for 在 JavaScript 中是保留字，React 元素使用 htmlFor 代替。

#### State
JavaScript 中数组类型为可变类型。假如有一个数组类型的 State，需要新增一个数组元素，应使用数组的concat 方法或 ES6 的数组扩展语法。
```javascript
    // 方法一：将 state 先赋值给另外的变量，然后使用 concat 创建新数组
    let students = this.state.students;
    this.setState({
    students: students.concat(['xiaoming']),
    });

    // 方法二：使用 prevState、concat 创建新数组
    this.setState(preState => {
    students: preState.books.concat(['xiaoming']);
    });

    // 方法三：ES6 扩展语法
    this.setState(preState => {
    students: [...preState.students, 'xiaoming'];
    });
```

从数组中 截取部分 作为新状态时，应使用 slice() 方法

当从数组中 过滤部分元素 后，作为新状态时，使用 filter() 方法。

不应该使用 push()、pop()、shift()、unshift()、splice() 等数组的突变方法（Mutation Methods）修改数组类型的状态，因为这些方法都是在原数组的基础上修改的。

+ 为什么 React 推荐组件的状态是不可变对象呢？
> 一方面是因为不可变对象方便管理和调试（了解更多）。

>另一方面是出于性能考虑，当对象组件状态都是不可变对象时，我们在组件的 shouldComponentUpdate 方法中，仅需要比较状态的引用就可以判断状态是否真的改变，从而避免不必要的 render() 调用。当我们使用 React 提供的 PureComponent 时，更是要保证组件状态是不可变对象，否则在组件的 shouldComponentUpdate 方法中，状态比较就可能出现错误，因为 PureComponent 执行的是浅比较（也就是比较对象的引用）。

#### Props
+ 特殊属性**ref**、**key**、**children**为保留属性，具有特殊用途，前两者并不会传给子组件
+ 如果你把属性给了标签而非子组件，React 并不会解析

#### 组件化
+ 无状态组件
+ 有状态组件
+ 容器组件
+ 高阶组件
+ 渲染回调组件

#### 生命周期
+ Mounting
  > constructor
  > render
  > componentDidMount
+ Updating
  > shouldComponentUpdate
  > render
  > getSnapshotBeforeUpdate
  > componentDidUpdate
+ Unmounting
  > componentWillUnmount
  > componentDidCatch
+ Error Handing
  > componentDidCatch

![生命周期图](./../img/life.jpg)