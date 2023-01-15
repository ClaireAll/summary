<script setup lang="ts">
import Catalogue from "./views/Catalogue.vue";
import HeaderBar from "./views/HeaderBar.vue";

</script>

<template>
    <el-container>
        <el-aside class="aside" width="200px">
            <Catalogue />
        </el-aside>
        <el-container>

            <el-header class="header">
                <HeaderBar />
            </el-header>
            <el-main>
                <RouterView class="main-container" />
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<style scoped lang="css">
.el-container {
    height: 100%;
}

.aside {
    margin: 0 auto;
    box-shadow: 0px 0px 2px 3px rgba(var(--themeColor), 0.4);
}

.el-main {
    padding: 0;
    background-color: rgba(var(--themeColor), 0.1);
}

.header,
.footer {
    background-color: rgba(var(--themeColor), 0.15);
}
</style>