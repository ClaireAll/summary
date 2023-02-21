<template>
    <el-container>
        <el-container>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="id" label="折叠面板">
                    <el-collapse @change="handleChange">
                        <el-collapse-item title="一致性 Consistency" name="1">
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-table-column>
                <el-table-column label="按钮">
                    <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
                </el-table-column>
            </el-table>
        </el-container>
        <el-container>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </el-container>

    </el-container>

</template>

<script lang="ts">
export default {
    mounted() {
        this.getTableData();
    },
    data() {
        return {
            tableData: [],
            dialogVisible: false,
        };
    },
    methods: {
        getTableData() {
            // getData.then((res) => {
            //     tableData = res.data;
            // })
            this.tableData = [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                id: 1,
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                id: 2
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                id: 3
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                id: 4
            }];
        },

        handleChange() {
            console.log("点击了");
        },
    },
}
</script>

