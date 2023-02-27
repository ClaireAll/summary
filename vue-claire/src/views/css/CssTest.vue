<template>
    <div>
        <el-row>
            <el-col :span="7">
                <el-card class="box-card">
                    <template #header>
                        <h3>svg图</h3>
                    </template>
                    <svg
                        version="1.1"
                        baseProfile="full"
                        width="200"
                        height="150"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="100%" height="100%" fill="black" />
                        <circle cx="100" cy="80" r="60" fill="blue" />
                    </svg>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card table-class">
                    <template #header>
                        <h3>表格</h3>
                    </template>
                    <table>
                        <tr>
                            <th colspan="2">Animals</th>
                        </tr>
                        <tr>
                            <th colspan="2">Hippopotamus</th>
                        </tr>
                        <tr>
                            <th rowspan="2">Horse</th>
                            <td>Mare</td>
                        </tr>
                        <tr>
                            <td>Stallion</td>
                        </tr>
                        <tr>
                            <th colspan="2">Crocodile</th>
                        </tr>
                        <tr>
                            <th rowspan="2">Chicken</th>
                            <td>Hen</td>
                        </tr>
                        <tr>
                            <td>Rooster</td>
                        </tr>
                    </table>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card cool-button">
                    <template #header>
                        <h3>一个按钮</h3>
                    </template>
                    <p>A Cool Button</p>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="17">
                <el-card class="box-card table2">
                    <template #header>
                        <h3>表格</h3>
                    </template>
                    <table>
                        <caption>
                            Dinosaurs in the Jurassic period
                        </caption>
                        <colgroup>
                            <col />
                            <col />
                            <col style="background-color: #97db9a" />
                            <col style="width: 42px" />
                            <col style="background-color: #97db9a" />
                            <col
                                style="
                                    background-color: #dcc48e;
                                    border: 4px solid #c1437a;
                                "
                            />
                            <col span="2" style="width: 42px" />
                        </colgroup>
                        <tr>
                            <td>&nbsp;</td>
                            <th>Mon</th>
                            <th>Tues</th>
                            <th>Wed</th>
                            <th>Thurs</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                        <tr>
                            <th>1st period</th>
                            <td>English</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>German</td>
                            <td>Dutch</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>2nd period</th>
                            <td>English</td>
                            <td>English</td>
                            <td>&nbsp;</td>
                            <td>German</td>
                            <td>Dutch</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>3rd period</th>
                            <td>&nbsp;</td>
                            <td>German</td>
                            <td>&nbsp;</td>
                            <td>German</td>
                            <td>Dutch</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th>4th period</th>
                            <td>&nbsp;</td>
                            <td>English</td>
                            <td>&nbsp;</td>
                            <td>English</td>
                            <td>Dutch</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card selection">
                    <template #header>
                        <h3>::selection伪元素</h3>
                    </template>
                    <p>
                        霜天晓角·晚次东阿
                        <br />
                        朱彝尊清代
                        <br />
                        鞭影匆匆，又铜城驿东。<br />过雨碧罗天净，才八月，响初鸿。
                        微风何寺钟？夕曛岚翠重。<br />十里鱼山断处，留一抹、枣林红。
                    </p>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="17">
                <el-card class="box-card table3">
                    <template #header>
                        <h3>表格</h3>
                    </template>
                    <table>
                        <caption>
                            How I chose to spend my money
                        </caption>
                        <thead>
                            <td>Purchase</td>
                            <td>Location</td>
                            <td>Date</td>
                            <td>Evaluation</td>
                            <td>Cost($)</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HairCut</td>
                                <td>Hairdresser</td>
                                <td>12/09</td>
                                <td>Grate idea</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Lasagna</td>
                                <td>Restaurant</td>
                                <td>12/09</td>
                                <td>Regrets</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>Shoes</td>
                                <td>Shoeshop</td>
                                <td>13/09</td>
                                <td>Big regrets</td>
                                <td>65</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <td colspan="4">SUM</td>
                            <td>118</td>
                        </tfoot>
                    </table>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <el-card class="box-card canvas1">
                    <template #header>
                        <h3>Canvas尝试</h3>
                    </template>
                    <canvas class="myCanvas">
                        <p>Sorry, your browser does not support Canvas</p>
                    </canvas>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card canvas2">
                    <template #header>
                        <h3>Canvas绘制三角形</h3>
                    </template>
                    <canvas class="myCanvas2">
                        <p>Sorry, your browser does not support Canvas</p>
                    </canvas>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card canvas3">
                    <template #header>
                        <h3>Canvas绘制圆弧</h3>
                    </template>
                    <canvas class="myCanvas3">
                        <p>Sorry, your browser does not support Canvas</p>
                    </canvas>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="17">
                <el-card class="box-card canvas-img">
                    <template #header>
                        <h3>Canvas图片</h3>
                    </template>
                    <canvas class="myCanvas4">
                        <p>Sorry, your browser does not support Canvas</p>
                    </canvas>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="box-card">
                    <template #header>
                        <h3></h3>
                    </template>
                </el-card>
            </el-col>
            <!-- <el-col :span="7">
                <el-card class="box-card">
                    <template #header>
                        <h3></h3>
                    </template>
                </el-card>
            </el-col> -->
        </el-row>
    </div>
</template>
<script>
export default {
    mounted() {
        this.drawCanvas1();
        this.drawCanvas3();
        this.drawCanvas4();
    },

    methods: {
        drawCanvas1: () => {
            const degToRad = (degrees) => (degrees * Math.PI) / 180;
            const canvas = document.querySelector('.myCanvas');
            const width = 240;
            const height = 180;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = 'rgb(255,0,0)';
            ctx.fillRect(50, 50, 100, 50);
            ctx.fillStyle = 'rgba(0, 250, 0)';
            ctx.fillRect(75, 75, 50, 50);
            ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
            ctx.fillRect(50, 100, 50, 50);
            ctx.strokeStyle = 'rgb(255, 255, 255)';
            ctx.lineWidth = 5;
            ctx.strokeRect(25, 25, 50, 50);
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.moveTo(150, 50);
            // 绘制路径
            ctx.fill();

            // 画一个等边三角形
            const canvas2 = document.querySelector('.myCanvas2');
            canvas2.width = width;
            canvas2.height = height;
            const ctx2 = canvas2.getContext('2d');
            ctx2.fillStyle = 'rgb(255, 0, 0)';
            ctx2.beginPath();
            ctx2.moveTo(50, 50);
            ctx2.lineTo(150, 50);
            const triHeight = 50 * Math.tan(degToRad(60));
            ctx2.lineTo(100, 50 + triHeight);
            ctx2.lineTo(50, 50);
            ctx2.fill();
        },

        drawCanvas3: () => {
            const degToRad = (degrees) => (degrees * Math.PI) / 180;
            const canvas = document.querySelector('.myCanvas3');
            const width = 240;
            const height = 180;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'yellowGreen';
            ctx.beginPath();
            ctx.arc(100, 50, 50, degToRad(-45), degToRad(45), true);
            ctx.lineTo(100, 50);
            ctx.fill();
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 1;
            ctx.font = '36px arial';
            ctx.strokeText('Canvas text', 0, 100);

            ctx.fillStyle = 'green';
            ctx.font = '48px georgia';
            ctx.fillText('Canvas text', 0, 150);
        },

        drawCanvas4: () => {
            const canvas = document.querySelector('.myCanvas4');
            const width = 600;
            const height = 600;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.translate(width / 2, height / 2); // 移动画布中心

            const degToRad = (degrees) => (degrees * Math.PI) / 180;
            const rand = (min, max) =>
                Math.floor(Math.random() * (max - min + 1)) + min;

            let length = 250;
            let moveOffset = 20;

            for (let i = 0; i < length; i++) {
                ctx.fillStyle = `rgba(${255 - length},0,${255 - length}, ${Math.random()}`;
                ctx.beginPath();
                ctx.moveTo(moveOffset, moveOffset);
                ctx.lineTo(moveOffset + length, moveOffset);
                var triHeight = (length / 2) * Math.tan(degToRad(60));
                ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
                ctx.lineTo(moveOffset, moveOffset);
                ctx.fill();

                length--;
                moveOffset += 0.7;
                ctx.rotate(degToRad(5));
            }
        },
    },
};
</script>
<style lang="less" scoped>
h3 {
    color: rgb(6, 186, 186);
    font-weight: bold;
}

div {
    margin: 10px;
}

.table-class {
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
    }

    td,
    th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 20px;
    }

    th {
        background-color: rgb(235, 235, 235);
    }

    td {
        text-align: center;
    }

    tr:nth-child(even) td {
        background-color: rgb(250, 250, 250);
    }

    tr:nth-child(odd) td {
        background-color: rgb(245, 245, 245);
    }

    caption {
        padding: 10px;
    }
}

.table2 {
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
    }

    td,
    th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 20px;
    }

    th {
        font-weight: bold;
    }

    td {
        text-align: center;
    }

    caption {
        padding: 10px;
    }
}

.table3 {
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
    }
    thead,
    tfoot {
        td {
            font-weight: bold;
        }
    }

    tbody {
        font-style: italic;
    }

    td {
        padding: 10px;
        text-align: center;
        border: 1px solid rgb(190, 190, 190);
    }

    tr:nth-child(even) {
        background-color: rgb(250, 250, 250);
    }

    tr:nth-child(odd) {
        background-color: rgb(245, 245, 245);
    }
}
.selection {
    p {
        -webkit-animation-name: scaleWord;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-duration: 2s;
        padding-left: 6px;
    }

    p::selection {
        background-color: pink;
        color: purple;
        text-shadow: 1px 2px 2px tomato;
    }

    @keyframes scaleWord {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
}

.cool-button p {
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px rgb(84, 84, 84);
    background: linear-gradient(#e66465, #9198e5);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgb(36, 36, 36), inset 2px 2px 4px white,
        inset -2px -2px 4px rgb(36, 36, 36);
    &:hover {
        background: linear-gradient(#ff9898, #bcc2ff);
        cursor: pointer;
        text-shadow: 2px 2px #676ca0;
        font-family: youshe;
    }
}
</style>
