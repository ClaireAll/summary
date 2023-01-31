### 什么是MobX
Mobx是一个前端“状态管理框架”
MobX 是状态管理库中侵入性最小的之一。这使得 MobX的方法不但简单，而且可扩展性也非常好。

### 状态管理的一般思想（Flux）
Flux的核心思想就是数据和逻辑永远单向流动。

### 安装
npm install mobx-react --save

### Observable state(可观察的状态)
MobX 为现有的数据结构(如对象，数组和类实例)添加了可观察的功能。 通过使用 @observable 装饰器(ES.Next)来给你的类属性添加注解就可以简单地完成这一切。
**状态** 是驱动应用的数据。 通常有像待办事项列表这样的**领域特定状态**，还有像当前已选元素的**视图状态**。

``` javascript
import { observable } from "mobx";

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}

```


### Computed values(计算值)
通过@computed 装饰器或者利用 (extend)Observable 时调用 的getter / setter 函数来进行使用。(当然，这里也可以再次使用 decorate 来替代 @ 语法)。
```javascript
class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

```
+ computed(() => expression)
+ computed(() => expression, (newValue) => void)
+ computed(() => expression, options)
+ @computed({equals: compareFn}) get classProperty() { return expression; }
+ @computed get classProperty() { return expression; }

### Reactions(反应)
reactions 在 响应式编程和命令式编程之间建立沟通的桥梁。

### Actions(动作)
**动作** 是任一一段可以改变**状态**的代码。用户事件、后端数据推送、预定事件、等等。 动作类似于用户在excel单元格中输入一个新的值。
+ action(fn)
+ action(name, fn)
+ @action classMethod
+ @action(name) classMethod
+ @action boundClassMethod = (args) => { body }
+ @action.bound boundClassMethod(args) { body }

### 构建
1. 定义状态并使其可观察
2. 创建视图以响应状态的变化
3. 更改状态

### 核心API
+ observable(value)
  ``` javascript
    observable(value)
    @observable classProperty = value
  ```
+ @observable property = value
+ observable.box(value, options?)
+ observable.object(value, decorators?, options?)
+ observable.array(value, options?)
+ observable.map(value, options?)
+ extendObservable

### 装饰器(Decorators)
+ observable.deep: 所有 observable 都使用的默认的装饰器。它可以把任何指定的、非原始数据类型的、非 observable 的值转换成 observable。
+ observable.ref: 禁用自动的 observable 转换，只是创建一个 observable 引用。
+ observable.shallow: 只能与集合组合使用。 将任何分配的集合转换为浅 observable (而不是深 observable)的集合。 换句话说, 集合中的值将不会自动变为 observable。
+ computed: 创建一个衍生属性, 参见 computed
+ action: 创建一个动作, 参见 action
+ action.bound: 创建有范围的动作, 参见 action
