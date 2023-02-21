<template>
    <div>
        一些有用的技巧
        <ul>
            <li><el-button type="primary" link @click="copyToClickBoard('复制内容到剪贴板')">复制内容到剪贴板</el-button></li>
            <li><el-button type="primary" link @click="clearCookie">清除所有cookie</el-button></li>
            <li><el-button type="primary" link @click="getSelectedText">获取选中的文字</el-button></li>
            <li><el-button type="primary" link @click="scrollToTop">滚动到页面顶部</el-button></li>
            <li><el-button type="primary" link @click="isScrollToBottom">是否滚动到页面底部</el-button></li>
            <li><el-button type="primary" link @click="isActiveTab">判断当前Tab是否激活</el-button></li>
            <li><el-button type="primary" link @click="isIos">判断当前设备是否为苹果设备</el-button></li>
            <li><el-button type="primary" link @click="redirectUrl('https://www.google.com')">重定向到一个 URL</el-button></li>
            <li><el-button type="primary" link @click="openPrintDialog">打开浏览器打印框</el-button></li>
            <li><el-button type="primary" link @click="getRandomString">随机字符串</el-button></li>
            <li><el-button type="primary" link @click="deleteHtmlFromString">从字符串中删除 HTML</el-button></li>
        </ul>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {};
    },
    methods: {
        copyToClickBoard: (text: string) => {
            navigator.clipboard.writeText(text);
        },
        clearCookie: () => {
            document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
        },
        getSelectedText: () => {
            console.log(window.getSelection()?.toString());
        },
        scrollToTop: () => {
            window.scrollTo(0, 0);
        },
        isScrollToBottom: () => {
            console.log(document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight);
        },
        isActiveTab: () => {
            console.log(!document.hidden);
        },
        isIos: () => {
            console.log(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
        },
        redirectUrl: (url: string) => {
            window.location.href = url;
        },
        openPrintDialog: () => {
            window.print();
        },
        getRandomString: () => {
            console.log(Math.random().toString(36).slice(2));
        },
        deleteHtmlFromString: (html: string) => {
            console.log((new DOMParser().parseFromString(html, 'text/html')).body.textContent || '');
        },
    },
}
</script>
<style lang="less" scoped>
div {
    margin: 10px;
}
li {
    margin-top: 10px;
}
</style>