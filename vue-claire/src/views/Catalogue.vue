<!-- 目录 -->
<template>
    <el-menu mode="vertical">
        <el-menu-item index="1">
            <RouterLink to="/">Home</RouterLink>
        </el-menu-item>
        <el-menu-item index="2">
            <RouterLink to="/test">Test</RouterLink>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
    .el-menu {
        background-color: rgba(var(--themeColor), 0.2);
        border-right: none;
        height: 100%;
    }

    .el-menu-item a {
        width: 200px;
    }

    .el-menu-item:hover, .el-menu-item.is-active {
        background-color: rgba(var(--themeColor), 0.3);
    }

    .router-link-active {
        font-weight: bold;
        color: rgba(var(--themeColor), 1);
    }
</style>