<template>
    <el-container>
        <el-row>
            <el-col :span="7">
                <el-card class="box-card first-letter">
                    <template #header>
                        <div class="card-header">
                            <h3>首字母下降</h3>
                        </div>
                    </template>
                    <p>Banana</p>
                    <p>Apple</p>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card img-word">
                    <template #header>
                        <div class="card-header">
                            <h3>图文环绕</h3>
                        </div>
                    </template>
                    <div class="left"></div>
                    <div class="right"></div>
                    <p>
                        Sometimes a web page's text content appears to be
                        funneling your attention towards a spot on the page to
                        drive you to follow a particular link. Sometimes you
                        don't notice.
                    </p>
                </el-card></el-col
            >
            <el-col :span="7">
                <el-card class="box-card img-shadow">
                    <template #header>
                        <div class="card-header">
                            <h3>透明图像的阴影</h3>
                        </div>
                    </template>
                    <p>box-shadow</p>
                    <img
                        class="box-shadow"
                        src="https://stackdiary.com/wp-content/uploads/2022/02/logo.png"
                        alt="box-shadow example (transparent)"
                    />
                    <p>drop-shadow</p>
                    <img
                        class="drop-shadow"
                        src="https://stackdiary.com/wp-content/uploads/2022/02/logo.png"
                        alt="drop-shadow example (transparent)"
                    />
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <el-card class="box-card word-type">
                    <template #header>
                        <div class="card-header">
                            <h3>文字打字效果</h3>
                        </div>
                    </template>
                    <div class="typing-effect">Typing effect for text</div>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card list">
                    <template #header>
                        <div class="card-header">
                            <h3>列表清单</h3>
                        </div>
                    </template>
                    <div class="checklist">
                        <h2>Item Checklist with CSS</h2>
                        <label>
                            <input type="checkbox" name="" />
                            <i></i>
                            <span>Item #1</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            <i></i>
                            <span>Item #2</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            <i></i>
                            <span>Item #3</span>
                        </label>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card word-border">
                    <template #header>
                        <div class="card-header">
                            <h3>文字描边</h3>
                        </div>
                    </template>
                    <p>Hello World</p>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>
<script lang="ts">
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>
<style lang="less" scoped>
h3 {
    color: rgb(6, 186, 186);
    font-weight: bold;
}

div {
    margin: 10px;
}

li {
    margin-top: 10px;
}

.first-letter {
    p:first-letter {
        font-size: 200%;
        color: #8a2be2;
    }
}

.img-word {
    .left,
    .right {
        width: 40%;
        height: 12ex;
        background-color: lightgray;
    }

    .left {
        -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
        shape-outside: polygon(0 0, 100% 100%, 0 100%);
        float: left;
        -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
        clip-path: polygon(0 0, 100% 100%, 0 100%);
    }

    .right {
        -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
        shape-outside: polygon(100% 0, 100% 100%, 0 100%);
        float: right;
        -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }

    p {
        text-align: center;
    }
}

.img-shadow {
    img {
        width: 80%;
    }

    .box-shadow {
        box-shadow: 2px 4px 8px #3723a1;
    }

    .drop-shadow {
        filter: drop-shadow(2px 4px 8px #3723a1);
    }
}

.word-type {
    .typing-effect {
        width: 23ch;
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid;
        font-family: monospace;
        font-size: 20px;
        animation: typing 2s steps(23), effect 0.5s step-end infinite alternate;
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes effect {
        50% {
            border-color: transparent;
        }
    }
}

.list {
    .checklist {
        padding: 10px;
        position: relative;
        background-color: #043b3e;
    }

    .checklist h2 {
        color: #f3f3f3;
        font-size: 16px;
        padding: 10px 0;
        margin-left: 10px;
        display: inline-block;
        border-bottom: 4px solid #f3f3f3;
    }

    label {
        position: relative;
        display: block;
        margin: 10px 0;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }

    input[type='checkbox'] {
        -webkit-appearance: none;
    }

    .checklist i {
        position: absolute;
        top: 4px;
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
    }

    input[type='checkbox']:checked ~ i {
        top: 6px;
        height: 7px;
        width: 14px;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
    }

    span {
        left: 25px;
        position: relative;
        transition: 0.5s;
    }

    span::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        transform: translateY(-50%) scaleX(0);
        transform-origin: left;
        transition: transform 0.5s;
    }

    input[type='checkbox']:checked ~ span:before {
        transform: translateY(-50%) scaleX(1);
        transform-origin: right;
        transition: transform 0.5s;
    }

    input[type='checkbox']:checked ~ span {
        color: #154e6b;
    }
}

.word-border {
    p {
        font-size: 25px;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px #04d939;
        background-color: #043b3e;
        text-align: center;
    }
}
</style>
