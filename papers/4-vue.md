- [声明式渲染](#声明式渲染)
- [Attribute 绑定](#attribute-绑定)
- [事件监听](#事件监听)
- [表单绑定](#表单绑定)
- [条件渲染](#条件渲染)
- [列表渲染](#列表渲染)
- [生命周期和模板引用](#生命周期和模板引用)
- [触发事件](#触发事件)
- [插槽（slots）](#插槽slots)
- [路由（router）](#路由router)
- [Vue中使用less + css 实现全局样式更新](#vue中使用less--css-实现全局样式更新)
- [Vue 3.0  setup](#vue-30--setup)
- [Vue 3.0里显示markdown文件](#vue-30里显示markdown文件)

### 声明式渲染
Vue 的核心功能是**声明式渲染**：通过扩展于标准 HTML 的模板语法，我们可以根据 JavaScript 的状态来描述 HTML 应该是什么样子的。当状态改变时，HTML 会自动更新。

能在改变时触发更新的状态被认为是**响应式**的。

### Attribute 绑定
``` javascript
    state() {
        return {
            message: "message",
            titleId: "id",
            titleClass: "class",
        }
    }

    <template>
        <h1>{{message}}</h1> // 文本绑定
        <p v-bind:id="titleId">attribute动态绑定id</p>
        <p :class="titleClass">attribute动态绑定简写</p>
    </template>
```

### 事件监听
使用v-on监听
v-on:click="事件名"
@click="事件名"

``` javascript
    export default {
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            increment() {
                // 更新组件状态
                this.count++;
            },
        },
    }

    <template>
        <button @click="increment">{{count}}</button>
    </template>
```

### 表单绑定

``` html
    <input :value="text" @input="onInput">
    简化
    <input v-model="text">
```

### 条件渲染

``` html
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
```

### 列表渲染
v-for

``` javascript
    <ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
    </ul>

```

### 生命周期和模板引用

``` javascript
    export default {
        mounted() {
            this.$refs.p.textContent = "mounted!";
        }
    }
    <template>
        <p ref="p"></p>
    </template>
```

### 触发事件
子组件向父组件触发事件，this.$emit() 的第一个参数是事件的名称。其他所有参数都将传递给事件监听器。

```javascript
    export default {
        // 声明触发的事件
        emits: ['response'],
        created() {
            // 带参触发
            this.$emit('response', 'hello from child');
        }
    }

    父组件

    <ChildComp @response="(msg) => childMsg = msg;" />
```

### 插槽（slots）

``` html
    <slot>something from parent</slot>
```

### 路由（router）
vue-router是vue的一个插件，专门用来实现spa应用，即单页面web应用。

实现路由的步骤：

1. 在main.ts中引入路由

``` javascript
    import router from "./router";
    const app = createApp(App);
    app.use(router);
```

2. 在src下创建一个router文件夹，定义一个index.ts来写路由

``` javascript
    import { createRouter, createWebHistory } from "vue-router";
    import HomeView from "../views/HomeView.vue";

    const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // 两种引入方式
            component: () => import('../views/AboutView.vue')
        }
    ]
    })

    export default router
```

3. 在页面中使用<RouterLink>来代替<a>， 使用to代替href，<RouterView /> 占位显示组件

``` html
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
```

### Vue中使用less + css 实现全局样式更新
Vue Cli项目天生支持PostCss、Css Modules和包含Sass、Less、Stylus在内的预处理器。

style-resources-loader插件是用来酱less文件内容进行全局共享的，如果不需要可以不安装
如果安装了不适用，可以给patterns一个空数组

安装
``` javascript
    npm i less@3.0.4 -D
    npm i less-loader@5.0.0 -D
```

在src/assets中新建main.less
``` less
    @theme: var(--themeColor, #795405);
```

vite.config.ts里写入配置
``` typescript
    export default defineConfig({
        css:{
            preprocessorOptions:{
            less:{
                charset: false,
                additionalData:`@import "${path.resolve(__dirname,'src/assets/main.less')}";`
            }
            }
        }
    })
```

修改css变量的方法
``` typescript
    <script lang="ts">
        export default {
            data() {
                return {
                    color: "#795405",
                };
            },
            methods: {
                changeTheme(color: string) {
                    this.color = color;
                    document.getElementsByTagName("body")[0].style.setProperty(`--themeColor`, color);
                }
            },
        }
    </script>

    <template>
        主题色：<el-color-picker @change="changeTheme" v-model="color"></el-color-picker>
    </template>
```

使用less的地方
``` css
    background-color: @theme;
```

### Vue 3.0  setup
+ setup函数Composition API的入口
+ 在setup函数中定义的变量和方法最后是需要**return**除去的不然**无法**在模板中使用
+ 在setup方法中，无法使用data合methods的变量和方法

### Vue 3.0里显示markdown文件

1. 引入
```
    # use npm
    npm i @kangc/v-md-editor@next -S

    # use yarn
    yarn add @kangc/v-md-editor
```

2. 根目录下新建plugin文件夹，文件夹下新建index.ts
``` typescript
    import VMdPreview from '@kangc/v-md-editor/lib/preview';
    import '@kangc/v-md-editor/lib/style/preview.css';
    import githubTheme from '@kangc/v-md-editor/lib/theme/github';
    import '@kangc/v-md-editor/lib/theme/style/github.css';


    VMdPreview.use(githubTheme);
    export default VMdPreview
```

3. main.ts引入
``` typescript
    import VMdPreview from '../plugins/index';
    app.use(VMdPreview);
```

4. 组件内使用
``` html
    <script lang="ts">
    import markdownText from '@/assets/4-vue.md?raw';
    export default {
        data() {
            return {
                markdown: markdownText
            }
        },
    }
    </script>

    <template>
        <div>
            <div>
                <v-md-preview :text="markdown"></v-md-preview>
            </div>
        </div>
    </template>
```

