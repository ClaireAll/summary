<script lang="ts">
import markdownText from '@/assets/4-vue.md?raw';
export default {
    data() {
        return {
            markdown: markdownText
        }
    },
}
</script>

<template>
    <div>
        <div>
            <v-md-preview :text="markdown"></v-md-preview>
        </div>
    </div>
</template>
