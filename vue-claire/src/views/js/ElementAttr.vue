<template>
    <div>
        <div class="box" ref="box">一个小方块</div>
        <el-button link @click="getAttributes">attributes</el-button>
        <el-button link @click="getInnerHTML">innerHTML</el-button>
        <el-button link @click="getScrollLeft">scrollLeft</el-button>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'ElementAttr',
    setup() {
        const box = ref(null);

        return { box };
    },
    data() {
        return {};
    },
    methods: {
        getAttributes: function () {
            console.log(this.$refs.box.attributes);
        },
        getInnerHTML: function () {
            console.log(this.$refs.box.innerHTML);
        },
        getScrollLeft: function () {
            console.log(this.$refs.box.scrollLeft);
        },
    },
};
</script>
<style lang="less" scoped>
.box {
    position: absolute;
    left: 50px;
    top: 50px;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    text-align: center;
    line-height: 100px;
    color: rgb(0, 126, 126);
}
</style>
