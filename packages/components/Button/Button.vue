<script setup lang="ts">
/**
 * 项目中的组件目录结构
 * Button.vue 大写字母开头的组件文件，内含组件逻辑
 * Button.test.tsx 测试用例
 * types.ts 类型声明
 * style.css 样式
 * constants.ts 常量
 * index.ts 导出组件
 */
defineOptions({
  name: 'ErButton'
})
</script>

<template>
  <button style="background-color: blue; color: red;">这是一个 button</button>
</template>