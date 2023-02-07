<script lang="ts">
export default {
    data() {
        return {
            color: "rgb(122, 85, 5)",
        };
    },
    methods: {
        changeTheme(color: string) {
            this.color = color;
            const reg = /\((.+?)\)/g;
            const formatColor = color.match(reg)![0];
            document.getElementsByTagName("body")[0].style.setProperty(`--themeColor`, formatColor.substring(1, formatColor.length - 1));
            document.getElementsByTagName("body")[0].style.setProperty(`--el-menu-hover-bg-color`, formatColor.substring(1, formatColor.length - 1));
        }
    },
}

</script>

<template>
    主题色：<el-color-picker @change="changeTheme" v-model="color" color-format="rgb"></el-color-picker>
</template>