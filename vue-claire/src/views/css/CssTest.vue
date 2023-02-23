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
    </div>
</template>
<script>
import Table from '../components/Table.vue'
export default {
    components: { Table },
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
    box-shadow: 2px 2px 4px rgb(36, 36, 36), inset 2px 2px 4px white, inset -2px -2px 4px rgb(36, 36, 36);
    &:hover {
        background: linear-gradient(#ff9898, #bcc2ff);
        cursor: pointer;
        text-shadow: 2px 2px #676ca0;
    }
}
</style>
