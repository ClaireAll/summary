<!-- 目录 -->
<template>
    <el-menu mode="vertical">
        <el-menu-item index="1">
            <RouterLink to="/">Home</RouterLink>
        </el-menu-item>
        <el-menu-item index="2">
            <RouterLink to="/paper">vue md</RouterLink>
        </el-menu-item>
        <el-sub-menu index="3" class="sub-menu">
            <template #title>Css</template>
            <el-menu-item index="5-1">
                <RouterLink to="/cssSkill">Some Skill</RouterLink>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4" class="sub-menu">
            <template #title>Components</template>
            <el-menu-item index="4-1">
                <RouterLink to="/table">Table</RouterLink>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5" class="sub-menu">
            <template #title>js/ts</template>
            <el-menu-item index="5-1">
                <RouterLink to="/skill">Some Skill</RouterLink>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style>
    .el-menu {
        background-color: rgba(var(--themeColor), 0.2);
        border-right: none;
        height: 100%;
    }

    .el-menu-item a {
        width: 200px;
        color: rgba(var(--themeColor), 1);
    }

    .el-menu--inline {
        background-color: transparent;
    }

    /* 子菜单 */
    .el-sub-menu__title {
        color: rgba(var(--themeColor), 1);
    }

    .el-sub-menu__title:hover, .el-sub-menu__title.is-active {
        color: rgba(var(--themeColor), 1);
        background-color: rgba(var(--themeColor), 0.3) !important;
    }

    .el-menu-item {
        color: rgba(var(--themeColor), 1);
    }

    .el-menu-item:hover, .el-menu-item.is-active {
        background-color: rgba(var(--themeColor), 0.3);
    }

    .router-link-active {
        font-weight: bold;
        color: rgba(var(--themeColor), 1);
    }
</style>