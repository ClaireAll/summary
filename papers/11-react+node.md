

## 搭建工程

### 搭建react工程

1. 创建
```javascript
    npx create-react-app claire --template typescript
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
在claire-api中执行```npm install --save cors```
在index.ts中
```javascript
    import cors from "cors";
    app.use(cors());
```

修改claire的app.tsx
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


## claire-api连接数据库
```npm i --save @types/mysql```

新建routes/database.ts
```typescript
import express, { Application, Request, Response } from "express";
import mysql from "mysql";
import { formatResult } from "./service";
import { clothes } from "./clothes/clothes";
import path from "path";
import multer from "multer";

const Claire: Application = express();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "claire",
});
export function claireGet(url: string, query: string) {
    Claire.get(url, (req: Request, res: Response) => {
        db.query(query, (err, result) => {
            formatResult(err, res, result);
        });
    });
}
clothes();

export default Claire;

```
新建routes/clothes/clothes.ts
```typescript
    export function clothes() {
    /**
     * 获取所有衣服
     */
    claireGet(`${root}/list`, "select * from clothes");
}
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

        res.send({
            status: res.statusCode,
            message: err?.message,
            data: result,
        });
    }
```

修改claire库的App.tsx
``` typescript
callApi() {
        fetch("http://localhost:9000/clothes/list")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }))
            .catch((err) => err);
    }
```

可以在浏览器中看到返回的关于衣服的信息


## 前端主页绘制

### 安装ant design
https://ant.design/docs/react/introduce-cn

```npm install antd --save```

```npm install less less-loader --save-dev```

### alias path
typescript中的路径别名允许我们定一个词或一个路径来代表项目中的绝对路径

1. tsconfig.json下compilerOptions里加入```"path": { "@less/*": [src/less] }```


### 上传图片
claire-api
```typescript
import express, { Application, Request, Response } from "express";
import mysql from "mysql";
import { formatResult } from "./service";
import { clothes } from "./clothes/clothes";
import path from "path";
import multer from "multer";
const Claire: Application = express();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "claire",
});

// 跨域请求处理
Claire.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // 追加允许的请求方法
    res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, OPTIONS"
    );
    // 客户端发了JSON 追加允许的请求头 Content-Type
    res.setHeader(
        "Access-Control-Allow-Headers",
        "x-requested-with,Content-Type"
    );
    res.header("X-Powered-By", "3.2.1");
    next();
});

// 公开静态文件夹，匹配`虚拟路径img` 到 `真实路径public` 注意这里  /img/ 前后必须都要有斜杠！！！
// Claire.use("/img/", express.static(path.join(__dirname, "/assets/imgs")));
Claire.use(express.static("D:/mine/claire-api/public"));
Claire.use(express.urlencoded({ extended: false }));
Claire.use(express.json());

// 跨域中间件
const cors = (
    req: any,
    res: { setHeader: (arg0: string, arg1: string) => void },
    next: () => void
) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
};

const storage = multer.diskStorage({
    // 配置文件上传后存储的路径
    destination(_req: any, file: any, cb: Function) {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            // 上传文件存在 public 下
            cb(null, "D:/mine/claire-api/public");
        } else {
            cb({ error: "不支持的文件类型" });
        }
    },
    // 配置文件上传后存储的路径和文件名
    filename(
        _req: any,
        file: { originalname: string },
        cb: (arg0: null, arg1: string) => void
    ) {
        // 使用时间戳作为上传的文件名
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname);
    },
});

const multerConfig = multer({ storage });

Claire.post("/upload", cors, multerConfig.single("file"), (req, res) => {
    res.send({
        data: {
            name: req.file?.filename,
            url: req.file?.path,
            hello: 123,
        },
    });
});
```

注意： ```multerConfig.single("file")```的file对应的是dragger的```name: "file"```

前端上传：使用了antd的dragger组件
```typescript
export const ROOT = "http://localhost:9000";
<Dragger
    accept="image/*"
    name="file"
    multiple={false}
    action={`${ROOT}/upload`}
    onChange={(info) => {
        console.log(info);
    }}
    onDrop={(info) => {
        console.log(info);
    }}
>
    点击或拖拽以上传图片
</Dragger>
```

### react hooks模拟componentDidMount
```typescript
    useEffect(() => {}, [query]);
```


### 父组件调用子组件的方法
+ 子组件
    ```typescript
    let ClothesPopup = (_props: any, ref: any) => {
        useImperativeHandle(ref, () => ({
            open: (data: ClothesPopupData) => {...},
        }));
    }
    ClothesPopup = forwardRef(ClothesPopup);
    export default ClothesPopup;
    ```
+ 父组件
    ```typescript
        export function Clothes() {
            const modelRef = useRef();
            return (
                <div>
                    <Button
                        type="primary"
                        onClick={() => {
                            // @ts-ignore
                            modelRef.current.open(
                                {
                                    url: "",
                                    price: 0,
                                    quarter: Quarter.Spring,
                                }
                            );
                        }}
                    >
                        添加
                    </Button>
                    <ClothesPopup ref={modelRef} />
                </div>
            );
        }
    ```