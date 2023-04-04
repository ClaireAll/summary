## 搭建工程

### 搭建react工程

1. 创建
```javascript
    npx create-react-app plants --template typescript
```
2. 启动

搭建之后进入工程
```npm start```启动工程

浏览器访问```localhost:3000```出现react的欢迎页面

### 搭建express框架(typescript)
1. npm init
2. yarn add express
3. yarn add --dev typescript ts-node-dev @types/express @types/node
4. package.json里加入如下命令
```json
    "start": "ts-node-dev ./index.ts"
```
5. npx tsc --init
6. 新建routes/hello.ts
```typescript
import express, { Application, Request, Response } from "express";

const Hello: Application = express();

Hello.get("/hello", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Hello Claire!",
    });
});

export { Hello };
```
根目录新建index.ts
```typescript
import express, { Application, Request, Response } from "express";
import { Hello } from './routes/hello';

const app: Application = express();
const port = 9000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 根路由
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);
app.use(Hello);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}
```

7. 启动： **npm run start**
浏览器访问```localhost:9000```出现```Hello World!```
访问```localhost:9000/hello```出现```{message: "Hello Claire!"}```

#### 跨域
在plant-api中执行```npm install --save cors```
在index.ts中
```javascript
    import cors from "cors";
    app.use(cors());
```

修改plants的app.tsx
```javascript
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callApi() {
        fetch("http://localhost:9000/hello")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }))
            .catch((err) => err);
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>{this.state.apiResponse}</p>
                </header>
            </div>
        );
    }
}

export default App;
```

同时启动两个工程，启动后```localhost:3000```下可以看到页面中有```{"message":"Hello Claire!"}```

到此，完成了工程的初步搭建。


## plant-api连接数据库
```npm i --save @types/mysql```

文案从这里复制
https://baike.baidu.com/item/%E6%A4%8D%E7%89%A9%E7%A7%91%E5%B1%9E/2901508?fr=aladdin

新建routes/plant_family/plant_family.ts
```typescript
    import express, { Application, Request, Response } from "express";
    import mysql from "mysql";
    import { formatResult } from "../service";

    const PlantFamily: Application = express();
    const root = "/plant_family";
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "plant",
    });

    PlantFamily.get(
        `${root}/list`,
        (req: Request, res: Response) => {
            db.query("select * from plant_family", (err, result) => {
                formatResult(err, res, result);
            })
        }
    );

    export { PlantFamily };
```

新建routes/service.ts
```typescript
    import { Response } from "express";

    export function formatResult(err: any, res: Response, result: any) {
        if (err) {
            res.send({
                status: res.statusCode,
                message: err.message,
                data: [],
            });
        }

        console.log(res)
        res.send({
            status: res.statusCode,
            message: err?.message,
            data: result,
        });
    }
```

修改plant库的App.tsx
``` typescript
callApi() {
        fetch("http://localhost:9000/plant_family/list")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }))
            .catch((err) => err);
    }
```

可以在浏览器中看到返回的关于植物科属的信息


## 前端主页绘制

### 安装ant design
https://ant.design/docs/react/introduce-cn

```npm install antd --save```

```npm install less less-loader --save-dev```

### alias path
typescript中的路径别名允许我们定一个词或一个路径来代表项目中的绝对路径
