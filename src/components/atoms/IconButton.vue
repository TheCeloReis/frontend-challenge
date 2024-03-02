<template>
  <button
    :class="{
      'h-7 w-7': !size || size === 'medium',
      'h-9 w-9': size === 'large',
    }"
    :disabled="disabled"
  >
    <span class="sr-only">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  disabled?: boolean;
  size?: "medium" | "large";
}>();
</script>

<style scoped></style>
