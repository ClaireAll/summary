<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
    >
        <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入name" />
        </el-form-item>
        <el-form-item label="选择列表" prop="dataChoose">
            <el-select v-model="ruleForm.dataChoose" placeholder="选一个">
                <el-option
                    v-for="item in dataList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="输入文本" prop="content">
            <el-input v-model="ruleForm.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">
                Create
            </el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                dataChoose: '',
                content: '',
            },
            dataList: [
                {
                    id: 1,
                    name: 1,
                },
                {
                    id: 2,
                    name: 2,
                },
            ],
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    {
                        min: 1,
                        max: 100,
                        message: '至少输入1个',
                        trigger: 'blur',
                    },
                ],
                dataChoose: [
                    {
                        required: true,
                        message: '请选择其中一个',
                        trigger: 'change',
                    },
                ],
                content: [
                    {
                        required: true,
                        message: '请输入一些东西',
                        trigger: 'blur',
                    },
                ],
            },
        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        resetForm: function (formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>
