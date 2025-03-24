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
import type { ButtonProps } from './types';
import { ref } from 'vue';

defineOptions({
  name: 'ErButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button'
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component 
    :is="tag" 
    :type="tag === 'button' ? props.nativeType : void 0" 
    ref="_ref" 
    :disabled="props.disabled"
    class="er-button"
    :class="{
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      [`er-button--${props.type}`]: props.type,
      [`er-button--${props.size}`]: props.size,
    }"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>